import { StudiesSectionVm } from './studies-section.vm';

export const sortStudiesByDate = (studies: StudiesSectionVm[]): StudiesSectionVm[] =>
  [...studies].sort(
    (studyA: StudiesSectionVm, studyB: StudiesSectionVm) =>
      new Date(studyB.startDate).getTime() - new Date(studyA.startDate).getTime()
  );
