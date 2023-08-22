import ejs from 'ejs';
import endHtml from './initial-html.ejs?raw';

export const generateEndHTML = (): string => {
  return ejs.render(endHtml);
};
