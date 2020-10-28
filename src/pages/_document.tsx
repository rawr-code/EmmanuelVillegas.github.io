// Next
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript
} from 'next/document';
// Styled Components
import { ServerStyleSheet } from 'styled-components';

class DocumentWrapper extends Document {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render(): React.ReactElement {
		return (
			<Html lang="es">
				<Head>
					<meta charSet="UTF-8" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default DocumentWrapper;
