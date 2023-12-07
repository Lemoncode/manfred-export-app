import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ManfredAwesomicCV } from '@/model';
import aboutMeSection from './about-me-section.ejs?raw';

export const generateAboutMeSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);
  return generateAboutMeSectionInner(profileSectionVm);
};

const generateAboutMeSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(aboutMeSection, rootObject);
};
