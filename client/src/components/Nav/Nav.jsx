import { StyledNav, StyledButton } from './nav.styles';

const Nav = ({ newUserMenu, setNewUserMenu }) => {
	return (
		<StyledNav>
			<div>
				<input type='text' placeholder='Search User...' />
			</div>
			<StyledButton onClick={() => setNewUserMenu(!newUserMenu)}>
				+ NEW USER
			</StyledButton>
		</StyledNav>
	);
};

export default Nav;
