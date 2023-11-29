import { ManfredAwesomicCV } from '@/model';
import { generateHtmlDocumentStart, generateHtmlDocumentEnd } from './html-parts';

export const exportManfredJsonToCVXWingHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const htmlDocumentStart = generateHtmlDocumentStart();
  const htmlDocumentEnd = generateHtmlDocumentEnd();

  return `
    ${htmlDocumentStart}
    ${htmlDocumentEnd}
  `;
};
