export type ColorTheme = 'default' | 'red' | 'green' | 'orange' | 'yellow' | 'dark';

export type TemplateCV =
  | 'Sith Elegance'
  | 'Galactic CleanTech'
  | 'Monochrome Force'
  | 'X-Wing Squadron'
  | 'Jedi minimalism'
  | 'GalacticTech Innovations';

export type Language = 'es' | 'en';

export enum HexCommonColor {
  default = '#247A7E',
  red = '#E61934',
  green = '#1DB155',
  orange = '#CD562F',
  yellow = '#DEBC19',
  dark = '#1B2B33',
}

export enum HexJediMinimalismColor {
  default = '#11383A',
  red = '#6A0B18',
  green = '#0D5127',
  orange = '#5F2816',
  yellow = '#66570C',
  dark = '#0D1418',
}

export type HexColor = HexCommonColor | HexJediMinimalismColor;

export interface ExportHTMLSettings {
  colorTheme: ColorTheme;
  template: TemplateCV;
  language: Language;
}

export interface Settings {
  colorTheme: HexColor;
  template: TemplateCV;
  language: Language;
}

export const createDefaultExportHTMLSettings = (): ExportHTMLSettings => ({
  colorTheme: 'default',
  template: 'Sith Elegance',
  language: 'es',
});
