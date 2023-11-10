import { Language } from '@/model';
import { RelevantsLinksLabels } from './relevants-links-label.model';
import { spanishRelevantsLinksLabels } from './relevants-links-spanish-labels.const';
import { englishRelevantsLinksLabels } from './relevants-links-english-labels.const';

export const getLabels = (language: Language): RelevantsLinksLabels => {
  switch (language) {
    case 'es':
      return spanishRelevantsLinksLabels;
    case 'en':
      return englishRelevantsLinksLabels;
    default:
      throw new Error(`Language not supported: ${language}`);
  }
};
