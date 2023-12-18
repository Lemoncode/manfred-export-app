import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, RelevantLinkVm, ManfredRelevantLink, PhoneNumbers } from './profile-section.vm';

//Only affects David Bonilla's .json because it's the only one that has the "website" type
const mapLinkTypeToVm = (linkType: ManfredRelevantLink['type']): RelevantLinkVm['type'] => {
  switch (linkType) {
    case 'website':
      return 'web';
    case 'other':
      return 'otros';
    default:
      return linkType as RelevantLinkVm['type'];
  }
};

export const mapRelevantLinksToVm = (relevantLinks: ManfredRelevantLink[]): RelevantLinkVm[] => {
  return relevantLinks.map(link => ({
    type: mapLinkTypeToVm(link.type),
    URL: link.URL,
    description: link.description,
  }));
};

export const mapFromMacCvToProfileSectionVm = (cv: ManfredAwesomicCV): ProfileSectionVm => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';
  const title = cv?.aboutMe?.profile?.title ?? '';
  const description = cv?.aboutMe?.profile?.description ?? '';
  const fullname = `${name ?? ''} ${surnames ?? ''}`;

  const emails = (cv?.careerPreferences?.contact?.contactMails as string[]) ?? [];
  const phoneNumbers = (cv?.careerPreferences?.contact?.phoneNumbers as PhoneNumbers[]) ?? [];

  const avatarUrl = (cv?.aboutMe?.profile?.avatar?.link as string) ?? '';

  const city = cv?.aboutMe?.profile?.location?.municipality ?? '';
  const country = cv?.aboutMe?.profile?.location?.country ?? '';

  const relevantLinks = cv?.aboutMe?.relevantLinks
    ? mapRelevantLinksToVm(cv.aboutMe.relevantLinks as ManfredRelevantLink[])
    : [];

  return {
    name,
    surnames,
    title,
    description,
    fullname,
    emails,
    relevantLinks,
    avatarUrl,
    city,
    country,
    phoneNumbers,
  };
};
