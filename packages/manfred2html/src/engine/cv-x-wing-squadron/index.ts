import { ManfredAwesomicCV, Settings } from '@/model';
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
  generateSoftSkillsSection,
  generateExperienceSection,
  generateStudiesSection,
  generateRelevantLinksSection,
} from './html-parts';

export const exportManfredJsonToCVXWingHTML = (manfredJsonContent: ManfredAwesomicCV, settings: Settings): string => {
  const htmlDocumentStart = generateHtmlDocumentStart();
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();
  const languageSection = generateLanguageSection(manfredJsonContent);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent);
  const experienceSection = generateExperienceSection(manfredJsonContent);
  const studiesSection = generateStudiesSection(manfredJsonContent);
  const relevantLinksSection = generateRelevantLinksSection(manfredJsonContent, settings);
  const aboutMeSection = generateAboutMeSection(manfredJsonContent);
  return `
    ${htmlDocumentStart}
      ${headerElementStart}
      ${headerSection}
        ${relevantLinksSection}
      ${headerElementEnd}
      ${mainElementStart}
        ${aboutMeSection}
        ${languageSection}
        ${hardSkillsSection}
        ${softSkillsSection}
        ${experienceSection}
        ${studiesSection}
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
