import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  border-bottom: 1px solid ${theme.palette.info[600]};
`;
export const container = css`
  display: flex;
  min-width: 100%;
  height: 48px;
  padding: ${theme.spacing(3)} ${theme.spacing(4)};
  align-items: flex-start;
  gap: ${theme.spacing(2)};
  align-self: stretch;
  border-radius: 8px;
  background: ${theme.palette.info[50]};

  span {
    flex: 1 0 0;
    color: ${theme.palette.info[900]};
    font-family: Sanchez;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const colorFieldset = css`
  display: flex;
  padding: ${theme.spacing(8)} ${theme.spacing(0)};
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: ${theme.spacing(8)};
  align-self: stretch;
`;
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
