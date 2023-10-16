import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const alertStyle = css`
  width: 352px;
  display: flex;
  flex-direction: column;

  .modal-header {
    background: ${theme.palette.error[500]};
    height: 22px;
    border-radius: 10px 10px 0px 0px;
  }

  .modal-content {
    height: 173px;
    background-color: ${theme.palette.info[50]};
    border-radius: 0px 0px 10px 10px;
    padding-top: ${theme.spacing(4)};
    display: flex;
    gap: ${theme.spacing(2)};
  }

  img {
    width: 125px;
    object-fit: cover;
  }

  .modal-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .modal-text {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    padding-right: ${theme.spacing(4)};
  }

  .modal-text--h1 {
    color: ${theme.palette.dark[900]};
    font-size: 32px;
    font-weight: 500;
    word-wrap: break-word;
  }

  .modal-text--h2 {
    color: ${theme.palette.info[900]};
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    word-wrap: break-word;
  }

  .modal-text--p {
    color: ${theme.palette.dark[900]};
    font-size: 8px;
    font-weight: 400;
    word-wrap: break-word;
  }

  .modal-button {
    align-self: flex-end;
    margin-right: ${theme.spacing(5)};
    margin-bottom: ${theme.spacing(2)};
  }

  @media (min-width: 728px) {
    width: 548px;

    .modal-header {
      height: 34px;
    }

    .modal-content {
      height: 270px;
      padding-top: ${theme.spacing(6)};
      gap: ${theme.spacing(4)};
    }

    img {
      width: 195px;
    }

    .modal-text--h1 {
      font-size: 40px;
    }
    .modal-text--h2 {
      font-size: 16px;
    }
    .modal-text--p {
      font-size: 12px;
    }

    .modal-button {
      margin-right: ${theme.spacing(8)};
      margin-bottom: ${theme.spacing(5)};
    }
  }
`;
