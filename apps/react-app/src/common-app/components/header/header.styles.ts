import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const header = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  color: ${theme.palette.primary[50]};
  font: ${theme.typography.desktop.h2};

  @media (max-width: 834px) {
    font: ${theme.typography.desktop.h4};
    width: 90%;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const span1 = css`
  color: ${theme.palette.primary[500]};
`;

export const span2 = css`
  color: ${theme.palette.secondary[500]};
`;
