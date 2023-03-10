import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from 'docx';

export const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun('Hello World'),
            new TextRun({
              text: 'Foo Bar',
              bold: true,
            }),
            new TextRun({
              text: '\tGithub is the best',
              bold: true,
            }),
          ],
        }),
      ],
    },
  ],
});
