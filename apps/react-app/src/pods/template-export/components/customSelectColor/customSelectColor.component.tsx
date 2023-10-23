import React from 'react';
import { theme } from '@/core/theme';
import * as classes from './customSelectColor.styles';
import { cx } from '@emotion/css';

interface Props {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
type CustomSelectState = 'noInit' | 'open' | 'close';

export const CustomSelectColor: React.FC<Props> = ({ label, onChange }) => {
  const [customSelectState, setCustomSelectState] = React.useState<CustomSelectState>('noInit');

  const toggleIsOpen = () => {
    setCustomSelectState(customSelectState === 'open' ? 'close' : 'open');
  };
  return (
    <div
      className={cx(classes.root, {
        [classes.rootOpenAnimation]: customSelectState === 'open',
        [classes.rootCloseAnimation]: customSelectState === 'close',
      })}
    >
      <div className={classes.labelContainer} onClick={toggleIsOpen}>
        <span>{label}</span>
        <img
          src="../assets/arrow_select.svg"
          alt="arrow select"
          className={classes.rotate(customSelectState === 'open')}
        />
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
