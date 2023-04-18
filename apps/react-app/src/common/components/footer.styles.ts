import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const footerContainer = css`
  /* img {
    float: right;
    width: 120%;
    margin-bottom: 2em;
  } */

  h2 {
    float: right;
    font-size: larger;
    color: ${theme.palette.primary[500]};

    span {
      color: ${theme.palette.warning[500]};
    }
  }
`;

export const divText = css`
  float: right;
  margin-right: 2em;
`;
