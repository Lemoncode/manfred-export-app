import React from 'react';
import { theme } from '@/core/theme';
import * as classes from './customSelectColor.styles';
import { cx } from '@emotion/css';

interface Props {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
type ToggleStatus = 'noInit' | 'open' | 'close';

export const CustomSelectColor: React.FC<Props> = ({ label, onChange }) => {
  const [isOpen, setIsOpen] = React.useState<ToggleStatus>('noInit');
  const [rotate, setRotate] = React.useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(isOpen === 'open' ? 'close' : 'open');
    setRotate(!rotate);
  };
  return (
    <div
      className={cx(classes.root, {
        [classes.rootOpenAnimation]: isOpen === 'open',
        [classes.rootCloseAnimation]: isOpen === 'close',
      })}
    >
      <div className={classes.labelContainer} onClick={toggleIsOpen}>
        <span>{label}</span>
        <img src="../assets/arrow_select.svg" alt="arrow select" className={classes.rotate(rotate)} />
      </div>
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
    </div>
  );
};
