import ejs from 'ejs';
import mainElementEnd from './main-element.ejs?raw';

export const generateMainEnd = (): string => ejs.render(mainElementEnd);
