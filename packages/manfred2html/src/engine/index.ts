import { ManfredAwesomicCV } from '@/model';
import {
  generateInitialHTML,
  generateEndHTML,
  generateInitialHeaderHTML,
  generateEndHeaderHTML,
  generateAboutMeSection,
  generateInitialAsideHTML,
  generateEndAsideHTML,
  generateRelevantsLinksSection,
} from './html-parts';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const initialHtml = generateInitialHTML();
  const endHtml = generateEndHTML();
  const initialHeaderHtml = generateInitialHeaderHTML();
  const endHeaderHtml = generateEndHeaderHTML();
  const aboutMeSection = generateAboutMeSection(manfredJsonContent);
  const initialAsideHtml = generateInitialAsideHTML();
  const endAsideHtml = generateEndAsideHTML();
  const relevantsLinksSection = generateRelevantsLinksSection(manfredJsonContent);

  return `
    ${initialHtml}
      ${initialHeaderHtml}
        ${aboutMeSection}
      ${endHeaderHtml}
      ${initialAsideHtml}
        ${relevantsLinksSection}
      ${endAsideHtml}
    ${endHtml}
  `;
};
