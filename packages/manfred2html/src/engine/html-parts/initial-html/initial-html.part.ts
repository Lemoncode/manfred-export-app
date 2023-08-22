import ejs from 'ejs';
import initialHtml from './initial-html.ejs?raw';

export const generateInitialHTML = (): string => {
  return ejs.render(initialHtml);
};
