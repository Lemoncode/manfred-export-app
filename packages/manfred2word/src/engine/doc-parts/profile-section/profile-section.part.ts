import { Table, ITableOptions, TableRow, ITableRowOptions } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm } from './profile-section.vm';
import { mapFromMacCvToProfileSectionVm } from './profile-section.mapper';
import { generateNameContactCell } from './name-contact-cell';
import { generateDescriptionCell } from './description-cell';
import { styles } from './profile-section.styles';

const generateProfileSectionInner = (profileSectionVm: ProfileSectionVm): Table =>
  new Table({
    ...styles.table,
    rows: [
      new TableRow({
        children: [generateNameContactCell(profileSectionVm), generateDescriptionCell(profileSectionVm)],
      } as ITableRowOptions),
    ],
  } as ITableOptions);

export const generateProfileSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateProfileSectionInner(profileSectionVm);
};
