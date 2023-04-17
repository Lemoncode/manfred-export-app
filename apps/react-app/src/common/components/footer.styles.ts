import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const footerContainer = css`
  img {
    float: right;
  }

  @media (min-width: 1024px) {
    position: relative;
    top: 2.5em;
  }
`;
