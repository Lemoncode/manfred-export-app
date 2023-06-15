export interface LanguageVm {
  name: string;
  level?: string;
}

export type LanguageType = {
  iso: string;
  name: string;
};

export type LevelLanguageType = {
  level: string;
  spanish: string;
};

export type Level =
  | 'Elementary proficiency'
  | 'Limited working proficiency'
  | 'Professional working proficiency'
  | 'Full professional proficiency'
  | 'Native or bilingual proficiency';
