import { HexColor, ColorTheme } from '@lemoncode/manfred2html';
import * as classes from './inputRadioButton.styles';

interface Props {
  value: ColorTheme;
  hexColor: HexColor;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRadioButton: React.FC<Props> = ({ value, hexColor, onChange }) => {
  return (
    <input
      type="radio"
      id={value}
      name="color"
      value={value}
      className={classes.inputRadioButton(hexColor)}
      onChange={onChange}
      defaultChecked={value === 'default'}
    />
  );
};
