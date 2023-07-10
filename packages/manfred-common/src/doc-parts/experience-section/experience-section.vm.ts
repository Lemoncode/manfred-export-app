// Since we are importing this as code, not as lib
// We cannot use aliases (app will override this)
// So instead of @model we have to use ../model
// import { OrganizationType, Role } from '@/model';
import { OrganizationType, Role } from '../../model';

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
