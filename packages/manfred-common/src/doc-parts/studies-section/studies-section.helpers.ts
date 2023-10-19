import { sortByDate } from '../../helpers';

import { StudiesSectionVm } from './studies-section.vm';

export const sortStudiesByDate = (studies: StudiesSectionVm[]): StudiesSectionVm[] => sortByDate(studies, 'startDate');
