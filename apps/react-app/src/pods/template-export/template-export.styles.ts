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

export const textarea = css`
  width: 100%;
  height: 538px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${theme.palette.dark[700]};
  color: ${theme.palette.light[700]};

  @media (min-width: 725px) {
    height: 661px;
  }

  @media (min-width: 1024px) {
    height: 442px;
  }
`;

export const buttonClass = css`
  width: 50%;
  /* margin:  auto; */
`;
