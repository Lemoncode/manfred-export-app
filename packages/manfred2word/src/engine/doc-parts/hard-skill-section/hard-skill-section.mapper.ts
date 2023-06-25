import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM, CompetenceVM, skillLevelValues } from './hard-skill-section.vm';

export const mapFromCvToHardSkillVm = (cv: ManfredAwesomicCV | null): HardSkillVM[] => {
  let hardSkills: HardSkillVM[] = [];

  cv?.knowledge?.hardSkills?.map((hardSkill: HardSkillVM) => {
    const level: string = hardSkill?.level ?? '';
    const shownLevel: string = findLevelValue(level);

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

export const findLevelValue = (target: string): string => {
  const level = skillLevelValues.find(i => i.english === target);
  return level ? level.spanish : '';
};
