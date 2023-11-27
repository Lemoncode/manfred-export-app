export interface ProfileSectionVm {
  name: string;
  surnames: string;
  title: string;
  description: string;
  fullname: string;
  emails: string[];
  relevantLinks: RelevantLinkVm[];
  avatarUrl: string;
  city: string;
  country: string;
}

export interface RelevantLinkVm {
  type: 'linkedin' | 'github' | 'twitter' | 'web' | 'otros';
  URL: string;
  description?: string;
}

type ManfredRelevantLinkType = 'linkedin' | 'github' | 'twitter' | 'website' | 'other';

export interface ManfredRelevantLink {
  type: ManfredRelevantLinkType;
  URL: string;
  description?: string;
}
