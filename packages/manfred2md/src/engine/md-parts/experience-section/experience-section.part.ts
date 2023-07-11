import { ManfredAwesomicCV } from '@/model';

import { ExperienceVm, mapFromMacCvToExperienceSectionVm } from '@lemoncode/manfred-common/experience-section';

import { experienceTemplate } from './experience-section.template';
import ejs from 'ejs';

export const generateExperiencieSection = (cv: ManfredAwesomicCV): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  return generateExperienceSectionInner(experienceSectionVm);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[]): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
  };

  return ejs.render(experienceTemplate, rootObject);
};
