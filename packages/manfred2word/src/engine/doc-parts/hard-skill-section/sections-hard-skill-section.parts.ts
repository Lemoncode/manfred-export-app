import { Paragraph, TextRun } from 'docx';
import { HardSkillVM } from './hard-skill-section.vm';
import { generateLineSpacer } from '@/common-app';

export const renderTitleHardSkillSection = () => {
  return new Paragraph({
    spacing: { before: 200 },
    children: [
      new TextRun({ text: 'Hard Skills/', size: '18pt' }),
      new TextRun({
        text: 'Nivel',
        size: '18pt',
        bold: true,
      }),
    ],
  });
};

const hardSoftSkillSection = (skillVM: HardSkillVM) =>
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

const levelHardSkillSection = (skillVM: HardSkillVM) =>
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

export const renderSectionHardSkillSection = (skillVM: HardSkillVM) => {
  let hardSkillSection: Paragraph[] = [];

  if (skillVM?.skill?.name) {
    hardSkillSection = [...hardSkillSection, hardSoftSkillSection(skillVM)];
  }

  if (skillVM?.level) {
    hardSkillSection = [...hardSkillSection, levelHardSkillSection(skillVM)];
  }

  return [...hardSkillSection, generateLineSpacer()];
};
