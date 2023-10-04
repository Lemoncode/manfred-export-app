import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const alertStyle = css`
  width: 352px;
  display: flex;
  flex-direction: column;

  .modal-header {
    background: linear-gradient(90deg, #414042 0%, #231f20 100%);
    height: 22px;
    border-radius: 10px 10px 0px 0px;
  }

  .modal-content {
    background: linear-gradient(0deg, white 0%, #a7a9ac 100%);
    border-radius: 0px 0px 15px 15px;
    display: flex;
    padding-top: ${theme.spacing(3)};
    padding-right: ${theme.spacing(4)};
    padding-bottom: ${theme.spacing(2)};
  }

  img {
    width: 125px;
  }
  .modal-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .modal-text {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }

  .modal-text--h1 {
    ${theme.typography.mobile.h1};
    color: #3f3f3f;
    font-size: 32px;
    font-family: Inter;
    font-weight: 500;
    word-wrap: break-word;
  }

  .text-container h2 {
    ${theme.typography.mobile.h5};
    color: #7f7f7f;
    font-size: 14px;
    font-family: Inter;
    font-weight: 400;
    word-wrap: break-word;
  }

  .modal-text--p {
    ${theme.typography.mobile.h5};
    color: black;
    font-size: 8px;
    font-family: Inter;
    font-weight: 400;
    word-wrap: break-word;
  }

  .modal-button {
    align-self: flex-end;
  }

  @media (min-width: 728px) {
    width: 548px;
    height: 303px;

    .modal-header {
      height: 34px;
    }

    img {
      width: 195px;
    }
    .modal-text--h1 {
      ${theme.typography.desktop.h1};
      color: #3f3f3f;
      font-size: 40px;
      font-family: Inter;
      font-weight: 500;
      word-wrap: break-word;
    }

    .text-container h2 {
      ${theme.typography.desktop.h2};
      color: #7f7f7f;
      font-size: 16px;
      font-family: Inter;
      font-weight: 400;
      word-wrap: break-word;
    }

    .modal-text--p {
      ${theme.typography.desktop.h5};
      color: black;
      font-size: 12px;
      font-family: Inter;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
`;
