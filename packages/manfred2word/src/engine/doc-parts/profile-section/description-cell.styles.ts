import { IRunOptions, ITableCellOptions } from 'docx';

type TextRunStyles = Omit<IRunOptions, 'text'>;
type TableCellStyles = Omit<ITableCellOptions, 'children'>;

export const styles = {
  marginCell: {
    margins: {
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
    },
  } as TableCellStyles,
  titleDescription: {
    size: '14pt',
    bold: true,
  } as TextRunStyles,

  paragraphSpacing: {
    spacing: {
      after: 100,
    },
  },
};
