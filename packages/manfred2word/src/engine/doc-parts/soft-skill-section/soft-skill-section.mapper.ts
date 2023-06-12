import { ManfredAwesomicCV } from '@/model';
import { CompetenceVM, SkillType, SoftSkillVM } from './soft-skill-section.vm';
import { levelSkillList } from './soft-skill.constants';

export const mapFromCvToSoftSkillVm = (cv: ManfredAwesomicCV | null): SoftSkillVM[] => {
  let softSkills: SoftSkillVM[] = [];

  cv?.knowledge?.softSkills?.map((softSkill: SoftSkillVM) => {
    const level: string = softSkill?.level ?? '';
    const mapLevel: string = mapLevelFromJsonData(level, levelSkillList);

    softSkills = [
      ...softSkills,
      {
        skill: extractSkillData(softSkill),
        level: mapLevel,
      },
    ];
  });

  return softSkills;
};

const extractSkillData = (softSkill: SoftSkillVM): CompetenceVM => {
  return {
    name: softSkill.skill?.name ?? '',
    description: softSkill.skill?.description ?? '',
  };
};

export const mapLevelFromJsonData = (level: string, levelSkillList: SkillType[]): string => {
  const levelItem = levelSkillList.find(item => item.level === level);
  return levelItem ? levelItem.spanish : '';
};
