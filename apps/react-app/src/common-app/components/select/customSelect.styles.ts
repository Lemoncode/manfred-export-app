import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const selectContainer = css`
  @media (min-width: 725px) {
    flex-grow: 1;
    width: 100%;
  }
`;
export const selectContent = css`
  display: flex;
  padding: 12px 16px;
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
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.15px;
  }
`;

export const listContainer = css`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
  gap: 8px;
  border-radius: 4px;
  //border: 1px solid blue;
  background: ${theme.palette.info[50]};
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  li {
    display: flex;
    height: 32px;
    padding: 0px 16px;
    justify-content: flex-start;
    align-items: center;

    color: ${theme.palette.dark[900]};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;

    :hover {
      background: ${theme.palette.primary[50]};
    }
  }
`;
