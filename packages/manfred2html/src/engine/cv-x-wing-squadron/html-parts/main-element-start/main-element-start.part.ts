import ejs from 'ejs';
import mainElementTemplate from './main-element-start.ejs?raw';

export const generateMainElementStart = (): string => ejs.render(mainElementTemplate);
