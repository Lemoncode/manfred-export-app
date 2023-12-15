import { ManfredAwesomicCV, JediSettings } from '@/model';
import {
  generateJediHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateHeaderSection,
} from './html-parts';

export const exportManfredJSonToCVJediMinimalismHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  JediSettings: JediSettings
): string => {
  const htmlDocumentStart = generateJediHtmlDocumentStart(JediSettings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);

  return `
      ${htmlDocumentStart}        
        ${headerElementStart}
        ${headerSection}
        ${headerElementEnd}        
      ${htmlDocumentEnd}
    `;
};
