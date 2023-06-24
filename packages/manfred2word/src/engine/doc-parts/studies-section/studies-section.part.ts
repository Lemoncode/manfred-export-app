import { StudiesSectionVm } from './studies-section.vm';
import { Table, TableCell, TableRow } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { mapFromMacCvToStudiesSectionVm } from './studies-section.mapper';
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
  studiesSectionVm.map(studiesVm => studiesSection(studiesVm));

const studiesSection = (studiesVm: StudiesSectionVm): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        ...styles.table,
        children: sectionStudiesSection(studiesVm),
      }),
    ],
  });
