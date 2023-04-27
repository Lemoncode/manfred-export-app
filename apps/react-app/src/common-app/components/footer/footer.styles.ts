import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font: ${theme.typography.caption};
  color: ${theme.palette.primary[500]};
  /* border: 1px solid red; */
  /* box-sizing: border-box; */
  text-align: right;
`;

export const link = css`
  color: ${theme.palette.warning[500]};
  text-decoration: none;
`;
