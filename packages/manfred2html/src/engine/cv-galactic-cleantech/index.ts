import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateHeaderSection,
  generateAsideElementStart,
  generateAsideElementEnd,
  generateMainElementStart,
  generateMainElementEnd,
  generateRelevantsLinksSection,
  generateLanguageSection,
  generateHardSkillsSection,
  generateSoftSkillsSection,
  generateAboutMeSection,
  generateExperiencesSection,
  generateStudiesSection,
} from './html-parts';

export const exportManfredJSonToCVGalacticCleanTechHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  settings: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent, settings);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent, settings);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent, settings);
  const languageSection = generateLanguageSection(manfredJsonContent, settings);
  const asideElementStart = generateAsideElementStart();
  const asideElementEnd = generateAsideElementEnd();
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent, settings);
  const experienceSection = generateExperiencesSection(manfredJsonContent, settings);
  const studiesSection = generateStudiesSection(manfredJsonContent, settings);
  return `
    ${htmlDocumentStart}
      ${asideElementStart}
      ${headerElementStart}
      ${headerSection}
      ${headerElementEnd}
      ${relevantsLinksSection}
      ${languageSection}
      ${hardSkillsSection}
      ${softSkillsSection}
      ${asideElementEnd}
      ${mainElementStart}
      ${aboutMeSection}
      ${experienceSection}
      ${studiesSection}
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
