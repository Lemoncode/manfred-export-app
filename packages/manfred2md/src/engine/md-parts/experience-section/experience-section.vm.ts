import { OrganizationType, Role } from '@/model';

// TODO: Should we move this into common?
// Pros all in one place
// Cons enforce all exports to have the same structure
export interface ExperienceVm {
  name: string;
  description?: string;
  type?: string;
  roles: Role[];
}

export interface Type {
  key: OrganizationType;
  value: string;
}
