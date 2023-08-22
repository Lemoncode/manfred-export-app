import ejs from 'ejs';
import headerElementStartTemplate from './header-element-start.ejs?raw';

export const generateHeaderElementStart = (): string => ejs.render(headerElementStartTemplate);
