import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const header = css`
  color: ${theme.palette.primary[50]};
  font: ${theme.typography.desktop.h4};
  padding: ${theme.spacing(6)};
  text-align: center;
  display: block;
  margin: 0 auto;

  @media (min-width: 834px) {
    font: ${theme.typography.desktop.h2};
  }
`;

export const span1 = css`
  color: ${theme.palette.primary[500]};
`;

export const span2 = css`
  color: ${theme.palette.secondary[500]};
`;
