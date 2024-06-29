import UserList from '../UserList/UserList';
import { StyledTitle, SytledMainContainer } from './main-container.styles';

const MainContainer = () => {
	return (
		<SytledMainContainer>
			<StyledTitle>Users List</StyledTitle>
			<nav></nav>
			<UserList />
		</SytledMainContainer>
	);
};

export default MainContainer;
