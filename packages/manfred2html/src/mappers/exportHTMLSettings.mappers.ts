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
    breaks: true,
    xhtmlOut: true,
    linkify: false,
    typographer: false,
  })
    .enable(['paragraph', 'strong', 'cursive', 'link', 'list'], true)
    .disable(['image', 'table', 'code', 'heading'], true);

  return mdParser.render(md);
};
