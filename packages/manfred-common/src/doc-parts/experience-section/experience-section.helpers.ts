import { JobManfredAwesomicCV } from '.';
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
      const startDateA = new Date(a.roles[0].startDate).getTime();
      const startDateB = new Date(b.roles[0].startDate).getTime();

      return startDateB - startDateA;
    });
