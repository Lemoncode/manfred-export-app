import { ManfredAwesomicCV, ExportHTMLSettings } from '@/model';
import { mapExportHTMLSettingsToSettings, mapExportHTMLJediSettingsToSettings } from '@/mappers';
import { exportManfredJSonToCVSithEleganceHTML } from './cv-sith-elegance';
import { exportManfredJSonToCVGalacticCleanTechHTML } from './cv-galactic-cleantech';
import { exportManfredJSonToCVJediMinimalismHTML } from './cv-jedi-minimalism';
import { exportManfredJSonToCVJediMinimalismHTML } from './cv-jedi-minimalism';

export const exportHTMLTemplate = (
  manfredJsonContent: ManfredAwesomicCV,
  exportHTMLSettings: ExportHTMLSettings
): string => {
  const settings = mapExportHTMLSettingsToSettings(exportHTMLSettings);
  const Jedisettings = mapExportHTMLJediSettingsToSettings(exportHTMLSettings);

  switch (settings.template) {
    case 'Sith Elegance':
      return exportManfredJSonToCVSithEleganceHTML(manfredJsonContent, settings);
    case 'Galactic CleanTech':
      return exportManfredJSonToCVGalacticCleanTechHTML(manfredJsonContent, settings);
    case 'Jedi minimalism':
      return exportManfredJSonToCVJediMinimalismHTML(manfredJsonContent, settings);
    default:
      throw new Error('Template not found');
  }
};
