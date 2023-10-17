import { Role } from '@/model';
import { ExperienceVm } from './experience-section.vm';
import { dateExtractor, sortByDate } from '../../helpers';

export const sortRolesByDate = (experience: ExperienceVm): ExperienceVm => ({
  ...experience,
  roles: sortByDate(experience.roles) as Role[],
});

export const mapSortedRolesIntoExperience = (experience: ExperienceVm[]): ExperienceVm[] =>
  experience.map(experienceItem => sortRolesByDate(experienceItem));

export const sortExperienceByDate = (experience: ExperienceVm[]): ExperienceVm[] =>
  sortByDate(experience) as ExperienceVm[];
