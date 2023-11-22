import { Language } from '@/model';
import { HardSkillsLabels } from './hard-skills-label.model';
import { spanishHardSkillsLabels } from './hard-skills-spanish-labels.const';
import { englishHardSkillsLabels } from './hard-skills-english-labels.const';

export const getLabels = (language: Language): HardSkillsLabels => {
  switch (language) {
    case 'es':
      return spanishHardSkillsLabels;
    case 'en':
      return englishHardSkillsLabels;
    default:
      throw new Error(`Language not supported: ${language}`);
  }
};
