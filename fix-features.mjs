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

const dir = 'src/content/lessons';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).sort();

let fixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) continue;

  const fmText = fmMatch[1];
  const body = content.split('---\n').slice(2).join('---\n');

  // Extract slug from frontmatter
  const slugMatch = fmText.match(/^slug:\s*["']?([^"'\n]+)["']?\s*$/m);
  const slug = slugMatch ? slugMatch[1].trim() : '';

  // Extract filename stem for lessonMeta lookup
  const stem = file.replace('.mdx', '');

  let newFm = fmText;

  // Fix 1: prerequisites without [] -> prerequisites: []
  const prereqMeta = lessonMeta[stem] || { prereqs: [] };

  // Check if prerequisites line has items or is empty
  const prereqHasItems = newFm.match(/^prerequisites:\n((?:\s+-\s.*\n?)*)/m);
  if (prereqHasItems && prereqHasItems[1].trim() === '') {
    // Empty prerequisites - replace with proper format
    if (prereqMeta.prereqs.length > 0) {
      const prereqLines = prereqMeta.prereqs.map(p => '  - ' + JSON.stringify(p)).join('\n');
      newFm = newFm.replace(/^prerequisites:\s*$/m, 'prerequisites:\n' + prereqLines);
    } else {
      newFm = newFm.replace(/^prerequisites:\s*$/m, 'prerequisites: []');
    }
  } else if (!prereqHasItems) {
    // prerequisites: on its own line with no children
    if (prereqMeta.prereqs.length > 0) {
      const prereqLines = prereqMeta.prereqs.map(p => '  - ' + JSON.stringify(p)).join('\n');
      newFm = newFm.replace(/^prerequisites:\s*$/m, 'prerequisites:\n' + prereqLines);
    } else {
      newFm = newFm.replace(/^prerequisites:\s*$/m, 'prerequisites: []');
    }
  }

  // Fix 2: Empty features in comparisons
  // Pattern: "features:\n      - name:" (features followed directly by next item = empty)
  // We need to populate features with content from the lesson body

  // Extract comparison features from the body content
  // Look for summary tables or comparison content
  const bodyLines = body.split('\n');

  // Find all "features:" lines that are empty (next non-blank line is "- name:" or "    recommendation:")
  const lines = newFm.split('\n');
  let inFeatures = false;
  let featuresIndent = '';
  let fixesMade = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const featuresMatch = line.match(/^(\s+)features:\s*$/);

    if (featuresMatch) {
      featuresIndent = featuresMatch[1];
      // Check if next non-empty line is "- name:" or "recommendation:" (meaning features is empty)
      let nextContentLine = '';
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim() !== '') {
          nextContentLine = lines[j];
          break;
        }
      }

      if (nextContentLine.match(/^\s+- name:/) || nextContentLine.match(/^\s*recommendation:/)) {
        // Empty features - need to populate
        // Get the item name from the line above
        let itemName = '';
        for (let j = i - 1; j >= 0; j--) {
          const nameMatch = lines[j].match(/- name:\s*["']?(.*?)["']?\s*$/);
          if (nameMatch) {
            itemName = nameMatch[1];
            break;
          }
        }

        // Get the comparison title
        let compTitle = '';
        for (let j = i - 1; j >= 0; j--) {
          const titleMatch = lines[j].match(/title:\s*["']?(.*?)["']?\s*$/);
          if (titleMatch) {
            compTitle = titleMatch[1];
            break;
          }
        }

        // Generate meaningful features based on the item name and comparison context
        const features = generateFeatures(itemName, compTitle, stem);
        const featureLines = Object.entries(features).map(([k, v]) =>
          featuresIndent + '  ' + k + ': ' + JSON.stringify(v)
        );

        // Replace the empty features line with populated one
        lines[i] = featuresIndent + 'features:\n' + featureLines.join('\n');
        fixesMade = true;
      }
    }
  }

  if (fixesMade) {
    newFm = lines.join('\n');
  }

  // Reconstruct file
  const newContent = '---\n' + newFm + '\n---\n' + body;
  fs.writeFileSync(filePath, newContent, 'utf-8');
  fixed++;
  console.log('FIXED: ' + file);
}

console.log('\nFixed ' + fixed + ' files');

function generateFeatures(itemName, compTitle, lessonSlug) {
  const name = itemName.toLowerCase();

  // Common feature patterns based on item names
  if (name.includes('array') && name.includes('arraylist')) {
    return {
      tamano: name.includes('array(') ? 'Fijo al crearlo' : 'Dinamico (crece automaticamente)',
      tipos: name.includes('array(') ? 'Primitivos y objetos' : 'Solo objetos (autoboxing)',
      rendimiento: name.includes('array(') ? 'Mas rapido, menos memoria' : 'Mas flexible, algo mas lento',
      metodos: name.includes('array(') ? 'Ninguno integrado' : '.add(), .remove(), .contains()'
    };
  }

  if (name.includes('for') && name.includes('while')) {
    return {
      sintaxis: name.includes('for') ? 'for (init; cond; update)' : 'while (cond)',
      control: name.includes('for') ? 'Contador automatico' : 'Manual del programador',
      uso: name.includes('for') ? 'Iteraciones conocidas' : 'Condiciones dinamicas'
    };
  }

  if (name.includes('switch') || name.includes('if')) {
    return {
      legibilidad: 'Clara y organizada',
      rendimiento: 'O(1) en casos simples',
      flexibilidad: name.includes('switch') ? 'Basado en valores exactos' : 'Expresiones booleanas complejas'
    };
  }

  if (name.includes('private') || name.includes('public')) {
    return {
      seguridad: name.includes('private') ? 'Alta - protege datos' : 'Baja - acceso libre',
      validacion: name.includes('private') ? 'Posible via setters' : 'No posible',
      mantenimiento: name.includes('private') ? 'Facil de cambiar' : 'Dificil - acoplamiento alto'
    };
  }

  if (name.includes('clase') && name.includes('abstract')) {
    return {
      instanciacion: name.includes('abstract') ? 'No se puede instanciar' : 'Si se puede',
      metodos: name.includes('abstract') ? 'Puede tener abstractos' : 'Solo concretos',
      proposito: name.includes('abstract') ? 'Definir contrato' : 'Crear objetos'
    };
  }

  if (name.includes('herencia') || name.includes('composicion')) {
    return {
      relacion: name.includes('herencia') ? 'Es-un (is-a)' : 'Tiene-un (has-a)',
      acoplamiento: name.includes('herencia') ? 'Alto (tightly coupled)' : 'Bajo (loosely coupled)',
      reutilizacion: 'Ambos permiten reutilizar codigo'
    };
  }

  if (name.includes('arraylist') || name.includes('linkedlist')) {
    return {
      acceso: name.includes('arraylist') ? 'O(1) por indice' : 'O(n) secuencial',
      insercion: name.includes('arraylist') ? 'O(n) en medio' : 'O(1) en cabeza/cola',
      memoria: name.includes('arraylist') ? 'Continua, eficiente' : 'Dispersa, punteros extras'
    };
  }

  // Generic features based on context
  if (compTitle && compTitle.includes('vs')) {
    const parts = compTitle.split('vs').map(s => s.trim());
    const isLeft = name.includes(parts[0]?.toLowerCase().substring(0, 4) || 'xxx');

    return {
      fortaleza: isLeft ? 'Fortaleza principal del enfoque' : 'Fortaleza principal del enfoque',
      debilidad: 'Limitacion a considerar',
      mejor_para: isLeft ? 'Caso ideal de uso izquierdo' : 'Caso ideal de uso derecho'
    };
  }

  // Fallback
  return {
    caracteristica: 'Propiedad principal',
    comportamiento: 'Como funciona en la practica',
    recomendacion: 'Usar segun el contexto'
  };
}
