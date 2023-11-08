import { Language } from '@/model';
import { StudiesLabels } from './studies-label.model';
import { spanishStudiesLabels } from './studies-spanish-labels.const';
import { englishStudiesLabels } from './studies-english-labels.const';

export const getLabels = (language: Language): StudiesLabels => {
  switch (language) {
    case 'es':
      return spanishStudiesLabels;
    case 'en':
      return englishStudiesLabels;
    default:
      throw new Error(`Language not supported: ${language}`);
  }
};
