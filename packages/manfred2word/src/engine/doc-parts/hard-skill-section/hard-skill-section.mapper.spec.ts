import { it } from '@jest/globals';

import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM } from './hard-skill-section.vm';
import { mapFromCvToHardSkillVm, findLevelValue, getHardSkillData } from './hard-skill-section.mapper';

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

const exampleSkill: any = {
  name: 'JAVA',
  description: 'Desarrollo de aplicaciones con Spring.',
};

const exampleHardSkill: any = {
  skill: exampleSkill,
  level: 'high',
};

const exampleCv: ManfredAwesomicCV = {
  settings: {
    language: 'Spanish',
    lastUpdate: '25/06/2023',
    MACVersion: '1.0',
  },
  aboutMe: {
    profile: person,
    relevantLinks: [theLink],
  },
};

describe('findLevelValue', () => {
  it.each([
    ['basic', 'básico'],
    ['intermediate', 'intermedio'],
    ['high', 'alto'],
    ['expert', 'experto'],
    ['not in the list', ''],
  ])('It should return proper value when passed param is %s.', (a: string, b: string) => {
    //Arrange
    const level: string = a;

    //Act
    const result = findLevelValue(level);

    //Assert
    expect(result).toEqual(b);
  });

  it('It should return empty string when passed param is also an empty string.', () => {
    //Arrange
    const level: string = '';

    //Act
    const result = findLevelValue(level);

    //Assert
    expect(result).toEqual('');
  });

  it('It should return empty string when passed param is undefined.', () => {
    //Arrange
    const level: any = undefined;

    //Act
    const result = findLevelValue(level);

    //Assert
    expect(result).toEqual('');
  });
});

describe('getHardSkillData', () => {
  it('Should return proper name and description values for a complete hardskill.', () => {
    //Arrange
    const skill: HardSkillVM = {
      skill: {
        name: 'JAVA',
        description: 'Desarrollo de aplicaciones con Spring.',
      },
      level: 'high',
    };

    //Act
    const result = getHardSkillData(skill);

    //Assert
    expect(result).toEqual({ name: 'JAVA', description: 'Desarrollo de aplicaciones con Spring.' });
  });

  it('Should return proper name and description values when description is empty.', () => {
    //Arrange
    const skill: HardSkillVM = {
      skill: {
        name: 'JAVA',
        description: '',
      },
      level: 'high',
    };

    //Act
    const result = getHardSkillData(skill);

    //Assert
    expect(result).toEqual({ name: 'JAVA', description: '' });
  });

  it('Should return proper name and description values when description is undefined.', () => {
    //Arrange
    const skill: HardSkillVM = {
      skill: {
        name: 'JAVA',
        description: undefined,
      },
      level: 'high',
    };

    //Act
    const result = getHardSkillData(skill);

    //Assert
    expect(result).toEqual({ name: 'JAVA', description: '' });
  });
});

describe('mapFromCvToHardSkillVm', () => {
  it.each([null, undefined])('Should return empty array when incoming manfred CV is %s', (a: any) => {
    //Arrange
    const cv: ManfredAwesomicCV | null = a;

    //Act
    const result = mapFromCvToHardSkillVm(cv);

    //Assert
    expect(result).toEqual([]);
  });

  it('It should return an ampty array when knowledge section is undefined.', () => {
    //Arrange
    const cv: ManfredAwesomicCV = { ...exampleCv, knowledge: undefined };

    //Act
    const result = mapFromCvToHardSkillVm(cv);

    //Assert
    expect(result).toEqual([]);
  });

  it('It should return an ampty array when hardskills section is undefined.', () => {
    //Arrange
    const cv: ManfredAwesomicCV = {
      ...exampleCv,
      knowledge: {
        hardSkills: undefined,
      },
    };

    //Act
    const result = mapFromCvToHardSkillVm(cv);

    //Assert
    expect(result).toEqual([]);
  });
});
