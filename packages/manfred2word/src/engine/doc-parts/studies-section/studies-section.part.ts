import { StudiesSectionVm } from './studies-section.vm';
import { Table, TableCell, TableRow } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { mapFromMacCvToStudiesSectionVm } from './studies-section.mapper';
import { sectionStudiesSection, titleStudiesSection } from './sections-studies-section.part';
import { styles } from './studies-section.styles';

export const generateStudiesSection = (cv: ManfredAwesomicCV): Table => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);
  return generateStudiesSectionInner(studiesSectionVm);
};

const generateStudiesSectionInner = (studiesSectionVm: StudiesSectionVm[]): Table => {
  if (Array.isArray(studiesSectionVm) && studiesSectionVm.length >= 1) {
    return new Table({
      ...styles.table,
      rows: generateStudiesSectionFromVmToRows(studiesSectionVm),
    });
  } else {
    return new Table({
      rows: [],
    });
  }
};

export const generateStudiesSectionFromVmToRows = (sectionStudiesVm: StudiesSectionVm[]) => {
  const study = sectionStudiesVm.map(
    (study: StudiesSectionVm) =>
      new TableRow({
        children: [
          new TableCell({
            ...styles.table,
            children: [sectionStudiesSection(study)],
          }),
        ],
      })
  );

  const title = new TableRow({
    children: [
      new TableCell({
        children: [titleStudiesSection()],
      }),
    ],
  });

  return [title, ...study];
};
