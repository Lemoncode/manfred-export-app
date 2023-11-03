import ejs from 'ejs';
import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM, mapFromCvToHardSkillVm } from '@lemoncode/manfred-common/hard-skill-section';
import hardSkillsTemplate from './hard-skills-section.ejs?raw';
import { Language } from '@lemoncode/manfred-common/model';
import { englishHardSkillsLabels, spanishHardSkillsLabels } from './labels';

export const generateHardSkillsSection = (cv: ManfredAwesomicCV, language: Language = 'es'): string => {
  const hardSkillsSectionVm = mapFromCvToHardSkillVm(cv);
  return generateHardSkillsSectionInner(hardSkillsSectionVm, 'es');
};

const generateHardSkillsSectionInner = (hardSkillsSectionVm: HardSkillVM[], language: Language): string => {
  const rootObject = {
    hardSkillsCollection: hardSkillsSectionVm,
    labels: !language || language === 'es' ? spanishHardSkillsLabels : englishHardSkillsLabels,
  };
  return ejs.render(hardSkillsTemplate, rootObject);
};
