import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM } from './hard-skill-section.vm';
import { skillLevelValues } from './hard-skill-constants';
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
  it('It should return the corresponding Spanish translation for a given level.', () => {
    //Arrange
    const level: string = 'basic';
    const expectedTranslation: string = 'básico';

    //Act
    const result = findLevelValue(level, skillLevelValues);

    //Assert
    expect(result).toEqual(expectedTranslation);
  });

  it('It should return empty string when passed param is also an empty string.', () => {
    //Arrange
    const level: string = '';

    //Act
    const result = findLevelValue(level, skillLevelValues);

    //Assert
    expect(result).toEqual('');
  });

  it('It should return empty string when passed param is undefined.', () => {
    //Arrange
    const level: any = undefined;

    //Act
    const result = findLevelValue(level, skillLevelValues);

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
  it('It should return an array with the proper values when hardskills section is complete.', () => {
    //Arrange
    const cv: ManfredAwesomicCV = {
      ...exampleCv,
      knowledge: {
        hardSkills: [exampleHardSkill],
      },
    };

    //Act
    const result = mapFromCvToHardSkillVm(cv);

    //Assert
    expect(result).toEqual([
      { skill: { name: 'JAVA', description: 'Desarrollo de aplicaciones con Spring.' }, level: 'alto' },
    ]);
  });

  it('It should return an array with the proper values when hardskills section is empty.', () => {
    //Arrange
    const cv: ManfredAwesomicCV = {
      ...exampleCv,
      knowledge: {
        hardSkills: [],
      },
    };

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
