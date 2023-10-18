import React from 'react';
import { theme } from '@/core/theme';
import * as classes from './customSelectColor.styles';

interface Props {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomSelectColor: React.FC<Props> = ({ label, onChange }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className={classes.root}>
      <div className={classes.container} onClick={toggleIsOpen}>
        <span>{label}</span>
        <img src="../assets/arrow_down_select.svg" alt="arrow down select" />
      </div>
      {isOpen && (
        <fieldset className={classes.colorFieldset}>
          <input
            type="radio"
            id={theme.palette.primary[600]}
            name="color"
            value={theme.palette.primary[600]}
            className={classes.inputRadioButton(theme.palette.primary[600])}
            onChange={onChange}
            defaultChecked
          />
          <input
            type="radio"
            id={theme.palette.secondary[600]}
            name="color"
            value={theme.palette.secondary[600]}
            className={classes.inputRadioButton(theme.palette.secondary[600])}
            onChange={onChange}
          />
          <input
            type="radio"
            id={theme.palette.success[600]}
            name="color"
            value={theme.palette.success[600]}
            className={classes.inputRadioButton(theme.palette.success[600])}
            onChange={onChange}
          />
          <input
            type="radio"
            id={theme.palette.warning[600]}
            name="color"
            value={theme.palette.warning[600]}
            className={classes.inputRadioButton(theme.palette.warning[600])}
            onChange={onChange}
          />
          <input
            type="radio"
            id={theme.palette.error[600]}
            name="color"
            value={theme.palette.error[600]}
            className={classes.inputRadioButton(theme.palette.error[600])}
            onChange={onChange}
          />
          <input
            type="radio"
            id={theme.palette.dark[600]}
            name="color"
            value={theme.palette.dark[600]}
            className={classes.inputRadioButton(theme.palette.dark[600])}
            onChange={onChange}
          />
        </fieldset>
      )}
    </div>
  );
};
