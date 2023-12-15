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
  const aboutMeSection = generateAboutMeSection(manfredJsonContent, settings);
  const mainElementEnd = generateMainElementEnd();
  const studiesSection = generateStudiesSection(manfredJsonContent, settings);
  const experienceSection = generateExperienceSection(manfredJsonContent, settings);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent, settings);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent, settings);
  const languageSection = generateLanguageSection(manfredJsonContent, settings);
  const relevantLinksSection = generateRelevantLinksSection(manfredJsonContent);
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
