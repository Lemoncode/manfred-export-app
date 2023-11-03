import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const inputRadioButton = (color: string) => css`
  appearance: none;
  width: 82px;
  height: 82px;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-color: ${color};
  cursor: pointer;
  outline: none;
  border: 15px solid ${theme.palette.info[50]};
  &[type='radio']:checked {
    box-shadow: 0px 0px 0px 4px ${theme.palette.dark[200]};
  }
`;
