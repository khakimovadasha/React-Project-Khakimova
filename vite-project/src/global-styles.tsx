import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 1920px;

  }

  .container {
  max-width: calc(2560px + 1.875em);
  margin: 0 auto;
  width: 100%;
  padding-left: 0.9375em;
  padding-right: 0.9375em;
  }

  a {
  text-decoration: inherit;
  }

  :root {
		--nav: #404a41;
    --white-color: #ffffff;
    --btn-color: #272727;
	}
  
  body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--theme);
  }
  
  html[data-theme=light] {
			--theme: white;
  }
  html[data-theme=dark] {
			--theme: #0f0f0f;
  }

  .routeLink {
    color: var(--white-color);
  }
  
  .routeLink:hover {
    color:  #898989;
  }

  .routeLink:focus {
    text-decoration: underline;
  }

  button {
    font-size: 18px;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--btn-color);
    color: var(--white-color);
    padding: 10px 30px;
    border: 1px solid var(--white-color);
    border-radius: 30px;
  }

  h1{
    font-size: 35px;
    font-weight: 600;
    color: var(--btn-color);
    margin:30px 100px;
  }

  .address-link {
    color: var(--white-color);
    text-decoration: underline;
  }
`;

export default GlobalStyle;
