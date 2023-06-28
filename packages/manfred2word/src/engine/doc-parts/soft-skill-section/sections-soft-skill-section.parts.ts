import { Paragraph, TextRun } from 'docx';
import { generateLineSpacer } from '@/common-app';
import { SoftSkillVM } from './soft-skill-section.vm';

export const titleSoftSkillSection = () => {
  return new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Soft Skills/', size: '18pt' }),
      new TextRun({
        text: 'Nivel',
        size: '18pt',
        bold: true,
      }),
    ],
  });
};

const skillSoftSkillSection = (skillVM: SoftSkillVM) =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: skillVM?.skill?.name + (skillVM?.skill?.description ? ': ' : ''), size: '12pt', bold: true }),
      new TextRun({
        text: skillVM?.skill?.description ? skillVM?.skill?.description : '',
        size: '12pt',
      }),
    ],
  });

const levelSoftSkillSection = (skillVM: SoftSkillVM) =>
  new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({
        text: 'Nivel: ',
        size: '12pt',
        bold: true,
      }),
      new TextRun({ text: skillVM?.level, size: '12pt' }),
    ],
  });

export const sectionSoftSkillSection = (skillVM: SoftSkillVM) => {
  let softSkillSection: Paragraph[] = [];

  if (skillVM?.skill?.name) {
    softSkillSection = [...softSkillSection, skillSoftSkillSection(skillVM)];
  }

  if (skillVM?.level) {
    softSkillSection = [...softSkillSection, levelSoftSkillSection(skillVM)];
  }

  return [...softSkillSection, generateLineSpacer()];
};
