import { Table, ITableOptions, TableRow, ITableRowOptions } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { generateNameContactCell } from './name-contact';
import { generateDescriptionCell } from './description';
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
