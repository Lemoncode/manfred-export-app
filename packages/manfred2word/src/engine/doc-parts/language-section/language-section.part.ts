import { ManfredAwesomicCV } from '@/model';
import { LanguageVm, mapFromCvToLanguageVm } from '@lemoncode/manfred-common/language-section';
import { TableCell, TableRow, Table } from 'docx';
import { titleLanguageSection, sectionLanguageSection } from './sections-languages-section-parts';
import { styles } from './language-section.styles';

export const generateLanguageSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromCvToLanguageVm(cv);

  return generateLanguageSectionInner(profileSectionVm);
};

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[]): Table =>
  new Table({
    ...styles.table,
    rows: [generateTitleStudies(), ...languageSectionList(languageSectionVm)],
  });

const generateTitleStudies = (): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        children: [titleLanguageSection()],
      }),
    ],
  });

const languageSectionList = (languageSectionVm: LanguageVm[]): TableRow[] =>
  Boolean(languageSectionVm) ? languageSectionVm.map(languageVm => languageSection(languageVm)) : [];

const languageSection = (languageVm: LanguageVm) =>
  new TableRow({
    children: [
      new TableCell({
        ...styles.table,
        children: sectionLanguageSection(languageVm),
      }),
    ],
  });
