export interface SoftSkillVM {
  skill?: Competence;
  level?: string;
}

export interface Competence {
  name: string;
  // type: 'tool' | 'technology' | 'practice' | 'hardware' | 'domain';
  description?: string;
}

export interface SkillType {
  level: string;
  spanish: string;
}
