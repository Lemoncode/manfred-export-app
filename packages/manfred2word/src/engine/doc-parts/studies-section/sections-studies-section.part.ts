import { Paragraph, TextRun } from 'docx';
import { StudiesSectionVm } from './studies-section.vm';

export const titleStudiesSection = () => {
  return new Paragraph({
    spacing: { line: 400 },
    children: [new TextRun({ text: 'EDUCACION', size: '15pt', font: 'Arial' })],
  });
};

export const sectionStudiesSection = (studiesVm: StudiesSectionVm) =>
  new Paragraph({
    spacing: { line: 400 },
    children: [
      new TextRun({ text: studiesVm.name, size: '14pt', font: 'Arial', bold: true }),
      new TextRun({ text: studiesVm.description, size: '12pt', font: 'Arial', break: 1 }),
      new TextRun({ text: studiesVm.startDate + ' - ' + studiesVm.finishDate, size: '12pt', font: 'Arial', break: 1 }),
      new TextRun({ text: studiesVm.institution.name + ' / ', size: '12pt', font: 'Arial', break: 1 }),
      new TextRun({ text: studiesVm.institution.location.region, size: '12pt', font: 'Arial' }),
      new TextRun({ text: studiesVm.institution.description, size: '11pt', font: 'Arial', break: 1 }),
    ],
  });
