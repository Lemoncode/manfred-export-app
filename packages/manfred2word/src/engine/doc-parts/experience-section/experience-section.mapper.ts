import { ManfredAwesomicCV } from '@/model';
import { ExperienceVm } from './experience-section.vm';
import { types } from './experience-section.contants';

export const mapFromMacCvToExperienceSectionVm = (cv: ManfredAwesomicCV): ExperienceVm[] => {
  let jobs: ExperienceVm[] = [];

  cv?.experience?.jobs?.map(job => {
    const organizationName: string = job.organization?.name ?? '';
    const organizationDescription: string = job.organization?.description ?? '';
    const organizationType: string = job.type ?? '';
    const roles = job.roles?.map(role => role) ?? [];

    const mapType = mapOrganizationType(organizationType);

    jobs = [...jobs, { name: organizationName, description: organizationDescription, type: mapType, roles }];
  });

  return jobs;
};

export const mapOrganizationType = (type: string): string => {
  const result = types.find(t => t.key === type);
  return result?.value ?? '';
};
