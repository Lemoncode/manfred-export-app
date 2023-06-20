import { OrganizationType, PublicEntityDetails, Role } from '@/model';

export interface ExperienceVm {
  name: string;
  description?: string;
  type?: string;
  roles: Role[];
}
