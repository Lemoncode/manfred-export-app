import { Paragraph, TextRun } from 'docx';
import { HardSkillVM } from './hard-skill-section.vm';

export const renderTitleHardSkillSection = () => {
  return new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ size: '14pt', font: 'Arial', break: 1 }),
      new TextRun({ text: 'Hard Skills/', size: '14pt', font: 'Arial' }),
      new TextRun({
        text: 'Nivel',
        size: '14pt',
        bold: true,
        font: 'Arial',
      }),
    ],
  });
};

export const renderSectionHardSkillSection = (skillVM: HardSkillVM) =>
  new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({
        text: skillVM?.skill?.name + (skillVM?.skill?.description ? ': ' : ''),
        size: '12pt',
        font: 'Arial',
        bold: true,
        break: 1,
      }),
      new TextRun({
        text: skillVM?.skill?.description ? skillVM?.skill?.description : '',
        size: '10pt',
        font: 'Arial',
      }),
      new TextRun({
        text: 'Nivel: ',
        size: '12pt',
        bold: true,
        font: 'Arial',
        break: 1,
      }),
      new TextRun({ text: skillVM?.level, size: '10pt', font: 'Arial' }),
    ],
  });
