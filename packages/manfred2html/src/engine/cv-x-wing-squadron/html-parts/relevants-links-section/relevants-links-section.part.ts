import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import ejs from 'ejs';
import relevantLinksTemplate from './relevants-links-section.ejs?raw';

export const generateRelevantLinksSection = (cv: ManfredAwesomicCV): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);
  return generateRelevantLinksSectionInner(profileSectionVm);
};
const generateRelevantLinksSectionInner = (profileSectionVm: ProfileSectionVm): string => {
  const rootObject = {
    profile: profileSectionVm,
  };
  return ejs.render(relevantLinksTemplate, rootObject);
};
