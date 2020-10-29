import { Layout } from '@Layout';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.palette.primary.main};
`;

const IndexPage = (): React.ReactElement => (
	<Layout title="Home | Emmanuel Villegas">
		<h1>
			Hello Next.js a
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
