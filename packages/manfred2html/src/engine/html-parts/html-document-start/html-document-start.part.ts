import ejs from 'ejs';
import htmlDocumentStartTemplate from './html-document-start.ejs?raw';

export const generateHtmlDocumentStart = (color: string): string => ejs.render(htmlDocumentStartTemplate, { color });
