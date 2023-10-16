import { Role } from '@/model';
import { ExperienceVm } from './experience-section.vm';

export const sortRolesByDate = (experience: ExperienceVm): ExperienceVm => {
  let experienceWithSortedRoles = {
    ...experience,
    roles: experience.roles.sort(
      (roleA: Role, roleB: Role) => new Date(roleB.startDate).getTime() - new Date(roleA.startDate).getTime()
    ),
  };

  return experienceWithSortedRoles;
};

export const mapSortedRolesIntoExperience = (experience: ExperienceVm[]) =>
  [...experience].map(experienceItem => sortRolesByDate(experienceItem));

export const sortExperienceByDate = (experience: ExperienceVm[]): ExperienceVm[] =>
  [...experience].sort(
    (experienceA: ExperienceVm, experienceB: ExperienceVm) =>
      new Date(experienceB.roles[0].startDate).getTime() - new Date(experienceA.roles[0].startDate).getTime()
  );
