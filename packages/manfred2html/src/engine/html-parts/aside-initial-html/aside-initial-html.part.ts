import ejs from 'ejs';
import initialAside from './aside-initial-html.ejs?raw';

export const generateInitialAsideHTML = (): string => {
  return ejs.render(initialAside);
};
