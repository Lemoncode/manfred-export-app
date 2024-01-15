import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import userInfoSection from './userInfo-section.ejs?raw';
import ejs from 'ejs';

export const generateUserInfoSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);
  return generateUserInfoSectionInner(profileSectionVm);
};

const generateUserInfoSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };
  return ejs.render(userInfoSection, rootObject);
};
