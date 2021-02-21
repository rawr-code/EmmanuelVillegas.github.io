import styled from 'styled-components';

const HeroWrap = styled.div`
	position: relative;
	overflow: hidden;
`;

const HeroMask = styled.div`
	opacity: 0.8;
	background-color: #111418 !important;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
`;

const HeroBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 0;

	background-image: url(https://i.imgur.com/pva94oR.jpg);
	background-image: url(https://cdn3.f-cdn.com//files/download/29271552/bb628f.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	/* background-attachment: fixed; */
	background-position: center -100px;
	background-position: center;

	transition: background-image 300ms ease-in 200ms;
`;

const HeroContent = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	padding: 4.5rem 0;
	overflow: hidden;
	min-height: 100vh;
`;

interface Props {
	children: React.ReactNode;
}

const Hero: React.FC<Props> = ({ children }) => {
	return (
		<HeroWrap>
			<HeroMask />
			<HeroBg />
			<HeroContent>{children}</HeroContent>
		</HeroWrap>
	);
};

export default Hero;
