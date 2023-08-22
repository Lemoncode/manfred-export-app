import { ManfredAwesomicCV } from '@/model';
import {
  generateInitialHTML,
  generateEndHTML,
  generateInitialHeaderHTML,
  generateEndHeaderHTML,
  generateAboutMeSection,
} from './html-parts';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const initialHtml = generateInitialHTML();
  const endHtml = generateEndHTML();
  const initialHeaderHtml = generateInitialHeaderHTML();
  const endHeaderHtml = generateEndHeaderHTML();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent);

  return `
    ${initialHtml}
      ${initialHeaderHtml}
        ${aboutMeSection}
      ${endHeaderHtml}
    ${endHtml}
  `;
};
