import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
`;

export const nav = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  align-items: center;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  left: 0px;
  background: ${theme.palette.dark[900]};
`;

export const container = css`
  width: 1024px;
`;

export const headerContainer = css`
  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 75%;
  }
`;

export const header = css`
  color: ${theme.palette.primary[50]};
  font: ${theme.typography.desktop.h1};
  padding: ${theme.spacing(4)};
  text-align: center;
  display: block;
  margin: 0 auto;

  @media (min-width: 834px) {
    font: ${theme.typography.desktop.h2};
  }
`;

export const span1 = css`
  color: ${theme.palette.primary[500]};
`;

export const span2 = css`
  color: ${theme.palette.secondary[500]};
`;

export const divForm = css`
  @media (min-width: 390px) and (max-width: 843px) {
    display: grid;
    grid-template-rows: 10% 70% 10%;
    gap: 1em;
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    display: grid;
    grid-template-rows: 10% 70% 10%;
    gap: 1em;
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 80%;
    margin: 0 auto;
  }
`;

export const divText = css`
  @media (min-width: 834px) and (max-width: 1024px) {
    width: 706;
  }

  @media (min-width: 1024px) {
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
  margin: 1em;
`;
