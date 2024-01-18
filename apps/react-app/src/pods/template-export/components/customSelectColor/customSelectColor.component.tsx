import React from 'react';
import { cx } from '@emotion/css';
import { ColorTheme, HexCommonColor } from '@lemoncode/manfred2html';
import { InputRadioButton } from './components';
import * as classes from './customSelectColor.styles';

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

  React.useEffect(() => {
    if (window.innerWidth >= 1024) {
      setCustomSelectState('open');
    }
  }, []);
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
        {Object.keys(HexCommonColor).map(colorKey => (
          <InputRadioButton
            key={colorKey}
            value={colorKey as ColorTheme}
            hexColor={HexCommonColor[colorKey as keyof typeof HexCommonColor]}
            onChange={onChange}
          />
        ))}
      </fieldset>
    </div>
  );
};
