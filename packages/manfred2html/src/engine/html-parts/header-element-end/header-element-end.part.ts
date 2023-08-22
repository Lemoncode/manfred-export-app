import ejs from 'ejs';
import headerElementEndTemplate from './header-element-end.ejs?raw';

export const generateHeaderElementEnd = (): string => ejs.render(headerElementEndTemplate);
