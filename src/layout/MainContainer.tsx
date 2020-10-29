import styled from 'styled-components';

const Main = styled.main``;

interface Props {
	children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }): React.ReactElement => {
	return <Main>{children}</Main>;
};

export default MainContainer;
