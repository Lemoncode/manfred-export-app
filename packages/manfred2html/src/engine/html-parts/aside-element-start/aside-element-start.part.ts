import ejs from 'ejs';
import asideElementStartTemplate from './aside-element-start.ejs?raw';

export const generateAsideElementStart = (): string => ejs.render(asideElementStartTemplate);
