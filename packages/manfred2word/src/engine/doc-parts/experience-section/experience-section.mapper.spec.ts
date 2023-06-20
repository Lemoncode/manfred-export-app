import { mapFromMacCvToExperienceSectionVm } from './experience-section.mapper';
import { ExperienceVm } from './experience-section.vm';
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
      },
    ];
    expect(result).toEqual(expectResult);
  });
});
