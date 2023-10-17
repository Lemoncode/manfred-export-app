import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const selectColor = css`
  display: flex;
  min-width: 100%;
  height: 48px;
  padding: ${theme.spacing(3)} ${theme.spacing(4)};
  padding-right: 0;
  align-items: flex-start;
  gap: ${theme.spacing(2)};
  align-self: stretch;
  border-radius: 8px;
  border-bottom: 1px solid ${theme.palette.info[600]};
  background: ${theme.palette.info[50]};

  span {
    flex: 1 0 0;
    color: ${theme.palette.info[900]};
    font-family: Sanchez;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
