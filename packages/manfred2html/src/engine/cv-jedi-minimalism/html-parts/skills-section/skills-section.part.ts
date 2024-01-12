import ejs from 'ejs';
import { SoftSkillVM, mapFromCvToSoftSkillVm } from '@lemoncode/manfred-common/soft-skill-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { Settings, Language, ManfredAwesomicCV } from '@/model';
import { getLabels } from './labels';
import skillsSection from './skills-section.ejs?raw';

export const generateSkillsSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
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
  return ejs.render(skillsSection, rootObject);
};
