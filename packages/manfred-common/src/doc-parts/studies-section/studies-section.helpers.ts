import { getTimeStamp } from '../../helpers/date-sort.helper';
import { StudiesSectionVm } from './studies-section.vm';

export const sortStudiesByDate = (studies: StudiesSectionVm[]): StudiesSectionVm[] => {
  const sortedStudies = [...studies].sort(
    (studyA: StudiesSectionVm, studyB: StudiesSectionVm) =>
      getTimeStamp(studyB.startDate) - getTimeStamp(studyA.startDate)
  );

  return sortedStudies;
};
