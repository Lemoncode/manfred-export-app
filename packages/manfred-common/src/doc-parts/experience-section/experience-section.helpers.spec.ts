import { mapSortedRolesIntoExperience, sortExperienceByDate, sortRolesByDate } from './experience-section.helpers';
import { ExperienceVm } from './experience-section.vm';

describe('experience-section.helpers specs', () => {
  describe('sortRolesByDate', () => {
    it('should return roles sorted by starting date so more recent starting date appears first', () => {
      // Arrange
      const experience: ExperienceVm = {
        name: 'name',
        description: 'description',
        type: 'Autónomo',
        roles: [
          {
            name: 'role1',
            startDate: '2015-03-01',
            finishDate: '2019-02-13',
            challenges: [
              {
                description: 'description',
              },
            ],
          },
          {
            name: 'role2',
            startDate: '2019-02-14',
            finishDate: '2020-12-14',
            challenges: [
              {
                description: 'description',
              },
            ],
          },
        ],
      };

      // Act
      const result = sortRolesByDate(experience);
      // Assert
      const expectResult: ExperienceVm = {
        name: 'name',
        description: 'description',
        type: 'Autónomo',
        roles: [
          {
            name: 'role2',
            startDate: '2019-02-14',
            finishDate: '2020-12-14',
            challenges: [
              {
                description: 'description',
              },
            ],
          },
          {
            name: 'role1',
            startDate: '2015-03-01',
            finishDate: '2019-02-13',
            challenges: [
              {
                description: 'description',
              },
            ],
          },
        ],
      };

      expect(result).toEqual(expectResult);
    });
  });

  describe('mapSortedRolesIntoExperience', () => {
    it('should return experience with sorted roles by starting date so more recent starting date appears first', () => {
      // Arrange
      const experience: ExperienceVm[] = [
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role2',
              startDate: '2019-02-14',
              finishDate: '2020-12-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1',
              startDate: '2015-03-01',
              finishDate: '2019-02-13',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name2',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role3',
              startDate: '2006-07-09',
              finishDate: '2007-10-04',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role4',
              startDate: '2011-03-03',
              finishDate: '2013-04-02',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
      ];

      // Act
      const result = mapSortedRolesIntoExperience(experience);
      // Assert
      const expectResult: ExperienceVm[] = [
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role2',
              startDate: '2019-02-14',
              finishDate: '2020-12-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1',
              startDate: '2015-03-01',
              finishDate: '2019-02-13',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name2',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role4',
              startDate: '2011-03-03',
              finishDate: '2013-04-02',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role3',
              startDate: '2006-07-09',
              finishDate: '2007-10-04',
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

  describe('sortExperienceByDate', () => {
    it('should return experience section sorted by starting date of last role', () => {
      // Arrange
      const experience: ExperienceVm[] = [
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '14-02-2019',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name2',
          description: 'description2',
          type: 'Autónomo',
          roles: [
            {
              name: 'role3',
              startDate: '01-01-2021',
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

      // Act
      const result = sortExperienceByDate(experience);
      // Assert
      const expectResult: ExperienceVm[] = [
        {
          name: 'name2',
          description: 'description2',
          type: 'Autónomo',
          roles: [
            {
              name: 'role3',
              startDate: '01-01-2021',
              finishDate: '14-02-2023',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '14-02-2019',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
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

    it('should return experience section sorted by starting date of last role. No changes if already sorted', () => {
      // Arrange
      const experience: ExperienceVm[] = [
        {
          name: 'name2',
          description: 'description2',
          type: 'Autónomo',
          roles: [
            {
              name: 'role3',
              startDate: '01-01-2021',
              finishDate: '14-02-2023',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '14-02-2019',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
      ];

      // Act
      const result = sortExperienceByDate(experience);
      // Assert
      const expectResult: ExperienceVm[] = [
        {
          name: 'name2',
          description: 'description2',
          type: 'Autónomo',
          roles: [
            {
              name: 'role3',
              startDate: '01-01-2021',
              finishDate: '14-02-2023',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '14-02-2019',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
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

    it('should return same array with one element when array has one element', () => {
      // Arrange
      const experience: ExperienceVm[] = [
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '14-02-2019',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
      ];

      // Act
      const result = sortExperienceByDate(experience);

      // Assert
      const expectResult: ExperienceVm[] = [
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '14-02-2019',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
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

    it('should return experience as last element when no starting date is provided for starting date of last role.', () => {
      // Arrange
      const experience: ExperienceVm[] = [
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name2',
          description: 'description2',
          type: 'Autónomo',
          roles: [
            {
              name: 'role3',
              startDate: '01-01-2021',
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
      // Act
      const result = sortExperienceByDate(experience);
      // Assert
      const expectResult: ExperienceVm[] = [
        {
          name: 'name2',
          description: 'description2',
          type: 'Autónomo',
          roles: [
            {
              name: 'role3',
              startDate: '01-01-2021',
              finishDate: '14-02-2023',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          name: 'name',
          description: 'description',
          type: 'Autónomo',
          roles: [
            {
              name: 'role1',
              startDate: '',
              finishDate: '14-12-2020',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '01-03-2015',
              finishDate: '13-02-2019',
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
});
