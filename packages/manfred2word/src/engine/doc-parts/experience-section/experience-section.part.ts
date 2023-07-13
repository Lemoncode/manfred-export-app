import { TableCell, TableRow, Table } from 'docx';
import { ManfredAwesomicCV } from '@/model';

import { ExperienceVm, mapFromMacCvToExperienceSectionVm } from '@lemoncode/manfred-common/experience-section';

//import { ExperienceVm } from './experience-section.vm';
//import { mapFromMacCvToExperienceSectionVm } from './experience-section.mapper';
import { styles } from './experience-section.styles';
import { sectionExperienceSection, generateTitleExperienceSection } from './sections-experience-section.parts';

export const generateExperienceSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  return generateExperienceSectionInner(profileSectionVm);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[]): Table =>
  new Table({
    ...styles.table,
    rows: [generateTitleExperience(), ...experienceSectionList(experienceSectionVm)],
  });

const generateTitleExperience = (): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        children: [generateTitleExperienceSection()],
      }),
    ],
  });

const experienceSectionList = (experienceSectionVm: ExperienceVm[]): TableRow[] =>
  Boolean(experienceSectionVm) ? experienceSectionVm.map(experienceVm => experienceSection(experienceVm)) : [];

const experienceSection = (experienceVm: ExperienceVm): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        ...styles.table,
        children: sectionExperienceSection(experienceVm),
      }),
    ],
  });
