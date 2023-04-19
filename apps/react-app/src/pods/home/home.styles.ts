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
`;

export const message = css`
  display: grid;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin: ${theme.spacing(20)} 0px ${theme.spacing(2)};
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

export const grid = css`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 48% 50%;
    gap: 1em;
  }
`;

export const divText = css`
  color: ${theme.palette.info[600]};
  margin-bottom: 1em;

  @media (max-width: 500px) {
    width: 380px;
    margin: 0 auto;
  }

  @media (max-width: 834px) and (min-width: 500px) {
    width: ${theme.spacing(160)};
    margin: 0 auto;
    margin-bottom: 1em;
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    width: 75%;
    max-width: 1024px;
    margin: 0 auto;
    margin-bottom: 1em;
  }
`;

export const videoContainer = css`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 380px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 834px) {
    justify-content: center;
    text-align: center;
    margin: 1em;
  }

  @media (min-width: 1024px) {
    height: 80%;
    display: grid;
  }
`;

export const videoContent = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.dark[700]};
  padding: 1em;
  margin-bottom: 1em;

  @media (max-width: 834px) {
    width: 90%;
  }
`;

export const span1 = css`
  text-align: center;
  font: ${theme.typography.caption};
  color: ${theme.palette.info[600]};
`;
