import React from 'react';
import * as classes from './modal.styles';
import { Button } from '../button';
import { SelectButton, ColorOptions } from './selectButton';
interface Props {
  closeModal: (value: boolean) => void;
  exportHtml: () => void;
}

export const Modal: React.FC<Props> = ({ closeModal, exportHtml }) => {
  const [selectedColorButton, setSelectedColorButton] = React.useState<ColorOptions>('colorOne');

  const handleColorSelected = (buttonId: ColorOptions) => {
    setSelectedColorButton(buttonId);
  };
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.colorContainer}>
          <p className={classes.title}>SELECCIONA TU TEMA FAVORITO</p>
          <div className={classes.colorContent}>
            <SelectButton id='colorOne' selectedColor={selectedColorButton} onClick={handleColorSelected}></SelectButton>
            <SelectButton id='colorTwo' selectedColor={selectedColorButton} onClick={handleColorSelected}></SelectButton>
            <SelectButton id='colorThree' selectedColor={selectedColorButton} onClick={handleColorSelected}></SelectButton>
            <SelectButton id='colorFour' selectedColor={selectedColorButton} onClick={handleColorSelected}></SelectButton>
            <SelectButton id='colorFive' selectedColor={selectedColorButton} onClick={handleColorSelected}></SelectButton>
            <SelectButton id='colorSix' selectedColor={selectedColorButton} onClick={handleColorSelected}></SelectButton>
          </div>
        </div>
        <p className={`${classes.title}`}>Ejemplo de previsualización</p>
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
