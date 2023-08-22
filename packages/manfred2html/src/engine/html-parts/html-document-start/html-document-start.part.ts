import ejs from 'ejs';
import htmlDocumentStartTemplate from './html-document-start.ejs?raw';

export const generateHtmlDocumentStart = (): string => ejs.render(htmlDocumentStartTemplate);
