import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const nav = css`
  position: fixed;
  z-index: 999;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  background: ${theme.palette.dark[900]};
`;

export const items_1 = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px blue;
  width: auto;
  height: 2em;
`;

export const items_3 = css`
  margin-right: ${theme.spacing(4)};
`;

export const img_1 = css`
  @media (max-width: 725px) {
    display: none;
  }
`;

export const img_2 = css`
  margin-top: ${theme.spacing(1.5)};

  @media (max-width: 725px) {
    display: none;
  }
`;

export const img_3 = css``;

export const img_5 = css``;
