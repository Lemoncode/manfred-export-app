import ejs from 'ejs';
import { HexColor, HexColorJedi } from '@/model';
import htmlDocumentStartTemplate from './html-document-start.ejs?raw';

export const generateHtmlDocumentStart = (color: HexColor): string => ejs.render(htmlDocumentStartTemplate, { color });

export const generateJediHtmlDocumentStart = (color: HexColorJedi): string =>
  ejs.render(htmlDocumentStartTemplate, { color });
