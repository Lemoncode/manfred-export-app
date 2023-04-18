import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const footerContainer = css`
  span {
    float: right;
  }
`;

export const footerContent = css`
  float: right;
  margin: 2em 1em;
  font-style: ${theme.typography.caption};
  color: ${theme.palette.primary[500]};
`;

export const spanLink = css`
  color: ${theme.palette.warning[500]};
`;
