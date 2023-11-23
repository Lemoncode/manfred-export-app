import { ManfredAwesomicCV, Settings } from '@/model';
import { generateHtmlDocumentStart, generateHtmlDocumentEnd } from './html-parts';

export const exportManfredJSonToCVMonochromeForceHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  settings: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();

  return `
    ${htmlDocumentStart}
    ${htmlDocumentEnd}
  `;
};
