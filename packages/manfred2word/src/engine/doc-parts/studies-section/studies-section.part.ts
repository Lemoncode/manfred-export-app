import { Table, TableCell, TableRow } from 'docx';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ManfredAwesomicCV } from '@/model';
import { sectionStudiesSection, generateTitleStudiesSection } from './sections-studies-section.part';
import { styles } from './studies-section.styles';

export const generateStudiesSection = (cv: ManfredAwesomicCV): Table => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);

  return generateStudiesSectionInner(studiesSectionVm);
};

const generateStudiesSectionInner = (studiesSectionVm: StudiesSectionVm[]): Table =>
  new Table({
    ...styles.table,
    rows: [generateTitleStudies, ...studiesSectionList(studiesSectionVm)],
  });

const generateTitleStudies = new TableRow({
  children: [
    new TableCell({
      children: [generateTitleStudiesSection()],
    }),
  ],
});

const studiesSectionList = (studiesSectionVm: StudiesSectionVm[]): TableRow[] =>
  Boolean(studiesSectionVm) ? studiesSectionVm.map(studiesVm => studiesSection(studiesVm)) : [];

const studiesSection = (studiesVm: StudiesSectionVm): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        ...styles.table,
        children: sectionStudiesSection(studiesVm),
      }),
    ],
  });
