import ejs from 'ejs';
import { HexColor } from '@/model';
import htmlDocumentStartTemplate from './html-document-start.ejs?raw';

export const generateHtmlDocumentStart = (color: HexColor) => ejs.render(htmlDocumentStartTemplate, { color });
