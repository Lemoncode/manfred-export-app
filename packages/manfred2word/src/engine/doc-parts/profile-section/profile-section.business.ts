import githubImage from '@/assets/github.png';
import linkedinImage from '@/assets/linkedin.png';
import twitterImage from '@/assets/twitter.png';
import websiteImage from '@/assets/website.png';
import otherImage from '@/assets/otros.png';

type TypesRelevantLinks = 'linkedin' | 'github' | 'twitter' | 'web' | 'otros';

export const relevantLinksImages = (type: TypesRelevantLinks): string => {
  switch (type) {
    case 'linkedin':
      return linkedinImage;
    case 'github':
      return githubImage;
    case 'twitter':
      return twitterImage;
    case 'web':
      return websiteImage;
    case 'otros':
      return otherImage;
    default:
      return '';
  }
};
