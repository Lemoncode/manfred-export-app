import { TableCell, TableRow, Table } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { ExperienceVm } from './experience-section.vm';
import { mapFromMacCvToExperienceSectionVm } from './experience-section.mapper';
import { styles } from './experience-section.styles';
import { sectionExperienceSection, titleExperienceSection } from './sections-experience-section.parts';

export const generateExperienceSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  return generateExperienceSectionInner(profileSectionVm);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[]): Table => {
  if (Array.isArray(experienceSectionVm) && experienceSectionVm.length >= 1) {
    return new Table({
      ...styles.table,
      rows: generateSectionFromVmToRows(experienceSectionVm),
    });
  } else {
    return new Table({
      rows: [],
    });
  }
};

const generateSectionFromVmToRows = (experienceSectionVm: Array<ExperienceVm>) => {
  let result = [];

  result = experienceSectionVm.map(
    (experience: ExperienceVm) =>
      new TableRow({
        children: [
          new TableCell({
            ...styles.table,
            children: [sectionExperienceSection(experience)],
          }),
        ],
      })
  );

  result.unshift(
    new TableRow({
      children: [
        new TableCell({
          children: [titleExperienceSection()],
        }),
      ],
    })
  );

  return result;
};
