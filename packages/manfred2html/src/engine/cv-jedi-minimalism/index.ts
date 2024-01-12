import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateLeftDivElementStart,
  generateLeftDivElementEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateHeaderSection,
  generateAsideElementStart,
  generateAsideElementEnd,
  generateContactSection,
  generateMainStart,
  generateMainEnd,
  generateAboutSection,
  generateLenguageSection,
  generateSkillsSection,
  generateStudiesSection,
  generateRightDivElementStart,
  generateRightDivElementEnd,
  generateExperienceSection,
} from './html-parts';

export const exportManfredJSonToCVJediMinimalismHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  settings: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);
  const leftSideStart = generateLeftDivElementStart();
  const leftSideEnd = generateLeftDivElementEnd();
  const asideElementStart = generateAsideElementStart();
  const asideElementEnd = generateAsideElementEnd();
  const contactSection = generateContactSection(manfredJsonContent);
  const mainElementStart = generateMainStart();
  const mainElementEnd = generateMainEnd();
  const aboutMeSection = generateAboutSection(manfredJsonContent, settings);
  const lenguageSection = generateLenguageSection(manfredJsonContent, settings);
  const skillsSection = generateSkillsSection(manfredJsonContent, settings);
  const studiesSection = generateStudiesSection(manfredJsonContent, settings);
  const rightSideStart = generateRightDivElementStart();
  const rightSideEnd = generateRightDivElementEnd();
  const experienceSection = generateExperienceSection(manfredJsonContent, settings);
  return `
    ${htmlDocumentStart}
      ${leftSideStart}
        ${headerElementStart}
          ${headerSection}
        ${headerElementEnd}
        ${asideElementStart}
          ${contactSection}
        ${asideElementEnd}
        ${mainElementStart}
          ${aboutMeSection}
          ${lenguageSection}
          ${skillsSection}
          ${studiesSection}
        ${mainElementEnd}        
      ${leftSideEnd}
      ${rightSideStart}
        ${experienceSection}
      ${rightSideEnd}
    ${htmlDocumentEnd}
  `;
};
