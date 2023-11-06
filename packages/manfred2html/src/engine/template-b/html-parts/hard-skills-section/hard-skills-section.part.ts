import ejs from 'ejs';
import { HardSkillVM, mapFromCvToHardSkillVm } from '@lemoncode/manfred-common/hard-skill-section';
import { Settings, Language, ManfredAwesomicCV } from '@/model';
import { englishHardSkillsLabels, spanishHardSkillsLabels } from './labels';
import hardSkillsSection from './hard-skills-section.ejs?raw';

export const generateHardSkillsSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const hardSkillsSectionVm = mapFromCvToHardSkillVm(cv);
  return generateHardSkillsSectionInner(hardSkillsSectionVm, settings.language);
};

const generateHardSkillsSectionInner = (hardSkillsSectionVm: HardSkillVM[], language: Language = 'es'): string => {
  const rootObject = {
    hardSkillsCollection: hardSkillsSectionVm,
    labels: language === 'es' ? spanishHardSkillsLabels : englishHardSkillsLabels,
  };
  return ejs.render(hardSkillsSection, rootObject);
};
