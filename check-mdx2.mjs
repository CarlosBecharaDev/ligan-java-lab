import fs from 'fs';
import path from 'path';

const dir = 'src/content/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).sort();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');

  // Find all CodeBlock code={...} regions
  const regex = /code=\{`([\s\S]*?)`\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const inner = match[1];
    // Check for internal backticks (not at start/end)
    const lines = inner.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Skip first and last lines (they're the opening/closing)
      if (i === 0 || i === lines.length - 1) continue;
      if (line.includes('`')) {
        const lineNum = content.substring(0, match.index).split('\n').length + i;
        console.log(`BACKTICK in code block ${file}:${lineNum}: ${line.trim().substring(0, 100)}`);
      }
    }
  }

  // Also check for unterminated template literals by looking at the content
  // between code={ and `}
  const codeRegex = /code=\{`/g;
  let codeMatch;
  while ((codeMatch = codeRegex.exec(content)) !== null) {
    const startIdx = codeMatch.index + codeMatch[0].length;
    // Find the closing `}
    let depth = 0;
    let found = false;
    for (let i = startIdx; i < content.length - 1; i++) {
      if (content[i] === '`' && content[i+1] === '}') {
        found = true;
        break;
      }
      if (content[i] === '`') {
        // Internal backtick found
        const lineNum = content.substring(0, i).split('\n').length;
        const lineContent = content.substring(i, i + 50).split('\n')[0];
        console.log(`INTERNAL BACKTICK ${file}:${lineNum}: ...${lineContent}...`);
        break;
      }
    }
    if (!found) {
      const lineNum = content.substring(0, codeMatch.index).split('\n').length;
      console.log(`UNTERMINATED template literal ${file}:${lineNum}`);
    }
  }
}
