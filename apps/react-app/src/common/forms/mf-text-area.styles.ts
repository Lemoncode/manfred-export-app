import { css } from '@emotion/css';
import { ColorPrincipal } from './mf-color.constants';

export const textAreaStyle = css`
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  border: 2px solid #dedce4;
  color: black;
  font-family: monospace;
  font-weight: 500;
  resize: none;
  overflow: auto;
  &:focus {
    border: 2px solid ${ColorPrincipal};
    outline: none;
  }
`;
