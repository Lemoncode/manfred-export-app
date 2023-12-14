import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { getLabels } from './labels';
import ejs from 'ejs';
import relevantLinksTemplate from './relevant-links-section.ejs?raw';

export const generateRelevantLinksSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateRelevantLinksSectionInner(profileSectionVm, settings.language);
};

const generateRelevantLinksSectionInner = (
  profileSectionVm: ProfileSectionVm,
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    profile: profileSectionVm,
    labels: getLabels(language),
  };

  return ejs.render(relevantLinksTemplate, rootObject);
};
