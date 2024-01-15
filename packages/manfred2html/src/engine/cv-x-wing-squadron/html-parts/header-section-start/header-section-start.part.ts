import ejs from 'ejs';
import HeaderSectionStartTemplate from './header-section-start.ejs?raw';

export const generateHeaderSectionStart = (): string => ejs.render(HeaderSectionStartTemplate);
