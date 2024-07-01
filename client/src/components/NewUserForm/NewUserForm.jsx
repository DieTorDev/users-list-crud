import { StyledForm } from './new-user-form.styles';

const NewUserForm = () => {
	return (
		<StyledForm>
			<input type='text' placeholder='Name' />
			<input type='text' placeholder='@UserName' />
			<div>
				<label htmlFor='man'>Man</label>
				<input type='radio' name='man' />
				<label htmlFor='woman'>Woman</label>
				<input type='radio' name='woman' />
			</div>
			<input type='submit' value='Create' />
		</StyledForm>
	);
};

export default NewUserForm;
