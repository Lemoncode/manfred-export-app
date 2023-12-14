import ejs from 'ejs';
import relevantLinksSection from './relevant-links-section.ejs?raw';
import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
export const generateRelevantLinksSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateRelevantLinksSectionInner(profileSectionVm);
};

const generateRelevantLinksSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };

  return ejs.render(relevantLinksSection, rootObject);
};
