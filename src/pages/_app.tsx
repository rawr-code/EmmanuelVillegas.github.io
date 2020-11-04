import { GlobalStyles, theme } from '@Theme';
// Next
import { AppProps } from 'next/app';
import Head from 'next/head';
// Styled Components
import { ThemeProvider } from 'styled-components';

const MainApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return (
		<>
			<Head>
				<title>Emmanuel Villegas Gonzalez</title>
				<meta
					name="theme-color"
					content={theme.palette.secondary.main}
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
					type="text/css"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MainApp;
