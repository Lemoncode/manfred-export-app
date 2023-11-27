import ejs from 'ejs';
import mainElementStartTemplate from './main-element-start.ejs?raw';

export const generateMainElementStart = (): string => ejs.render(mainElementStartTemplate);
