import ejs from 'ejs';
import htmlDocumentEndTemplate from './html-document-end.ejs?raw';

export const generateHtmlDocumentEnd = (): string => ejs.render(htmlDocumentEndTemplate);
