import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;
  padding: ${theme.spacing(4)};

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */

  & > :last-child {
    align-self: flex-end;
  }
`;

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

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  gap: ${theme.spacing(3)};
  margin-top: 50px;
  padding: ${theme.spacing(2)};
  text-align: center;
  width: 100%;
  max-width: 1024px;
  box-sizing: border-box;
`;

export const message = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing(2)};
  width: 100%;
  padding: ${theme.spacing(2)};
  box-sizing: border-box;
  background-color: ${theme.palette.primary[900]};
  color: ${theme.palette.info[500]};
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;

  span {
    color: ${theme.palette.warning[400]};
  }
`;

export const grid = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(3)};

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const description = css`
  width: 100%;
  color: ${theme.palette.info[600]};
  font: ${theme.typography.body1};
  text-align: left;

  a {
    color: ${theme.palette.primary[500]};
    text-decoration: none;
  }

  @media (min-width: 725px) {
    width: ${theme.spacing(160)};
  }

  @media (min-width: 1024px) {
    max-width: ${theme.spacing(128)};
    margin-top: ${theme.spacing(10)};
    align-self: flex-start;
  }
`;

export const videoContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: ${theme.spacing(5)};

  @media (min-width: 725px) {
    width: 706px;
  }

  @media (min-width: 1024px) {
    height: 80%;
    width: 100%;
    display: grid;
  }
`;

export const videoContent = css`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;
  background-color: ${theme.palette.dark[700]};
  padding: ${theme.spacing(2)};

  video {
    border-radius: ${theme.spacing(5)};
    width: 100%;
  }
`;

export const span1 = css`
  text-align: center;
  font: ${theme.typography.caption};
  color: ${theme.palette.info[600]};
`;
