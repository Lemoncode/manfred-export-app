import { ManfredAwesomicCV } from '@/model';
import { generateInitialHTML, generateEndHTML } from './html-parts';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const initialHtml = generateInitialHTML();
  const endHtml = generateEndHTML();

  return `
    ${initialHtml}

    ${endHtml}
  `;
};
