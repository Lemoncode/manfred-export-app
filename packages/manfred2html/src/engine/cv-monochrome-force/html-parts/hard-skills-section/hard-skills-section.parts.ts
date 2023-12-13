import ejs from 'ejs';
import { HardSkillVM, mapFromCvToHardSkillVm } from '@lemoncode/manfred-common/hard-skill-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { Settings, Language, ManfredAwesomicCV } from '@/model';
import { getLabels } from './labels';
import hardSkillsSection from './hard-skills-section.ejs?raw';

export const generateHardSkillsSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const hardSkillsSectionVm = mapFromCvToHardSkillVm(cv);
  return generateHardSkillsSectionInner(hardSkillsSectionVm, settings.language);
};

const generateHardSkillsSectionInner = (
  hardSkillsSectionVm: HardSkillVM[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    hardSkillsCollection: hardSkillsSectionVm,
    labels: getLabels(language),
  };
  return ejs.render(hardSkillsSection, rootObject);
};
