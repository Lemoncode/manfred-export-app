import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { getLabels } from './labels';
import contactSection from './contact-section.ejs?raw';

export const generateContactSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateContactSectionInner(profileSectionVm, settings.language);
};

const generateContactSectionInner = (
  profileSectionVm: ProfileSectionVm,
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    profile: profileSectionVm,
    labels: getLabels(language),
  };

  return ejs.render(contactSection, rootObject);
};
