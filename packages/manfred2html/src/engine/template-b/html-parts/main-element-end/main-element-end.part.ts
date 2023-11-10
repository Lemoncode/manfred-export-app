import ejs from 'ejs';
import mainElementEndTemplate from './main-element-end.ejs?raw';

export const generateMainElementEnd = (): string => ejs.render(mainElementEndTemplate);
