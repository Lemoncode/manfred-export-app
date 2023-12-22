import { Competence, PublicEntityDetails, StudyType } from '@/model';

export interface StudiesSectionVm {
  studyType: string;
  degreeAchieved: boolean;
  name: string;
  startDate: string;
  finishDate: string;
  description: string;
  institution: Institution;
  linkedCompetences?: Competence[];
}

export interface Institution {
  name: string;
  location: Location;
  description: string;
}

export interface Location {
  country: string;
  region: string;
  address: string;
}

export interface CountryType {
  iso: string;
  name: string;
}

export interface StudyTypeWithTranslation {
  key: StudyType;
  value: string;
}

//Review if it can be moved to manfred schema
export interface StudiesManfredAwesomicCV {
  studyType: StudyType;
  degreeAchieved: boolean;
  name: string;
  description?: string;
  startDate: string;
  finishDate?: string;
  institution?: PublicEntityDetails;
  linkedCompetences?: Competence[];
}
