import { ManfredAwesomicCV, Settings } from '@/model';
import {
  generateHtmlDocumentStart,
  generateHtmlDocumentEnd,
  generateHeaderElementStart,
  generateHeaderElementEnd,
  generateHeaderUser,
  generateHeaderAvatar,
} from './html-parts';

export const exportManfredJSonToCVMonochromeForceHTML = (
  manfredJsonContent: ManfredAwesomicCV,
  settings: Settings
): string => {
  const htmlDocumentStart = generateHtmlDocumentStart(manfredJsonContent, settings.colorTheme);
  const htmlDocumentEnd = generateHtmlDocumentEnd();
  const headerElementStart = generateHeaderElementStart();
  const headerElementEnd = generateHeaderElementEnd();
  const headerUser = generateHeaderUser(manfredJsonContent);
  const headerAvatar = generateHeaderAvatar(manfredJsonContent);

  return `
    ${htmlDocumentStart}
      ${headerElementStart}
        ${headerUser}
        ${headerAvatar}
      ${headerElementEnd}
    ${htmlDocumentEnd}
  `;
};
