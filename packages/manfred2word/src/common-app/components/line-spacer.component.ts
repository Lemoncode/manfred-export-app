import { Paragraph } from 'docx';
import { styles } from './line-spacer.styles';

export const generateLineSpacer = (): Paragraph =>
  new Paragraph({
    spacing: { line: 400 },
    text: '',
    ...styles.lineStyles,
  });
