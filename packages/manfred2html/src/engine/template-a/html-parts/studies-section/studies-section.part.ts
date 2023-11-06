import ejs from 'ejs';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { englishStudiesLabels, spanishStudiesLabels } from './labels';
import studiesTemplate from './studies-section.ejs?raw';

export const generateStudiesSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);

  return generateStudiesSectionInner(studiesSectionVm, settings.language);
};

const generateStudiesSectionInner = (studiesSectionVm: StudiesSectionVm[], language: Language = 'es'): string => {
  const rootObject = {
    studiesCollection: studiesSectionVm,
    labels: language === 'es' ? spanishStudiesLabels : englishStudiesLabels,
  };

  return ejs.render(studiesTemplate, rootObject);
};
