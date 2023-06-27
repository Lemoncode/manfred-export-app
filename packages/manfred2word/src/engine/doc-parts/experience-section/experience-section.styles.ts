import { BorderStyle, IBorderOptions, WidthType } from 'docx';
import { TableStyles } from '../doc-parts.vm';

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
};
