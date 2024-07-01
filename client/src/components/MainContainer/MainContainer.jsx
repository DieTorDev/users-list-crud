import { useState } from 'react';
import Nav from '../Nav/Nav';
import UsersList from '../UsersList/UsersList';
import { StyledTitle, SytledMainContainer } from './main-container.styles';
import NewUserForm from '../NewUserForm/NewUserForm';

const MainContainer = () => {
	const [users, setUsers] = useState([]);
	const [newUserMenu, setNewUserMenu] = useState(false);
	const [newUser, setNewUser] = useState({ name: '', nick: '', gender: true });

	return (
		<SytledMainContainer>
			<StyledTitle>Users List</StyledTitle>
			<Nav newUserMenu={newUserMenu} setNewUserMenu={setNewUserMenu} />
			{newUserMenu && (
				<NewUserForm
					setUsers={setUsers}
					newUser={newUser}
					setNewUser={setNewUser}
					setNewUserMenu={setNewUserMenu}
				/>
			)}
			<UsersList users={users} setUsers={setUsers} />
		</SytledMainContainer>
	);
};

export default MainContainer;
