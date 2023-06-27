import { Paragraph, TextRun } from 'docx';
import { LanguageVm } from './language-section.vm';
import { generateLineSpacer } from '@/common-app';

export const titleLanguageSection = () =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'LENGUAJE/', size: '18pt' }),
      new TextRun({
        text: 'NIVEL',
        size: '18pt',
        bold: true,
      }),
    ],
  });

const nameLanguageSection = (languageVm: LanguageVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: languageVm.name, size: '12pt', bold: true })],
  });

const levelLanguageSection = (languageVm: LanguageVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Nivel: ', size: '12pt', bold: true }),
      new TextRun({ text: languageVm?.level, size: '12pt' }),
    ],
  });

export const sectionLanguageSection = (languageVm: LanguageVm): Paragraph[] => {
  let languageSection: Paragraph[] = [];

  languageSection = [...languageSection, nameLanguageSection(languageVm)];

  if (languageVm?.level) {
    languageSection = [...languageSection, levelLanguageSection(languageVm)];
  }

  return [...languageSection, generateLineSpacer()];
};
