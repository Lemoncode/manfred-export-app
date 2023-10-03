import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const alertStyle = css`
  width: 547.75px;
  height: 303.37px;
  display: flex;
  flex-direction: column;

  .header {
    background: linear-gradient(90deg, #414042 0%, #231f20 100%);
    height: 34px;
    border-radius: 10px 10px 0px 0px;
  }

  section {
    flex: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, white 0%, #a7a9ac 100%);
    border-radius: 0px 0px 15px 15px;
    padding: 15px;
  }

  .text-container {
    width: 313.48px;
    height: 167.66px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }

  .text-container h1 {
    align-self: stretch;
    color: #3f3f3f;
    font-size: 40px;
    font-family: Inter;
    font-weight: 500;
    word-wrap: break-word;
  }

  .text-container h2 {
    color: #7f7f7f;
    ${theme.typography.desktop.h2}
    word-wrap: break-word;
  }

  .text-container p {
    color: black;
    font-size: 12px;
    font-family: Inter;
    font-weight: 400;
    word-wrap: break-word;
  }
`;
