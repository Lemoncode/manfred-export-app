import ejs from 'ejs';
import htmldocumentEndTemplate from './html-document-end.ejs?raw';

export const generateHtmlDocumentEnd = (): string => ejs.render(htmldocumentEndTemplate);
