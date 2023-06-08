import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(16)};
  overflow-y: auto;
  padding: ${theme.spacing(4)};
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */

  & > :last-child {
    align-self: flex-end;
  }
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  width: 100%;
  margin-top: 50px;
  max-width: 1024px;
  gap: ${theme.spacing(8)};
  box-sizing: border-box;
`;

export const textarea = css`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: ${theme.spacing(4)};
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${theme.palette.dark[700]};
  color: ${theme.palette.light[700]};
`;

export const buttonClass = css`
  width: 50%;
  cursor: pointer;
`;
