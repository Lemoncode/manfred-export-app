import ejs from 'ejs';
import HeaderSectionEndTemplate from './header-section-end.ejs?raw';

export const generateHeaderSectionEnd = (): string => ejs.render(HeaderSectionEndTemplate);
