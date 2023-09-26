import ejs from 'ejs';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ManfredAwesomicCV } from '@/model';
import studiesTemplate from './studies-section.ejs?raw';
import { Language } from '@lemoncode/manfred-common/model';
import { englishStudiesLabels, spanishStudiesLabels } from './labels';

export const generateStudiesSection = (cv: ManfredAwesomicCV, languaje: Language = 'es'): string => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);

  return generateStudiesSectionInner(studiesSectionVm, 'es');
};

const generateStudiesSectionInner = (studiesSectionVm: StudiesSectionVm[], language: Language): string => {
  const rootObject = {
    studiesCollection: studiesSectionVm,
    labels: !language || language === 'es' ? spanishStudiesLabels : englishStudiesLabels,
  };

  return ejs.render(studiesTemplate, rootObject);
};
