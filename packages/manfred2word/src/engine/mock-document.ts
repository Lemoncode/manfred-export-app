import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from 'docx';

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
export const mockDoc = new Document({
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
