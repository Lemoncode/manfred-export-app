import ejs from 'ejs';
import { ManfredAwesomicCV } from '@/model';
import { SoftSkillVM, mapFromCvToSoftSkillVm } from '@lemoncode/manfred-common/soft-skill-section';
import softSkillsTemplate from './soft-skills-section.ejs?raw';
import { Language } from '@lemoncode/manfred-common/model';
import { englishSoftSkillsLabels, spanishSoftSkillsLabels } from './labels';

export const generateSoftSkillsSection = (cv: ManfredAwesomicCV, language: Language = 'es'): string => {
  const softSkillsSectionVm = mapFromCvToSoftSkillVm(cv);
  return generateSoftSkillsSectionInner(softSkillsSectionVm, 'es');
};

const generateSoftSkillsSectionInner = (softSkillsSectionVm: SoftSkillVM[], language: Language): string => {
  const rootObject = {
    softSkillsCollection: softSkillsSectionVm,
    labels: !language || language === 'es' ? spanishSoftSkillsLabels : englishSoftSkillsLabels,
  };
  return ejs.render(softSkillsTemplate, rootObject);
};
