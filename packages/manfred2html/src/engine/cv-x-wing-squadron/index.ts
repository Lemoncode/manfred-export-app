import { ManfredAwesomicCV } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementEnd,
  generateHeaderElementStart,
  generateHeaderSection,
  generateMainElementStart,
  generateAboutMeSection,
  generateMainElementEnd,
  generateLanguageSection,
  generateHardSkillsSection,
} from './html-parts';

export const exportManfredJsonToCVXWingHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const htmlDocumentStart = generateHtmlDocumentStart();
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);
  const mainElementStart = generateMainElementStart();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent);
  const mainElementEnd = generateMainElementEnd();
  const languageSection = generateLanguageSection(manfredJsonContent);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent);
  return `
    ${htmlDocumentStart}
      ${headerElementStart}
      ${headerSection}
      ${headerElementEnd}
      ${mainElementStart}
        ${aboutMeSection}
        ${languageSection}
        ${hardSkillsSection}
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
