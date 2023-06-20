import { ManfredAwesomicCV, OrganizationType, PublicEntityDetails } from '@/model';
import { ExperienceVm } from './experience-section.vm';

interface Type {
  key: OrganizationType;
  value: string;
}

export const mapFromMacCvToExperienceSectionVm = (cv: ManfredAwesomicCV): ExperienceVm[] => {
  let jobes: ExperienceVm[] = [];

  cv?.experience?.jobs?.map(job => {
    const organizationName: string = job.organization?.name ?? '';
    const organizationDescription: string = job.organization?.description ?? '';
    const organizationType: string = job.type ?? '';
    const roles = job.roles?.map(role => role) ?? [];

    const mapType = mapOrganizationType(organizationType);

    jobes = [...jobes, { name: organizationName, description: organizationDescription, type: mapType, roles }];
  });

  return jobes;
};

const types: Type[] = [
  { key: 'freelance', value: 'Autónomo' },
  { key: 'publicAdministration', value: 'Administración pública' },
  { key: 'NGO', value: 'ONG' },
  { key: 'startup', value: 'Startup' },
  { key: 'SME', value: 'PYME' },
  { key: 'bigCorp', value: 'Gran empresa' },
  { key: 'academicalInstitution', value: 'Institución académica' },
  { key: 'other', value: 'Otro' },
];

const mapOrganizationType = (type: string): string => {
  const result = types.find(t => t.key === type);
  return result?.value ?? '';
};
