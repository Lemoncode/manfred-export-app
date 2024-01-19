import ejs from 'ejs';
import asideElementEnd from './aside-element-end.ejs?raw';

export const generateAsideElementEnd = (): string => ejs.render(asideElementEnd);
