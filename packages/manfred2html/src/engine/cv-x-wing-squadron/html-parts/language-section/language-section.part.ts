import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { LanguageVm, mapFromCvToLanguageVm } from '@lemoncode/manfred-common/language-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { getLabels } from './labels';
import ejs from 'ejs';
import languageTemplate from './language-section.ejs?raw';

export const generateLanguageSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const languageSectionVm = mapFromCvToLanguageVm(cv);
  return generateLanguageSectionInner(languageSectionVm, settings.language);
};

const generateLanguageSectionInner = (
  languageSectionVm: LanguageVm[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    languageCollection: languageSectionVm,
    labels: getLabels(language),
  };
  return ejs.render(languageTemplate, rootObject);
};
