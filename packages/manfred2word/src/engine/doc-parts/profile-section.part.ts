// TODO: define alias
import { Paragraph, TextRun } from 'docx';
import { ManfredAwesomicCV } from '../../model';
import { styles } from './doc-parts.styles';

export const generateProfileSection = (cv: ManfredAwesomicCV): Paragraph[] => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';
  const title = cv?.aboutMe?.profile?.title ?? '';

  return [
    new Paragraph({
      children: [
        new TextRun({ text: name, ...styles.aboutme.name }),
        new TextRun({ text: ' ' }),
        new TextRun({ text: surnames, ...styles.aboutme.surnames }),
      ],
    }),
    new Paragraph({
      children: [new TextRun({ text: title, ...styles.aboutme.title })],
    }),
  ];
};
