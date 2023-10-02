import ejs from 'ejs';
import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import relevantsLinksSection from './relevants-links-section.ejs?raw';

export const generateRelevantsLinksSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateRelevantsLinksSectionInner(profileSectionVm);
};

const generateRelevantsLinksSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(relevantsLinksSection, rootObject);
};
