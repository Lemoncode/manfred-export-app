import githubImage from '@/assets/github.png';
import linkedinImage from '@/assets/linkedin.png';
import twitterImage from '@/assets/twitter.png';
import websiteImage from '@/assets/website.png';
import otherImage from '@/assets/other.png';

type TypesRevelantLinks = 'linkedin' | 'github' | 'twitter' | 'website' | 'other';

export const revelantLinksImages = (type: TypesRevelantLinks): string => {
  switch (type) {
    case 'linkedin':
      return linkedinImage;
    case 'github':
      return githubImage;
    case 'twitter':
      return twitterImage;
    case 'website':
      return websiteImage;
    case 'other':
      return otherImage;
    default:
      return '';
  }
};
