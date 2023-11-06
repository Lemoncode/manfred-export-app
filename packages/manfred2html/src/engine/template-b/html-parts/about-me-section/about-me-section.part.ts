import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ManfredAwesomicCV, ExportHTMLSettings, Language } from '@/model';
import { englishAboutMeLabels, spanishAboutMeLabels } from './labels';
import aboutMe from './about-me-section.ejs?raw';

export const generateAboutMeSection = (cv: ManfredAwesomicCV, settings: ExportHTMLSettings): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateAboutMeSectionInner(profileSectionVm, settings.language);
};

const generateAboutMeSectionInner = (profileSectionVm: ProfileSectionVm, language: Language): string => {
  const rootObject = {
    profile: profileSectionVm,
    labels: !language || language === 'es' ? spanishAboutMeLabels : englishAboutMeLabels,
  };

  return ejs.render(aboutMe, rootObject);
};
