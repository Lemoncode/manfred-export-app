import { ManfredAwesomicCV } from '@/model';

import { mapFromMacCvToExperienceSectionVm, ExperienceVm } from '@lemoncode/manfred-common';
// @lemoncode/manfred-common/src/engine/md-parts/experience-section

import { experienceTemplate } from './experience-section.template';
import ejs from 'ejs';

export const generateExperiencieSection = (cv: ManfredAwesomicCV): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  console.log('*** experienceSectionVm ***', experienceSectionVm);

  return generateExperienceSectionInner(experienceSectionVm);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[]): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
  };

  return ejs.render(experienceTemplate, rootObject);
};
