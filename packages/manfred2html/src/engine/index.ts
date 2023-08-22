import { ManfredAwesomicCV } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateAboutMeSection,
  generateAsideElementStart,
  generateAsideElementEnd,
  generateRelevantsLinksSection,
  generateMainElementStart,
  generateMainElementEnd,
} from './html-parts';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const htmlDocumentStart = generateHtmlDocumentStart();
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent);
  const asideElementStart = generateAsideElementStart();
  const asideElementEnd = generateAsideElementEnd();
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent);
  const mainElementStart = generateMainElementStart();
  const mainElementEnd = generateMainElementEnd();

  return `
    ${htmlDocumentStart}
      ${headerElementStart}
        ${aboutMeSection}
      ${headerElementEnd}
      ${asideElementStart}
        ${relevantsLinksSection}
      ${asideElementEnd}
      ${mainElementStart}
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
