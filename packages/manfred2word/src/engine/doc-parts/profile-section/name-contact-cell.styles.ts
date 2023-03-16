import { IRunOptions, WidthType, ITableCellOptions, IBorderOptions } from 'docx';

type TextRunStyles = Omit<IRunOptions, 'text'>;
type TableCellStyles = Omit<ITableCellOptions, 'children'>;

export const styles = {
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
  fullname: {
    bold: true,
    size: '18pt',
  } as TextRunStyles,
  title: {
    allCaps: true,
    size: '8pt',
  } as TextRunStyles,
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
