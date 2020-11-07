import { Layout } from '@Layout';
import { Hero } from '@Molecules';
import { FaChevronDown } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
	0% {
		top: -60%;
		opacity: 0;
	}
	100% {
		top: 40%;
		opacity: 1;
	}
`;

const ArrowAnimated = styled.a`
	position: absolute;
	z-index: 3;
	bottom: 20px;
	left: 50%;
	margin-left: -16px;
	width: 32px;
	height: 32px;
	line-height: 32px;
	font-size: 20px;
	text-align: center;
	color: #fff;
`;

const AnimatedArrow = styled.span`
	position: relative;
	animation: ${fadeInDown} 1.5s infinite;
`;

const Button = styled.button`
	cursor: pointer;
	border: 1px solid transparent;
	padding: 0.8rem 2.6rem;
	font-weight: 500;
	border-width: 2px;
	transition: all 0.5s ease;
	margin-top: 0.5rem;
	box-shadow: none;
	border-radius: 50rem;
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	user-select: none;
	background-color: transparent;
	font-size: 1rem;
	line-height: 1.5;
	color: ${({ theme }) => theme.palette.primary.main};
	border-color: ${({ theme }) => theme.palette.primary.main};

	&:hover {
		transition: all 0.5s ease;
		color: #fff;
		background-color: ${({ theme }) => theme.palette.primary.main};
	}
`;

const IndexPage = (): React.ReactElement => (
	<Layout title="Home | Emmanuel Villegas">
		<Hero>
			<div
				style={{
					textAlign: 'center',
					margin: 'auto',
					color: '#fff'
				}}>
				<p
					style={{
						fontSize: '1.75rem',
						marginBottom: '1rem'
					}}>
					Welcome
				</p>
				<h2
					style={{
						fontWeight: 600,
						lineHeight: 1.3,
						fontSize: '4rem'
					}}>
					I am Emmanuel Villegas
				</h2>
				<p
					style={{
						color: '#dee3e4',
						marginBottom: '1.5rem',
						fontSize: '1.3125rem',
						lineHeight: 1.8,
						fontWeight: 400
					}}>
					based in Venezuela.
				</p>
				<Button>Hire Me</Button>
			</div>
			<ArrowAnimated href="#about">
				<AnimatedArrow>
					<FaChevronDown />
				</AnimatedArrow>
			</ArrowAnimated>
		</Hero>
	</Layout>
);

export default IndexPage;
