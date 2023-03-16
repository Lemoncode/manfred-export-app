// TODO: define alias
import { ManfredAwesomicCV } from '@/model';
import { Paragraph, TextRun } from 'docx';

export const generateProfileSection = (cv: ManfredAwesomicCV): Paragraph => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';

  return new Paragraph({
    children: [
      new TextRun({
        text: 'Nombre:',
        bold: true,
      }),
      new TextRun(name),
      new TextRun({
        text: 'Apellidos',
        bold: true,
      }),
      new TextRun(surnames),
    ],
  });
};
