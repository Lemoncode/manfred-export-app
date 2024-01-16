import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateLeftDivElementStart,
  generateLeftDivElementEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateHeaderSection,
  generateRightDivElementStart,
  generateRightDivElementEnd,
} from './html-parts';

export const exportManfredJSonToCVJediMinimalismHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  settings: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerSection = generateHeaderSection(manfredJsonContent);
  const leftSideStart = generateLeftDivElementStart();
  const leftSideEnd = generateLeftDivElementEnd();
  const rightSideStart = generateRightDivElementStart();
  const rightSideEnd = generateRightDivElementEnd();

  return `
    ${htmlDocumentStart}
      ${leftSideStart}
        ${headerElementStart}
          ${headerSection}
        ${headerElementEnd}             
      ${leftSideEnd}
      ${rightSideStart}      
      ${rightSideEnd}
    ${htmlDocumentEnd}
  `;
};
