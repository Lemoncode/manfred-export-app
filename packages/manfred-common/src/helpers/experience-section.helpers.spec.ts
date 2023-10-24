import { Role } from '@/model';
import { JobManfredAwesomicCV } from '@lemoncode/manfred-common/experience-section';
import { sortedJobsByStartDate, sortedRolesByStartDate } from '.';

describe('experience-section.helpers specs', () => {
  describe('sortedRolesByStartDate', () => {
    it('should return roles sorted by starting date so more recent starting date appears first', () => {
      // Arrange
      const roles: [Role, ...Role[]] = [
        {
          name: 'role1',
          startDate: '2015-03-01',
          finishDate: '2021-02-13',
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
      ];
      // Act
      const result = sortedRolesByStartDate(roles);
      // Assert
      const expectResult: [Role, ...Role[]] = [
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
          finishDate: '2021-02-13',
          challenges: [
            {
              description: 'description',
            },
          ],
        },
      ];
      expect(result).toEqual(expectResult);
    });
    it('should return same array if just one element', () => {
      // Arrange
      const roles: [Role, ...Role[]] = [
        {
          name: 'role1',
          startDate: '2015-03-01',
          finishDate: '2021-02-13',
          challenges: [
            {
              description: 'description',
            },
          ],
        },
      ];
      // Act
      const result = sortedRolesByStartDate(roles);
      // Assert
      const expectResult: Role[] = [
        {
          name: 'role1',
          startDate: '2015-03-01',
          finishDate: '2021-02-13',
          challenges: [
            {
              description: 'description',
            },
          ],
        },
      ];
      expect(result).toEqual(expectResult);
    });
  });
  describe('sortedJobsByStartDate', () => {
    it('should return jobs sorted by starting date of last role', () => {
      // Arrange
      const jobs: JobManfredAwesomicCV[] = [
        {
          referrals: [
            {
              name: 'Name',
              surnames: 'Surname1 Surname2',
              title: 'Title',
              contact: {
                publicProfiles: [
                  {
                    type: 'type',
                    URL: 'url',
                  },
                ],
              },
            },
          ],
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role1-1',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1-2',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          organization: {
            name: 'name2',
            description: 'description2',
          },
          type: 'publicAdministration',
          roles: [
            {
              name: 'role2-1',
              startDate: '2022-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2-2',
              startDate: '2017-02-14',
              finishDate: '2018-02-14',
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
      const result = sortedJobsByStartDate(jobs);
      // Assert
      const expectResult: JobManfredAwesomicCV[] = [
        {
          organization: {
            name: 'name2',
            description: 'description2',
          },
          type: 'publicAdministration',
          roles: [
            {
              name: 'role2-1',
              startDate: '2022-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2-2',
              startDate: '2017-02-14',
              finishDate: '2018-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          referrals: [
            {
              name: 'Name',
              surnames: 'Surname1 Surname2',
              title: 'Title',
              contact: {
                publicProfiles: [
                  {
                    type: 'type',
                    URL: 'url',
                  },
                ],
              },
            },
          ],
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role1-1',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1-2',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',
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
    it('should also return roles sorted by starting date into each job', () => {
      // Arrange
      const jobs: JobManfredAwesomicCV[] = [
        {
          competences: [
            {
              name: 'name',
              type: 'type',
            },
            {
              name: 'name',
              type: 'type',
            },
            {
              name: 'name',
              type: 'type',
            },
            {
              name: 'name',
              type: 'name',
            },
          ],
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role1-1',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',

              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1-2',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          organization: {
            name: 'name2',
            description: 'description2',
          },
          type: 'publicAdministration',
          roles: [
            {
              name: 'role2-1',
              startDate: '2017-02-14',
              finishDate: '2018-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2-2',
              startDate: '2022-02-14',
              finishDate: '2023-02-14',

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
      const result = sortedJobsByStartDate(jobs);
      // Assert
      const expectResult: JobManfredAwesomicCV[] = [
        {
          organization: {
            name: 'name2',
            description: 'description2',
          },
          type: 'publicAdministration',
          roles: [
            {
              name: 'role2-2',
              startDate: '2022-02-14',
              finishDate: '2023-02-14',

              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2-1',
              startDate: '2017-02-14',
              finishDate: '2018-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
          ],
        },
        {
          competences: [
            {
              name: 'name',
              type: 'type',
            },
            {
              name: 'name',
              type: 'type',
            },
            {
              name: 'name',
              type: 'type',
            },
            {
              name: 'name',
              type: 'name',
            },
          ],
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role1-2',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1-1',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',

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
    it('should return roles sorted by starting date even if just one job', () => {
      // Arrange
      const jobs: JobManfredAwesomicCV[] = [
        {
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role1',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',

              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role2',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
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
      const result = sortedJobsByStartDate(jobs);
      // Assert
      const expectResult: JobManfredAwesomicCV[] = [
        {
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role2',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',

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
    it('should return same array when just one element with already sorted roles', () => {
      // Arrange
      const jobs: JobManfredAwesomicCV[] = [
        {
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role1-2',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1-1',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',

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
      const result = sortedJobsByStartDate(jobs);
      // Assert
      const expectResult: JobManfredAwesomicCV[] = [
        {
          organization: {
            name: 'name',
            description: 'description',
          },
          type: 'freelance',
          roles: [
            {
              name: 'role1-2',
              startDate: '2021-02-14',
              finishDate: '2023-02-14',
              challenges: [
                {
                  description: 'description',
                },
              ],
            },
            {
              name: 'role1-1',
              startDate: '2020-02-14',
              finishDate: '2022-02-14',

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
