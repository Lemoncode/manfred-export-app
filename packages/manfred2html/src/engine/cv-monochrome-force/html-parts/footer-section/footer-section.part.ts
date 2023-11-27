import ejs from 'ejs';
import footerSectionTemplate from './footer-section.ejs?raw';

export const generateFooterSection = (): string => ejs.render(footerSectionTemplate);
