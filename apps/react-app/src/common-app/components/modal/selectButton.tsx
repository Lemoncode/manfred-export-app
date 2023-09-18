import React from "react";
import { cx } from "@emotion/css";
import * as classes from './selectButton.styles';

export type ColorOptions = 'colorOne' | 'colorTwo' | 'colorThree' | 'colorFour' | 'colorFive' | 'colorSix';
interface SelectButtonProps {
  id: string;
  selectedColor?: ColorOptions;
  className?: string;
  innerClassName?: string;
  onClick: (colorId: ColorOptions) => void;
}

export const SelectButton: React.FC<SelectButtonProps> = props => {
  const { id, selectedColor, className, innerClassName, onClick } = props;
  const handleClick = () => {
    onClick(id as ColorOptions);
  }

  return (
    <div id={id} className={cx(classes.outerCircle, className, {[classes.selectedColor]: selectedColor === id})} onClick={handleClick}>
      <div className={cx(classes.innerCircle, innerClassName)}></div>
    </div>
  )
}
