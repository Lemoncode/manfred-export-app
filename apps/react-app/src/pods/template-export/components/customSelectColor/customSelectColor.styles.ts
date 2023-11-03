import { css, keyframes } from '@emotion/css';
import { theme } from '@/core/theme';

const openAnimation = keyframes`
  0% {
    max-height: 48px;
  }

  100% {
    max-height: 500px;
  }
`;
const closeAnimation = keyframes`
  0% {
    max-height: 500px;
  }

  100% {
    max-height: 48px;
  }
`;

export const rootOpenAnimation = css`
  animation: ${openAnimation} 0.8s ease forwards;
`;
export const rootCloseAnimation = css`
  animation: ${closeAnimation} 0.8s ease forwards;
`;

export const root = css`
  border-bottom: 1px solid ${theme.palette.info[600]};
  overflow: hidden;
  max-height: 48px;
`;
export const labelContainer = css`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing(3)} ${theme.spacing(4)};
  gap: ${theme.spacing(2)};
  border-radius: 8px;
  background: ${theme.palette.info[50]};
  cursor: pointer;
  span {
    color: ${theme.palette.info[900]};
    font-family: Sanchez;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const colorFieldset = css`
  background: ${theme.palette.info[50]};
  display: flex;
  padding: ${theme.spacing(8)} ${theme.spacing(0)};
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing(8)};
`;

export const rotate = (customSelectState: boolean) => css`
  rotate: ${customSelectState ? '180deg' : '0deg'};
  transition: rotate 0.3s ease;
`;
