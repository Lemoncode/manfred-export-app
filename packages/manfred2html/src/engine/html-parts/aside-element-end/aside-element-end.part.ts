import ejs from 'ejs';
import asideElementEndTemplate from './aside-element-end.ejs?raw';

export const generateAsideElementEnd = (): string => ejs.render(asideElementEndTemplate);
