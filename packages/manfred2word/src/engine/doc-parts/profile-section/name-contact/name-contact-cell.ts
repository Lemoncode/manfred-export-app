import { Paragraph, TextRun, TableCell, ITableCellOptions, ImageRun, ExternalHyperlink } from 'docx';
import emailImage from '@/assets/email.png';
import { ProfileSectionVm, RelevantLink } from '../profile-section.vm';
import { revelantLinksImages } from '../profile-section.business';
import { capitalizeWords } from '../../../engine.helpers';
import { styles } from './name-contact-cell.styles';

const generateFullName = (fullname: string): Paragraph =>
  new Paragraph({
    children: [new TextRun({ text: fullname, ...styles.fullname })],
    ...styles.paragraphSpacing,
  });

const generateTitle = (title: string): Paragraph =>
  new Paragraph({
    children: [new TextRun({ text: title, ...styles.title })],
  });

const generateContactLabel = (): Paragraph =>
  new Paragraph({
    children: [new TextRun({ text: 'CONTACTO', size: '10pt', bold: true })],
    spacing: {
      after: 200,
    },
  });

const generateMyLinksLabel = (): Paragraph =>
  new Paragraph({
    children: [new TextRun({ text: 'MIS ENLACES', size: '10pt', bold: true })],
    spacing: {
      after: 200,
    },
  });

const generateLineSpacer = (): Paragraph =>
  new Paragraph({
    text: '',
    ...styles.lineStyles,
    ...styles.paragraphSpacing,
  });

const generateEmailsParagraphs = (emails: string[]): Paragraph[] =>
  emails.map((email: string) => {
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
  });

const generateLinksParagraphs = (relevantLinks: RelevantLink[], fullname: string): Paragraph[] => {
  return relevantLinks.map((revelantLink: RelevantLink) => {
    return new Paragraph({
      children: [
        new ImageRun({
          data: revelantLinksImages(revelantLink.type),
          transformation: {
            width: 20,
            height: 20,
          },
        }),
        new TextRun({ text: '  ' }),
        new ExternalHyperlink({
          children: [new TextRun({ text: capitalizeWords(revelantLink.type) })],
          link: revelantLink.URL,
        }),
      ],
      spacing: {
        before: 100,
      },
    });
  });
};

const generateProfileChildrenCell = (profileSectionVm: ProfileSectionVm): ITableCellOptions['children'] => {
  const { fullname, title, emails, revelantLinks } = profileSectionVm;

  let children: ITableCellOptions['children'] = [];

  children = [...children, generateFullName(fullname)];
  children = [...children, generateTitle(title)];
  children = [...children, generateLineSpacer()];

  Array.isArray(emails) &&
    emails.length > 0 &&
    (children = [...children, generateContactLabel(), ...generateEmailsParagraphs(emails), generateLineSpacer()]);

  Array.isArray(revelantLinks) &&
    revelantLinks.length > 0 &&
    (children = [
      ...children,
      generateMyLinksLabel(),
      ...generateLinksParagraphs(revelantLinks, fullname),
      generateLineSpacer(),
    ]);

  return children;
};

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
export const generateNameContactCell = (profileSectionVm: ProfileSectionVm): TableCell =>
  new TableCell({
    ...styles.cell,
    ...styles.marginCell,
    children: generateProfileChildrenCell(profileSectionVm),
  });
