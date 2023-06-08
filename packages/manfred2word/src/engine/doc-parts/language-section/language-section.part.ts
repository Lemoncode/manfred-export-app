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

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[]): Table => {
  if (Array.isArray(languageSectionVm) && languageSectionVm.length >= 1) {
    return new Table({
      ...styles.table,
      rows: generateSectionLanguageFromVmToRows(languageSectionVm),
    });
  } else {
    return new Table({
      rows: [],
    });
  }
};

export const generateSectionLanguageFromVmToRows = (sectionLanguageVm: LanguageVm[]) => {
  const language = sectionLanguageVm.map(
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

  const title = new TableRow({
    children: [
      new TableCell({
        children: [titleLanguageSection()],
      }),
    ],
  });

  return [title, ...language];
};
