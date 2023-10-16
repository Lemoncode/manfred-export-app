import { ManfredAwesomicCV } from '../../model';
import { ExperienceVm, Type } from './experience-section.vm';
import { types } from './experience-section.contants';
import { mapSortedRolesIntoExperience, sortExperienceByDate } from './experience-section.helpers';

export const mapFromMacCvToExperienceSectionVm = (cv: ManfredAwesomicCV): ExperienceVm[] => {
  let jobs: ExperienceVm[] = [];

  cv?.experience?.jobs?.map(job => {
    const organizationName: string = job.organization?.name ?? '';
    const organizationDescription: string = job.organization?.description ?? '';
    const organizationType: string = job.type ?? '';
    const roles = job.roles?.map(role => role) ?? [];

    const mapType = mapOrganizationType(organizationType, types);

    jobs = [...jobs, { name: organizationName, description: organizationDescription, type: mapType, roles }];
  });

  const jobsWithMappedRoles: ExperienceVm[] = mapSortedRolesIntoExperience(jobs);
  const jobsSortedByDate: ExperienceVm[] = sortExperienceByDate(jobsWithMappedRoles);

  return jobsSortedByDate;
};

export const mapOrganizationType = (type: string, types: Type[]): string => {
  const result = types?.find(t => t.key === type);
  return result?.value ?? '';
};
