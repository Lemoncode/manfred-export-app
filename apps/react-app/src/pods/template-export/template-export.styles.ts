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
  padding: ${theme.spacing(8)};

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

export const buttonClass = css`
  grid-area: button;
  width: 50%;
  margin: 32px auto;
`;
