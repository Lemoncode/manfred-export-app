import { ManfredAwesomicCV } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateAboutMeSection,
  generateAsideElementStart,
  generateAsideElementEnd,
  generateRelevantsLinksSection,
  generateLanguageSection,
  generateHardSkillsSection,
  generateSoftSkillsSection,
  generateMainElementStart,
  generateMainElementEnd,
} from './html-parts';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const htmlDocumentStart = generateHtmlDocumentStart();
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent);
  const asideElementStart = generateAsideElementStart();
  const asideElementEnd = generateAsideElementEnd();
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent);
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();
  const languageSection = generateLanguageSection(manfredJsonContent);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent);

  return `
    ${htmlDocumentStart}
      ${headerElementStart}
        ${aboutMeSection}
      ${headerElementEnd}
      ${asideElementStart}
        ${relevantsLinksSection}
        ${languageSection}
        ${hardSkillsSection}
        ${softSkillsSection}
      ${asideElementEnd}
      ${mainElementStart}
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
