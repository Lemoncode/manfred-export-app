export interface ProfileSectionVm {
  name: string;
  surnames: string;
  title: string;
  description: string;
  fullname: string;
  emails: string[];
  relevantLinks: RelevantLinkVm[];
}

export interface RelevantLinkVm {
  type: 'linkedin' | 'github' | 'twitter' | 'web' | 'otros';
  URL: string;
  description?: string;
}
