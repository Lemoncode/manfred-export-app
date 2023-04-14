import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const nav = css`
  display: flex;
  flex-direction: row;
  justify: space-between;
  height: 50px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  background: ${theme.palette.dark[900]};
`;

export const header = css`
  color: ${theme.palette.primary[50]};
  font: ${theme.typography.desktop.h1};
  padding: ${theme.spacing(4)};

  & .span1 {
    color: ${theme.palette.primary[500]};
  }

  & .span2 {
    color: ${theme.palette.secondary[500]};
  }
`;

export const footer = css`
  height: 100px;
  width: 100%;
  left: 100px;
  top: 100px;
  border-radius: 0px;
  margin: 1em;
  border: solid;
`;
