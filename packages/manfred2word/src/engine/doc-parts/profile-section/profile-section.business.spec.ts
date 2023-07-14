import { it } from '@jest/globals';

import { relevantLinksImages } from './profile-section.business';
import githubImage from '@/assets/github.png';
import linkedinImage from '@/assets/linkedin.png';
import twitterImage from '@/assets/twitter.png';
import otherImage from '@/assets/other.png';

describe('profile-section business specs', () => {
  it('return "" when passed type is null', () => {
    // Arrange
    const arg: any = null;

    // Act
    const result = relevantLinksImages(arg);

    // Assert
    expect(result).toEqual('');
  });

  it('return "" when passed type is undefined', () => {
    // Arrange
    const arg: any = undefined;

    // Act
    const result = relevantLinksImages(arg);

    // Assert
    expect(result).toEqual('');
  });

  it.each([
    ['linkedin', linkedinImage],
    ['github', githubImage],
    ['twitter', twitterImage],
    ['other', otherImage],
  ])('return proper image for %s value', (a: string, b: any) => {
    // Arrange
    const arg: any = a;

    // Act
    const result = relevantLinksImages(arg);

    // Assert
    expect(result).toEqual(b);
  });
});
