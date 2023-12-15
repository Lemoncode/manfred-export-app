import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { HardSkillVM, mapFromCvToHardSkillVm } from '@lemoncode/manfred-common/hard-skill-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { getLabels } from './labels';
import ejs from 'ejs';
import hardSkillsTemplate from './hard-skills-section.ejs?raw';

export const generateHardSkillsSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const hardSkillsSectionVm = mapFromCvToHardSkillVm(cv);
  return generateHardSkillSectionInner(hardSkillsSectionVm, settings.language);
};

const generateHardSkillSectionInner = (
  hardSkillsSectionVm: HardSkillVM[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    hardSkillsCollection: hardSkillsSectionVm,
    labels: getLabels(language),
  };
  return ejs.render(hardSkillsTemplate, rootObject);
};
