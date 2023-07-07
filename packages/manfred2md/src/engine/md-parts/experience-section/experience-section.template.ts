import { removeIndent } from '@/common';

// Tip: open side by side ExperienceVM just to check
// how to build and name fields
const experienceTemplatePretty = `
<%if (typeof experienceCollection !== 'undefined') {%>
  # Experiencia / Carrera
  <% for(var i=0; i < experienceCollection.length; i++) { %>
    ## <%= experienceCollection[i].name %>
    <%= experienceCollection[i].description %>
  <% } %>
<% } %>
`;

export const experienceTemplate = removeIndent(experienceTemplatePretty);
