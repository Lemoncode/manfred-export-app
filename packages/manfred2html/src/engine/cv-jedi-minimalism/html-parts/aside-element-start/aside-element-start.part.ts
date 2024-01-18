import ejs from 'ejs';
import asideElementStart from './aside-element-start.ejs?raw';

export const generateAsideElementStart = (): string => ejs.render(asideElementStart);
