import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage = (): React.ReactElement => (
	<Layout title="Home | Next.js + TypeScript Example">
		<h1>
			Hello Next.js{' '}
			<span role="img" aria-label="emoji">
				👋
			</span>
		</h1>
		<Title>with styled-components</Title>
		<Title>Docker compose</Title>
		<p>
			<Link href="/about">
				<a>About</a>
			</Link>
		</p>
	</Layout>
);

export default IndexPage;
