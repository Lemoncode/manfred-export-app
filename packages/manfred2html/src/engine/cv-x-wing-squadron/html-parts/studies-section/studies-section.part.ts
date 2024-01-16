import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { getLabels } from './labels';
import ejs from 'ejs';
import studiesTemplate from './studies-section.ejs?raw';

export const generateStudiesSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);
  return generateStudiesSectionInner(studiesSectionVm, settings.language);
};

const generateStudiesSectionInner = (
  studiesSectionVm: StudiesSectionVm[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    studiesCollection: studiesSectionVm,
    labels: getLabels(language),
  };
  return ejs.render(studiesTemplate, rootObject);
};
