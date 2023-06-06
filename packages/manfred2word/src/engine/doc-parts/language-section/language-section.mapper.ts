import { ManfredAwesomicCV } from '@/model';
import { LanguageVm, LanguageType, LevelLanguageType } from './language-section.vm';
import { languageList, levelLanguageList } from './language-section.constants';

export const mapFromCvToLanguageVm = (cv: ManfredAwesomicCV): LanguageVm[] => {
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

const mapNameFromJsonData = (name: string, languageList: LanguageType[]): string => {
  const languageItem = languageList.find(language => language.iso === name.toLowerCase());
  return languageItem ? languageItem.name : '';
};

const mapLevelFromJsonData = (level: string, languageList: LevelLanguageType[]): string => {
  const languageItem = languageList.find(language => language.level === level.toLowerCase());
  return languageItem ? languageItem.spanish : '';
};
