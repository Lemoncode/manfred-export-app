import { JobManfredAwesomicCV } from '@/doc-parts/experience-section';
import { Role } from '@/model';

export const sortedRolesByStartDate = (roles: [Role, ...Role[]]): [Role, ...Role[]] =>
  roles?.sort((a, b) => {
    const startDateA = new Date(a.startDate).getTime();
    const startDateB = new Date(b.startDate).getTime();

    return startDateB - startDateA;
  });

export const sortedJobsByStartDate = (jobs: JobManfredAwesomicCV[]): JobManfredAwesomicCV[] =>
  jobs
    ?.map(job => (job = { ...job, roles: sortedRolesByStartDate(job.roles) }))
    .sort((a, b) => {
      const orderedRolesA = sortedRolesByStartDate(a.roles);
      const orderedRolesB = sortedRolesByStartDate(b.roles);

      const startDateA = new Date(orderedRolesA[0].startDate).getTime();
      const startDateB = new Date(orderedRolesB[0].startDate).getTime();

      return startDateB - startDateA;
    });
