import ejs from 'ejs';
import { ManfredAwesomicCV } from '@/model';
import { LanguageVm, mapFromCvToLanguageVm } from '@lemoncode/manfred-common/language-section'
import languageSection from './language-section.ejs?raw';

export const generateLanguageSection = (cv: ManfredAwesomicCV): string => {
  const languageSectionVm = mapFromCvToLanguageVm(cv);
  return generateLanguageSectionInner(languageSectionVm);
};

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[]): string => {
  const rootObject = {
    languageCollection: languageSectionVm,
  }
  return ejs.render(languageSection, rootObject)
};
