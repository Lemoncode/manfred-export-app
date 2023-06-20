import { ManfredAwesomicCV } from '@/model';
import { extractSkillData, mapFromCvToSoftSkillVm, mapLevelFromJsonData } from './soft-skill-section.mapper';
import { levelSkillList } from './soft-skill.constants';
import { CompetenceVM } from './soft-skill-section.vm';
import { expect } from 'chai';
import assert from 'assert';

describe('mapLevelFromJsonData', () => {
  it('should return the corresponding Spanish translation for a given level', () => {
    const level = 'basic';
    const expectedTranslation = 'Básico';

    const translatedLevel: string = mapLevelFromJsonData(level, levelSkillList);
    expect(translatedLevel).equal(expectedTranslation);
  });

  it('should return an empty string if the level is not found in levelLanguageList', () => {
    const level = 'Advanced';

    const translatedLevel = mapLevelFromJsonData(level, levelSkillList);

    expect(translatedLevel).equal('');
  });

  it('should return an empty string if the level is empty', () => {
    const level = '';

    const translatedLevel = mapLevelFromJsonData(level, levelSkillList);

    expect(translatedLevel).equal('');
  });

  it('should return an empty string if the level is undefined', () => {
    let level = undefined;
    level = level || '';

    const translatedLevel = mapLevelFromJsonData(level, levelSkillList);

    expect(translatedLevel).equal('');
  });
});

describe('extractSkillData', () => {
  it("should return a object with params 'name' and 'description' with the value as JSON message", () => {
    const name = 'Jira';
    const description = 'Administración, configuración y gestión avanzada de JIRA.';
    const skillObject = { name, description };

    const skill: CompetenceVM = extractSkillData({
      skill: {
        name: 'Jira',
        type: 'tool',
        description: 'Administración, configuración y gestión avanzada de JIRA.',
      },
      level: '',
    });

    expect(skillObject).to.deep.equal(skill);
  });

  it("should return a object with params 'name' and 'description' with the value as JSON message even if description is empty", () => {
    const name = 'Jira';
    const description = '';
    const skillObject = { name, description };

    const skill: CompetenceVM = extractSkillData({
      skill: {
        name: 'Jira',
        type: 'tool',
        description: '',
      },
      level: '',
    });

    expect(skillObject).to.deep.equal(skill);
  });

  it("should return a object with params 'name' and 'description' with the value as JSON message even if description is undefined", () => {
    const name = 'Jira';
    let description = undefined;
    description = description || '';
    const skillObject = { name, description };

    const skill: CompetenceVM = extractSkillData({
      skill: {
        name: 'Jira',
        type: 'tool',
        description: undefined,
      },
      level: '',
    });

    expect(skillObject).to.deep.equal(skill);
  });
});

describe('mapFromCvToSoftSkillVm', () => {
  it('should return an empty array when cv is null', () => {
    const cv = null;

    const result = mapFromCvToSoftSkillVm(cv);

    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array when cv is undefined', () => {
    let cv: ManfredAwesomicCV | null | undefined = undefined;
    cv = cv || null;

    const result = mapFromCvToSoftSkillVm(cv);

    assert.deepStrictEqual(result, []);
  });
});
