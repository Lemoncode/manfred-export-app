import { ColorTheme, ExportHTMLSettings, Settings, HexColor, HexColorJedi, JediSettings } from '@/model';

export const mapColorThemeToHex = (colorTheme: ColorTheme): HexColor => {
  switch (colorTheme) {
    case 'default':
      return HexColor.default;
    case 'red':
      return HexColor.red;
    case 'green':
      return HexColor.green;
    case 'orange':
      return HexColor.orange;
    case 'yellow':
      return HexColor.yellow;
    case 'dark':
      return HexColor.dark;
    default:
      return HexColor.default;
  }
};

export const mapJediColorThemeToHex = (colorTheme: ColorTheme): HexColorJedi => {
  switch (colorTheme) {
    case 'default':
      return HexColorJedi.default;
    case 'red':
      return HexColorJedi.red;
    case 'green':
      return HexColorJedi.green;
    case 'orange':
      return HexColorJedi.orange;
    case 'yellow':
      return HexColorJedi.yellow;
    case 'dark':
      return HexColorJedi.dark;
    default:
      return HexColorJedi.default;
  }
};

export const mapExportHTMLSettingsToSettings = (exportHTMLSettings: ExportHTMLSettings): Settings => ({
  colorTheme: mapColorThemeToHex(exportHTMLSettings.colorTheme),
  template: exportHTMLSettings.template || 'default',
  language: exportHTMLSettings.language || 'es',
});

export const mapExportHTMLJediSettingsToSettings = (exportHTMLSettings: ExportHTMLSettings): JediSettings => ({
  colorTheme: mapJediColorThemeToHex(exportHTMLSettings.colorTheme),
  template: exportHTMLSettings.template || 'default',
  language: exportHTMLSettings.language || 'es',
});
