import React from 'react';
import { theme } from '@/core/theme';
import { Button } from '@/common-app/components';
import * as classes from './export-config.styles';
interface Props {
  htmlTemplate: string;
  cancelExport: () => void;
  exportConfigSelection: (color?: string) => void;
}

export const ExportConfig: React.FC<Props> = props => {
  const { exportConfigSelection, cancelExport, htmlTemplate } = props;
  const [color, setColor] = React.useState<string>(theme.palette.primary[600]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleExportConfigSelection = () => {
    exportConfigSelection(color);
  };

  return (
    <div className={classes.content}>
      <div className={classes.optionsContainer}>
        <p className={classes.title}>SELECCIONA TU TEMA FAVORITO</p>
        <fieldset className={classes.colorFieldset}>
          <input
            type="radio"
            id={theme.palette.primary[600]}
            name="color"
            value={theme.palette.primary[600]}
            className={classes.inputRadioButton(theme.palette.primary[600])}
            onChange={handleColorChange}
            defaultChecked
          />
          <input
            type="radio"
            id={theme.palette.secondary[600]}
            name="color"
            value={theme.palette.secondary[600]}
            className={classes.inputRadioButton(theme.palette.secondary[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.success[600]}
            name="color"
            value={theme.palette.success[600]}
            className={classes.inputRadioButton(theme.palette.success[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.warning[600]}
            name="color"
            value={theme.palette.warning[600]}
            className={classes.inputRadioButton(theme.palette.warning[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.error[600]}
            name="color"
            value={theme.palette.error[600]}
            className={classes.inputRadioButton(theme.palette.error[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.dark[600]}
            name="color"
            value={theme.palette.dark[600]}
            className={classes.inputRadioButton(theme.palette.dark[600])}
            onChange={handleColorChange}
          />
        </fieldset>
        <p className={`${classes.title}`}>Ejemplo de previsualización</p>
        <iframe id="iframeCV" className={classes.iframeCV} srcDoc={htmlTemplate}></iframe>
        <div className={classes.buttonContainer}>
          <Button onClick={handleExportConfigSelection} showIcon={false} className={classes.buttonStyle}>
            DESCARGAR
          </Button>
          <Button onClick={cancelExport} showIcon={false} className={classes.buttonStyle}>
            CANCELAR
          </Button>
        </div>
      </div>
    </div>
  );
};
