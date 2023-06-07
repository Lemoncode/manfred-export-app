import { ManfredAwesomicCV } from '@/model';
import { LanguageVm } from './language-section.vm';
import { TableCell, TableRow, Table } from 'docx';
import { titleLanguageSection, sectionLanguageSection } from './sections-languages-section-parts';
import { styles } from './language-section.styles';
import { mapFromCvToLanguageVm } from './language-section.mapper';

export const generateLanguageSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromCvToLanguageVm(cv);
  console.log('console 1');
  console.log('profileSectionVm', profileSectionVm);
  return generateLanguageSectionInner(profileSectionVm);
};

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[]): Table => {
  console.log('console 1.2');
  console.log('languageSectionVm', languageSectionVm);
  if (Array.isArray(languageSectionVm) && languageSectionVm.length >= 1) {
    return new Table({
      ...styles.table,
      rows: generateSectionLanguageFromVmToRows(languageSectionVm),
    });
  } else {
    console.log('console 1.3');
    return new Table({
      rows: [],
    });
  }
};

export const generateSectionLanguageFromVmToRows = (sectionLanguageVm: Array<LanguageVm>) => {
  let result = [];
  console.log('console 2'); // no works

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

  console.log('console 2.1'); // no works
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
