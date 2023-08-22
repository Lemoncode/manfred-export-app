import { ManfredAwesomicCV } from '@/model';
import { generateHTMLRootTemplate } from './html-parts';
import { generateProfileSection } from './html-parts/profile-section';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV): string => {
  const profileSection = generateProfileSection(manfredJsonContent);
  const content = generateHTMLRootTemplate(profileSection + `<div>hola</div>`);

  return `
    ${content}
  `;
};
