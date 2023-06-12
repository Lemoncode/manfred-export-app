export interface SoftSkillVM {
  skill?: CompetenceVM;
  level?: string;
}

export interface CompetenceVM {
  name: string;
  type?: 'tool' | 'technology' | 'practice' | 'hardware' | 'domain' | '';
  description?: string;
}

export interface SkillType {
  level: string;
  spanish: string;
}
