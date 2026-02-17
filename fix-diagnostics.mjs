import { readFileSync, writeFileSync } from 'node:fs';

const files = [
  'deliverables/question_banks/deep-dive-combined.yaml',
  'deliverables/question_banks/pulse-check.yaml',
];

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  const newLines = [];
  let changed = 0;
  let inDiagnostic = false;
  let hasAllowMultiple = false;
  let hasMaxSelections = false;
  let questionIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trimStart();
    const indent = line.length - trimmed.length;

    // Detect start of a new question (- question_key:)
    if (trimmed.startsWith('- question_key:')) {
      inDiagnostic = false;
      hasAllowMultiple = false;
      hasMaxSelections = false;
      questionIndent = indent;
    }

    // Detect question_type: diagnostic
    if (trimmed.startsWith('question_type:') && trimmed.includes('diagnostic')) {
      inDiagnostic = true;
    }

    // Track existing fields
    if (inDiagnostic) {
      if (trimmed.startsWith('allow_multiple:')) hasAllowMultiple = true;
      if (trimmed.startsWith('max_selections:')) hasMaxSelections = true;
    }

    // Fix answer_type: single_choice → multiple_choice for diagnostic questions
    if (inDiagnostic && trimmed.startsWith('answer_type:') && trimmed.includes('single_choice')) {
      const prefix = line.substring(0, indent);
      newLines.push(`${prefix}answer_type: multiple_choice`);
      changed++;

      // Add allow_multiple and max_selections right after answer_type if not present
      if (!hasAllowMultiple) {
        // Check if the next lines already have these
        const remaining = lines.slice(i + 1).join('\n');
        if (!remaining.split('\n').some((l, idx) => {
          const t = l.trimStart();
          const li = l.length - t.length;
          return idx < 10 && li === indent && t.startsWith('allow_multiple:');
        })) {
          newLines.push(`${prefix}allow_multiple: true`);
          newLines.push(`${prefix}max_selections: 3`);
          hasAllowMultiple = true;
          hasMaxSelections = true;
          changed += 2;
        }
      }
      continue;
    }

    // For questions that already have answer_type: multiple_choice,
    // add max_selections after allow_multiple if missing
    if (inDiagnostic && trimmed.startsWith('allow_multiple:') && !hasMaxSelections) {
      newLines.push(line);
      // Check if next line already has max_selections
      const nextLine = lines[i + 1]?.trimStart() || '';
      if (!nextLine.startsWith('max_selections:')) {
        const prefix = line.substring(0, indent);
        newLines.push(`${prefix}max_selections: 3`);
        hasMaxSelections = true;
        changed++;
      }
      continue;
    }

    newLines.push(line);
  }

  if (changed > 0) {
    writeFileSync(file, newLines.join('\n'), 'utf-8');
    console.log(`${file}: ${changed} changes`);
  } else {
    console.log(`${file}: no changes`);
  }
}
