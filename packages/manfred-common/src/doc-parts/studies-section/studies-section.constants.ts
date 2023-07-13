import { CountryType, StudyTypeWithTranslation } from './studies-section.vm';

export const studiesTypes: StudyTypeWithTranslation[] = [
  { key: 'officialDegree', value: 'Grado oficial' },
  { key: 'certification', value: 'Certificación' },
  { key: 'unaccredited', value: 'No acreditado' },
  { key: 'selfTraining', value: 'Autoformación' },
];

export const countryList: CountryType[] = [
  { iso: 'es', name: 'España' },
  { iso: 'it', name: 'Italia' },
  { iso: 'en', name: 'Reino Unido' },
  { iso: 'zh', name: 'China' },
  { iso: 'el', name: 'Grecia' },
  { iso: 'fr', name: 'Francia' },
  { iso: 'gn', name: 'Paraguay' },
  { iso: 'hi', name: 'India' },
  { iso: 'ja', name: 'Japón' },
  { iso: 'ar', name: 'Arabia Saudí' },
  { iso: 'bn', name: 'Bangladesh' },
  { iso: 'ru', name: 'Rusia' },
  { iso: 'pt', name: 'Portugal' },
  { iso: 'pl', name: 'Polonia' },
  { iso: 'nl', name: 'Alemania' },
  { iso: 'tr', name: 'Turquía' },
  { iso: 'ko', name: 'Corea del Sur' },
  { iso: 'jv', name: 'Indonesia' },
  { iso: 'sl', name: 'Eslovenia' },
  { iso: 'sk', name: 'Eslovaquia' },
  { iso: 'ro', name: 'Rumanía' },
  { iso: 'th', name: 'Tailandia' },
  { iso: 'hy', name: 'Armenia' },
];
