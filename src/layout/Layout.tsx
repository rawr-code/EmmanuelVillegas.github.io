import Head from 'next/head';
import styled from 'styled-components';

import { Footer, Header, MainContainer } from '.';

const LayoutWrapper = styled.div``;

interface Props {
	children: React.ReactNode;
	title?: string;
}

const Layout: React.FC<Props> = ({ children, title }): React.ReactElement => {
	return (
		<LayoutWrapper>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<MainContainer>{children}</MainContainer>
			<Footer />
		</LayoutWrapper>
	);
};

export default Layout;
