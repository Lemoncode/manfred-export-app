import { Role } from '@/model';
import { getTimeStamp } from '../../helpers/date-sort.helper';
import { ExperienceVm } from './experience-section.vm';

export const sortRolesByDate = (experience: ExperienceVm): ExperienceVm => {
  let experienceWithSortedRoles = {
    ...experience,
    roles: experience.roles.sort(
      (roleA: Role, roleB: Role) => getTimeStamp(roleB.startDate) - getTimeStamp(roleA.startDate)
    ),
  };

  return experienceWithSortedRoles;
};

export const mapSortedRolesIntoExperience = (experience: ExperienceVm[]) => {
  const mappedExperience = [...experience].map(experienceItem => sortRolesByDate(experienceItem));
  return mappedExperience;
};

export const sortExperienceByDate = (experience: ExperienceVm[]): ExperienceVm[] => {
  const sortedExperience = [...experience].sort(
    (experienceA: ExperienceVm, experienceB: ExperienceVm) =>
      getTimeStamp(experienceB.roles[0].startDate) - getTimeStamp(experienceA.roles[0].startDate)
  );

  return sortedExperience;
};
