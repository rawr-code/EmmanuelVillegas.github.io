// Next
import { AppProps } from 'next/app';
import Head from 'next/head';
// Styled Components
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#0070f3'
	}
};

const MainApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return (
		<>
			<Head>
				<title>Tauros.io</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MainApp;
