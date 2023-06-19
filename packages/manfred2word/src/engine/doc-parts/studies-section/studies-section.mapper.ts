import { ManfredAwesomicCV } from '@/model';
import { Institution, StudiesSectionVm } from './studies-section.vm';

export const mapFromMacCvToStudiesSectionVm = (cv: ManfredAwesomicCV): StudiesSectionVm[] => {
  const studiesMap: StudiesSectionVm[] =
    cv?.knowledge?.studies?.map(study => {
      const name = study?.name ?? '';
      const studyType = study?.studyType ?? '';
      const startDate = study?.startDate ?? '';
      const finishDate = study?.finishDate ?? '';
      const description = study?.description ?? '';
      const institution: Institution = {
        name: study?.institution?.name ?? '',
        description: study?.institution?.description ?? '',
        location: {
          country: study?.institution?.location?.country ?? '',
          region: study?.institution?.location?.region ?? '',
          notes: study?.institution?.location?.notes ?? '',
        },
      };
      return {
        name,
        studyType,
        startDate,
        finishDate,
        description,
        institution,
      };
    }) ?? [];

  return studiesMap;
};
