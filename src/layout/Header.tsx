import styled from 'styled-components';

const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
`;

const Navigation = styled.nav`
	background-color: #111418 !important;
	padding: 0;
	color: #fff;

	flex-flow: row nowrap;
	justify-content: flex-start;

	position: fixed;
	left: 0;
	top: 0;
	width: 260px;
	height: 100% !important;
	background: #fff;
	border-right: 1px solid rgba(0, 0, 0, 0.07);
	-webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.065);
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.065);
	z-index: 2;
	overflow: hidden;
	overflow-y: auto;
`;

const Menu = styled.div`
	display: flex;
	flex-basis: auto;
	padding: 1rem 1rem 0.5rem;
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
		color: #20c997;
		transition: all 0.2s ease;
	}
`;

const Header: React.FC = (): React.ReactElement => {
	return (
		<HeaderWrapper>
			<Navigation>
				<Menu>
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
				</Menu>
			</Navigation>
		</HeaderWrapper>
	);
};

export default Header;
