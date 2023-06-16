import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const buttonStyle = css`
  background-color: ${theme.palette.info[500]};
  color: ${theme.palette.primary[700]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  gap: 10px;
  width: max-content;
  height: 32px;

  border: none;
  border-radius: 8px;
  ${theme.typography.button};

  &:hover {
    transition: background 0.25s ease-in-out;
  }
`;

export const icon = css`
  width: ${theme.spacing(5)};
  height: 100%;
`;

export const disabledStyles = css`
  background-color: ${theme.palette.info[400]};
  color: ${theme.palette.info[700]};
`;
