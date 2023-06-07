import { LanguageType, LevelLanguageType } from './language-section.vm';

export const languageList: LanguageType[] = [
  { iso: 'es', name: 'Español' },
  { iso: 'it', name: 'Italiano' },
  { iso: 'en', name: 'Inglés' },
  { iso: 'gl', name: 'Gallego' },
];

export const levelLanguageList: LevelLanguageType[] = [
  { level: 'Elementary proficiency', spanish: 'Habilidad básica' },
  { level: 'Limited working proficiency', spanish: 'Habilidad limitada en el trabajo' },
  { level: 'Professional working proficiency', spanish: 'Habilidad profesional en el trabajo' },
  { level: 'Full professional proficiency', spanish: 'Habilidad profesional completo' },
  { level: 'Native or bilingual proficiency', spanish: 'Habilidad nativo o bilingüe' },
];
