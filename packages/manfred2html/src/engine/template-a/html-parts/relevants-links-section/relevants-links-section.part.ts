import ejs from 'ejs';
import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import relevantsLinksSection from './relevants-links-section.ejs?raw';
import { Language } from '@lemoncode/manfred-common/model';
import { englishRelevantsLabels, spanishRelevantsLabels } from './labels';

export const generateRelevantsLinksSection = (cv: ManfredAwesomicCV, language: Language = 'es'): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateRelevantsLinksSectionInner(profileSectionVm, 'es');
};

const generateRelevantsLinksSectionInner = (profileSectionVm: ProfileSectionVm, language: Language): string => {
  const rootObject = {
    profile: profileSectionVm,
    labels: !language || language === 'es' ? spanishRelevantsLabels : englishRelevantsLabels,
  };

  return ejs.render(relevantsLinksSection, rootObject);
};
