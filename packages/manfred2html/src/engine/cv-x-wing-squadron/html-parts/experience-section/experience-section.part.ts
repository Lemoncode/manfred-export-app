import { ExperienceVm, mapFromMacCvToExperienceSectionVm } from '@lemoncode/manfred-common/experience-section';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { getLabels } from './labels';
import ejs from 'ejs';
import experienceTemplate from './experience-section.ejs?raw';

export const generateExperienceSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);
  return generateExperienceSectionInner(experienceSectionVm, settings.language);
};

const generateExperienceSectionInner = (
  experienceSectionVm: ExperienceVm[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
    labels: getLabels(language),
  };
  return ejs.render(experienceTemplate, rootObject);
};
