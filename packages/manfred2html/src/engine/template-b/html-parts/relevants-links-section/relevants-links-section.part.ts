import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { englishRelevantsLabels, spanishRelevantsLabels } from './labels';
import relevantsLinksSection from './relevants-links-section.ejs?raw';

export const generateRelevantsLinksSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateRelevantsLinksSectionInner(profileSectionVm, settings.language);
};

const generateRelevantsLinksSectionInner = (profileSectionVm: ProfileSectionVm, language: Language = 'es'): string => {
  const rootObject = {
    profile: profileSectionVm,
    labels: language === 'es' ? spanishRelevantsLabels : englishRelevantsLabels,
  };

  return ejs.render(relevantsLinksSection, rootObject);
};
