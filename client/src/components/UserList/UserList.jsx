import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';

const UserList = () => {
	const USERS = getUsers(URLS.USER_API);

	console.log(USERS);
};

const getUsers = async url => {
	try {
		return await getData(url);
	} catch (err) {
		console.error(err);
	}
};

export default UserList;
