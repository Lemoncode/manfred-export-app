import { ManfredAwesomicCV } from '@/model';
import { CountryType, Institution, StudiesSectionVm, StudyTypeWithTranslation } from './studies-section.vm';
import { studiesTypes, countryList } from './studies-section.constants';

export const mapFromMacCvToStudiesSectionVm = (cv: ManfredAwesomicCV): StudiesSectionVm[] => {
  const studiesMap: StudiesSectionVm[] =
    cv?.knowledge?.studies?.map(study => {
      const name = study?.name ?? '';
      const studyType = study?.studyType ?? '';
      const degreeAchieved = study?.degreeAchieved ?? false;
      const startDate = study?.startDate ?? '';
      const finishDate = study?.finishDate ?? '';
      const description = study?.description ?? '';
      let institution: Institution = {
        name: study?.institution?.name ?? '',
        location: {
          country: study?.institution?.location?.country ?? '',
          region: study?.institution?.location?.region ?? '',
          address: study?.institution?.location?.address ?? '',
        },
      };

      const mapStudyType = mapStudiesTypes(studyType, studiesTypes);
      const mapCountry = mapCountries(institution.location.country, countryList);
      institution = { ...institution, location: { ...institution.location, country: mapCountry } };

      return {
        name,
        studyType: mapStudyType,
        degreeAchieved,
        startDate,
        finishDate,
        description,
        institution,
      };
    }) ?? [];

  return studiesMap;
};

export const mapStudiesTypes = (studiesType: string, studiesTypes: StudyTypeWithTranslation[]): string => {
  const result = studiesTypes?.find(t => t.key === studiesType);
  return result?.value ?? '';
};

export const mapCountries = (country: string, countries: CountryType[]): string => {
  const result = countries?.find(c => c.iso === country?.toLowerCase());
  return result?.name ?? '';
};
