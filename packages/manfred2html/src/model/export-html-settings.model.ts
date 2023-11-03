export type ColorTheme = 'default' | 'red' | 'green' | 'orange' | 'yellow' | 'dark';
export type template = 'default' | 'template-1' | 'template-2';
export type language = 'es' | 'en';
export enum HexColor {
  default = '#247A7E',
  red = '#E61934',
  green = '#1DB155',
  orange = '#CD562F',
  yellow = '#DEBC19',
  dark = '#1B2B33',
}

export interface ExportHTMLSettings {
  colorTheme: ColorTheme;
  template: template;
  language: language;
}

export interface Settings {
  colorTheme: HexColor;
  template: template;
  language: language;
}

export const createDefaultExportHTMLSettings = (): ExportHTMLSettings => ({
  colorTheme: 'default',
  template: 'default',
  language: 'es',
});
