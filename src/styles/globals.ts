import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	*, html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:root {
		--white: #ffffff;
		--black: #000000;
		--primary-color: #59BFFF;
		--secondary-color: #dddddd;
		--tertiary-color: #333333;
		--quartenary-color: #aaaaaa;

		--extra-small-size: 0.5rem;
		--small-size: 1rem;
		--medium-size: 1.5rem;
		--large-size: 2rem;
		--extra-large-size: 2.5rem;

		--font-weight-extra-light: 400;
		--font-weight-light: 500;
		--font-weight-medium: 600;
		--font-weight-bold: 700;
		--font-weight-extra-bold: 800;
	}
`;
