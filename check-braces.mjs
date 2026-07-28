import fs from 'fs';
import path from 'path';

const dir = 'src/content/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).sort();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const bodyMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!bodyMatch) continue;
  const body = bodyMatch[2];

  // Track braces outside of code blocks (```...```)
  let inFencedCode = false;
  let inTemplateLiteral = false;
  let braceDepth = 0;
  let maxDepth = 0;
  const lines = body.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Toggle fenced code blocks
    if (line.trimStart().startsWith('```')) {
      inFencedCode = !inFencedCode;
      continue;
    }

    if (inFencedCode) continue;

    // Count braces in non-code lines
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === '{') {
        braceDepth++;
        if (braceDepth > maxDepth) maxDepth = braceDepth;
      } else if (ch === '}') {
        braceDepth--;
      }
    }
  }

  if (braceDepth !== 0) {
    console.log(`UNBALANCED ${file}: final depth=${braceDepth}, max=${maxDepth}`);
  }
}
