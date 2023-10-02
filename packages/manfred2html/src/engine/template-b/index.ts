import { ManfredAwesomicCV } from '@/model';

export const exportManfredJSonToHTMLTemplateB = (manfredJsonContent: ManfredAwesomicCV, theme?: string): string => {
  return `
    ${htmlDocumentStart}
      
      ${asideElementStart}
      ${headerElementStart}
       
      ${headerElementEnd}
      ${asideElementEnd}
      ${mainElementStart}
        
      ${mainElementEnd}
    ${htmlDocumentEnd}
  `;
};
