import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import profileTemplate from './profile-section.ejs?raw';
import ejs from 'ejs';

export const generateProfileSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateProfileSectionInner(profileSectionVm);
};

const generateProfileSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(profileTemplate, rootObject);
};
