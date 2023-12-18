import { Language } from '@/model';
import { LanguageLabels } from './language-label.model';
import { spanishLanguageLabels } from './language-spanish-labels.const';
import { englishLanguageLabels } from './language-english-labels.const';

export const getLabels = (language: Language): LanguageLabels => {
  switch (language) {
    case 'es':
      return spanishLanguageLabels;
    case 'en':
      return englishLanguageLabels;
    default:
      throw new Error(`Language not supported: ${language}`);
  }
};
