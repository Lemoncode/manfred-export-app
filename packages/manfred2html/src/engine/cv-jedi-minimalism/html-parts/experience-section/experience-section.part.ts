import ejs from 'ejs';
import experienceSection from './experience-section.ejs?raw';

export const generateExperienceSection = (): string => ejs.render(experienceSection);
