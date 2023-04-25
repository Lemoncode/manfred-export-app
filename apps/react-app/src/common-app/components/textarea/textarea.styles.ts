import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const textarea = css`
  width: 358px;
  height: 538px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${theme.palette.dark[700]};
  color: ${theme.palette.light[700]};

  @media (min-width: 725px) {
    width: 706px;
    height: 661px;
  }

  @media (min-width: 1024px) {
    width: 1004px;
    height: 442px;
  }
`;
