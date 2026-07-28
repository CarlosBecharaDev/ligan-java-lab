import fs from 'fs';
import path from 'path';

// Lesson metadata for prerequisites
const lessonMeta = {
  '01-variables-y-tipos': { prereqs: [] },
  '02-operadores': { prereqs: ['variables-y-tipos'] },
  '03-strings': { prereqs: ['variables-y-tipos', 'operadores'] },
  '04-scanner': { prereqs: ['variables-y-tipos'] },
  '05-casting': { prereqs: ['variables-y-tipos', 'operadores'] },
  '06-constantes-enums': { prereqs: ['variables-y-tipos'] },
  '07-if-else': { prereqs: ['variables-y-tipos', 'operadores'] },
  '08-switch': { prereqs: ['if-else'] },
  '09-while-do-while': { prereqs: ['if-else'] },
  '10-for': { prereqs: ['while-do-while'] },
  '11-break-continue-return': { prereqs: ['for'] },
  '12-metodos': { prereqs: ['variables-y-tipos'] },
  '13-metodos-avanzados': { prereqs: ['metodos'] },
  '14-sobrecarga': { prereqs: ['metodos'] },
  '15-arrays': { prereqs: ['metodos'] },
  '16-arrays-avanzados': { prereqs: ['arrays'] },
  '17-clases-objetos': { prereqs: ['variables-y-tipos', 'metodos'] },
  '18-constructores': { prereqs: ['clases-objetos'] },
  '19-encapsulacion': { prereqs: ['clases-objetos', 'constructores'] },
  '20-herencia': { prereqs: ['clases-objetos', 'encapsulacion'] },
  '21-polimorfismo': { prereqs: ['herencia'] },
  '22-clases-abstractas-interfaces': { prereqs: ['herencia', 'polimorfismo'] },
  '23-agregacion-composicion': { prereqs: ['clases-objetos', 'clases-abstractas-interfaces'] },
};

function extractObjectives(body) {
  const match = body.match(/## Objetivos de Aprendizaje[\s\S]*?\n([\s\S]*?)(?=\n---)/);
  if (!match) return ['Comprender los conceptos fundamentales de esta leccion'];
  const bulletLines = match[1].split('\n').filter(l => l.trim().startsWith('- '));
  return bulletLines.map(l => l.replace(/^- /, '').replace(/`/g, '').trim()).filter(Boolean);
}

function extractFAQs(body) {
  const faqSection = body.match(/## Preguntas Frecuentes\n([\s\S]*?)(?=\n---|\n## Fuentes|$)/);
  if (!faqSection) return [];
  const detailsBlocks = faqSection[1].match(/<details>\s*<summary>([\s\S]*?)<\/summary>\s*([\s\S]*?)<\/details>/g);
  if (!detailsBlocks) return [];
  return detailsBlocks.map(block => {
    const qMatch = block.match(/<summary>([\s\S]*?)<\/summary>/);
    const aMatch = block.match(/<\/summary>\s*([\s\S]*?)<\/details>/);
    const q = qMatch ? qMatch[1].trim() : '';
    const a = aMatch ? aMatch[1].trim() : '';
    return { question: q, answer: a };
  });
}

function extractSources(body) {
  const srcSection = body.match(/## Fuentes y Referencias\n([\s\S]*?)(?=\n---|\n## |$)/);
  if (!srcSection) return [];
  const links = srcSection[1].match(/\[([^\]]+)\]\(([^)]+)\)/g);
  if (!links) return [];
  return links.map(link => {
    const m = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
    return {
      title: m ? m[1].trim() : '',
      url: m ? m[2].trim() : '',
      date: '2025-07-27'
    };
  });
}

function extractRealWorldExamples(body) {
  const examples = [];
  const sections = body.split(/## Ejemplo Real:/);
  for (let i = 1; i < sections.length; i++) {
    const section = sections[i];
    const titleMatch = section.match(/^\s*(.*?)[\n#]/);
    const domain = titleMatch ? titleMatch[1].replace(/[^\w\s]/g, '').trim() : 'General';

    const codeMatch = section.match(/code={`([\s\S]*?)`}/);
    const code = codeMatch ? codeMatch[1].trim() : '';

    const resultMatch = section.match(/\/\/\s*(.*?)$/m);
    const result = resultMatch ? resultMatch[1].trim() : '';

    examples.push({
      domain: domain,
      description: 'Ejemplo practico de ' + domain,
      code: code.substring(0, 500) + (code.length > 500 ? '...' : ''),
      result: result
    });
  }
  return examples;
}

function reformatComparisons(comparisons) {
  if (!comparisons || !Array.isArray(comparisons)) return [];
  return comparisons.map(c => {
    const items = [];
    if (c.a) {
      const features = {};
      if (c.a.points) c.a.points.forEach((p, i) => { features['ventaja' + (i+1)] = p; });
      items.push({ name: c.a.label || 'Opcion A', features });
    }
    if (c.b) {
      const features = {};
      if (c.b.points) c.b.points.forEach((p, i) => { features['ventaja' + (i+1)] = p; });
      items.push({ name: c.b.label || 'Opcion B', features });
    }
    return {
      title: c.title || 'Comparacion',
      items,
      recommendation: 'Usa la opcion que mejor se adapte a tu caso especifico'
    };
  });
}

function buildNewFrontmatter(fm, body) {
  const meta = lessonMeta[fm.slug] || { prereqs: [] };

  const objectives = extractObjectives(body);
  const faqs = extractFAQs(body);
  const sources = extractSources(body);
  const realWorldExamples = extractRealWorldExamples(body);
  const comparisons = reformatComparisons(fm.comparisons);

  const lines = [];
  lines.push('title: ' + JSON.stringify(fm.title));
  lines.push('slug: ' + JSON.stringify(fm.slug));
  lines.push('description: ' + JSON.stringify(fm.description));
  lines.push('module: ' + JSON.stringify(fm.module));
  lines.push('level: ' + JSON.stringify(fm.level));

  if (fm.order) lines.push('order: ' + fm.order);
  if (fm.estimatedMinutes) lines.push('estimatedMinutes: ' + fm.estimatedMinutes);

  lines.push('objectives:');
  objectives.forEach(o => lines.push('  - ' + JSON.stringify(o)));

  lines.push('prerequisites:');
  meta.prereqs.forEach(p => lines.push('  - ' + JSON.stringify(p)));

  lines.push('realWorldExamples:');
  if (realWorldExamples.length > 0) {
    realWorldExamples.forEach(ex => {
      lines.push('  - domain: ' + JSON.stringify(ex.domain));
      lines.push('    description: ' + JSON.stringify(ex.description));
      lines.push('    code: ' + JSON.stringify(ex.code));
      lines.push('    result: ' + JSON.stringify(ex.result));
    });
  } else {
    lines.push('  - domain: ' + JSON.stringify(fm.title));
    lines.push('    description: ' + JSON.stringify('Ejemplo practico de ' + fm.title));
    lines.push('    code: ' + JSON.stringify('// Codigo de ejemplo'));
    lines.push('    result: ' + JSON.stringify('// Resultado'));
  }

  lines.push('hasInteractive: false');

  if (comparisons.length > 0) {
    lines.push('comparisons:');
    comparisons.forEach(c => {
      lines.push('  - title: ' + JSON.stringify(c.title));
      lines.push('    items:');
      c.items.forEach(item => {
        lines.push('      - name: ' + JSON.stringify(item.name));
        lines.push('        features:');
        Object.entries(item.features).forEach(([k, v]) => {
          lines.push('          ' + k + ': ' + JSON.stringify(v));
        });
      });
      lines.push('    recommendation: ' + JSON.stringify(c.recommendation));
    });
  } else {
    lines.push('comparisons: []');
  }

  lines.push('videos: []');

  lines.push('faqs:');
  if (faqs.length > 0) {
    faqs.forEach(f => {
      lines.push('  - question: ' + JSON.stringify(f.question));
      lines.push('    answer: ' + JSON.stringify(f.answer));
    });
  } else {
    lines.push('  - question: ' + JSON.stringify('Cuando debo usar esta caracteristica?'));
    lines.push('    answer: ' + JSON.stringify('Consulta la documentacion oficial de Java para casos especificos de uso.'));
  }

  lines.push('sources:');
  if (sources.length > 0) {
    sources.forEach(s => {
      lines.push('  - title: ' + JSON.stringify(s.title));
      lines.push('    url: ' + JSON.stringify(s.url));
      lines.push('    date: ' + JSON.stringify(s.date));
    });
  } else {
    lines.push('  - title: ' + JSON.stringify('Oracle Java Documentation'));
    lines.push('    url: ' + JSON.stringify('https://docs.oracle.com/javase/tutorial/'));
    lines.push('    date: ' + JSON.stringify('2025-07-27'));
  }

  lines.push('status: "borrador"');
  lines.push('lastReviewed: "2025-07-27"');

  return lines.join('\n');
}

function parseFrontmatter(fmText) {
  const result = {};
  let currentKey = null;

  for (const line of fmText.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Top-level key: value
    const topMatch = trimmed.match(/^(\w+):\s*(.*)/);
    if (topMatch && !line.startsWith(' ')) {
      const key = topMatch[1];
      let val = topMatch[2].trim();

      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }

      if (val === '' || val === '[]') {
        result[key] = [];
        currentKey = key;
      } else {
        if (!isNaN(val) && val !== '') val = Number(val);
        result[key] = val;
        currentKey = key;
      }
      continue;
    }

    // Array item: - ...
    if (trimmed.startsWith('- ') && currentKey) {
      const itemVal = trimmed.slice(2).trim();

      // Handle comparison objects
      if (currentKey === 'comparisons') {
        const titleMatch = itemVal.match(/^title:\s*(.*)/);
        if (titleMatch) {
          let t = titleMatch[1].trim();
          if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) t = t.slice(1, -1);
          result.comparisons.push({ title: t, a: null, b: null });
        }
      }
      // Handle quizzes objects
      else if (currentKey === 'quizzes') {
        const kvMatch = itemVal.match(/^(\w+):\s*(.*)/);
        if (kvMatch) {
          if (!result._quizObj) result._quizObj = {};
          let v = kvMatch[2].trim();
          if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
          if (!isNaN(v) && v !== '') v = Number(v);
          result._quizObj[kvMatch[1]] = v;
          if (Object.keys(result._quizObj).length >= 3) {
            result.quizzes.push(result._quizObj);
            result._quizObj = null;
          }
        }
      }
      // Handle exercises objects
      else if (currentKey === 'exercises') {
        const kvMatch = itemVal.match(/^(\w+):\s*(.*)/);
        if (kvMatch) {
          if (!result._exObj) result._exObj = {};
          let v = kvMatch[2].trim();
          if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
          if (!isNaN(v) && v !== '') v = Number(v);
          result._exObj[kvMatch[1]] = v;
          if (Object.keys(result._exObj).length >= 2) {
            result.exercises.push(result._exObj);
            result._exObj = null;
          }
        }
      }
      else {
        let v = itemVal;
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
        if (!Array.isArray(result[currentKey])) result[currentKey] = [];
        result[currentKey].push(v);
      }
      continue;
    }

    // Comparison side (a: or b:)
    if (currentKey === 'comparisons' && result.comparisons && result.comparisons.length > 0) {
      const sideMatch = trimmed.match(/^(a|b):/);
      if (sideMatch) {
        const side = sideMatch[1];
        const lastComp = result.comparisons[result.comparisons.length - 1];
        lastComp[side] = { label: '', points: [] };
        lastComp._currentSide = side;

        const labelMatch = trimmed.match(/label:\s*(.*)/);
        if (labelMatch) {
          let l = labelMatch[1].trim();
          if ((l.startsWith('"') && l.endsWith('"')) || (l.startsWith("'") && l.endsWith("'"))) l = l.slice(1, -1);
          lastComp[side].label = l;
        }
        continue;
      }

      const lastComp = result.comparisons[result.comparisons.length - 1];
      if (lastComp && lastComp._currentSide) {
        const labelMatch = trimmed.match(/^label:\s*(.*)/);
        if (labelMatch) {
          let l = labelMatch[1].trim();
          if ((l.startsWith('"') && l.endsWith('"')) || (l.startsWith("'") && l.endsWith("'"))) l = l.slice(1, -1);
          lastComp[lastComp._currentSide].label = l;
          continue;
        }

        if (trimmed.startsWith('- ')) {
          let p = trimmed.slice(2).trim();
          if ((p.startsWith('"') && p.endsWith('"')) || (p.startsWith("'") && p.endsWith("'"))) p = p.slice(1, -1);
          lastComp[lastComp._currentSide].points.push(p);
          continue;
        }
      }
    }
  }

  // Clean up temp keys
  delete result._quizObj;
  delete result._exObj;

  return result;
}

// Process all lesson files
const lessonsDir = 'src/content/lessons';
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.mdx')).sort();

let processed = 0;
let errors = 0;

for (const file of files) {
  try {
    const filePath = path.join(lessonsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) {
      console.log('SKIP (no frontmatter): ' + file);
      errors++;
      continue;
    }

    const fmText = fmMatch[1];
    const body = content.split('---\n').slice(2).join('---\n');

    const existingFm = parseFrontmatter(fmText);

    // Check which required fields are missing or wrong
    const missing = [];
    if (!existingFm.objectives || (Array.isArray(existingFm.objectives) && existingFm.objectives.length === 0)) missing.push('objectives');
    if (!existingFm.prerequisites) missing.push('prerequisites');
    if (!existingFm.realWorldExamples) missing.push('realWorldExamples');
    if (!existingFm.videos) missing.push('videos');
    if (!existingFm.faqs || (Array.isArray(existingFm.faqs) && existingFm.faqs.length === 0)) missing.push('faqs');
    if (!existingFm.sources || (Array.isArray(existingFm.sources) && existingFm.sources.length === 0)) missing.push('sources');
    if (!existingFm.status) missing.push('status');
    if (!existingFm.lastReviewed) missing.push('lastReviewed');

    const badComparisons = existingFm.comparisons && existingFm.comparisons.length > 0 &&
      existingFm.comparisons.some(c => c.a && !c.items);

    if (missing.length === 0 && !badComparisons) {
      console.log('OK: ' + file);
      processed++;
      continue;
    }

    const newFm = buildNewFrontmatter(existingFm, body);
    const newContent = '---\n' + newFm + '\n---\n' + body;

    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log('FIXED (' + missing.join(',') + (badComparisons ? ',comparisons' : '') + '): ' + file);
    processed++;
  } catch (err) {
    console.log('ERROR: ' + file + ' - ' + err.message);
    errors++;
  }
}

console.log('\nDone: ' + processed + ' processed, ' + errors + ' errors');
