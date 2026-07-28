import fs from 'fs';
import path from 'path';

const dir = 'src/content/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).sort();

let fixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  const original = content;

  // Remove QuizCard and ExerciseCard import lines
  content = content.replace(/^import (QuizCard|ExerciseCard) from .*\n/gm, '');

  // Remove <QuizCard ... /> blocks (self-closing, may span many lines)
  // Match from <QuizCard to the next />
  let prev = '';
  while (prev !== content) {
    prev = content;
    content = content.replace(/<QuizCard\b[\s\S]*?\/>\n*/g, '\n');
    content = content.replace(/<ExerciseCard\b[\s\S]*?\/>\n*/g, '\n');
  }

  // Clean up excess blank lines
  content = content.replace(/\n{4,}/g, '\n\n\n');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log('Cleaned: ' + file);
  } else {
    console.log('No change: ' + file);
  }
}

console.log('\nDone: ' + fixed + ' files cleaned');
