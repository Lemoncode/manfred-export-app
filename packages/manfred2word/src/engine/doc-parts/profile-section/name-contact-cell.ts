import {
  Paragraph,
  Table,
  TextRun,
  ITableOptions,
  TableRow,
  ITableRowOptions,
  TableCell,
  ITableCellOptions,
  ImageRun,
  ExternalHyperlink,
  AlignmentType,
} from 'docx';
import { ManfredAwesomicCV } from '@/model';
import emailImage from '@/assets/email.png';
import { styles } from '../doc-parts.styles';
import { ProfileSectionVm } from './profile-section.vm';

const generateFullName = (fullname: string): Paragraph =>
  new Paragraph({
    children: [new TextRun({ text: fullname, ...styles.aboutme.fullname })],
    ...styles.paragraphSpacing,
  });

const generateTitle = (title: string): Paragraph =>
  new Paragraph({
    children: [new TextRun({ text: title, ...styles.aboutme.title })],
  });

const generateContactLabel = (): Paragraph =>
  new Paragraph({
    children: [new TextRun({ text: 'CONTACTO', size: '10pt', bold: true })],
    spacing: {
      after: 100,
    },
  });

const generateLineSpacer = (): Paragraph =>
  new Paragraph({
    text: '',
    ...styles.lineStyles,
    ...styles.paragraphSpacing,
  });

/*
  ** This part of the CV *
  =============================================
  | Davi Bonilla                              |
  | FUNDADOR EN MANFRED / C-LEVEL EXECUTIVE   |
  | ------------------------------------------|
  | contactos:                                |
  | ------------------------------------------|
  | mis enlaces:                              |
  | ------------------------------------------|

*/
export const generateNameContactCell = (profileSectionVm: ProfileSectionVm): TableCell => {
  const { fullname, title, emails } = profileSectionVm;

  return new TableCell({
    ...styles.cell,
    ...styles.marginCell,
    children: [
      generateFullName(fullname),
      generateTitle(title),
      generateLineSpacer(),
      generateContactLabel(),
      ...emails.map((email: string) => {
        return new Paragraph({
          children: [
            new ImageRun({
              data: emailImage,
              transformation: {
                width: 20,
                height: 20,
              },
            }),
            new TextRun({ text: '  ' }),
            new ExternalHyperlink({
              children: [new TextRun({ text: email })],
              link: `mailto:${email}`,
            }),
          ],
        });
      }),
      generateLineSpacer(),
      new Paragraph({
        children: [new TextRun({ text: 'MIS ENLACES', size: '10pt', bold: true })],
        spacing: {
          after: 100,
        },
      }),
    ],
  });
};
