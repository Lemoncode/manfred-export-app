import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const alertStyle = css`
  width: 352px;
  display: flex;
  flex-direction: column;

  @media (min-width: 725px) {
    width: 548px;
  }
`;

export const modalHeader = css`
  background: ${theme.palette.error[500]};
  height: 22px;
  border-radius: 10px 10px 0px 0px;

  @media (min-width: 725px) {
    height: 34px;
  }
`;

export const modalContent = css`
  height: 173px;
  background-color: ${theme.palette.info[50]};
  border-radius: 0px 0px 10px 10px;
  padding-top: ${theme.spacing(4)};
  display: flex;
  gap: ${theme.spacing(2)};

  @media (min-width: 725px) {
    height: 270px;
    padding-top: ${theme.spacing(6)};
    gap: ${theme.spacing(4)};
  }
`;

export const modalImage = css`
  width: 125px;
  object-fit: cover;

  @media (min-width: 725px) {
    width: 195px;
  }
`;

export const modalMain = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const modalText = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  padding-right: ${theme.spacing(4)};
`;

export const modalTextH1 = css`
  color: ${theme.palette.dark[900]};
  font-size: 32px;
  font-weight: 500;
  word-wrap: break-word;

  @media (min-width: 725px) {
    font-size: 40px;
  }
`;

export const modalTextH2 = css`
  color: ${theme.palette.info[900]};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;

  @media (min-width: 725px) {
    font-size: 16px;
  }
`;

export const modalTextP = css`
  color: ${theme.palette.dark[900]};
  font-size: 8px;
  font-weight: 400;
  word-wrap: break-word;

  @media (min-width: 725px) {
    font-size: 12px;
  }
`;

export const modalButton = css`
  align-self: flex-end;
  margin-right: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(2)};

  @media (min-width: 725px) {
    margin-right: ${theme.spacing(8)};
    margin-bottom: ${theme.spacing(5)};
  }
`;
