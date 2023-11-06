import ejs from 'ejs';
import { ExperienceVm, mapFromMacCvToExperienceSectionVm } from '@lemoncode/manfred-common/experience-section';
import { Settings, Language, ManfredAwesomicCV } from '@/model';
import experienceTemplate from './experience-section.ejs?raw';
import { englishExperienceLabels, spanishExperienceLabels } from './labels';

export const generateExperiencesSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  return generateExperienceSectionInner(experienceSectionVm, settings.language);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[], language: Language = 'es'): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
    labels: language === 'es' ? spanishExperienceLabels : englishExperienceLabels,
  };

  return ejs.render(experienceTemplate, rootObject);
};
