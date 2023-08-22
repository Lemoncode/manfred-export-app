import ejs from 'ejs';
import endHeader from './header-end-html.ejs?raw';

export const generateEndHeaderHTML = (): string => {
  return ejs.render(endHeader);
};
