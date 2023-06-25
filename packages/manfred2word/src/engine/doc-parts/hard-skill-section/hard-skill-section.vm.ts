export interface HardSkillVM {
  skill?: CompetenceVM;
  level?: string;
}

export interface CompetenceVM {
  name: string;
  type?: 'tool' | 'technology' | 'practice' | 'hardware' | 'domain' | '';
  description?: string;
}

export interface SkillLevel {
  english: string;
  spanish: string;
}

export const skillLevelValues: SkillLevel[] = [
  { english: 'basic', spanish: 'básico' },
  { english: 'intermediate', spanish: 'intermedio' },
  { english: 'high', spanish: 'alto' },
  { english: 'expert', spanish: 'experto' },
];
