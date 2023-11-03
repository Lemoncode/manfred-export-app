import { ColorTheme, ExportHTMLSettings, Settings, HexColor } from '@/model';

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

export const mapExportHTMLSettingsToSettings = (exportHTMLSettings: ExportHTMLSettings): Settings => ({
  colorTheme: mapColorThemeToHex(exportHTMLSettings.colorTheme),
  template: exportHTMLSettings.template || 'default',
  language: exportHTMLSettings.language || 'es',
});
