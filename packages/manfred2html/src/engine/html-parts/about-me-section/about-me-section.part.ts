import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import aboutMe from './about-me-section.ejs?raw';
import ejs from 'ejs';

export const generateAboutMeSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateAboutMeSectionInner(profileSectionVm);
};

const generateAboutMeSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(aboutMe, rootObject);
};
