import ejs from 'ejs';
import { SoftSkillVM, mapFromCvToSoftSkillVm } from '@lemoncode/manfred-common/soft-skill-section';
import { Settings, Language, ManfredAwesomicCV } from '@/model';
import { englishSoftSkillsLabels, spanishSoftSkillsLabels } from './labels';
import softSkillsSection from './soft-skills-section.ejs?raw';

export const generateSoftSkillsSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const softSkillsSectionVm = mapFromCvToSoftSkillVm(cv);
  return generateSoftSkillsSectionInner(softSkillsSectionVm, settings.language);
};

const generateSoftSkillsSectionInner = (softSkillsSectionVm: SoftSkillVM[], language: Language = 'es'): string => {
  const rootObject = {
    softSkillsCollection: softSkillsSectionVm,
    labels: language === 'es' ? spanishSoftSkillsLabels : englishSoftSkillsLabels,
  };
  return ejs.render(softSkillsSection, rootObject);
};
