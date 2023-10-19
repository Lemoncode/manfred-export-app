import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const selectContainer = css`
  position: relative;
  cursor: pointer;
  @media (min-width: 725px) {
    flex-grow: 1;
    width: 100%;
  }
`;
export const selectContent = css`
  display: flex;
  padding: ${theme.spacing(3)} ${theme.spacing(4)};
  align-items: flex-start;
  gap: ${theme.spacing(2)};
  align-self: stretch;
  border: 1px solid ${theme.palette.info[600]};
  border-radius: 8px;
  background: ${theme.palette.info[50]};
  span {
    flex-grow: 1;
    color: ${theme.palette.dark[900]};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.15px;
  }
`;

export const listContainer = css`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 999;
  padding: ${theme.spacing(2)} ${theme.spacing(0)};
  gap: ${theme.spacing(2)};
  border-radius: 4px;
  background: ${theme.palette.info[50]};
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  li {
    display: flex;
    height: ${theme.spacing(8)};
    padding: ${theme.spacing(0)} ${theme.spacing(4)};
    justify-content: flex-start;
    align-items: center;

    color: ${theme.palette.dark[900]};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;

    :hover {
      background: ${theme.palette.primary[50]};
    }
  }
`;
export const rotate = (rotate: boolean) => css`
  rotate: ${rotate ? '180deg' : '0deg'};
  transition: rotate 0.3s ease;
`;
