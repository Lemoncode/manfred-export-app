import { ManfredAwesomicCV } from '@/model';
import { LanguageVM, LanguageSectionVm } from './language-section.vm';
import { languageList } from './language-section.constants';

export const mapFromCvToLanguageVm = (cv: ManfredAwesomicCV): LanguageSectionVm => {
  const languages: LanguageSectionVm = [];

  cv?.knowledge?.languages?.forEach((language: LanguageVM) => {
    const languageItem = languageList.find(item => item.iso.toLowerCase() === language?.name.toLowerCase());
    const name = languageItem ? languageItem?.name : '';
    const level = language?.level ?? '';

    languages.push({ name, level });
  });

  return languages;
};
