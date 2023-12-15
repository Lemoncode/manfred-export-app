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
  const languageSection = generateLanguageSection(manfredJsonContent, settings);
  return `
    ${htmlDocumentStart}
      ${headerElementStart}
      ${headerSection}
      ${headerElementEnd}
      ${mainElementStart}
        ${aboutMeSection}
        ${languageSection}
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
