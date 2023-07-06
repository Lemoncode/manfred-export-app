import { IParagraphOptions, IRunOptions, Paragraph, Table, TableCell, TableRow, TextRun, XmlComponent } from 'docx';
import { HardSkillVM } from './hard-skill-section.vm';
import { generateLineSpacer } from '@/common-app';
import { TableStyles } from '../doc-parts.vm';

export const renderTitleHardSkillSection = () => {
  return new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: 'Hard Skills', size: '18pt', bold: true })],
  });
};

export const renderTable = (rows: TableRow[], styles?: TableStyles): XmlComponent =>
  new Table({
    ...styles,
    rows: [...rows],
  });

export const renderTableRow = (cells: TableCell[], styles?: TableStyles): XmlComponent =>
  new TableRow({
    ...styles,
    children: [...cells],
  });

export const renderTableCell = (children: XmlComponent[], styles?: TableStyles): XmlComponent =>
  new TableCell({
    ...styles,
    children: [...children],
  });

export const renderParagraph = (children: XmlComponent[], opcions?: IParagraphOptions): XmlComponent =>
  new Paragraph({
    ...opcions,
    children: [...children],
  });

export const renderTextRun = (text: string, options?: IRunOptions): XmlComponent => new TextRun({ ...options, text });
