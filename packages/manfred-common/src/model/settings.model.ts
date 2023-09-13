export type Theme  = "Gold" | "Eco" | "Serious";
export type Language = "en" | "es";

export interface Settings {
  theme?: Theme;
  language?: Language;
}
