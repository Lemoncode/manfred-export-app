import rootTemplate from './root-template.ejs?raw';
import ejs from 'ejs';

export const generateHTMLRootTemplate = (children: string): string => {
  return ejs.render(rootTemplate, { children: children });
};
