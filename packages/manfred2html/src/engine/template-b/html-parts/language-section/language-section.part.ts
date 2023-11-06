import ejs from 'ejs';
import { LanguageVm, mapFromCvToLanguageVm } from '@lemoncode/manfred-common/language-section';
import { ManfredAwesomicCV, ExportHTMLSettings, Language } from '@/model';
import { englishLanguageLabels, spanishLanguageLabels } from './labels';
import languageSection from './language-section.ejs?raw';

export const generateLanguageSection = (cv: ManfredAwesomicCV, settings: ExportHTMLSettings): string => {
  const languageSectionVm = mapFromCvToLanguageVm(cv);
  return generateLanguageSectionInner(languageSectionVm, settings.language);
};

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[], language: Language): string => {
  const rootObject = {
    languageCollection: languageSectionVm,
    labels: !language || language === 'es' ? spanishLanguageLabels : englishLanguageLabels,
  };
  return ejs.render(languageSection, rootObject);
};
