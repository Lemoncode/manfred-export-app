import { ManfredAwesomicCV } from '@/model';

import { exportManfredJSonToHTMLTemplateA } from './template-a';
import { exportManfredJSonToHTMLTemplateB } from './template-b';

export const exportHTMLTemplate = (manfredJsonContent: ManfredAwesomicCV, theme?: string): string => {
  const template = theme || 'template-a';

  switch (template) {
    case 'template-a':
      return exportManfredJSonToHTMLTemplateA(manfredJsonContent, theme);
    case 'template-b':
      return exportManfredJSonToHTMLTemplateB(manfredJsonContent, theme);
    default:
      throw new Error('Template not found');
  }
};
