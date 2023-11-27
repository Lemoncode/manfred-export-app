import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ManfredAwesomicCV } from '@lemoncode/manfred-common/model';

import profileSectionTemplate from './profile-section.ejs?raw';

export const generateProfileSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateProfileSectionInner(profileSectionVm);
};

const generateProfileSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(profileSectionTemplate, rootObject);
};
