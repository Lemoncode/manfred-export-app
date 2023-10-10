import { convertToDate } from './date-sort.helper';

describe('passAsDate', () => {
  it('should return string parsed as date when correct format provided, that is format yyyy-mm-dd from manfred-schema model', () => {
    //Arrange
    const correctDateFormat: string = '1992-03-20';

    // Act
    const result: Date = convertToDate(correctDateFormat);
    const expectedResult = new Date('1992-03-20');

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return 1900-01-01 parsed as date when wrong format provided, empty string', () => {
    //Arrange
    const wrongDateFormat: string = '';

    // Act
    const result: Date = convertToDate(wrongDateFormat);
    const expectedResult = new Date('1900-01-01');

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return 1900-01-01 parsed as date when wrong format provided, non existing date', () => {
    //Arrange
    const wrongDateFormat: string = '2021-45-12';

    // Act
    const result: Date = convertToDate(wrongDateFormat);
    const expectedResult = new Date('1900-01-01');

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
