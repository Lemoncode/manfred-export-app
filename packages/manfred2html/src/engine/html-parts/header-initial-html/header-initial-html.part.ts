import ejs from 'ejs';
import initialHeader from './header-initial-html.ejs?raw';

export const generateInitialHeaderHTML = (): string => {
  return ejs.render(initialHeader);
};
