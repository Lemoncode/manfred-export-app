import { Paragraph, TextRun } from 'docx';
import { ExperienceVm } from './experience-section.vm';
import { styles } from './experience-section.styles';
import { Role } from '@/model';

export const titleExperienceSection = () =>
  new Paragraph({
    spacing: { before: 400 },
    children: [
      new TextRun({ text: 'EXPERIENCIA/', size: '18pt' }),
      new TextRun({
        text: 'CARRERA',
        size: '18pt',
        bold: true,
      }),
    ],
  });

const nameExperienceSection = (experienceVm: ExperienceVm): Paragraph =>
  new Paragraph({
    spacing: { before: 400 },
    children: [new TextRun({ text: experienceVm.name, size: '14pt', bold: true })],
  });

const descriptionExperienceSection = (experienceVm: ExperienceVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: experienceVm.description, size: '12pt' })],
  });

const typeExperienceSection = (experienceVm: ExperienceVm): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Tipo de Organización: ', size: '12pt', bold: true }),
      new TextRun({ text: experienceVm.type, size: '12pt' }),
    ],
  });

const titleRolesExperienceSection = (): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: 'Roles dentro de la empresa: ', size: '12pt', bold: true })],
  });

const generateRoleNameExperienceSection = (role: Role): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: `- ${role.name}`, size: '12pt', bold: true })],
  });

const generateRoleDescriptionExperienceSection = (role: Role): Paragraph[] =>
  role.challenges?.map(
    challenge =>
      new Paragraph({
        spacing: { before: 200 },
        children: [new TextRun({ text: `- ${challenge.description}`, size: '12pt' })],
      })
  ) ?? [];

const challengeTitle = (): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: 'Retos: ', size: '12pt', bold: true })],
  });

const generateRoleExperienceSection = (role: Role): Paragraph[] => {
  let children: Paragraph[] = [];

  children = [...children, generateRoleNameExperienceSection(role)];

  if (role.challenges) {
    children = [...children, challengeTitle(), ...generateRoleDescriptionExperienceSection(role)];
  }

  return children;
};

export const generateRolesExperienceSection = (experienceVm: ExperienceVm): Paragraph[] =>
  experienceVm.roles?.map(role => generateRoleExperienceSection(role)).flat() ?? [];

const generateLineSpacer = (): Paragraph =>
  new Paragraph({
    spacing: { line: 400 },
    text: '',
    ...styles.lineStyles,
  });

// export const sectionExperienceSection = (experienceVm: ExperienceVm) =>
//   new Paragraph({
//     spacing: { line: 400 },
//     children: [
//       new TextRun({ text: experienceVm.name, size: '14pt', font: 'Arial', bold: true, break: 1 }),
//       new TextRun({ text: experienceVm.role, size: '12pt', font: 'Arial', break: 1 }),
//       new TextRun({
//         text: experienceVm.startDate + ' - ' + experienceVm.finishDate,
//         size: '8pt',
//         font: 'Arial',
//         break: 1,
//       }),
//       new TextRun({ text: experienceVm.description, size: '8pt', font: 'Arial', break: 2 }),
//       new TextRun({ text: '', break: 1 }),
//     ],
//   });

export const sectionExperienceSection = (experienceVm: ExperienceVm): Paragraph[] => {
  let children: Paragraph[] = [];

  children = [...children, nameExperienceSection(experienceVm)];

  if (experienceVm.type) {
    children = [...children, typeExperienceSection(experienceVm)];
  }

  if (experienceVm.description) {
    children = [...children, descriptionExperienceSection(experienceVm)];
  }

  children = [...children, titleRolesExperienceSection()];

  children = [...children, ...generateRolesExperienceSection(experienceVm)];

  return [...children, generateLineSpacer()];
};
