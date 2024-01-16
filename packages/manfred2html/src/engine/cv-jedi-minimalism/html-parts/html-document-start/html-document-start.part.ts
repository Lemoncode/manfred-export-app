import ejs from 'ejs';
import { HexColor, HexColorJedi } from '@/model';
import htmlDocumentStartTemplate from './html-document-start.ejs?raw';

export const generateHtmlDocumentStart = (color: HexColor): string => {
  const jediColor = () => {
    switch (color) {
      case HexColor.default:
        return '#11383A';
      case HexColor.red:
        return '#6A0B18';
      case HexColor.green:
        return '#0D5127';
      case HexColor.orange:
        return '#5F2816';
      case HexColor.yellow:
        return '#66570C';
      case HexColor.dark:
        return '#0D1418';
      default:
        return '#11383A';
    }
  };

  return ejs.render(htmlDocumentStartTemplate, { color: jediColor() });
};
