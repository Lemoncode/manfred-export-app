// TODO: define alias
import { Paragraph, TextRun } from 'docx';

export const generateParagraph = (field: string): Paragraph => {
  return new Paragraph({
    spacing: {
      before: 100,
    },
    children: [
      new TextRun({
        text: field,
        bold: true,
      }),
    ],
  });
};
