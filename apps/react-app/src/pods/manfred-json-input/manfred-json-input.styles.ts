import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const nav = css`
  display: flex;
  flex-direction: row;
  justify: space-between;
  height: 50px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  background: ${theme.palette.dark[900]};
`;

export const divh1 = css`
  @media (min-width: 1280px) {
    margin: 0 auto;
    width: 75%;
  }
`;

export const header = css`
  color: ${theme.palette.primary[50]};
  font: ${theme.typography.desktop.h1};
  padding: ${theme.spacing(4)};

  & .span1 {
    color: ${theme.palette.primary[500]};
  }

  & .span2 {
    color: ${theme.palette.secondary[500]};
  }

  @media (min-width: 1280px) {
    text-align: center;
    display: block;
    margin: 0 auto;
  }
`;

export const divForm = css`
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 80%;
    margin: 0 auto;
  }
`;

export const divText = css`
  @media (min-width: 1280px) {
    width: 496px;
  }
`;

export const form = css`
  display: flex;
  justify-content: center;
`;

export const footer = css`
  height: 100px;
  width: 100%;
  left: 100px;
  top: 100px;
  border-radius: 0px;
  margin: 1em;
  border: solid;
`;
