import ejs from 'ejs';
import { SoftSkillVM, mapFromCvToSoftSkillVm } from '@lemoncode/manfred-common/soft-skill-section';
import { ManfredAwesomicCV } from '@/model';
import softSkillsTemplate from './soft-skills-section.ejs?raw';

export const generateSoftSkillsSection = (cv: ManfredAwesomicCV): string => {
  const softSkillsSectionVm = mapFromCvToSoftSkillVm(cv);
  return generateSoftSkillsSectionInner(softSkillsSectionVm);
};

const generateSoftSkillsSectionInner = (softSkillsSectionVm: SoftSkillVM[]): string => {
  const rootObject = {
    softSkillsCollection: softSkillsSectionVm,
  };

  return ejs.render(softSkillsTemplate, rootObject);
};
