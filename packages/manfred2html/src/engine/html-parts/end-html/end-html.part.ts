import ejs from 'ejs';
import endHtml from './end-html.ejs?raw';

export const generateEndHTML = (): string => {
  return ejs.render(endHtml);
};
