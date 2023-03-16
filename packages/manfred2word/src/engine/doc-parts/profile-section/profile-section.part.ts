import {
  Paragraph,
  Table,
  TextRun,
  ITableOptions,
  TableRow,
  ITableRowOptions,
  TableCell,
  ITableCellOptions,
} from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { styles } from '../doc-parts.styles';
import { ProfileSectionVm } from './profile-section.vm';
import { mapFromMacCvToProfileSectionVm } from './profile-section.mapper';
import { generateNameContactCell } from './name-contact-cell';

const generateProfileSectionInner = (profileSectionVm: ProfileSectionVm): Table => {
  const { fullname, title, emails, description } = profileSectionVm;

  return new Table({
    ...styles.table,
    rows: [
      new TableRow({
        children: [
          generateNameContactCell(profileSectionVm),
          // TODO: refactor this
          // generateDescriptionCell(profileSectionVm),
          new TableCell({
            ...styles.marginCell,
            children: [
              new Paragraph({
                children: [new TextRun({ text: 'Presentación', ...styles.aboutme.titleDescription })],
                ...styles.paragraphSpacing,
              }),
              new Paragraph({
                children: [new TextRun(description)],
              }),
            ],
          } as ITableCellOptions),
        ],
      } as ITableRowOptions),
    ],
  } as ITableOptions);
};

export const generateProfileSection = (cv: ManfredAwesomicCV): Table => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateProfileSectionInner(profileSectionVm);
};
