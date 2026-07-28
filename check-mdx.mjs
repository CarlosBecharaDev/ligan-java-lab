import fs from 'fs';
import path from 'path';

const dir = 'src/content/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).sort();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check for CodeBlock components with code={...}
    if (line.includes('code={') && line.includes('`')) {
      // Count backticks to find unmatched ones
      const backtickCount = (line.match(/`/g) || []).length;
      if (backtickCount % 2 !== 0) {
        console.log(`ODD BACKTICKS ${file}:${i+1}: ${line.substring(0, 120)}`);
      }
    }

    // Check for unterminated strings in CodeBlock code props
    // Look for lines that start a code={ and don't close on the same line
    if (line.trimStart().startsWith('code={`') && !line.includes('`}')) {
      // This is a multi-line code block - check if it terminates
      let found = false;
      for (let j = i + 1; j < Math.min(i + 200, lines.length); j++) {
        if (lines[j].includes('`}') || lines[j].includes('`}')) {
          found = true;
          break;
        }
        // Check for backticks inside that would break the template literal
        if (lines[j].includes('`') && !lines[j].includes('\\`')) {
          console.log(`INTERNAL BACKTICK ${file}:${j+1}: ${lines[j].substring(0, 120)}`);
          break;
        }
      }
      if (!found) {
        console.log(`UNTERMINATED code={...} ${file}:${i+1}`);
      }
    }
  }
}
