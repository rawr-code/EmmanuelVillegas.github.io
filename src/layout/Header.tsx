import { Tooltip } from '@Atoms';
import {
	FaFacebookF,
	FaGithubAlt,
	FaInstagram,
	FaLinkedinIn
} from 'react-icons/fa';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
`;

const Navigation = styled.nav`
	background-color: ${({ theme }) => theme.palette.secondary.main};
	padding: 0;
	color: #fff;

	flex-flow: row nowrap;
	justify-content: flex-start;

	position: fixed;
	left: 0;
	top: 0;
	width: ${({ theme }) => theme.drawer.width};
	height: 100%;
	border-right: 1px solid rgba(0, 0, 0, 0.07);
	-webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.065);
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.065);
	z-index: 2;
	overflow: hidden;
	overflow-y: auto;
`;

const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	flex-basis: auto;
	padding: 1rem 1rem 0.5rem;
	height: 100%;

	${({ theme }) => theme.breakpoints.up('lg')} {
		flex-wrap: nowrap;
	}
`;

const Avatar = styled.a`
	text-align: center;
	margin-top: 1.5rem;

	& > span {
		display: inline-block;
		padding: 0.5rem;
		border-radius: 50rem;

		& > img {
			width: 160px;
			height: 160px;
			display: block;
			border-radius: 50%;
			border-style: none;
		}

		${({ theme }) => theme.breakpoints.up('lg')} {
			margin-bottom: 0.25rem;
		}
	}

	& > h1 {
		display: block;
		font-size: 1.3125rem;
		color: #fff;
		text-align: center;
	}
`;

const MenuContent = styled.div`
	width: 100%;
	margin-top: auto;
	margin-bottom: auto;

	${({ theme }) => theme.breakpoints.up('lg')} {
		display: flex;
		flex-basis: auto;
	}
`;

const MenuList = styled.ul`
	margin: 0;
	padding: 1rem 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	width: 100%;
	text-align: center;
`;

const MenuListItem = styled.li`
	height: 100%;
	display: block;
	box-sizing: border-box;
`;

const MenuListItemLink = styled.a`
	text-decoration: none;
	color: hsla(0, 0%, 98%, 0.9);
	background-color: transparent;
	position: relative;
	display: block;
	height: auto;
	padding: 10px 0;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.palette.primary.main};
		transition: all 0.2s ease;
	}
`;

const SocialIconsList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin-bottom: -0.25rem !important;
`;

const SocialIcon = styled.li`
	margin: 0px 4px 4px;
	padding: 0;
	overflow: visible;
`;

const SocialLink = styled.a`
	width: 26px;
	height: 26px;
	line-height: 26px;
	text-align: center;
	text-decoration: none;
	transition: all 0.2s ease;
	font-size: 16px;
	color: #aab1b8;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		color: ${(props) => props.color};
	}
`;

const socialLinks = [
	{
		title: 'Facebook',
		color: '#3B5998',
		url: 'https://www.facebook.com/emmanuel.villegasgonzalez.98/',
		icon: FaFacebookF
	},
	{
		title: 'Instagram',
		color: '#ea4c89',
		url: 'https://www.facebook.com/emmanuel.villegasgonzalez.98/',
		icon: FaInstagram
	},
	{
		title: 'LinkedIn',
		color: '#00ACEE',
		url: 'https://www.linkedin.com/in/emmanuel-villegas/',
		icon: FaLinkedinIn
	},
	{
		title: 'GitHub',
		color: '#333333',
		url: 'https://github.com/Amenoth',
		icon: FaGithubAlt
	}
];

const Header: React.FC = (): React.ReactElement => {
	return (
		<HeaderWrapper>
			<Navigation>
				<Menu>
					<Avatar>
						<span>
							<img src="/images/logo.jpg" alt="logo" />
						</span>
						<h1>Emmanuel Villegas</h1>
					</Avatar>
					<MenuContent>
						<MenuList>
							<MenuListItem>
								<MenuListItemLink>Home</MenuListItemLink>
							</MenuListItem>
							<MenuListItem>
								<MenuListItemLink>About Me</MenuListItemLink>
							</MenuListItem>
							<MenuListItem>
								<MenuListItemLink>What I Do</MenuListItemLink>
							</MenuListItem>
							<MenuListItem>
								<MenuListItemLink>Resume</MenuListItemLink>
							</MenuListItem>
							<MenuListItem>
								<MenuListItemLink>Portfolio</MenuListItemLink>
							</MenuListItem>
							<MenuListItem>
								<MenuListItemLink>Testimonial</MenuListItemLink>
							</MenuListItem>
							<MenuListItem>
								<MenuListItemLink>Contact</MenuListItemLink>
							</MenuListItem>
						</MenuList>
					</MenuContent>
					<SocialIconsList>
						{socialLinks.map((item) => {
							const Icon = item.icon;

							return (
								<SocialIcon key={item.title}>
									<SocialLink
										href={item.url}
										target="_blank"
										color={item.color}>
										<Tooltip text={item.title}>
											<Icon />
										</Tooltip>
									</SocialLink>
								</SocialIcon>
							);
						})}
					</SocialIconsList>
				</Menu>
			</Navigation>
		</HeaderWrapper>
	);
};

export default Header;
