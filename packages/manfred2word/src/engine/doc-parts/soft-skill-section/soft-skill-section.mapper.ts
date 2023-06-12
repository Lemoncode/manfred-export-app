import { ManfredAwesomicCV } from '@/model';
import { SkillType, SoftSkillVM } from './soft-skill-section.vm';

export const mapLevelFromJsonData = (level: string, levelSkillList: SkillType[]): string => {
  const levelItem = levelSkillList.find(item => item.level === level);
  return levelItem ? levelItem.spanish : '';
};
