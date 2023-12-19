import ejs from 'ejs';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { getLabels } from './labels';
import studiesTemplate from './studies-section.ejs?raw';

export const generateStudiesSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const studiesSection = mapFromMacCvToStudiesSectionVm(cv);

  return generateStudiesSectionInner(studiesSection, settings.language);
};

const generateStudiesSectionInner = (
  studiesSection: StudiesSectionVm[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    studiesCollection: studiesSection,
    labels: getLabels(language),
  };

  return ejs.render(studiesTemplate, rootObject);
};
