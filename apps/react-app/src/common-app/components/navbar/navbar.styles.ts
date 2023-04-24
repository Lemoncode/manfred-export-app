import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const nav = css`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  /* box-sizing: border-box; */
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  background: ${theme.palette.dark[900]};
  /* border: solid red; */
`;

export const items_1 = css`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-left: ${theme.spacing(4)};
`;

export const items_2 = css`
  /* background-image: url('/assets/Version-Beta-2.svg');
  background-repeat: no-repeat; */

  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 104px;

  @media (max-width: 725px) {
    margin-right: 0px;
  }
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

export const img_4 = css`
  position: absolute;
  height: 65px;
`;

export const img_5 = css`
  position: relative;
  /* z-index: 2; */
  left: 5px;
  height: 35px;
`;

export const img_6 = css`
  &:hover {
    cursor: pointer;
  }
`;
