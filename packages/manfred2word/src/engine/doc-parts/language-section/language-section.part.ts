import { ManfredAwesomicCV } from '@/model';
import { LanguageVm } from './language-section.vm';
import { TableCell, TableRow, Table } from 'docx';
import { titleLanguageSection, sectionLanguageSection } from './sections-languages-section-parts';
import { styles } from './language-section.styles';
import { mapFromCvToLanguageVm } from './language-section.mapper';

export const generateLanguageSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromCvToLanguageVm(cv);

  return generateLanguageSectionInner(profileSectionVm);
};

const generateLanguageSectionInner = (experienceSectionVm: LanguageVm[]): Table => {
  if (Array.isArray(experienceSectionVm) && experienceSectionVm.length >= 1) {
    return new Table({
      ...styles.table,
      rows: generateSectionLanguageFromVmToRows(experienceSectionVm),
    });
  } else {
    return new Table({
      rows: [],
    });
  }
};

export const generateSectionLanguageFromVmToRows = (sectionLanguageVm: Array<LanguageVm>) => {
  let result = [];

  result = sectionLanguageVm.map(
    (language: LanguageVm) =>
      new TableRow({
        children: [
          new TableCell({
            ...styles.table,
            children: [sectionLanguageSection(language)],
          }),
        ],
      })
  );

  result.unshift(
    new TableRow({
      children: [
        new TableCell({
          children: [titleLanguageSection()],
        }),
      ],
    })
  );

  return result;
};
