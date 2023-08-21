import { ManfredAwesomicCV } from '@/model';
//import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import profileTemplate from './profile-section.ejs?raw';
import ejs from 'ejs';
import { AsideVM } from './model';
import { mapFromCvToAsideVm } from './initial-html-section.mapper';

export const generateInitialHTMLContent = (cv: ManfredAwesomicCV): string => {
  const asideVm = mapFromCvToAsideVm(cv);

  return generateInitialHTMLContentInner(asideVm);
};

const generateInitialHTMLContentInner = (asideVm: AsideVM): string => {
  const rootObject = {
    aside: asideVm,
  };

  return ejs.render(profileTemplate, rootObject);
};
