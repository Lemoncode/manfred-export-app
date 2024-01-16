import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementEnd,
  generateHeaderElementStart,
  generateHeaderSectionStart,
  generateHeaderSectionEnd,
  generateAvatarSection,
  generateUserInfoSection,
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
  const headerElementStart = generateHeaderElementStart();
  const headerSectionStart = generateHeaderSectionStart();
  const headerSectionEnd = generateHeaderSectionEnd();
  const avatarSection = generateAvatarSection(manfredJsonContent);
  const userInfoSection = generateUserInfoSection(manfredJsonContent);
  const relevantLinksSection = generateRelevantLinksSection(manfredJsonContent);
  const headerElementEnd = generateHeaderElementEnd();
  const mainElementStart = generateMainElementStart();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent, settings);
  const languageSection = generateLanguageSection(manfredJsonContent, settings);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent, settings);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent, settings);
  const experienceSection = generateExperienceSection(manfredJsonContent, settings);
  const studiesSection = generateStudiesSection(manfredJsonContent, settings);
  const mainElementEnd = generateMainElementEnd();
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  return `
    ${htmlDocumentStart}
      ${headerElementStart}
        ${avatarSection}
        ${headerSectionStart}
          ${userInfoSection}
          ${relevantLinksSection}
        ${headerSectionEnd}
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
