import { sortStudiesByDate } from './studies-section.helpers';
import { StudiesSectionVm } from './studies-section.vm';

describe('studies-section.helpers specs', () => {
  describe('sortStudiesByDate', () => {
    it('should return studies section sorted by starting date', () => {
      // Arrange
      const studies: StudiesSectionVm[] = [
        {
          studyType: 'Certificación',
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
          studyType: 'Certificación',
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
          studyType: 'Grado oficial',
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
      const result: StudiesSectionVm[] = sortStudiesByDate(studies);

      const expectedResult: StudiesSectionVm[] = [
        {
          studyType: 'Grado oficial',
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
          studyType: 'Certificación',
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
          studyType: 'Certificación',
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

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should return studies section sorted by starting date. No changes if already sorted', () => {
      // Arrange
      const studies: StudiesSectionVm[] = [
        {
          studyType: 'Grado oficial',
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
          studyType: 'Certificación',
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
      const result: StudiesSectionVm[] = sortStudiesByDate(studies);

      const expectedResult: StudiesSectionVm[] = [
        {
          studyType: 'Grado oficial',
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
          studyType: 'Certificación',
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
      const studies: StudiesSectionVm[] = [
        {
          studyType: 'Certificación',
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
      const result: StudiesSectionVm[] = sortStudiesByDate(studies);

      const expectedResult: StudiesSectionVm[] = [
        {
          studyType: 'Certificación',
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

    it('should return study as last element when no starting date is provided', () => {
      // Arrange
      const studies: StudiesSectionVm[] = [
        {
          studyType: 'Grado oficial',
          degreeAchieved: false,
          name: 'name',
          startDate: '',
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
          studyType: 'Certificación',
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
      const result: StudiesSectionVm[] = sortStudiesByDate(studies);

      const expectedResult: StudiesSectionVm[] = [
        {
          studyType: 'Certificación',
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
          studyType: 'Grado oficial',
          degreeAchieved: false,
          name: 'name',
          startDate: '',
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
      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
