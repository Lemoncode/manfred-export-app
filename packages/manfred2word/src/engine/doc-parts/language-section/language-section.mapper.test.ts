import { ManfredAwesomicCV } from '@/model';
import { languageList, levelLanguageList } from './language-section.constants';
import { mapFromCvToLanguageVm, mapLevelFromJsonData, mapNameFromJsonData } from './language-section.mapper';

describe('mapLevelFromJsonData', () => {
  it('should return the corresponding Spanish translation for a given level', () => {
    const level = 'Elementary proficiency';
    const expectedTranslation = 'Habilidad básica';

    const translatedLevel = mapLevelFromJsonData(level, levelLanguageList);

    expect(translatedLevel).toEqual(expectedTranslation);
  });

  it('should return an empty string if the level is not found in levelLanguageList', () => {
    const level = 'Advanced proficiency';

    const translatedLevel = mapLevelFromJsonData(level, levelLanguageList);

    expect(translatedLevel).toEqual('');
  });

  it('should return an empty string if the level is empty', () => {
    const level = '';

    const translatedLevel = mapLevelFromJsonData(level, levelLanguageList);

    expect(translatedLevel).toEqual('');
  });
});

//
describe('mapNameFromJsonData', () => {
  it('should return the corresponding language name', () => {
    const name = 'es';
    const expectedTranslation = 'Español';

    const language = mapNameFromJsonData(name, languageList);

    expect(language).toEqual(expectedTranslation);
  });

  it('should return an empty string if the name is not found in languageList', () => {
    const name = 'zzz';

    const language = mapNameFromJsonData(name, languageList);

    expect(language).toEqual('');
  });

  it('should return an empty string if the level is empty', () => {
    const name = '';

    const language = mapNameFromJsonData(name, languageList);

    expect(language).toEqual('');
  });
});

//
describe('mapFromCvToLanguageVm', () => {
  it('should return an empty array when cv is null', () => {
    const cv = null;

    const result = mapFromCvToLanguageVm(cv);

    expect(result).toEqual([]);
  });

  it('should return an empty array when cv knowledge.languages is null', () => {
    const cv: ManfredAwesomicCV = {
      settings: {
        language: '',
      },
      aboutMe: {
        profile: {
          name: '',
          surnames: '',
          title: '',
        },
      },
      knowledge: {
        languages: [],
      },
    };

    const result = mapFromCvToLanguageVm(cv);

    expect(result).toEqual([]);
  });
});
