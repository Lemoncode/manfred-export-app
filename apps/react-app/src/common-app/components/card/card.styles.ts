import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(4)};
  padding: ${theme.spacing(8)};
  width: 100%;
  max-width: 350px;
  min-width: 300px;
  border-radius: 50px;
  background-color: ${theme.palette.info[50]};
`;

export const avatar = css`
  display: flex;
  place-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${theme.palette.info[500]};
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const name = css`
  display: flex;
  place-content: center;
  width: 100%;
  text-align: center;
  font-family: 'Sanchez', serif;
  font-size: ${theme.spacing(8)};
  color: ${theme.palette.dark[900]};
`;

export const job = css`
  display: flex;
  place-content: center;
  width: 100%;
  text-align: center;
  ${theme.typography.subtitle1};
  color: ${theme.palette.info[900]};
`;

export const description = css`
  display: flex;
  place-content: center;
  flex-grow: 1;
  width: 100%;
  ${theme.typography.body1};
  color: ${theme.palette.dark[700]};
`;
