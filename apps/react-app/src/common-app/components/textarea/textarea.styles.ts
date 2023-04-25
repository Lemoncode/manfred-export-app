import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const textarea = css`
  width: 1004px;
  height: 442px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${theme.palette.dark[700]};
  color: ${theme.palette.light[700]};
`;
