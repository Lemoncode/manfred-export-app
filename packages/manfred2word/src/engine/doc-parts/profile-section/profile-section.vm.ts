export interface ProfileSectionVm {
  name: string;
  surnames: string;
  title: string;
  description: string;
  fullname: string;
  emails: string[];
  revelantLinks: RelevantLink[];
}

export interface RelevantLink {
  type: 'linkedin' | 'github' | 'twitter' | 'website' | 'other';
  URL: string;
  description?: string;
}
