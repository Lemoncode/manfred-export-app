import { ManfredAwesomicCV } from '@/model';
import { sortedJobsByStartDate } from './experience-section.helpers';
import { ExperienceVm, Type, JobManfredAwesomicCV } from './experience-section.vm';
import { types } from './experience-section.contants';

export const mapFromMacCvToExperienceSectionVm = (cv: ManfredAwesomicCV): ExperienceVm[] => {
  const sortedJobs = cv?.experience?.jobs ? sortedJobsByStartDate(cv?.experience?.jobs) : [];

  const experience = sortedJobs?.map((job: JobManfredAwesomicCV) => mapJobToExperience(job));

  return experience;
};

export const mapJobToExperience = (job: JobManfredAwesomicCV): ExperienceVm => ({
  name: job.organization?.name ?? '',
  description: job.organization?.description ?? '',
  type: mapOrganizationType(job.type, types),
  roles: job.roles?.map(role => role),
  URL: job.organization?.URL ?? '',
});

export const mapOrganizationType = (type: string = '', types: Type[]): string => {
  const result = types?.find(t => t.key === type);
  return result?.value ?? '';
};
