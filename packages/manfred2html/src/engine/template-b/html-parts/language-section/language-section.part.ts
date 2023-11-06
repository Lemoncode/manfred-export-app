import ejs from 'ejs';
import { LanguageVm, mapFromCvToLanguageVm } from '@lemoncode/manfred-common/language-section';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { englishLanguageLabels, spanishLanguageLabels } from './labels';
import languageSection from './language-section.ejs?raw';

export const generateLanguageSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const languageSectionVm = mapFromCvToLanguageVm(cv);
  return generateLanguageSectionInner(languageSectionVm, settings.language);
};

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[], language: Language = 'es'): string => {
  const rootObject = {
    languageCollection: languageSectionVm,
    labels: language === 'es' ? spanishLanguageLabels : englishLanguageLabels,
  };
  return ejs.render(languageSection, rootObject);
};
