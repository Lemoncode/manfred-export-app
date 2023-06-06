import { Document, Packer, IRunOptions, SectionType, ISectionOptions } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { download } from './engine.helpers';
import { removeInvalidChars } from './json-parse.business';
import { generateExperienceSection, generateProfileSection } from './doc-parts';

const createMetaDocument = (cv: ManfredAwesomicCV): Document =>
  new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Inter',
          },
        },
      },
    },
    sections: generateSections(cv),
  });

const generateSections = (cv: ManfredAwesomicCV): ISectionOptions[] => {
  const sections: ISectionOptions[] = [];

  sections.push({
    properties: { type: SectionType.CONTINUOUS },
    children: [generateProfileSection(cv)],
  });

  if (cv.experience?.jobs && cv.experience.jobs.length > 0) {
    sections.push({
      properties: { type: SectionType.CONTINUOUS },
      children: [generateExperienceSection(cv)],
    });
  }

  return sections;
};

//!
// const mapLanguageCV = (cv: ManfredAwesomicCV): LanguageSectionVM[] => {
//   // Implementación de la función mapLanguageCV
//   const section: LanguageSectionVM[] = [];

//    section.push({
//      properties: { type: SectionType.CONTINUOUS },
//      children: [generateProfileSection(cv)],
//    });

//     return section;

// };

export const parseStringToManfredJSon = (manfredJsonContent: string): ManfredAwesomicCV => {
  const cleanedContent = removeInvalidChars(manfredJsonContent);
  return JSON.parse(cleanedContent);
};

export const exportManfredJSonToWordAndDownload = async (filename: string, manfredJsonContent: ManfredAwesomicCV) => {
  const doc = createMetaDocument(manfredJsonContent);
  const blob = await Packer.toBlob(doc);
  download(blob, filename);
};
