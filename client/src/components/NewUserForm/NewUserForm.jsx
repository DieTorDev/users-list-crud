import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';
import {
	StyledForm,
	StyledFormInput,
	StyledFormSubmit
} from './new-user-form.styles';

const NewUserForm = ({ setUsers, newUser, setNewUser, setNewUserMenu }) => {
	return (
		<StyledForm
			onSubmit={e => handleSubmit(e, setUsers, newUser, setNewUserMenu)}
		>
			<StyledFormInput
				onChange={e => setNewUser({ ...newUser, name: e.target.value })}
				type='text'
				placeholder='Name'
			/>
			<StyledFormInput
				onChange={e => setNewUser({ ...newUser, nick: e.target.value })}
				type='text'
				placeholder='Username'
			/>
			<div>
				<input
					onChange={() => setNewUser({ ...newUser, gender: true })}
					type='radio'
					name='gender'
				/>
				<label>Man</label>
				<input
					onChange={() => setNewUser({ ...newUser, gender: false })}
					type='radio'
					name='gender'
				/>
				<label>Woman</label>
			</div>

			<StyledFormSubmit type='submit' value='CREATE USER' />
		</StyledForm>
	);
};

const handleSubmit = async (event, setUsers, newUser, setNewUserMenu) => {
	event.preventDefault();
	try {
		const data = await postData(URLS.USER_API, newUser);
		setUsers(data);
	} catch (err) {
		console.error(err);
	}
	setNewUserMenu(false);
};

export default NewUserForm;
