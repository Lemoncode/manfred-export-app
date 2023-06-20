import { ManfredAwesomicCV } from '@/model';
import { ExperienceVm } from './experience-section.vm';
import { types } from './experience-section.contants';

export const mapFromMacCvToExperienceSectionVm = (cv: ManfredAwesomicCV): ExperienceVm[] => {
  let jobes: ExperienceVm[] = [];

  cv?.experience?.jobs?.map(job => {
    const organizationName: string = job.organization?.name ?? '';
    const organizationDescription: string = job.organization?.description ?? '';
    const organizationType: string = job.type ?? '';
    const roles = job.roles?.map(role => role) ?? [];

    const mapType = mapOrganizationType(organizationType);

    jobes = [...jobes, { name: organizationName, description: organizationDescription, type: mapType, roles }];
  });

  return jobes;
};

export const mapOrganizationType = (type: string): string => {
  const result = types.find(t => t.key === type);
  return result?.value ?? '';
};
