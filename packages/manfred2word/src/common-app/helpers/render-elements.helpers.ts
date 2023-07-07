import { IParagraphOptions, IRunOptions, Paragraph, Table, TableCell, TableRow, TextRun, XmlComponent } from 'docx';
import { TableStyles } from '../model/doc-parts.vm';

export const renderTable = (rows: TableRow[], styles?: TableStyles): XmlComponent =>
  new Table({
    ...styles,
    rows: [...rows],
  });

export const renderTableRow = (cells: TableCell[], styles?: TableStyles): TableRow =>
  new TableRow({
    ...styles,
    children: [...cells],
  });

export const renderTableCell = (children: XmlComponent[], styles?: TableStyles): TableCell =>
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
