export interface ExperienceVm {
  name: string;
  role: string;
  startDate: string;
  finishDate: string;
  description: string;
}

export interface ExperienceSectionVm extends Array<ExperienceVm> {}
