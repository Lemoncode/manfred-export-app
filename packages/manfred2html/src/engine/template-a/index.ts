import { ManfredAwesomicCV, Settings } from '@/model';
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
  generateExperiencesSection,
  generateStudiesSection,
} from './html-parts';

export const exportManfredJSonToHTMLTemplateA = (manfredJsonContent: ManfredAwesomicCV, settings: Settings): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent, settings);
  const asideElementStart = generateAsideElementStart();
  const asideElementEnd = generateAsideElementEnd();
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent, settings);
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();
  const languageSection = generateLanguageSection(manfredJsonContent, settings);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent, settings);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent, settings);
  const experienceSection = generateExperiencesSection(manfredJsonContent, settings);
  const studiesSection = generateStudiesSection(manfredJsonContent, settings);

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
        ${experienceSection}
        ${studiesSection}
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
