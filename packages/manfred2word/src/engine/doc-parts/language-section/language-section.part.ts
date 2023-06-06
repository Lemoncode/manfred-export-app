import { ManfredAwesomicCV } from '@/model';
import { LanguageSectionVm, LanguageVM } from './language-section.vm';
import { TableCell, TableRow } from 'docx';
import { titleLanguageSection } from './sections-languages-section-parts';
import { styles } from './language-section.styles';

export const mapLanguageCV = (cv: ManfredAwesomicCV): LanguageSectionVm[] => {
  return mapLanguageListCV(cv);
};

export const mapLanguageListCV = (cv: ManfredAwesomicCV): any => {
  cv.knowledge?.languages?.map(item => {
    return {
      name: item.name,
      level: item.level,
    };
  }) || [];
};

// export const generateSectionLanguageFromVmToRows = (sectionLanguageSection: Array<LanguageVM>) => {
//   let result = [];

//   result = sectionLanguageSection.map(
//     (language: LanguageVM) =>
//       new TableRow({
//         children: [
//           new TableCell({
//             ...styles.table,
//             children: [sectionLanguageSection(language)],
//           }),
//         ],
//       })
//   );

//   result.unshift(
//     new TableRow({
//       children: [
//         new TableCell({
//           children: [titleLanguageSection()],
//         }),
//       ],
//     })
//   );

//   return result;
// };
