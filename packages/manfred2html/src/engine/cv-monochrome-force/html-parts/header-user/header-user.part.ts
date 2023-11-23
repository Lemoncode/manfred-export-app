import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';

import headerUserTemplate from './header-user.ejs?raw';

export const generateHeaderElementEnd = (): string => ejs.render(headerUserTemplate);
