import ejs from 'ejs';
import skillsSection from './skills-section.ejs?raw';

export const generateSkillsSection = (): string => ejs.render(skillsSection);
