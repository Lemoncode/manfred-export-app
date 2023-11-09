import { injectGlobal } from '@emotion/css';
import '@fontsource/inter';
import '@fontsource/sanchez';

injectGlobal`
* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
		height: 100vh;
    font-family: 'Inter', Roboto, 'Arial', 'Helvetica', sans-serif;
    line-height: 1;
    background-image: url('./assets/background_1.png');
    background-repeat: no-repeat;
    background-size: cover;
		overflow: hidden;
		box-sizing: border-box;
  }
  & ::-webkit-scrollbar {
    width: 8px;
  }

  & ::-webkit-scrollbar-track {
    background-color: none;
    border-radius: 4px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  & ::-webkit-scrollbar-thumb {
    background-color: #9e9e9e;
    border-radius: 4px;
  }

`;
