import { Tooltip } from '@Atoms';
import { useState } from 'react';
import {
	FaFacebookF,
	FaGithubAlt,
	FaInstagram,
	FaLinkedinIn
} from 'react-icons/fa';
import styled, { css } from 'styled-components';

interface MenuButtonProps {
	isOpen: boolean;
}

const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	z-index: 1020;

	transition: all 0.5s ease;
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

	${({ theme }) => theme.breakpoints.down('lg')} {
		position: initial;
		width: 100%;
		height: auto;
		overflow: visible;
	}
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-basis: auto;
	padding-left: 1rem;
	height: 100%;

	${({ theme }) => theme.breakpoints.up('lg')} {
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 1rem 1rem 0.5rem;
	}
`;

const Avatar = styled.a`
	text-align: center;

	& > span {
		display: none;
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
			display: inline-block;
			margin-bottom: 0.25rem;
		}
	}

	& > h1 {
		display: block;
		font-size: 1.3125rem;
		color: #fff;
		text-align: center;

		${({ theme }) => theme.breakpoints.down('lg')} {
			font-size: 15px;
		}
	}

	${({ theme }) => theme.breakpoints.up('lg')} {
		margin-top: 1.5rem;
	}
`;

const MenuContent = styled.div<MenuButtonProps>`
	width: 100%;
	margin-top: auto;
	margin-bottom: auto;

	${({ theme }) => theme.breakpoints.up('lg')} {
		display: flex;
		flex-basis: auto;
	}

	${({ theme }) => theme.breakpoints.down('lg')} {
		position: absolute;
		top: 99%;
		right: 0;
		left: 0;
		margin-top: 0px;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.95);
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

		overflow: hidden;
		max-height: 0;
		transition: max-height 0.5s ease;

		${(props) =>
			props.isOpen &&
			css`
				max-height: 100vh;
			`}
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

	${({ theme }) => theme.breakpoints.down('lg')} {
		overflow: hidden;
		overflow-y: auto;
		max-height: 65vh;
		padding: 15px;
		text-align: left;
	}
`;

const MenuListItem = styled.li`
	height: 100%;
	display: block;
	box-sizing: border-box;

	${({ theme }) => theme.breakpoints.down('lg')} {
		border-bottom: 1px solid rgba(250, 250, 250, 0.15);
	}
`;

const MenuListItemLink = styled.a`
	text-decoration: none;
	color: hsla(0, 0%, 98%, 0.9);
	background-color: transparent;
	position: relative;
	display: block;
	height: auto;
	padding: 8px 0;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.palette.primary.main};
		transition: all 0.2s ease;
	}

	${({ theme }) => theme.breakpoints.up('lg')} {
		padding: 10px 0;
	}
`;

const SocialIconsList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin-bottom: -0.25rem !important;

	${({ theme }) => theme.breakpoints.down('lg')} {
		margin-left: auto;
	}
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

	${({ theme }) => theme.breakpoints.up('lg')} {
		width: 26px;
		height: 26px;
		line-height: 26px;
	}
`;

const MenuButton = styled.button<MenuButtonProps>`
	display: none;
	font-size: 1.25rem;
	line-height: 1;
	background-color: transparent;
	width: 25px;
	height: 30px;
	padding: 10px;
	margin: 18px 15px;
	position: relative;
	border: none;
	transform: rotate(0deg);
	transition: 0.5s ease-in-out;
	cursor: pointer;

	& > span {
		display: block;
		position: absolute;
		height: 2px;
		width: 100%;
		border-radius: 2px;
		opacity: 1;
		left: 0;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
		transform-origin: left center;
		background-color: #fff;
	}

	& > span:nth-child(1) {
		top: 7px;
	}
	& > span:nth-child(2) {
		top: 14px;
	}
	& > span:nth-child(3) {
		top: 21px;
	}

	${({ theme }) => theme.breakpoints.down('lg')} {
		display: block;
	}

	${(props) =>
		props.isOpen &&
		css`
			& > span:nth-child(1) {
				top: 3px;
				left: 3px;
				transform: rotate(45deg);
			}
			& > span:nth-child(2) {
				width: 0%;
				opacity: 0;
			}
			& > span:nth-child(3) {
				top: 21px;
				left: 3px;
				transform: rotate(-45deg);
			}
		`}
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
		url: 'https://www.instagram.com/emmanuelvillegasgonzalez/',
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
	const [showMenu, setShowMenu] = useState(false);

	const handleOpenMenu = () => setShowMenu((prev) => !prev);

	return (
		<HeaderWrapper>
			<Navigation>
				<Menu>
					<Avatar>
						<span>
							<img
								src={require('images/logo.jpg?inline')}
								alt="logo"
							/>
						</span>
						<h1>Emmanuel Villegas</h1>
					</Avatar>
					<MenuContent isOpen={showMenu}>
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
					<MenuButton isOpen={showMenu} onClick={handleOpenMenu}>
						<span />
						<span />
						<span />
					</MenuButton>
				</Menu>
			</Navigation>
		</HeaderWrapper>
	);
};

export default Header;
