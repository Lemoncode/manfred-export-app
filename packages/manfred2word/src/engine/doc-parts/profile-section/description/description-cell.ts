import { ITableCellOptions, Paragraph, TableCell, TextRun } from 'docx';
import { styles } from './description-cell.styles';
import { ProfileSectionVm } from '../profile-section.vm';

/*
  ** This part of the CV *
  =============================================
  | Presentación
  | ------------------------------------------|
  | Llevo casi dos décadas desarrollando      |
  |  software, ocupando puestos a lo largo de |
  |  toda la cadena de valor -programacion,   |
  |  diseño de producto, marketing, ventas y  |
  |  gestión de equipos,                      |
  |                                           |
  | ------------------------------------------|

*/
export const generateDescriptionCell = (profileSectionVm: ProfileSectionVm): TableCell => {
  const { description } = profileSectionVm;
  return new TableCell({
    ...styles.marginCell,
    children: [
      new Paragraph({
        children: [new TextRun({ text: 'Presentación', ...styles.titleDescription })],
        ...styles.paragraphSpacing,
      }),
      new Paragraph({
        children: [new TextRun(description)],
      }),
    ],
  } as ITableCellOptions);
};
