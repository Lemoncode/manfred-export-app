import { Paragraph, TextRun } from 'docx';
import { SoftSkillVM } from './soft-skill-section.vm';

export const titleSoftSkillSection = () => {
  return new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ size: '14pt', font: 'Arial', break: 1 }),
      new TextRun({ text: 'Habilidades/', size: '14pt', font: 'Arial' }),
      new TextRun({
        text: 'NIVEL',
        size: '14pt',
        bold: true,
        font: 'Arial',
      }),
    ],
  });
};

export const sectionSoftSkillSection = (skillVM: SoftSkillVM) =>
  new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ text: skillVM?.skill?.name, size: '12pt', font: 'Arial', bold: true, break: 1 }),
      new TextRun({ text: skillVM?.skill?.description, size: '12pt', font: 'Arial', bold: true, break: 1 }),
      new TextRun({ text: skillVM?.level, size: '10pt', font: 'Arial', break: 1 }),
    ],
  });
