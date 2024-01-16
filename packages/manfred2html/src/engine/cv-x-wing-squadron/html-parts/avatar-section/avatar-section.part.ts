import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import avatarSection from './avatar-section.ejs?raw';
import ejs from 'ejs';

export const generateAvatarSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);
  return generateAvatarSectionInner(profileSectionVm);
};

const generateAvatarSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };
  return ejs.render(avatarSection, rootObject);
};
