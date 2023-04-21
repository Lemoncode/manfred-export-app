import { css } from '@emotion/css';
import { theme } from '@/core/theme';
import { ColorPrincipal, ColorSecondary } from './mf-color.constants';

export const buttonStyle = css`
  background-color: ${theme.palette.info[500]};
  color: ${theme.palette.primary[700]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  width: 278px;
  height: 32px;

  border: none;
  border-radius: 8px;
  font: ${theme.typography.button};

  &:hover {
    transition: background 0.25s ease-in-out;
    background-color: ${ColorSecondary};
  }

  @media (min-width: 1025px) {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const icon = css`
  width: 20px;
  height: 14px;
`;
