import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const buttonStyle = css`
  background-color: ${theme.palette.info[500]};
  color: ${theme.palette.primary[700]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px; //replace to theme.spacing
  gap: 10px;
  width: max-content;
  height: 32px;

  border: none;
  border-radius: 8px;
  font: ${theme.typography.button};

  &:hover {
    transition: background 0.25s ease-in-out;
  }
`;

export const icon = css`
  width: 20px;
  height: 100%;
`;
