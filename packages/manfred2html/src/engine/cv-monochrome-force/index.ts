import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateProfileSection,
  generateFooterSection,
  generateMainElementStart,
  generateMainElementEnd,
  generateAboutMeSection,
  generateRelevantsLinksSection,
  generateLanguageSection,
} from './html-parts';

export const exportManfredJSonToCVMonochromeForceHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  settings: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(manfredJsonContent, settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const profileSection = generateProfileSection(manfredJsonContent);
  const footerSection = generateFooterSection();
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent, settings);
  const aboutMeSection = generateAboutMeSection(manfredJsonContent, settings);
  const languageSection = generateLanguageSection(manfredJsonContent, settings);

  return `
    ${htmlDocumentStart}
      ${headerElementStart}
        ${profileSection}
      ${headerElementEnd}
      ${mainElementStart}
        ${relevantsLinksSection}
        ${aboutMeSection}
        ${languageSection}
      ${mainElementEnd}
      ${footerSection}
    ${htmlDocumentEnd}
  `;
};
