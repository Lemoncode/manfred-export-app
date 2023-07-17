import { ManfredAwesomicCV } from '@/model';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import studiesTemplate from './studies-section.ejs?raw';
import ejs from 'ejs';

export const generateStudiesSection = (cv: ManfredAwesomicCV): string => {
  const studiesSectionVM = mapFromMacCvToStudiesSectionVm(cv);
  return generateStudiesSectionInner(studiesSectionVM);
};

const generateStudiesSectionInner = (studiesSectionVM: StudiesSectionVm[]): string => {
  const rootObject = {
    studiesCollection: studiesSectionVM,
  };

  return ejs.render(studiesTemplate, rootObject);
};
