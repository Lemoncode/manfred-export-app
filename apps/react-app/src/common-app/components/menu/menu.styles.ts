import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const container = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 227px;
  height: auto;
  /* padding: 32px; */
  right: 2%;
  padding: 32px;
  gap: 26px;

  top: 67px;
  border-radius: 0px 0px 0px 12px;

  background-color: ${theme.palette.dark[50]};
`;

export const content = css`
  width: 163px;
`;

export const span = css`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 44px;
  cursor: pointer;
  padding: 10px;
`;
