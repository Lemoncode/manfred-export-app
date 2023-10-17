import { ExperienceVm } from '../doc-parts/experience-section';
import { StudiesSectionVm } from '../doc-parts/studies-section';
import { Role } from '@/model';

export const dateExtractor = (item: StudiesSectionVm | ExperienceVm | Role): number =>
  'roles' in item ? new Date(item.roles[0].startDate).getTime() : new Date(item.startDate).getTime();

export const sortByDate = (
  array: StudiesSectionVm[] | ExperienceVm[] | Role[]
): StudiesSectionVm[] | ExperienceVm[] | Role[] =>
  array.sort(
    (a: ExperienceVm | StudiesSectionVm | Role, b: ExperienceVm | StudiesSectionVm | Role) =>
      dateExtractor(b) - dateExtractor(a)
  );
