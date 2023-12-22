import { mapFromMacCvToExperienceSectionVm, mapOrganizationType } from './experience-section.mapper';
import { ExperienceVm, Type } from './experience-section.vm';
import { ManfredAwesomicCV } from '@/model';

describe('mapFromMacCvToExperienceSectionVm', () => {
  it('should return an empty array if cv is undefined', () => {
    // Arrange
    const cv: any = undefined;
    // Act
    const result = mapFromMacCvToExperienceSectionVm(cv);
    // Assert
    expect(result).toEqual([]);
  });
  it('should return an empty array if cv.experience is undefined', () => {
    // Arrange
    const cv: any = { experience: undefined };
    // Act
    const result = mapFromMacCvToExperienceSectionVm(cv);
    // Assert
    expect(result).toEqual([]);
  });
  it('should return an empty array if cv.experience.jobs is undefined', () => {
    // Arrange
    const cv: any = { experience: { jobs: undefined } };
    // Act
    const result = mapFromMacCvToExperienceSectionVm(cv);
    // Assert
    expect(result).toEqual([]);
  });
  it('should return an empty array if cv.experience.jobs is empty', () => {
    // Arrange
    const cv: any = { experience: { jobs: [] } };
    // Act
    const result = mapFromMacCvToExperienceSectionVm(cv);
    // Assert
    expect(result).toEqual([]);
  });
  it('should return an array with one element if cv.experience.jobs has one element', () => {
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
      experience: {
        jobs: [
          {
            organization: {
              name: 'name',
              description: 'description',
              URL: 'https://lemoncode.net',
            },
            type: 'freelance',
            roles: [
              {
                name: 'role1',
                startDate: '14-02-2021',
                finishDate: '14-02-2023',
                challenges: [
                  {
                    description: 'description',
                  },
                ],
              },
              {
                name: 'role2',
                startDate: '14-02-2021',
                finishDate: '14-02-2023',
                challenges: [
                  {
                    description: 'description',
                  },
                ],
              },
            ],
            URL: '',
          },
        ],
      },
    };
    // Act
    const result = mapFromMacCvToExperienceSectionVm(cv);
    // Assert
    const expectResult: ExperienceVm[] = [
      {
        name: 'name',
        description: 'description',
        url: 'https://lemoncode.net',
        type: 'Autónomo',
        roles: [
          {
            name: 'role1',
            startDate: '14-02-2021',
            finishDate: '14-02-2023',
            challenges: [
              {
                description: 'description',
              },
            ],
          },
          {
            name: 'role2',
            startDate: '14-02-2021',
            finishDate: '14-02-2023',
            challenges: [
              {
                description: 'description',
              },
            ],
          },
        ],
        URL: '',
      },
    ];
    expect(result).toEqual(expectResult);
  });
});

describe('mapOrganizationType', () => {
  it('should return an empty string if type is undefined', () => {
    // Arrange
    const type: any = undefined;
    const types: Type[] = [];
    // Act
    const result = mapOrganizationType(type, types);
    // Assert
    expect(result).toEqual('');
  });

  it('should return an empty string if type is null', () => {
    // Arrange
    const type: any = null;
    const types: Type[] = [];
    // Act
    const result = mapOrganizationType(type, types);
    // Assert
    expect(result).toEqual('');
  });

  it('should return an empty string if types is undefined', () => {
    // Arrange
    const type: any = 'freelance';
    const types: any = undefined;
    // Act
    const result = mapOrganizationType(type, types);
    // Assert
    expect(result).toEqual('');
  });

  it('should return an empty string if types is null', () => {
    // Arrange
    const type: any = 'freelance';
    const types: any = null;
    // Act
    const result = mapOrganizationType(type, types);
    // Assert
    expect(result).toEqual('');
  });

  it('should return an empty string if types is empty', () => {
    // Arrange
    const type: any = 'freelance';
    const types: any = [];
    // Act
    const result = mapOrganizationType(type, types);
    // Assert
    expect(result).toEqual('');
  });

  it('should return an empty string if type is not in types', () => {
    // Arrange
    const type: any = 'anotherType';
    const types: Type[] = [
      {
        key: 'freelance',
        value: 'Autónomo',
      },
    ];
    // Act
    const result = mapOrganizationType(type, types);
    // Assert
    expect(result).toEqual('');
  });

  it('should return the value of the type if type is in types', () => {
    // Arrange
    const type: any = 'freelance';
    const types: Type[] = [
      {
        key: 'freelance',
        value: 'Autónomo',
      },
    ];
    // Act
    const result = mapOrganizationType(type, types);
    // Assert
    expect(result).toEqual('Autónomo');
  });
});
