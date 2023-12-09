import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM, mapFromCvToHardSkillVm } from '@lemoncode/manfred-common/hard-skill-section';
import ejs from 'ejs';
import hardSkillsTemplate from './hard-skills-section.ejs?raw';

export const generateHardSkillsSection = (cv: ManfredAwesomicCV): string => {
  const hardSkillsSectionVm = mapFromCvToHardSkillVm(cv);
  return generateHardSkillSectionInner(hardSkillsSectionVm);
};

const generateHardSkillSectionInner = (hardSkillsSectionVm: HardSkillVM[]): string => {
  const rootObject = {
    hardSkillsCollection: hardSkillsSectionVm,
  };
  return ejs.render(hardSkillsTemplate, rootObject);
};
