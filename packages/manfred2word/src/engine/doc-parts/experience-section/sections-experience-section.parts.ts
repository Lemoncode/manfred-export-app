import { Paragraph, TextRun } from 'docx';
import { ExperienceVm } from './experience-section.vm';

export const titleExperienceSection = () =>
  new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ text: 'EXPERIENCIA/', size: '14pt', font: 'Arial' }),
      new TextRun({
        text: 'CARRERA',
        size: '14pt',
        bold: true,
        font: 'Arial',
      }),
    ],
  });

export const sectionExperienceSection = (experienceVm: ExperienceVm) =>
  new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ text: experienceVm.name, size: '14pt', font: 'Arial', bold: true, break: 1 }),
      new TextRun({ text: experienceVm.role, size: '12pt', font: 'Arial', break: 1 }),
      new TextRun({
        text: experienceVm.startDate + ' - ' + experienceVm.finishDate,
        size: '8pt',
        font: 'Arial',
        break: 1,
      }),
      new TextRun({ text: experienceVm.description, size: '8pt', font: 'Arial', break: 2 }),
      new TextRun({ text: '', break: 1 }),
    ],
  });
