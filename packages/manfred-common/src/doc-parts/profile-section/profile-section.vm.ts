export interface ProfileSectionVm {
  name: string;
  surnames: string;
  title: string;
  description: string;
  fullname: string;
  emails: string[];
  phoneNumbers: PhoneNumbers[];
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

export interface PhoneNumbers {
  countryCode: number;
  number: string;
}
