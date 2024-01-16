import ejs from 'ejs';
import { HexColorJedi } from '@/model';
import htmlDocumentStartTemplate from './html-document-start.ejs?raw';

export const generateHtmlDocumentStart = (color: HexColorJedi): string =>
  ejs.render(htmlDocumentStartTemplate, { color });
