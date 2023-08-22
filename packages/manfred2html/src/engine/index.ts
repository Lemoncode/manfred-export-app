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
  const initialHtml = generateHtmlDocumentStart();
  const endHtml = generateHtmlDocumentEnd();
  const initialHeaderHtml = generateHeaderElementStart();
  const endHeaderHtml = generateHeaderElementEnd();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent);
  const initialAsideHtml = generateAsideElementStart();
  const endAsideHtml = generateAsideElementEnd();
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent);
  const mainInitialHtml = generateMainElementStart();
  const mainEndHtml = generateMainElementEnd();

  return `
    ${initialHtml}
      ${initialHeaderHtml}
        ${aboutMeSection}
      ${endHeaderHtml}
      ${initialAsideHtml}
        ${relevantsLinksSection}
      ${endAsideHtml}
      ${mainInitialHtml}
      ${mainEndHtml}
    ${endHtml}
  `;
};
