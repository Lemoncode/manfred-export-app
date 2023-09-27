import { ManfredAwesomicCV } from '@/model';

import { exportManfredJSonToHTMLTemplateA } from './template-a';
import { exportManfredJSonToHTMLTemplateB } from './template-b';

export const exportManfredJSonToHTML = (manfredJsonContent: ManfredAwesomicCV, settings?: Settings): string => {
  const template = settings?.template || 'template-a';

  switch (template) {
    case 'template-a':
      return exportManfredJSonToHTMLTemplateA(manfredJsonContent, settings);
    case 'template-b':
      return exportManfredJSonToHTMLTemplateB(manfredJsonContent, settings);
    default:
      throw new Error('Template not found');
  }
};
