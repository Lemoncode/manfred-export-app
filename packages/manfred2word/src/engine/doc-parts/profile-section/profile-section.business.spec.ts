import { revelantLinksImages } from './profile-section.business';

describe('profile-section business specs', () => {
  it('return "" when passed type is null', () => {
    // Arrange
    const arg: any = null;

    // Act
    const result = revelantLinksImages(arg);

    // Assert
    expect(result).toEqual('');
  });

  it('return "" when passed type is undefined', () => {
    // Arrange
    const arg: any = undefined;

    // Act
    const result = revelantLinksImages(arg);

    // Assert
    expect(result).toEqual('');
  });
});
