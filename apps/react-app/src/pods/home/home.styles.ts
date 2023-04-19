import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media (max-width: 500px) {
  }
`;

export const nav = css`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  align-items: center;
  position: fixed;
  top: 0;
  height: ${theme.spacing(12)};
  width: 100%;
  background: ${theme.palette.dark[900]};
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1024px;

  @media (max-width: 500px) {
    /* font: ${theme.typography.caption}; <--  */
    margin: ${theme.spacing(2)};
  }

  /* @media (min-width: 1024px) {
    width: 1024px;
  } */
`;

export const message = css`
  display: grid;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: ${theme.spacing(20)};
  padding: ${theme.spacing(5)};
  background-color: ${theme.palette.primary[900]};
  color: ${theme.palette.info[500]};

  span {
    color: ${theme.palette.warning[400]};
  }

  @media (max-width: 500px) {
    font: ${theme.typography.caption};
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
    grid-template-rows: 10% 80% 10%;
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
  color: ${theme.palette.info[600]};

  @media (max-width: 500px) {
    width: 400px;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    width: 706px;
  }

  @media (min-width: 1024px) {
    width: 496px;
  }
`;

export const videoContainer = css`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 400px;
  }

  @media (max-width: 834px) {
    justify-content: center;
    text-align: center;
    margin: 1em;
  }

  @media (min-width: 1024px) {
    height: 80%;
  }
`;

export const videoContent = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.dark[700]};
  padding: 1em;
  margin-bottom: 1em;
`;

export const span1 = css`
  text-align: center;
  font: ${theme.typography.caption};
  color: ${theme.palette.info[600]};
`;

export const video = css`
  width: 100%;
  @media (max-width: 834px) {
    width: 90%;
  }
`;

export const divFooter = css`
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: 10vh;

  /* @media (min-width: 1280px) {
    position: relative;
    left: 10em;
  }

  @media (min-width: 1400px) {
    position: relative;
    left: 20em;
  } */
`;
