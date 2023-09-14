import React from 'react';
import * as classes from './modal.styles';
import { Button } from '../button';

interface Props {
  closeModal: (value: boolean) => void;
  exportHtml: () => void;
}
const colorOptions = ['colorOne', 'colorTwo', 'colorThree', 'colorFour', 'colorFive', 'colorSix'];
const colorClasses: Record<string, string> = {
  colorOne: classes.colorOne,
  colorTwo: classes.colorTwo,
  colorThree: classes.colorThree,
  colorFour: classes.colorFour,
  colorFive: classes.colorFive,
  colorSix: classes.colorSix,
};

export const Modal: React.FC<Props> = ({ closeModal, exportHtml }) => {
  const [selectedColor, setSelectedColor] = React.useState('');

  const handleColorSelected = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modalContainer}>
        <div className={classes.selectThemeContainer}>
          <p className={classes.titleSelect}>SELECCIONA TU TEMA FAVORITO</p>
          <div className={classes.colorPickerTheme}>
            {colorOptions.map(color => (
              <div
                key={color}
                className={`${classes.outerCircle} ${selectedColor === color ? classes.selectedColor : ''}`}
              >
                <div
                  className={`${classes.innerCircle} ${colorClasses[color]} `}
                  onClick={() => handleColorSelected(color)}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <p className={`${classes.titleSelect}`}>Ejemplo de previsualización</p>
        <iframe id="iframeCV" className={classes.iframeCV}></iframe>
        <div className={classes.buttonContainer}>
          <Button onClick={() => exportHtml()} showIcon={false} className={classes.buttonStyle}>
            DESCARGAR
          </Button>
          <Button onClick={() => closeModal(false)} showIcon={false} className={classes.buttonStyle}>
            CANCELAR
          </Button>
        </div>
      </div>
    </div>
  );
};
