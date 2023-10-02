import ejs from 'ejs';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ManfredAwesomicCV } from '@/model';
import studiesTemplate from './studies-section.ejs?raw';

export const generateStudiesSection = (cv: ManfredAwesomicCV): string => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);

  return generateStudiesSectionInner(studiesSectionVm);
};

const generateStudiesSectionInner = (studiesSectionVm: StudiesSectionVm[]): string => {
  const rootObject = {
    studiesCollection: studiesSectionVm,
  };

  return ejs.render(studiesTemplate, rootObject);
};
