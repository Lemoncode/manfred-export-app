import ejs from 'ejs';
import studiesSection from './studies-section.ejs?raw';

export const generateStudiesSection = (): string => ejs.render(studiesSection);
