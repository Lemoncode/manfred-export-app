import ejs from 'ejs';
import { HardSkillVM, mapFromCvToHardSkillVm } from '@lemoncode/manfred-common/hard-skill-section';
import { ExportHTMLSettings, Language, ManfredAwesomicCV } from '@/model';
import { englishHardSkillsLabels, spanishHardSkillsLabels } from './labels';
import hardSkillsSection from './hard-skills-section.ejs?raw';

export const generateHardSkillsSection = (cv: ManfredAwesomicCV, settings: ExportHTMLSettings): string => {
  const hardSkillsSectionVm = mapFromCvToHardSkillVm(cv);
  return generateHardSkillsSectionInner(hardSkillsSectionVm, settings.language);
};

const generateHardSkillsSectionInner = (hardSkillsSectionVm: HardSkillVM[], language: Language): string => {
  const rootObject = {
    hardSkillsCollection: hardSkillsSectionVm,
    labels: !language || language === 'es' ? spanishHardSkillsLabels : englishHardSkillsLabels,
  };
  return ejs.render(hardSkillsSection, rootObject);
};
