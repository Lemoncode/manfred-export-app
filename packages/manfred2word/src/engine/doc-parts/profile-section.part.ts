// TODO: define alias
import { ManfredAwesomicCV } from '../../model';
import { Paragraph, TextRun } from 'docx';

export const generateProfileSection = (field: string): Paragraph => {

  return new Paragraph({
    spacing: {
      before: 100,
    },
    children: [new TextRun(field)],
  });
};
