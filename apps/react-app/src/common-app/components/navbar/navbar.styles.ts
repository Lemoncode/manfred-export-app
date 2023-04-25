import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const nav = css`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px ${theme.spacing(4)};
  align-items: center;
  background: ${theme.palette.dark[900]};
  height: 50px;
  box-sizing: border-box;
`;

export const logo = css`
  height: 32px;
  background-image: url('/assets/logo.svg');
  background-repeat: no-repeat;
  background-size: cover;
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
