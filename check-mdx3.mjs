import fs from 'fs';
import path from 'path';

const dir = 'src/content/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).sort();

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const lines = content.split('\n');

  let inCodeBlock = false;
  let codeBlockStart = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track CodeBlock code={...} regions
    if (line.includes('code={`')) {
      inCodeBlock = true;
      codeBlockStart = i;
      // Check if it closes on same line
      const afterOpen = line.substring(line.indexOf('code={`') + 7);
      if (afterOpen.includes('`}')) {
        inCodeBlock = false;
      }
    }

    if (inCodeBlock && (line.includes('`}') || line.includes('`}'))) {
      inCodeBlock = false;
    }

    // Check for problematic characters inside code blocks
    if (inCodeBlock && i !== codeBlockStart) {
      // Check for unescaped quotes that might break JSX parsing
      // Look for single quotes that are not inside Java strings
      // This is tricky - let's just look for obvious issues

      // Check for ${} template literal injection (accidental)
      if (line.includes('${')) {
        console.log(`TEMPLATE INJECTION ${file}:${i+1}: ${line.trim().substring(0, 100)}`);
      }
    }
  }

  // Also check for any raw { or } that might cause JSX issues
  // Check for unbalanced quotes in JSX attributes
  const jsxAttrRegex = /(\w+)=["'{]/g;
  let attrMatch;
  while ((attrMatch = jsxAttrRegex.exec(content)) !== null) {
    const attrName = attrMatch[1];
    const startIdx = attrMatch.index + attrMatch[0].length;
    const quoteChar = attrMatch[0].slice(-1);

    if (quoteChar === '"') {
      // Find closing quote
      let endIdx = startIdx;
      while (endIdx < content.length && content[endIdx] !== '"') {
        if (content[endIdx] === '\\') endIdx++; // skip escaped chars
        endIdx++;
      }
      if (endIdx >= content.length) {
        const lineNum = content.substring(0, attrMatch.index).split('\n').length;
        console.log(`UNTERMINATED QUOTE ${file}:${lineNum} attr=${attrName}`);
      }
    }
  }
}
