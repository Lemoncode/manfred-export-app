import { Language } from '@/model';
import { SoftSkillsLabels } from './soft-skills-label.model';
import { spanishSoftSkillsLabels } from './soft-skills-spanish-labels.const';
import { englishSoftSkillsLabels } from './soft-skills-english-labels.const';

export const getLabels = (language: Language): SoftSkillsLabels => {
  switch (language) {
    case 'es':
      return spanishSoftSkillsLabels;
    case 'en':
      return englishSoftSkillsLabels;
    default:
      throw new Error(`Language not supported: ${language}`);
  }
};
