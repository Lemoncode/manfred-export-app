import { ManfredAwesomicCV } from '@/model';
import { LanguageVm, LanguageType, LevelLanguageType } from './language-section.vm';
import { languageList, levelLanguageList } from './language-section.constants';

export const mapFromCvToLanguageVm = (cv: ManfredAwesomicCV | null): LanguageVm[] => {
  let languages: LanguageVm[] = [];

  cv?.knowledge?.languages?.map((language: LanguageVm) => {
    const name = mapNameFromJsonData(language?.name, languageList);

    let level: string = '';
    if (language?.level) {
      level = mapLevelFromJsonData(language?.level, levelLanguageList);
    }

    if (name) {
      languages = [...languages, { name, level }];
    }
  });

  return languages;
};

export const mapNameFromJsonData = (name: string, languageList: LanguageType[]): string => {
  name = name || '';

  const languageItem = languageList.find(language => language.iso === name.toLowerCase());
  return languageItem ? languageItem.name : '';
};

export const mapLevelFromJsonData = (level: string, languageList: LevelLanguageType[]): string => {
  level = level || '';

  const languageItem = languageList.find(language => language.level === level);
  return languageItem ? languageItem.spanish : '';
};
