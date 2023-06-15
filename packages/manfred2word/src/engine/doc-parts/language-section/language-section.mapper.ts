import { ManfredAwesomicCV } from '@/model';
import { LanguageVm, LanguageType, LevelLanguageType } from './language-section.vm';
import { languageList, levelLanguageList } from './language-section.constants';

export const mapFromCvToLanguageVm = (cv: ManfredAwesomicCV | null): LanguageVm[] => {
  let languages: LanguageVm[] = [];

  cv?.knowledge?.languages?.map((language: LanguageVm) => {
    const name: string = language?.name ?? '';
    const mapName: string = mapNameFromJsonData(name, languageList);

    const level: string = language?.level ?? '';
    const mapLevel: string = mapLevelFromJsonData(level, levelLanguageList);

    languages = [...languages, { name: mapName, level: mapLevel }];
  });

  return languages;
};

export const mapNameFromJsonData = (name: string, languageList: LanguageType[]): string => {
  const languageItem = languageList.find(language => language.iso === name.toLowerCase());
  return languageItem ? languageItem.name : '';
};

export const mapLevelFromJsonData = (level: string, languageList: LevelLanguageType[]): string => {
  const languageItem = languageList.find(language => language.level === level);
  return languageItem ? languageItem.spanish : '';
};
