import type { AppProps } from "next/app";

import { ResultsProvider } from "contexts/LastResults";

import GlobalStyles from "styles/globals";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyles />
			<ResultsProvider>
				<Component {...pageProps} />
			</ResultsProvider>
		</>
	);
};

export default App;
