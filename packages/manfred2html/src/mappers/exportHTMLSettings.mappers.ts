import markdownit from 'markdown-it';
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

export const mapMarkdownToHTML = (md: string): string => {
  const mdParser = markdownit({
    html: false, // Evita el procesamiento de etiquetas HTML
    allowedTags: [], // Evita el procesamiento de etiquetas HTML
    breaks: true,
    xhtmlOut: true,
    linkify: false,
    typographer: false,
    quotes: '“”‘’',
    highlight: (str: string, lang: string) => {
      return '';
    },
  });

  return mdParser.render(md);
};
