import { ManfredAwesomicCV } from '@/model';
import { mapCountries, mapFromMacCvToStudiesSectionVm, mapStudiesTypes } from './studies-section.mapper';
import { CountryType, StudiesSectionVm, StudyTypeWithTranslation } from './studies-section.vm';

describe('studies-section.mapper specs', () => {
  describe('mapFromMacCvToStudiesSectionVm', () => {
    it('should return empty array when cv is undefined', () => {
      // Arrange
      const cv: any = undefined;

      // Act
      const result = mapFromMacCvToStudiesSectionVm(cv);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when cv is null', () => {
      // Arrange
      const cv: any = null;

      // Act
      const result = mapFromMacCvToStudiesSectionVm(cv);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when cv.knowledge.studies is empty', () => {
      // Arrange
      const cv: any = {
        knowledge: {
          studies: [],
        },
      };

      // Act
      const result = mapFromMacCvToStudiesSectionVm(cv);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return array with one element when cv.knowledge.studies has one element', () => {
      // Arrange
      const cv: ManfredAwesomicCV = {
        settings: {
          language: 'en',
        },
        aboutMe: {
          profile: {
            name: 'Your Name',
            surnames: 'Your Surname',
            title: 'Your Title',
          },
        },
        knowledge: {
          studies: [
            {
              studyType: 'officialDegree',
              degreeAchieved: false,
              name: 'name',
              startDate: 'startDate',
              finishDate: 'finishDate',
              description: 'description',
              institution: {
                name: 'name',
                description: 'description',
                location: {
                  country: 'es',
                  region: 'region',
                  address: 'address',
                },
              },
              linkedCompetences: [{ name: 'Competence 1' }, { name: 'Competence 2' }],
            },
          ],
        },
      };

      // Act
      const result = mapFromMacCvToStudiesSectionVm(cv);

      // Assert
      const expectedResult: StudiesSectionVm[] = [
        {
          studyType: 'Grado oficial',
          degreeAchieved: false,
          name: 'name',
          startDate: 'startDate',
          finishDate: 'finishDate',
          description: 'description',
          institution: {
            name: 'name',
            description: 'description',
            location: {
              country: 'España',
              region: 'region',
              address: 'address',
            },
          },
          linkedCompetences: ['Competence 1', 'Competence 2'],
        },
      ];

      expect(result).toEqual(expectedResult);
    });

    it('should return array with two elements when cv.knowledge.studies has two elements', () => {
      // Arrange
      const cv: ManfredAwesomicCV = {
        settings: {
          language: 'en',
        },
        aboutMe: {
          profile: {
            name: 'Your Name',
            surnames: 'Your Surname',
            title: 'Your Title',
          },
        },
        knowledge: {
          studies: [
            {
              studyType: 'officialDegree',
              degreeAchieved: false,
              name: 'name',
              startDate: 'startDate',
              finishDate: 'finishDate',
              description: 'description',
              institution: {
                name: 'name',
                description: 'description',
                location: {
                  country: 'es',
                  region: 'region',
                  address: 'address',
                },
              },
              linkedCompetences: [{ name: 'Competence 1' }, { name: 'Competence 2' }],
            },
            {
              studyType: 'certification',
              degreeAchieved: true,
              name: 'name2',
              startDate: 'startDate2',
              finishDate: 'finishDate2',
              description: 'description2',
              institution: {
                name: 'name2',
                description: 'description2',
                location: {
                  country: 'it',
                  region: 'region2',
                  address: 'address2',
                },
              },
              linkedCompetences: [{ name: 'Competence 3' }, { name: 'Competence 4' }],
            },
          ],
        },
      };

      // Act
      const result = mapFromMacCvToStudiesSectionVm(cv);

      // Assert
      const expectedResult: StudiesSectionVm[] = [
        {
          studyType: 'Grado oficial',
          degreeAchieved: false,
          name: 'name',
          startDate: 'startDate',
          finishDate: 'finishDate',
          description: 'description',
          institution: {
            name: 'name',
            description: 'description',
            location: {
              country: 'España',
              region: 'region',
              address: 'address',
            },
          },
          linkedCompetences: ['Competence 1', 'Competence 2'],
        },
        {
          studyType: 'Certificación',
          degreeAchieved: true,
          name: 'name2',
          startDate: 'startDate2',
          finishDate: 'finishDate2',
          description: 'description2',
          institution: {
            name: 'name2',
            description: 'description2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
          linkedCompetences: ['Competence 3', 'Competence 4'],
        },
      ];

      expect(result).toEqual(expectedResult);
    });
  });
  describe('mapStudiesTypes', () => {
    it('should return empty string when studyType is undefined', () => {
      // Arrange
      const studyType: any = undefined;
      const studiesTypes: StudyTypeWithTranslation[] = [
        {
          key: 'officialDegree',
          value: 'Grado oficial',
        },
      ];

      // Act
      const result = mapStudiesTypes(studyType, studiesTypes);

      // Assert
      expect(result).toEqual('');
    });

    it('should return empty string when studyType is null', () => {
      // Arrange
      const studyType: any = null;
      const studiesTypes: StudyTypeWithTranslation[] = [
        {
          key: 'officialDegree',
          value: 'Grado oficial',
        },
      ];

      // Act
      const result = mapStudiesTypes(studyType, studiesTypes);

      // Assert
      expect(result).toEqual('');
    });
  });

  it('should return empty string when studyType is empty', () => {
    // Arrange
    const studyType: string = '';
    const studiesTypes: StudyTypeWithTranslation[] = [
      {
        key: 'officialDegree',
        value: 'Grado oficial',
      },
    ];

    // Act
    const result = mapStudiesTypes(studyType, studiesTypes);

    // Assert
    expect(result).toEqual('');
  });

  it('should return empty string when studyType is not in studiesTypes', () => {
    // Arrange
    const studyType: string = 'anotherStudyType';
    const studiesTypes: StudyTypeWithTranslation[] = [
      {
        key: 'officialDegree',
        value: 'Grado oficial',
      },
    ];

    // Act
    const result = mapStudiesTypes(studyType, studiesTypes);

    // Assert
    expect(result).toEqual('');
  });

  it('should return value when studyType is in studiesTypes', () => {
    // Arrange
    const studyType: string = 'officialDegree';
    const studiesTypes: StudyTypeWithTranslation[] = [
      {
        key: 'officialDegree',
        value: 'Grado oficial',
      },
    ];

    // Act
    const result = mapStudiesTypes(studyType, studiesTypes);

    // Assert
    expect(result).toEqual('Grado oficial');
  });

  describe('mapCountries', () => {
    it('should return empty string when country is undefined', () => {
      // Arrange
      const country: any = undefined;
      const countries: CountryType[] = [
        {
          iso: 'es',
          name: 'España',
        },
      ];

      // Act
      const result = mapCountries(country, countries);

      // Assert
      expect(result).toEqual('');
    });

    it('should return empty string when country is null', () => {
      // Arrange
      const country: any = null;
      const countries: CountryType[] = [
        {
          iso: 'es',
          name: 'España',
        },
      ];

      // Act
      const result = mapCountries(country, countries);

      // Assert
      expect(result).toEqual('');
    });

    it('should return empty string when country is empty', () => {
      // Arrange
      const country: string = '';
      const countries: CountryType[] = [
        {
          iso: 'es',
          name: 'España',
        },
      ];

      // Act
      const result = mapCountries(country, countries);

      // Assert
      expect(result).toEqual('');
    });

    it('should return empty string when country is not in countries', () => {
      // Arrange
      const country: string = 'anotherCountry';
      const countries: CountryType[] = [
        {
          iso: 'es',
          name: 'España',
        },
      ];

      // Act
      const result = mapCountries(country, countries);

      // Assert
      expect(result).toEqual('');
    });

    it('should return value when country is in countries', () => {
      // Arrange
      const country: string = 'es';
      const countries: CountryType[] = [
        {
          iso: 'es',
          name: 'España',
        },
      ];

      // Act
      const result = mapCountries(country, countries);

      // Assert
      expect(result).toEqual('España');
    });
  });
});
