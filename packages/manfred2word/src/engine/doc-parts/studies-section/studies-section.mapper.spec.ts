import { ManfredAwesomicCV, Person } from '@/model';
import { mapFromMacCvToStudiesSectionVm } from './studies-section.mapper';
import { StudiesSectionVm } from './studies-section.vm';

describe('Testing studies-section.mapper.ts', () => {
  it('should return an empty array when cv is undefined or null', () => {
    //Arrange

    const cv: any = undefined || null;
    const expectedResult: StudiesSectionVm[] = [];

    //Act

    const result = mapFromMacCvToStudiesSectionVm(cv);

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return the mapped StudiesSectionVm when cv has valid data', () => {
    //Arrange
    const person: any = {
      name: null,
      surnames: null,
      title: null,
      description: null,
      birthday: null,
      avatar: null,
      contact: null,
      location: null,
    };
    const cv: ManfredAwesomicCV = {
      knowledge: {
        studies: [
          {
            name: 'Study 1',
            studyType: 'selfTraining',
            degreeAchieved: false,
            startDate: '2020-01-01',
            finishDate: '2021-01-01',
            description: 'Lorem ipsum',
            institution: {
              name: 'University',
              description: 'Lorem ipsum',
              location: {
                country: 'Country',
                region: 'Region',
                notes: 'Notes',
              },
            },
          },
          {
            name: 'Study 2',
            studyType: 'officialDegree',
            degreeAchieved: false,
            startDate: '2022-01-01',
            finishDate: '2023-01-01',
            description: 'Lorem ipsum',
            institution: {
              name: 'College',
              description: 'Lorem ipsum',
              location: {
                country: 'Country',
                region: 'Region',
                notes: 'Notes',
              },
            },
          },
        ],
      },
      settings: {
        language: '',
        lastUpdate: undefined,
        MACVersion: undefined,
      },
      aboutMe: {
        profile: person,
      },
    };
    const expectedResult: StudiesSectionVm[] = [
      {
        name: 'Study 1',
        studyType: 'selfTraining',
        startDate: '2020-01-01',
        finishDate: '2021-01-01',
        description: 'Lorem ipsum',
        institution: {
          name: 'University',
          description: 'Lorem ipsum',
          location: {
            country: 'Country',
            region: 'Region',
            notes: 'Notes',
          },
        },
      },
      {
        name: 'Study 2',
        studyType: 'officialDegree',
        startDate: '2022-01-01',
        finishDate: '2023-01-01',
        description: 'Lorem ipsum',
        institution: {
          name: 'College',
          description: 'Lorem ipsum',
          location: {
            country: 'Country',
            region: 'Region',
            notes: 'Notes',
          },
        },
      },
    ];

    //Act
    const result = mapFromMacCvToStudiesSectionVm(cv);

    //Assert
    expect(result).toEqual(expectedResult);
  });
});
