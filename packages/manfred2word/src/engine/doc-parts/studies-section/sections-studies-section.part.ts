import { Paragraph, TextRun } from 'docx';
import { StudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { generateLineSpacer } from '@/common-app';

export const generateTitleStudiesSection = () => {
  return new Paragraph({
    spacing: { before: 400 },
    children: [new TextRun({ text: 'EDUCACIÓN', size: '18pt' })],
  });
};

const generateNameStudiesSection = (studiesVm: StudiesSectionVm): Paragraph =>
  new Paragraph({
    spacing: { before: 400 },
    children: [new TextRun({ text: studiesVm.name, size: '14pt', bold: true })],
  });

const generateDescriptionStudiesSection = (studiesVm: StudiesSectionVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: studiesVm.description, size: '12pt' })],
  });

const generateTypeStudiesSection = (studiesVm: StudiesSectionVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Tipo de Estudio: ', size: '12pt', bold: true }),
      new TextRun({ text: studiesVm.studyType, size: '12pt' }),
    ],
  });

const generateDegreeAchievedStudiesSection = (studiesVm: StudiesSectionVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Grado Obtenido: ', size: '12pt', bold: true }),
      new TextRun({ text: studiesVm.degreeAchieved ? 'Obtenido' : 'No obtenido', size: '12pt' }),
    ],
  });

const generateDateStudiesSection = (studiesVm: StudiesSectionVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({
        text: 'Fecha de inicio y finalización: ',
        size: '12pt',
        bold: true,
      }),
      new TextRun({
        text: `${studiesVm.startDate} - ${studiesVm.finishDate ?? 'Actualidad'}`,
        size: '10pt',
      }),
    ],
  });

const generateInstitutionStudiesSection = (studiesVm: StudiesSectionVm): Paragraph[] => {
  let children: Paragraph[] = [];

  children = [...children, generateInstitutionNameStudiesSection(studiesVm)];

  if (studiesVm.institution.location) {
    children = [...children, generateInstitutionLocationStudiesSection(studiesVm)];
  }
  return children;
};

const generateInstitutionNameStudiesSection = (studiesVm: StudiesSectionVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Nombre de la Institución: ', size: '12pt', bold: true }),
      new TextRun({ text: studiesVm.institution.name, size: '12pt' }),
    ],
  });

const generateInstitutionLocationStudiesSection = (studiesVm: StudiesSectionVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Ubicación de la Institución: ', size: '12pt', bold: true }),
      new TextRun({
        text: `${studiesVm.institution.location.address && studiesVm.institution.location.address + ', '}${
          studiesVm.institution.location.region && studiesVm.institution.location.region + ', '
        }${studiesVm.institution.location.country}`,
        size: '12pt',
      }),
    ],
  });

export const sectionStudiesSection = (studiesVm: StudiesSectionVm) => {
  let children: Paragraph[] = [];

  children = [...children, generateNameStudiesSection(studiesVm)];

  if (studiesVm.description) {
    children = [...children, generateDescriptionStudiesSection(studiesVm)];
  }

  children = [...children, generateTypeStudiesSection(studiesVm)];

  children = [...children, generateDegreeAchievedStudiesSection(studiesVm)];

  children = [...children, generateDateStudiesSection(studiesVm)];

  if (studiesVm.institution) {
    children = [...children, ...generateInstitutionStudiesSection(studiesVm)];
  }

  return [...children, generateLineSpacer()];
};
