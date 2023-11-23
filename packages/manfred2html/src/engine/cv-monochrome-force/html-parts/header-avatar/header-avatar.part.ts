import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ManfredAwesomicCV } from '@lemoncode/manfred-common/model';

import headerAvatarTemplate from './header-avatar.ejs?raw';

export const generateHeaderAvatar = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateHeaderAvatarInner(profileSectionVm);
};

const generateHeaderAvatarInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(headerAvatarTemplate, rootObject);
};
