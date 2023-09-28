import { ManfredAwesomicCV } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateHeaderSection,
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

export const exportManfredJSonToHTMLTemplateB = (
  manfredJsonContent: ManfredAwesomicCV,
  settings?: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart();
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);
  const asideElementStart = generateAsideElementStart();
  const asideElementEnd = generateAsideElementEnd();
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent);
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();
  const languageSection = generateLanguageSection(manfredJsonContent);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent);
  const experienceSection = generateExperiencesSection(manfredJsonContent);
  const studiesSection = generateStudiesSection(manfredJsonContent);

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
        
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
