import ejs from 'ejs';
import { ManfredAwesomicCV, ExportHTMLSettings, Language } from '@/model';
import { LanguageVm, mapFromCvToLanguageVm } from '@lemoncode/manfred-common/language-section';
import { englishLanguageLabels, spanishLanguageLabels } from './labels';
import languageTemplate from './language-section.ejs?raw';

export const generateLanguageSection = (cv: ManfredAwesomicCV, settings: ExportHTMLSettings): string => {
  const languageSectionVm = mapFromCvToLanguageVm(cv);
  return generateLanguageSectionInner(languageSectionVm, settings.language);
};

const generateLanguageSectionInner = (languageSectionVm: LanguageVm[], language: Language): string => {
  const rootObject = {
    languageCollection: languageSectionVm,
    labels: !language || language === 'es' ? spanishLanguageLabels : englishLanguageLabels,
  };
  return ejs.render(languageTemplate, rootObject);
};