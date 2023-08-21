import { ManfredAwesomicCV } from '@/model';
import { generateInitialHTMLContent, generateFinalHTMLContent } from './html-parts';
import { generateProfileSection } from './html-parts/profile-section';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const initialHTMLContent = generateInitialHTMLContent();
  const finalHTMLContent = generateFinalHTMLContent();

  return `
    ${initialHTMLContent}
    ${finalHTMLContent}
    ${generateProfileSection(manfredJsonContent)}
  `;
};
