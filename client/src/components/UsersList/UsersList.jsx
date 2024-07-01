import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';
import {
	StyledActionContainer,
	StyledUser,
	StyledUserImg,
	StyledUserList,
	StyledUserName,
	StyledUserNameContainer,
	StyledUserNick
} from './users-list.styles';

const UsersList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers(setUsers);
	}, []);

	return (
		<StyledUserList>
			{users.map((user, i) => (
				<StyledUser key={user.userId}>
					<StyledUserImg>
						<img
							src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
							alt={user.name}
						/>
					</StyledUserImg>

					<StyledUserNameContainer>
						<StyledUserName>{user.name}</StyledUserName>
						<StyledUserNick>@{user.nick}</StyledUserNick>
					</StyledUserNameContainer>
					<StyledActionContainer>
						<img src='/images/delete-icon.svg' alt='' />
						<img src='/images/edit-icon.svg' alt='' />
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

export default UsersList;
