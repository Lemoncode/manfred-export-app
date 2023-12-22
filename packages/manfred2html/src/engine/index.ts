import { ManfredAwesomicCV, ExportHTMLSettings } from '@/model';
import { mapExportHTMLSettingsToSettings } from '@/mappers';
import { exportManfredJSonToCVSithEleganceHTML } from './cv-sith-elegance';
import { exportManfredJSonToCVGalacticCleanTechHTML } from './cv-galactic-cleantech';
import { exportManfredJsonToCVXWingHTML } from './cv-x-wing-squadron';

import { exportManfredJSonToCVMonochromeForceHTML } from './cv-monochrome-force';
export const exportHTMLTemplate = (
  manfredJsonContent: ManfredAwesomicCV,
  exportHTMLSettings: ExportHTMLSettings
): string => {
  const settings = mapExportHTMLSettingsToSettings(exportHTMLSettings);

  switch (settings.template) {
    case 'Sith Elegance':
      return exportManfredJSonToCVSithEleganceHTML(manfredJsonContent, settings);
    case 'Galactic CleanTech':
      return exportManfredJSonToCVGalacticCleanTechHTML(manfredJsonContent, settings);
    case 'X-Wing Squadron':
      return exportManfredJsonToCVXWingHTML(manfredJsonContent, settings);
    case 'Monochrome Force':
      return exportManfredJSonToCVMonochromeForceHTML(manfredJsonContent, settings);
    default:
      throw new Error('Template not found');
  }
};
