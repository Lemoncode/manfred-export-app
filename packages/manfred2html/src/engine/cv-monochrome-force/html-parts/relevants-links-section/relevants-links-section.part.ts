import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { getLabels } from './labels';
import relevantsLinksSection from './relevants-links-section.ejs?raw';

export const generateRelevantsLinksSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateRelevantsLinksSectionInner(profileSectionVm, settings.language);
};

const generateRelevantsLinksSectionInner = (
  profileSectionVm: ProfileSectionVm,
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    profile: profileSectionVm,
    labels: getLabels(language),
  };
  console.log(profileSectionVm.emails);

  return ejs.render(relevantsLinksSection, rootObject);
};
