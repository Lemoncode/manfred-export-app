import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const modalWrapper = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: absolute;
  z-index:9999;
  top: 0;
  background: rgba(13, 20, 24, 0.75);
  overflow:hidden;

  @media (min-width: 725px){
    padding: ${theme.spacing(4)};;
  }
  @media (min-width: 1024px){
    padding: 64px;
  }
`;
export const modalContainer = css`
  display: flex;
  padding: ${theme.spacing(4)};;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  flex: 1 0 0;
  align-self: stretch;
  background: ${theme.palette.info[50]};
  font: ${theme.typography.mobile.h5};
  font-family: ${theme.typography.mobile.h5.fontFamily};
  @media (min-width: 725px){
    border-radius: 16px;
    font: ${theme.typography.tablet.h5};
  }
  @media (min-width: 1024px){
    font: ${theme.typography.desktop.h5};
  }

`;

export const selectThemeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;
export const selectThemeTitle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  `;
  export const titleSelect = css`
  width: 100%;
  padding-bottom: ${theme.spacing(2)};
  display: block;
  color: ${theme.palette.dark[900]};
  border-bottom: 1px solid ${theme.palette.dark[900]};
  `;
  export const colorPickerTheme = css`
  color: ${theme.palette.dark[900]};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-self: stretch;
  gap: 32px 24px;
  
  @media(min-width: 1024px) {
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
`;

export const innerCircle = css`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  position: absolute;
`;

export const colorOne = css`
  background: ${theme.palette.primary[600]};
`;
export const colorTwo = css`
  background: ${theme.palette.secondary[600]};
`;
export const colorThree = css`
  background: ${theme.palette.success[600]};
`;
export const colorFour = css`
  background: ${theme.palette.warning[600]};
`;
export const colorFive = css`
  background: ${theme.palette.error[600]};
`;
export const colorSix = css`
  background: ${theme.palette.dark[600]};
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
  @media (min-width: 725px){
    flex-direction: row;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }

`;

export const buttonStyle = css `
  @media (max-width: 1024px) {
    width: 358px;
  }

`;
export const selectedColor = css `
  color: ${theme.palette.light[50]};
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
`;
