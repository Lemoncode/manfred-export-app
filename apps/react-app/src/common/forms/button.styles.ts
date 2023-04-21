// import { css } from '@emotion/css';
// import { theme } from '@/core/theme';
// import { ColorPrincipal, ColorSecondary } from './mf-color.constants';

// export const buttonStyle = css`
//   background-color: ${theme.palette.info[500]};
//   color: ${theme.palette.primary[700]};
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 8px 16px;
//   box-sizing: border-box;

//   /* gap: 10px; */
//   /* max-width: 278px; */

//   height: 32px;

//   border: none;
//   border-radius: 8px;
//   font: ${theme.typography.button};

//   &:hover {
//     transition: background 0.25s ease-in-out;
//     background-color: ${ColorSecondary};
//   }

//   @media (min-width: 1025px) {

//     grid-area: button;
//     margin: auto;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// //!
// export const icon = css`
//   width: 20px;
//   height: 14px;
//   /* margin: 0px 8px; */
//   margin: auto;
// `;

import { css } from '@emotion/css';
import { theme } from '@/core/theme';
import { ColorPrincipal, ColorSecondary } from './mf-color.constants';

export const buttonStyle = css`
  background-color: ${theme.palette.info[500]};
  color: ${theme.palette.primary[700]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  height: 32px;
  border: none;
  border-radius: 8px;
  font: ${theme.typography.button};

  &:hover {
    transition: background 0.25s ease-in-out;
    background-color: ${ColorSecondary};
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-area: button;
    margin: auto;
  }
`;

export const icon = css`
  width: 20px;
  height: 14px;
`;
