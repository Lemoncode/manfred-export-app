import ejs from 'ejs';
import studiesTemplate from './studies-section.ejs?raw';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ManfredAwesomicCV } from '@/model';

export const generateStudiesSection = (cv: ManfredAwesomicCV): string => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);
  return generateStudiesSectionInner(studiesSectionVm);
};

const generateStudiesSectionInner = (studiesSectionVm: StudiesSectionVm[]): string => {
  const rootObject = { studiesCollection: studiesSectionVm };
  return ejs.render(studiesTemplate, rootObject);
};
