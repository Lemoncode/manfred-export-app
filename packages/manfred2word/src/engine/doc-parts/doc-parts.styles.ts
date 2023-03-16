import { IRunOptions, BorderStyle, ITableOptions, WidthType, ITableCellOptions, IBorderOptions } from 'docx';

export type TextRunStyles = Omit<IRunOptions, 'text'>;
export type TableStyles = Omit<ITableOptions, 'rows'>;
export type TableCellStyles = Omit<ITableCellOptions, 'children'>;

export const styles = {
  table: {
    borders: {
      top: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE },
    },
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
  } as TableStyles,
  cell: {
    width: {
      size: 40,
      type: WidthType.PERCENTAGE,
    },
  } as TableCellStyles,
  marginCell: {
    margins: {
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
    },
  } as TableCellStyles,
  aboutme: {
    fullname: {
      bold: true,
      size: '18pt',
    } as TextRunStyles,
    title: {
      allCaps: true,
      size: '8pt',
    } as TextRunStyles,
    titleDescription: {
      size: '14pt',
      bold: true,
    } as TextRunStyles,
  },
  paragraphSpacing: {
    spacing: {
      after: 100,
    },
  },
  lineStyles: {
    border: {
      bottom: {
        color: 'DEDCE4',
        space: 100,
        style: 'single',
        size: 20,
      } as IBorderOptions,
    },
  },
};
