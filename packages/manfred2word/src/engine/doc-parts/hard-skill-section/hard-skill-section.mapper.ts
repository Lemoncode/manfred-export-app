import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM, CompetenceVM, SkillLevel } from './hard-skill-section.vm';
import { skillLevelValues } from './hard-skill-constants';

export const mapFromCvToHardSkillVm = (cv: ManfredAwesomicCV | null): HardSkillVM[] => {
  let hardSkills: HardSkillVM[] = [];

  cv?.knowledge?.hardSkills?.map((hardSkill: HardSkillVM) => {
    const level: string = hardSkill?.level ?? '';
    const shownLevel: string = findLevelValue(level, skillLevelValues);

    hardSkills = [
      ...hardSkills,
      {
        skill: getHardSkillData(hardSkill),
        level: shownLevel,
      },
    ];
  });

  return hardSkills;
};

export const getHardSkillData = (hardSkill: HardSkillVM): CompetenceVM => {
  return {
    name: hardSkill.skill?.name ?? '',
    description: hardSkill.skill?.description ?? '',
  };
};

export const findLevelValue = (target: string, skillLevelValues: SkillLevel[]): string => {
  const level = skillLevelValues.find(i => i.english === target);
  return level ? level.spanish : '';
};
