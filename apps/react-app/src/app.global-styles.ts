import { injectGlobal } from '@emotion/css';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Inter', Roboto, 'Arial', 'Helvetica', sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
