import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const nav = css`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.palette.dark[900]};
  height: 50px;
`;

export const logo = css`
  margin-left: ${theme.spacing(4)};
  height: ${theme.spacing(8)};

  @media (min-width: 725px) {
    background-image: url('/assets/logo-with-name.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 135px;
  }

  @media (max-width: 450px) {
    background-image: url('/assets/logo.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: ${theme.spacing(8)};
  }
`;

export const labelIcon = css`
  height: 100%;
`;

export const iconMenu = css`
  cursor: pointer;
  margin-right: ${theme.spacing(4)};
`;

export const hidde = css`
  display: none;
`;
