import { ManfredAwesomicCV } from '@/model';
import { removeInvalidChars } from './json-parse.business';
import { generateExperiencieSection } from './md-parts/experience-section/experience-section.part';

// TODO: check whether to move to common manfred library
export const parseStringToManfredJSon = (manfredJsonContent: string): ManfredAwesomicCV => {
  const cleanedContent = removeInvalidChars(manfredJsonContent);
  return JSON.parse(cleanedContent);
};

// TODO: Check whether download should be included here
// maybe not, why? because maybe you just want to show it online
export const exportManfredJSonToMarkdown = (manfredJsonContent: ManfredAwesomicCV): string => {
  const experienceSection = generateExperiencieSection(manfredJsonContent);

  return `${experienceSection}`;
};
