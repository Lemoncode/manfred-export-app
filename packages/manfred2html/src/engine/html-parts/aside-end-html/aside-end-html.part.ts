import ejs from 'ejs';
import endAside from './aside-end-html.ejs?raw';

export const generateEndAsideHTML = (): string => {
  return ejs.render(endAside);
};
