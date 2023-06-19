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

export const generateSoftSkillSectionInner = (softSkillSctionVm: SoftSkillVM[]): Table => {
  if (Array.isArray(softSkillSctionVm) && softSkillSctionVm.length >= 1) {
    return new Table({
      ...styles.table,
      rows: generateSectionSoftSkillFromVmToRows(softSkillSctionVm),
    });
  } else {
    return new Table({
      rows: [],
    });
  }
};

export const generateSectionSoftSkillFromVmToRows = (sectionSoftSkillVm: SoftSkillVM[]): TableRow[] => {
  const softSkill = sectionSoftSkillVm.map(
    (softSkill: SoftSkillVM) =>
      new TableRow({
        children: [
          new TableCell({
            ...styles.table,
            children: [sectionSoftSkillSection(softSkill)],
          }),
        ],
      })
  );

  const title = new TableRow({
    children: [
      new TableCell({
        children: [titleSoftSkillSection()],
      }),
    ],
  });

  return [title, ...softSkill];
};
