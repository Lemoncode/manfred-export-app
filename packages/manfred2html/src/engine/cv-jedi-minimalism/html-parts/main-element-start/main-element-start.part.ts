import ejs from 'ejs';
import mainElementStart from './main-element.ejs?raw';

export const generateMainStart = (): string => ejs.render(mainElementStart);
