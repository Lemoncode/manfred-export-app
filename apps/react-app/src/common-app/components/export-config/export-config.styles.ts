import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const content = css`
  display: flex;
  padding: ${theme.spacing(4)};
  flex-direction: column;
  align-items: center;
  gap: 64px;
  flex: 1 0 0;
  align-self: stretch;
  background: ${theme.palette.info[50]};
  font: ${theme.typography.mobile.h5};
  font-family: ${theme.typography.mobile.h5.fontFamily};
  @media (min-width: 725px) {
    border-radius: 16px;
    font: ${theme.typography.tablet.h5};
  }
  @media (min-width: 1024px) {
    font: ${theme.typography.desktop.h5};
  }
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;
export const colorContent = css`
  color: ${theme.palette.dark[900]};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-self: stretch;
  gap: 32px 24px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-content: start;
  }
`;

export const outerCircle = css`
  width: 82px;
  height: 82px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  &[type: 'radio'] {
    border: none;
  }
`;

export const innerCircle = (color: string) => css`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${color};
`;

export const title = css`
  width: 100%;
  padding-bottom: ${theme.spacing(2)};
  display: block;
  color: ${theme.palette.dark[900]};
  border-bottom: 1px solid ${theme.palette.dark[900]};
`;

export const iframeCV = css`
  flex-grow: 1;
  width: 100%;
  border: none;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  align-self: strech;
  padding: 16px;
`;

export const buttonStyle = css`
  @media (max-width: 725px) {
    width: 358px;
  }
`;
