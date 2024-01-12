import ejs from 'ejs';
import divEndTemplate from './left-side-end.ejs?raw';

export const generateLeftDivElementEnd = (): string => ejs.render(divEndTemplate);
