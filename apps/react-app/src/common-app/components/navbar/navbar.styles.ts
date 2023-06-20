import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const nav = css`
  position: fixed;
  display: flex;
  height: 50px;
  top: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0px ${theme.spacing(4)};
  align-items: center;
  background: ${theme.palette.dark[900]};
  box-sizing: border-box;
  z-index: 999;
`;

export const logo = css`
  background-image: url('/assets/logo.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 32px;
  width: 32px;

  @media (min-width: 725px) {
    background-image: url('/assets/logo-with-name.svg');
    width: 135px;
  }
`;

export const labelIcon = css`
  height: 100%;
`;

export const iconMenu = css`
  cursor: pointer;
`;

export const hidde = css`
  display: none;
`;
