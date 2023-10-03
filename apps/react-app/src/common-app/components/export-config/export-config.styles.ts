import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const content = css`
  display: flex;
  padding: ${theme.spacing(8)};
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(16)};
  flex-grow: 1;
  width: 100%;
  background: ${theme.palette.info[50]};
  ${theme.typography.mobile.h5};
  @media (min-width: 725px) {
    border-radius: 16px;
    ${theme.typography.tablet.h5};
  }
  @media (min-width: 1024px) {
    ${theme.typography.desktop.h5};
  }
`;

export const optionsContainer = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${theme.spacing(8)};
  width: 100%;
`;

export const colorFieldset = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing(8)};
  width: 100%;

  @media (min-width: 1024px) {
    justify-content: start;
  }

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

export const title = css`
  width: 100%;
  padding-bottom: ${theme.spacing(2)};
  display: block;
  color: ${theme.palette.dark[900]};
  border-bottom: 1px solid ${theme.palette.info[900]};
`;

export const iframeCV = css`
  flex-grow: 1;
  width: 100%;
  border: none;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(8)};
  padding: ${theme.spacing(4)};
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const buttonStyle = css`
  max-width: 358px;
  min-width: min-content;
  widht: 100%;
  @media (min-width: 1024px) {
    width:auto;
  }
`;
