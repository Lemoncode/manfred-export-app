import { ManfredAwesomicCV } from '@/model';
import { mapFromMacCvToProfileSectionVm } from './profile-section.mapper';
import { ProfileSectionVm, RelevantLink } from './profile-section.vm';

describe('Testing profile-section.mapper.ts', () => {
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
      relevantLinks: [] as RelevantLink[],
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
      relevantLinks: [] as RelevantLink[],
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
      relevantLinks: [] as RelevantLink[],
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
      relevantLinks: [] as RelevantLink[],
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
      relevantLinks: [] as RelevantLink[],
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
      relevantLinks: [] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should returns cv with proper data when fields from aboutMe field have valid values', () => {
    // Arrange
    const theContact: any = {
      contactMails: ['john.doe@mydomain.com', 'john.doe@anydomain.com'],
    };

    const theLink: any = {
      type: 'github',
      URL: 'john.doe@github.com',
      description: 'This is my link.',
    };

    const person: any = {
      name: 'John',
      surnames: 'Doe',
      title: 'Computer Science Bachelor',
      description: 'Frontend developer',
      birthday: '30/03/1990',
      avatar: undefined,
      contact: theContact,
      location: undefined,
    };

    const cv: ManfredAwesomicCV = {
      settings: {
        language: 'English',
        lastUpdate: '25/04/2023',
        MACVersion: '1.0',
      },
      aboutMe: {
        profile: person,
        relevantLinks: [theLink],
      },
    };

    const expectedResult: ProfileSectionVm = {
      name: 'John',
      surnames: 'Doe',
      title: 'Computer Science Bachelor',
      description: 'Frontend developer',
      fullname: 'John Doe',
      emails: ['john.doe@mydomain.com', 'john.doe@anydomain.com'] as string[],
      relevantLinks: [theLink] as RelevantLink[],
    };

    // Act
    const result = mapFromMacCvToProfileSectionVm(cv);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
export {};
