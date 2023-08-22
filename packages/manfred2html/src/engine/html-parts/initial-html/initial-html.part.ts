import ejs from 'ejs';
import initialHtml from './initial-html.ejs?raw';

export const generateInitialHTML = (): string => {
  return generateInitialHTMLInner(initialHtml);
};

const generateInitialHTMLInner = (initialHtml: string): string => {
  const rootObject = {
    initialHtml: initialHtml,
  };
  return ejs.render(initialHtml, rootObject);
};
