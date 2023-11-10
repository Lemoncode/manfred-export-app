import { Language } from '@/model';
import { ExperienceLabels } from './experience-label.model';
import { spanishExperienceLabels } from './experience-spanish-labels.const';
import { englishExperienceLabels } from './experience-english-labels.const';

export const getLabels = (language: Language): ExperienceLabels => {
  switch (language) {
    case 'es':
      return spanishExperienceLabels;
    case 'en':
      return englishExperienceLabels;
    default:
      throw new Error(`Language not supported: ${language}`);
  }
};
