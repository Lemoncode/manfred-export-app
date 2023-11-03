import ejs from 'ejs';
import { ManfredAwesomicCV } from '@/model';
import { LanguageVm, mapFromCvToLanguageVm } from '@lemoncode/manfred-common/language-section';
import languageTemplate from './language-section.ejs?raw';
import { Language } from '@lemoncode/manfred-common/model';
import { englishLanguageLabels, spanishLanguageLabels } from './labels';

export const generateLanguageSection = (cv: ManfredAwesomicCV, language: Language = 'es'): string => {
  const languageSectionVm = mapFromCvToLanguageVm(cv);
  return generateLanguageSectionInner(languageSectionVm, 'es');
};

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[], language: Language): string => {
  const rootObject = {
    languageCollection: languageSectionVm,
    labels: !language || language === 'es' ? spanishLanguageLabels : englishLanguageLabels,
  };
  return ejs.render(languageTemplate, rootObject);
};
