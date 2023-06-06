export interface LanguageVM {
  name: string;
  level?: string;
}

export interface LanguageSectionVm extends Array<LanguageVM> {}
