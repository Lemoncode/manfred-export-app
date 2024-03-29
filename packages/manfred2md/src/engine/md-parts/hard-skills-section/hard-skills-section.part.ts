import ejs from 'ejs';
import { HardSkillVM, mapFromCvToHardSkillVm } from '@lemoncode/manfred-common/hard-skill-section';
import { ManfredAwesomicCV } from '@/model';
import hardSkillsTemplate from './hard-skills-section.ejs?raw';

export const generateHardSkillsSection = (cv: ManfredAwesomicCV): string => {
  const hardSkillsSectionVm = mapFromCvToHardSkillVm(cv);
  return generateHardSkillsSectionInner(hardSkillsSectionVm);
};

const generateHardSkillsSectionInner = (hardSkillsSectionVm: HardSkillVM[]): string => {
  const rootObject = {
    hardSkillsCollection: hardSkillsSectionVm,
  };

  return ejs.render(hardSkillsTemplate, rootObject);
};
