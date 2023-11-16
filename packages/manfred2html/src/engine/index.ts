import { ManfredAwesomicCV, ExportHTMLSettings } from '@/model';
import { mapExportHTMLSettingsToSettings } from '@/mappers';
import { exportManfredJSonToCVModernoHTML } from './cv-moderno';
import { exportManfredJSonToCVLimpioHTML } from './cv-limpio-organizado';

export const exportHTMLTemplate = (
  manfredJsonContent: ManfredAwesomicCV,
  exportHTMLSettings: ExportHTMLSettings
): string => {
  const settings = mapExportHTMLSettingsToSettings(exportHTMLSettings);

  switch (settings.template) {
    case 'Moderno elegante':
      return exportManfredJSonToCVModernoHTML(manfredJsonContent, settings);
    case 'Limpio y organizado':
      return exportManfredJSonToCVLimpioHTML(manfredJsonContent, settings);
    default:
      throw new Error('Template not found');
  }
};
