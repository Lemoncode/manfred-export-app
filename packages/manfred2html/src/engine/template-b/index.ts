import { ManfredAwesomicCV } from '@/model';

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
} from './html-parts';

export const exportManfredJSonToHTMLTemplateB = (manfredJsonContent: ManfredAwesomicCV, theme?: string): string => {
  const htmlDocumentStart = generateHtmlDocumentStart();
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent);
  const hardSkillsSection = generateHardSkillsSection(manfredJsonContent);
  const softSkillsSection = generateSoftSkillsSection(manfredJsonContent);
  const languageSection = generateLanguageSection(manfredJsonContent);
  const asideElementStart = generateAsideElementStart();
  const asideElementEnd = generateAsideElementEnd();
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();

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
