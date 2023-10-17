import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const content = css`
  display: flex;
  padding: ${theme.spacing(4)};
  flex-direction: column;
  align-items: stretch;
  gap: ${theme.spacing(10)};
  flex-grow: 1;
  width: 100%;
  background: ${theme.palette.info[50]};
  ${theme.typography.mobile.h5};
  @media (min-width: 725px) {
    ${theme.typography.tablet.h5};
    padding: ${theme.spacing(8)};
    gap: ${theme.spacing(12)};
    flex: 1 0 0;
    border-radius: 16px;
    align-items: stretch;
  }
  @media (min-width: 1024px) {
    ${theme.typography.desktop.h5};
    align-items: flex-center;
    gap: 32px;
    align-self: stretch;
    padding: ${theme.spacing(8)};
  }
`;

export const colorFieldset = css`
  display: flex;
  padding: 32px 0px;
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

export const title = css`
  width: 100%;
  padding-bottom: ${theme.spacing(2)};
  display: relative;
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
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: ${theme.spacing(8)};
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const buttonStyle = css`
  max-width: 358px;
  min-width: min-content;
  width: 100%;

  @media (min-width: 1024px) {
    width: auto;
  }
`;

export const downloadMessage = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(4)};
  padding: ${theme.spacing(4)};
  color: ${theme.palette.success[500]};
  background-color: ${theme.palette.dark[500]};

  ${theme.typography.mobile.h5};
  @media (min-width: 725px) {
    ${theme.typography.tablet.h5};
  }
  @media (min-width: 1024px) {
    ${theme.typography.desktop.h5};
  }
`;

export const optionsContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(10)};
  flex-grow: 1;
  @media (min-width: 725px) {
    gap: ${theme.spacing(12)};
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    align-self: stretch;

    height: 512px;
  }
`;

export const optionsContent = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(10)};

  @media (min-width: 725px) {
    gap: ${theme.spacing(12)};
  }

  @media (min-width: 1024px) {
    gap: ${theme.spacing(4)};
  }
`;
export const selectContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(10)};

  @media (min-width: 725px) {
    gap: ${theme.spacing(4)};
    flex-direction: row;
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 274px;
    flex-direction: column;
    gap: ${theme.spacing(4)};
  }
`;
export const selectColorContainer = css`
  @media (min-width: 1024px) {
    width: 274px;
    flex-direction: column;
    gap: ${theme.spacing(4)};
  }
`;
export const prevContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(10)};
  flex-grow: 1;

  @media (min-width: 725px) {
    gap: ${theme.spacing(12)};
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
    gap: ${theme.spacing(8)};
  }
`;
