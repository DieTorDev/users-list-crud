import { useEffect } from 'react';
import { URLS } from '../../constants/urls';
import { deleteData, getData } from '../../utils/api';
import {
	StyledActionContainer,
	StyledIcon,
	StyledUser,
	StyledUserImg,
	StyledUserList,
	StyledUserName,
	StyledUserNameContainer,
	StyledUserNick
} from './users-list.styles';

const UsersList = ({
	users,
	setUsers,
	editUserMenu,
	setEditUserMenu,
	setEditUser
}) => {
	useEffect(() => {
		getUsers(setUsers);
	}, []);

	return (
		<StyledUserList>
			{users.map((user, i) => (
				<StyledUser key={user.userId}>
					<StyledUserImg>
						<img
							src={`https://randomuser.me/api/portraits/${user.gender ? 'men' : 'women'}/${i}.jpg`}
							alt={user.name}
						/>
					</StyledUserImg>

					<StyledUserNameContainer>
						<StyledUserName>{user.name}</StyledUserName>
						<StyledUserNick>@{user.nick}</StyledUserNick>
					</StyledUserNameContainer>
					<StyledActionContainer>
						<StyledIcon
							onClick={() => deleteUsers(setUsers, user.userId)}
							src='/images/delete-icon.svg'
							alt=''
						/>
						<StyledIcon
							onClick={() =>
								handleEdit(editUserMenu, setEditUserMenu, setEditUser, user)
							}
							src='/images/edit-icon.svg'
							alt=''
						/>
					</StyledActionContainer>
				</StyledUser>
			))}
		</StyledUserList>
	);
};

const getUsers = async setUsers => {
	try {
		const users = await getData(URLS.USER_API);
		setUsers(users);
	} catch (err) {
		console.error(err);
	}
};

const deleteUsers = async (setUsers, user) => {
	try {
		const users = await deleteData(`${URLS.USER_API}${user.userId}`);
		setUsers(users);
	} catch (err) {
		console.error(err);
	}
};

const handleEdit = (editUserMenu, setEditUserMenu, setEditUser, user) => {
	setEditUserMenu(!editUserMenu);
	setEditUser(user);
};

export default UsersList;
