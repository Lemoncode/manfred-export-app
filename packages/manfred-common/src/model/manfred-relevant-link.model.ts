type ManfredRelevantLinkType = 'linkedin' | 'github' | 'twitter' | 'website' | 'other';

export interface ManfredRelevantLink {
  type: ManfredRelevantLinkType;
  URL: string;
  description?: string;
}
