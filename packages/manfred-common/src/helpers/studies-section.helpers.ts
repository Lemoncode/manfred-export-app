import { StudiesManfredAwesomicCV } from '@/doc-parts/studies-section';

export const sortedStudiesByStartDate = (studies: StudiesManfredAwesomicCV[]): StudiesManfredAwesomicCV[] =>
  studies?.sort((a, b) => {
    const startDateA = new Date(a.startDate).getTime();
    const startDateB = new Date(b.startDate).getTime();

    return startDateB - startDateA;
  });
