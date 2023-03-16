import {
  IImageOptions,
  IParagraphPropertiesOptions,
  IRunOptions,
  ISectionOptions,
  ITableCellOptions,
  ITableOptions,
  ITableRowOptions,
} from 'docx';
import { IPropertiesOptions } from 'docx/build/file/core-properties';

export type SectionStyles = Omit<ISectionOptions, 'children'>;
export type DocumentStyle = Omit<IPropertiesOptions, 'sections'>;
export type TableStyles = Omit<ITableOptions, 'rows'>;
export type TableCellStyles = Omit<ITableCellOptions, 'children'>;
export type TableRowStyles = Omit<ITableRowOptions, 'children'>;
export type TextRunStyles = Omit<IRunOptions, 'text'>;
export type ParagraphStyles = IParagraphPropertiesOptions;
export type ImageStyles = Omit<IImageOptions, 'data'>;

export interface RowProperties {
  rowStyles?: TableRowStyles;
  cellStyles?: TableCellStyles;
}
