import { css } from '@emotion/css';
import { ColorPrincipal, ColorSecondary } from './mf-color.constants';

export const buttonStyle = css`
  background-color: ${ColorPrincipal};
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-family: Avenir, sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 900;
  &:hover {
    transition: background 0.25s ease-in-out;
    background-color: ${ColorSecondary};
  }
`;
