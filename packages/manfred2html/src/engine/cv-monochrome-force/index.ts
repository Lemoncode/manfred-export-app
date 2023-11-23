import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
} from './html-parts';

export const exportManfredJSonToCVMonochromeForceHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  settings: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const HeaderElementStart = generateHeaderElementStart();
  const HeaderElementEnd = generateHeaderElementEnd();
  return `
    ${htmlDocumentStart}
      ${HeaderElementStart}
      ${HeaderElementEnd}
    ${htmlDocumentEnd}
  `;
};
