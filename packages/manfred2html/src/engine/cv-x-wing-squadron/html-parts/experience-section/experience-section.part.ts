import { ExperienceVm, mapFromMacCvToExperienceSectionVm } from '@lemoncode/manfred-common/experience-section';
import { ManfredAwesomicCV } from '@/model';
import ejs from 'ejs';
import experienceTemplate from './experience-section.ejs?raw';

export const generateExperienceSection = (cv: ManfredAwesomicCV): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);
  return generateExperienceSectionInner(experienceSectionVm);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[]): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
  };
  return ejs.render(experienceTemplate, rootObject);
};
