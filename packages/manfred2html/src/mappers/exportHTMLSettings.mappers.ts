import markdownit from 'markdown-it';
import { ColorTheme, ExportHTMLSettings, Settings, HexCommonColor, HexJediMinimalismColor } from '@/model';

export const mapCommonColorThemeToHex = (colorTheme: ColorTheme): HexCommonColor => {
  switch (colorTheme) {
    case 'default':
      return HexCommonColor.default;
    case 'red':
      return HexCommonColor.red;
    case 'green':
      return HexCommonColor.green;
    case 'orange':
      return HexCommonColor.orange;
    case 'yellow':
      return HexCommonColor.yellow;
    case 'dark':
      return HexCommonColor.dark;
    default:
      return HexCommonColor.default;
  }
};

export const mapJediColorThemeToHex = (colorTheme: ColorTheme): HexJediMinimalismColor => {
  switch (colorTheme) {
    case 'default':
      return HexJediMinimalismColor.default;
    case 'red':
      return HexJediMinimalismColor.red;
    case 'green':
      return HexJediMinimalismColor.green;
    case 'orange':
      return HexJediMinimalismColor.orange;
    case 'yellow':
      return HexJediMinimalismColor.yellow;
    case 'dark':
      return HexJediMinimalismColor.dark;
    default:
      return HexJediMinimalismColor.default;
  }
};

export const mapExportHTMLSettingsToSettings = (exportHTMLSettings: ExportHTMLSettings): Settings => ({
  colorTheme:
    exportHTMLSettings.template === 'Jedi minimalism'
      ? mapJediColorThemeToHex(exportHTMLSettings.colorTheme)
      : mapCommonColorThemeToHex(exportHTMLSettings.colorTheme),
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
