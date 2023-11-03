import { ManfredAwesomicCV, ExportHTMLSettings } from '@/model';
import { mapExportHTMLSettingsToSettings } from '@/mappers';
import { exportManfredJSonToHTMLTemplateA } from './template-a';
import { exportManfredJSonToHTMLTemplateB } from './template-b';

export const exportHTMLTemplate = (
  manfredJsonContent: ManfredAwesomicCV,
  exportHTMLSettings: ExportHTMLSettings
): string => {
  const settings = mapExportHTMLSettingsToSettings(exportHTMLSettings);

  switch (settings.template) {
    case 'default':
      return exportManfredJSonToHTMLTemplateA(manfredJsonContent, settings);
    case 'CV-1':
      return exportManfredJSonToHTMLTemplateB(manfredJsonContent, settings);
    default:
      throw new Error('Template not found');
  }
};
