import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.spacing(12)};

  @media (max-width: 834px) {
    width: 95%;
  }
`;

export const headerContainer = css`
  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 75%;
  }
`;

export const divContent = css`
  @media (min-width: 390px) and (max-width: 843px) {
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 1em;
    width: auto;
    margin: 0 auto;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    display: grid;
    grid-template-rows: 10% 70% 10%;
    gap: 1em;
    width: 60%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
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
