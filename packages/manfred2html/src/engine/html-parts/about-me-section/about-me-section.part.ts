import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import aboutMe from './about-me-section.ejs?raw';
import ejs from 'ejs';
import { Language } from '@lemoncode/manfred-common/model';

export const generateAboutMeSection = (cv: ManfredAwesomicCV, language: Language = 'es'): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateAboutMeSectionInner(profileSectionVm, language);
};

const generateAboutMeSectionInner = (profileSectionVm: ProfileSectionVm, language: Language): string => {
  const rootObject = {
    profile: profileSectionVm,
    language: !language || language === 'es' ? null : language,
  };

  return ejs.render(aboutMe, rootObject);
};
