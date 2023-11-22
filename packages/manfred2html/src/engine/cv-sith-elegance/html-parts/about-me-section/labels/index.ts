import { Language } from '@/model';
import { AboutMeLabels } from './about-me-labels.model';
import { spanishAboutMeLabels } from './about-me-spanish-labels.const';
import { englishAboutMeLabels } from './about-me-english-labels.const';

export const getLabels = (language: Language): AboutMeLabels => {
  switch (language) {
    case 'es':
      return spanishAboutMeLabels;
    case 'en':
      return englishAboutMeLabels;
    default:
      throw new Error(`Language not supported: ${language}`);
  }
};
