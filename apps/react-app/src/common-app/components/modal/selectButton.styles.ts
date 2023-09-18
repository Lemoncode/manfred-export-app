import { css } from '@emotion/css';
import { theme } from '@/core/theme';


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
  background-color: red;
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
export const selectedColor = css `
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
`;
