import { Document, Packer, IRunOptions, SectionType, ISectionOptions } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { download } from './engine.helpers';
import { removeInvalidChars } from './json-parse.business';
import {
  generateExperienceSection,
  generateLanguageSection,
  generateProfileSection,
  generateSoftSkillSection,
} from './doc-parts';
import { generateStudiesSection } from './doc-parts/studies-section';

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
  if (cv?.knowledge?.studies && cv?.knowledge?.studies.length > 0) {
    sections.push({
      properties: { type: SectionType.CONTINUOUS },
      children: [generateStudiesSection(cv)],
    });
  }

  if (cv?.knowledge?.languages && cv?.knowledge?.languages.length > 0) {
    sections.push({
      properties: { type: SectionType.CONTINUOUS },
      children: [generateLanguageSection(cv)],
    });
  }

  if (cv?.knowledge?.softSkills && cv?.knowledge?.softSkills.length > 0) {
    sections.push({
      properties: { type: SectionType.CONTINUOUS },
      children: [generateSoftSkillSection(cv)],
    });
  }

  return sections;
};
export const parseStringToManfredJSon = (manfredJsonContent: string): ManfredAwesomicCV => {
  const cleanedContent = removeInvalidChars(manfredJsonContent);
  return JSON.parse(cleanedContent);
};

export const exportManfredJSonToWordAndDownload = async (filename: string, manfredJsonContent: ManfredAwesomicCV) => {
  const doc = createMetaDocument(manfredJsonContent);
  const blob = await Packer.toBlob(doc);
  download(blob, filename);
};
