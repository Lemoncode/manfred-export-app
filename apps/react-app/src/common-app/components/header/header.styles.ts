import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const header = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.palette.info[50]};
  font-family: Sanchez;
  font-style: Regular;
  font-size: 24px;
  line-height: 32px;
  width: 100%;

  @media (min-width: 725px) {
    font-size: 40px;
    line-height: 56px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 56px;
  }
`;

export const span1 = css`
  color: ${theme.palette.primary[500]};
`;

export const span2 = css`
  color: ${theme.palette.secondary[500]};
`;
