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
  padding-top: 50px;

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
  flex-grow: 1;
  gap: ${theme.spacing(4)};
  width: 100%;
  max-width: 1024px;
  padding: ${theme.spacing(4)};
  box-sizing: border-box;
`;

export const title = css`
  display: flex;
  place-content: center;
  width: 100%;
  padding: ${theme.spacing(2)} 0px;
  color: ${theme.palette.info[50]};
  text-align: center;
  ${theme.typography.mobile.h2};

  @media (min-width: 768px) {
    ${theme.typography.tablet.h2};
  }

  @media (min-width: 1024px) {
    ${theme.typography.desktop.h2};
  }
`;
