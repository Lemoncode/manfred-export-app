export type ColorTheme = 'default' | 'red' | 'green' | 'orange' | 'yellow' | 'dark';
export type TemplateCV =
  | 'Moderno elegante'
  | 'Limpio y organizado'
  | 'Clásico'
  | 'Minimalista'
  | 'Artístico'
  | 'Tecnológico'
  | 'Creativo'
  | 'Profesional'
  | 'Elegante';
export type Language = 'es' | 'en';
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
  template: 'Moderno elegante',
  language: 'es',
});
