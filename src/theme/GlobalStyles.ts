import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  * {
    &:focus {
      outline: 0 !important;
    }
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins",sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #212529;
  }

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
    padding: 0;
    font-weight: 500;
    line-height: 1.2;
	}
`;

export default GlobalStyle;
