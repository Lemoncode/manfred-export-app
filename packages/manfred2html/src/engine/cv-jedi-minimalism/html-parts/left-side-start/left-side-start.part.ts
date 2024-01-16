import ejs from 'ejs';
import divStartTemplate from './left-side-start.ejs?raw';

export const generateLeftDivElementStart = (): string => ejs.render(divStartTemplate);
