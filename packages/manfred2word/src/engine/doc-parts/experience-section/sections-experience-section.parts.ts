import { Paragraph, TextRun } from 'docx';
import { ExperienceVm } from './experience-section.vm';
import { Role } from '@/model';
import { generateLineSpacer } from '@/common-app';

export const generateTitleExperienceSection = () =>
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

const generateNameExperienceSection = (experienceVm: ExperienceVm): Paragraph =>
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

const generateTitleRolesExperienceSection = (): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: 'Roles dentro de la empresa: ', size: '12pt', bold: true })],
  });

const generateRoleDateExperienceSection = (role: Role): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Duración: ', size: '12pt', bold: true }),
      new TextRun({
        text: `${role.startDate} - ${role.finishDate ?? 'Actualidad'}`,
        size: '10pt',
      }),
    ],
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

const generateChallengeTitle = (): Paragraph =>
  new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: 'Retos: ', size: '12pt', bold: true })],
  });

const generateRoleExperienceSection = (role: Role): Paragraph[] => {
  let children: Paragraph[] = [];

  children = [...children, generateRoleNameExperienceSection(role)];

  if (role.challenges) {
    children = [
      ...children,
      generateRoleDateExperienceSection(role),
      generateChallengeTitle(),
      ...generateRoleDescriptionExperienceSection(role),
    ];
  }

  return children;
};

export const generateRolesExperienceSection = (experienceVm: ExperienceVm): Paragraph[] =>
  experienceVm.roles?.map(role => generateRoleExperienceSection(role)).flat() ?? [];

export const sectionExperienceSection = (experienceVm: ExperienceVm): Paragraph[] => {
  let children: Paragraph[] = [];

  children = [...children, generateNameExperienceSection(experienceVm)];

  if (experienceVm.type) {
    children = [...children, typeExperienceSection(experienceVm)];
  }

  if (experienceVm.description) {
    children = [...children, descriptionExperienceSection(experienceVm)];
  }

  children = [...children, generateTitleRolesExperienceSection()];

  children = [...children, ...generateRolesExperienceSection(experienceVm)];

  return [...children, generateLineSpacer()];
};
