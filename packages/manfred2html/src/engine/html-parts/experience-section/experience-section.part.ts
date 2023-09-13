import ejs from 'ejs';
import { ExperienceVm, mapFromMacCvToExperienceSectionVm } from '@lemoncode/manfred-common/experience-section';
import { ManfredAwesomicCV } from '@/model';
import experienceTemplate from './experience-section.ejs?raw';
import { Language } from '@lemoncode/manfred-common/model';
import { englishExperienceLabels, spanishExperienceLabels } from './labels';

export const generateExperiencesSection = (cv: ManfredAwesomicCV, language: Language = 'es'): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  return generateExperienceSectionInner(experienceSectionVm, 'en' /* language */);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[], language: Language): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
    labels: !language || language === 'es' ? spanishExperienceLabels : englishExperienceLabels,
  };

  return ejs.render(experienceTemplate, rootObject);
};
