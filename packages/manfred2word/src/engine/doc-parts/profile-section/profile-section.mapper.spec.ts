import { ManfredAwesomicCV, Person } from '@/model';
import { mapFromMacCvToProfileSectionVm } from './profile-section.mapper';
import { ProfileSectionVm, RelevantLink } from './profile-section.vm';

describe('Testing profile-section.mapper.ts', () => {
  it('should pass spec', () => {
    // Arrange

    // Act

    // Assert
    expect(true).toBeTruthy();
  });

  it('It should returns empty cv when passed cv is null', () => {
    // Arrange
    const cv: any = null;
    const expectedResult: ProfileSectionVm = {
      name: '',
      surnames: '',
      title: '',
      description: '',
      fullname: ' ',
      emails: [] as string[],
      revelantLinks: [] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should returns empty cv when passed cv is undefined', () => {
    // Arrange
    const cv: any = undefined;
    const expectedResult: ProfileSectionVm = {
      name: '',
      surnames: '',
      title: '',
      description: '',
      fullname: ' ',
      emails: [] as string[],
      revelantLinks: [] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should returns empty cv when passed aboutMe field is null', () => {
    // Arrange
    const person: any = null;

    const cv: ManfredAwesomicCV = {
      settings: {
        language: '',
        lastUpdate: '',
        MACVersion: '',
      },
      aboutMe: {
        profile: person,
      },
    };

    const expectedResult: ProfileSectionVm = {
      name: '',
      surnames: '',
      title: '',
      description: '',
      fullname: ' ',
      emails: [] as string[],
      revelantLinks: [] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should returns empty cv when passed aboutMe field is undefined', () => {
    // Arrange
    const person: any = undefined;

    const cv: ManfredAwesomicCV = {
      settings: {
        language: '',
        lastUpdate: '',
        MACVersion: '',
      },
      aboutMe: {
        profile: person,
      },
    };

    const expectedResult: ProfileSectionVm = {
      name: '',
      surnames: '',
      title: '',
      description: '',
      fullname: ' ',
      emails: [] as string[],
      revelantLinks: [] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should returns empty cv when any field from aboutMe field is null', () => {
    // Arrange
    const person: any = {
      name: null,
      surnames: null,
      title: null,
      description: null,
      birthday: null,
      avatar: null,
      contact: null,
      location: null,
    };

    const cv: ManfredAwesomicCV = {
      settings: {
        language: '',
        lastUpdate: '',
        MACVersion: '',
      },
      aboutMe: {
        profile: person,
      },
    };

    const expectedResult: ProfileSectionVm = {
      name: '',
      surnames: '',
      title: '',
      description: '',
      fullname: ' ',
      emails: [] as string[],
      revelantLinks: [] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should returns empty cv when any field from aboutMe field is undefined', () => {
    // Arrange
    const person: any = {
      name: undefined,
      surnames: undefined,
      title: undefined,
      description: undefined,
      birthday: undefined,
      avatar: undefined,
      contact: undefined,
      location: undefined,
    };

    const cv: ManfredAwesomicCV = {
      settings: {
        language: '',
        lastUpdate: '',
        MACVersion: '',
      },
      aboutMe: {
        profile: person,
      },
    };

    const expectedResult: ProfileSectionVm = {
      name: '',
      surnames: '',
      title: '',
      description: '',
      fullname: ' ',
      emails: [] as string[],
      revelantLinks: [] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
