import ejs from 'ejs';
import { SoftSkillVM, mapFromCvToSoftSkillVm } from '@lemoncode/manfred-common/soft-skill-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { getLabels } from './labels';
import softSkillsTemplate from './soft-skills-section.ejs?raw';

export const generateSoftSkillsSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const softSkillsSectionVm = mapFromCvToSoftSkillVm(cv);
  return generateSoftSkillsSectionInner(softSkillsSectionVm, settings.language);
};

const generateSoftSkillsSectionInner = (
  softSkillsSectionVm: SoftSkillVM[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    softSkillsCollection: softSkillsSectionVm,
    labels: getLabels(language),
  };
  return ejs.render(softSkillsTemplate, rootObject);
};
