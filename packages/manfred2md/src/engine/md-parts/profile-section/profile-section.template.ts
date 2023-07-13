import { removeIndent } from '@/common';

/*
export interface ProfileSectionVm {
  name: string;
  surnames: string;
  title: string;
  description: string;
  fullname: string;
  emails: string[];
  revelantLinks: RelevantLink[];
}
*/

// Tip: open side by side ExperienceVM just to check
// how to build and name fields
const profileTemplatePretty = `
Nombre: <%= name %>
`;

export const profileTemplate = removeIndent(profileTemplatePretty);
