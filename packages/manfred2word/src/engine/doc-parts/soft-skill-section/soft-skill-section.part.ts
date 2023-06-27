import { ManfredAwesomicCV } from '@/model';
import { TableCell, TableRow, Table } from 'docx';
import { titleSoftSkillSection, sectionSoftSkillSection } from './sections-soft-skill-section.parts';
import { SoftSkillVM } from './soft-skill-section.vm';
import { styles } from './soft-skill-section.styles';
import { mapFromCvToSoftSkillVm } from './soft-skill-section.mapper';

export const generateSoftSkillSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromCvToSoftSkillVm(cv);

  return generateSoftSkillSectionInner(profileSectionVm);
};

export const generateSoftSkillSectionInner = (softSkillSctionVm: SoftSkillVM[]): Table =>
  new Table({
    ...styles.table,
    rows: [generateTitleSoftSkill(), ...generateSectionSoftSkillFromVmToRows(softSkillSctionVm)],
  });

const generateTitleSoftSkill = (): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        children: [titleSoftSkillSection()],
      }),
    ],
  });

const generateSectionSoftSkillFromVmToRows = (softSkillSectionVm: SoftSkillVM[]): TableRow[] =>
  Boolean(softSkillSectionVm) ? softSkillSectionVm.map(softSkillVm => softSkillsSection(softSkillVm)) : [];

const softSkillsSection = (sectionSoftSkillVm: SoftSkillVM): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        ...styles.table,
        children: sectionSoftSkillSection(sectionSoftSkillVm),
      }),
    ],
  });
