import { fetchData } from '../../utils/fetchData';

const UserList = () => {
	const USERS = fetchData('http://localhost:3000');

	return USERS.map(user => <div key={user.id}></div>);
};

export default UserList;
