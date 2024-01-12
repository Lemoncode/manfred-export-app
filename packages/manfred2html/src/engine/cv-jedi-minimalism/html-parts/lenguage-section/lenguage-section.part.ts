import ejs from 'ejs';
import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import lenguageSection from './lenguage-section.ejs?raw';

export const generateLenguageSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateLenguageSectionInner(profileSectionVm);
};

const generateLenguageSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(lenguageSection, rootObject);
};
