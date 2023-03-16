// TODO: define alias
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
import { ManfredAwesomicCV } from '../../model';
import emailImage from '../../assets/email.png';
import { styles } from './doc-parts.styles';

export const generateProfileSection = (cv: ManfredAwesomicCV): Table => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';
  const title = cv?.aboutMe?.profile?.title ?? '';
  const description = cv?.aboutMe?.profile?.description ?? '';
  const fullname = `${name ?? ''} ${surnames ?? ''}`;
  const emails = (cv?.aboutMe?.profile?.contact?.contactMails as string[]) ?? [];

  return new Table({
    ...styles.table,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            ...styles.cell,
            ...styles.marginCell,
            children: [
              new Paragraph({
                children: [new TextRun({ text: fullname, ...styles.aboutme.fullname })],
                ...styles.paragraphSpacing,
              }),
              new Paragraph({
                children: [new TextRun({ text: title, ...styles.aboutme.title })],
              }),
              new Paragraph({
                text: '',
                ...styles.lineStyles,
                ...styles.paragraphSpacing,
              }),
              new Paragraph({
                children: [new TextRun({ text: 'CONTACTO', size: '10pt', bold: true })],
                spacing: {
                  after: 100,
                },
              }),
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
              new Paragraph({
                text: '',
                ...styles.lineStyles,
                ...styles.paragraphSpacing,
              }),
              new Paragraph({
                children: [new TextRun({ text: 'MIS ENLACES', size: '10pt', bold: true })],
                spacing: {
                  after: 100,
                },
              }),
            ],
          }),
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
