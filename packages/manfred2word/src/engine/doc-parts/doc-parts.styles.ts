import { IRunOptions } from 'docx';

export type TextRunStyles = Omit<IRunOptions, 'text'>;

export const styles = {
  aboutme: {
    name: {
      bold: true,
      size: '50pt',
    } as TextRunStyles,
    surnames: {
      bold: true,
      size: '50pt',
    } as TextRunStyles,
    title: {
      allCaps: true,
      size: '25pt',
    } as TextRunStyles,
  },
};
