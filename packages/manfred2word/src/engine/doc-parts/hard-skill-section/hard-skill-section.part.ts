import { TableCell, TableRow, Table } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM } from './hard-skill-section.vm';
import { mapFromCvToHardSkillVm } from './hard-skill-section.mapper';
import { styles } from './hard-skill-section.styles';
import { renderSectionHardSkillSection, renderTitleHardSkillSection } from './sections-hard-skill-section.parts';

export const generateHardSkillSection = (cv: ManfredAwesomicCV): Table => {
  const hardSkillVmArray = mapFromCvToHardSkillVm(cv);

  return generateHardSkillSectionInner(hardSkillVmArray);
};

const generateHardSkillSectionInner = (hardSkillVmArray: HardSkillVM[]): Table =>
  new Table({
    ...styles.table,
    rows: [generateTitleHardSkill(), ...generateSectionFromVmToRows(hardSkillVmArray)],
  });

const generateTitleHardSkill = (): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        children: [renderTitleHardSkillSection()],
      }),
    ],
  });

const generateSectionFromVmToRows = (hardSkillSectionVm: HardSkillVM[]): TableRow[] =>
  Boolean(hardSkillSectionVm) ? hardSkillSectionVm.map(softSkillVm => hardSkillsSection(softSkillVm)) : [];

const hardSkillsSection = (sectionSoftSkillVm: HardSkillVM): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        ...styles.table,
        children: renderSectionHardSkillSection(sectionSoftSkillVm),
      }),
    ],
  });
