import { Paragraph, TextRun } from 'docx';
import { LanguageVm } from './language-section.vm';

export const titleLanguageSection = () => {
  return new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ size: '14pt', font: 'Arial', break: 1 }),
      new TextRun({ text: 'LENGUAJE/', size: '14pt', font: 'Arial' }),
      new TextRun({
        text: 'NIVEL',
        size: '14pt',
        bold: true,
        font: 'Arial',
      }),
    ],
  });
};

export const sectionLanguageSection = (languageVm: LanguageVm) =>
  new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ text: languageVm?.name, size: '12pt', font: 'Arial', bold: true, break: 1 }),
      new TextRun({ text: languageVm?.level, size: '10pt', font: 'Arial', break: 1 }),
    ],
  });
