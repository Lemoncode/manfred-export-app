import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateProfileSection,
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

  return `
    ${htmlDocumentStart}
      ${headerElementStart}
        ${profileSection}
      ${headerElementEnd}
    ${htmlDocumentEnd}
  `;
};
