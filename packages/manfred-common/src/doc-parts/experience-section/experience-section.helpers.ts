import { dateExtractor, sortByDate } from '@/helpers';
import { ExperienceVm } from './experience-section.vm';

export const sortRolesByDate = (experience: ExperienceVm): ExperienceVm => ({
  ...experience,
  roles: sortByDate(experience.roles, 'startDate'),
});

export const mapSortedRolesIntoExperience = (experience: ExperienceVm[]): ExperienceVm[] =>
  experience.map(experienceItem => sortRolesByDate(experienceItem));

export const sortExperienceByDate = (experience: ExperienceVm[]): ExperienceVm[] =>
  experience.sort(
    (a: ExperienceVm, b: ExperienceVm) =>
      dateExtractor(b.roles[0], 'startDate') - dateExtractor(a.roles[0], 'startDate')
  );
