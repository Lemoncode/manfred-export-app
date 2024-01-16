import ejs from 'ejs';
import rightSideEnd from './right-side-end.ejs?raw';

export const generateRightDivElementEnd = (): string => ejs.render(rightSideEnd);
