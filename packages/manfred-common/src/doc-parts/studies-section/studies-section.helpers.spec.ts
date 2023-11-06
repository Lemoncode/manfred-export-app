import { StudiesManfredAwesomicCV } from './studies-section.vm';
import { sortedStudiesByStartDate } from './studies-section.helpers';

describe('studies-section.helpers specs', () => {
  describe('sortedStudiesByStartDate', () => {
    it('should return studies sorted by starting date', () => {
      // Arrange
      const studies: StudiesManfredAwesomicCV[] = [
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2020-12-03',
          finishDate: '2022-07-08',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2009-04-02',
          finishDate: '2011-03-20',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
        {
          studyType: 'officialDegree',
          degreeAchieved: false,
          name: 'name',
          startDate: '2022-11-17',
          finishDate: '2023-05-01',
          description: 'description',
          institution: {
            name: 'name',
            location: {
              country: 'España',
              region: 'region',
              address: 'address',
            },
          },
        },
      ];

      // Act
      const result: StudiesManfredAwesomicCV[] = sortedStudiesByStartDate(studies);
      // Assert
      const expectedResult: StudiesManfredAwesomicCV[] = [
        {
          studyType: 'officialDegree',
          degreeAchieved: false,
          name: 'name',
          startDate: '2022-11-17',
          finishDate: '2023-05-01',
          description: 'description',
          institution: {
            name: 'name',
            location: {
              country: 'España',
              region: 'region',
              address: 'address',
            },
          },
        },
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2020-12-03',
          finishDate: '2022-07-08',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2009-04-02',
          finishDate: '2011-03-20',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
      ];
      expect(result).toEqual(expectedResult);
    });
    it('should return studies sorted by starting date. No changes if already sorted', () => {
      // Arrange
      const studies: StudiesManfredAwesomicCV[] = [
        {
          studyType: 'officialDegree',
          degreeAchieved: false,
          name: 'name',
          startDate: '2022-11-17',
          finishDate: '2023-05-01',
          description: 'description',
          institution: {
            name: 'name',
            location: {
              country: 'España',
              region: 'region',
              address: 'address',
            },
          },
        },
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2020-12-03',
          finishDate: '2022-07-08',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
      ];

      // Act
      const result: StudiesManfredAwesomicCV[] = sortedStudiesByStartDate(studies);

      const expectedResult: StudiesManfredAwesomicCV[] = [
        {
          studyType: 'officialDegree',
          degreeAchieved: false,
          name: 'name',
          startDate: '2022-11-17',
          finishDate: '2023-05-01',
          description: 'description',
          institution: {
            name: 'name',
            location: {
              country: 'España',
              region: 'region',
              address: 'address',
            },
          },
        },
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2020-12-03',
          finishDate: '2022-07-08',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
      ];

      // Assert
      expect(result).toEqual(expectedResult);
    });
    it('should return same array with one element when array has one element', () => {
      // Arrange
      const studies: StudiesManfredAwesomicCV[] = [
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2020-12-03',
          finishDate: '2022-07-08',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
      ];

      // Act
      const result: StudiesManfredAwesomicCV[] = sortedStudiesByStartDate(studies);

      const expectedResult: StudiesManfredAwesomicCV[] = [
        {
          studyType: 'certification',
          degreeAchieved: true,
          name: 'name2',
          startDate: '2020-12-03',
          finishDate: '2022-07-08',
          description: 'description2',
          institution: {
            name: 'name2',
            location: {
              country: 'Italia',
              region: 'region2',
              address: 'address2',
            },
          },
        },
      ];

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
