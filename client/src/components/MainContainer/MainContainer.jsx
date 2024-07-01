import { useState } from 'react';
import Nav from '../Nav/Nav';
import UsersList from '../UsersList/UsersList';
import { StyledTitle, SytledMainContainer } from './main-container.styles';
import NewUserForm from '../NewUserForm/NewUserForm';

const MainContainer = () => {
	const [newUserMenu, setNewUserMenu] = useState(false);

	return (
		<SytledMainContainer>
			<StyledTitle>Users List</StyledTitle>
			<Nav newUserMenu={newUserMenu} setNewUserMenu={setNewUserMenu} />
			{newUserMenu && <NewUserForm />}
			<UsersList />
		</SytledMainContainer>
	);
};

export default MainContainer;
