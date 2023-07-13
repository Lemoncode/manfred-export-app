import { removeIndent } from './string-helpers';

describe('string-helpers specs', () => {
  it('removeIndent should remove indent from string', () => {
    // Arrange
    const str = `
      # Hello
      ## World
    `;

    // Act
    const result = removeIndent(str);

    // Assert
    expect(result).toEqual('# Hello\n## World\n');
  });
});
