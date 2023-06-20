import { OrganizationType, Role } from '@/model';

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
