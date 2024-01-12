import ejs from 'ejs';
import rightSide from './right-side-start.ejs?raw';

export const generateRightDivElementStart = (): string => ejs.render(rightSide);
