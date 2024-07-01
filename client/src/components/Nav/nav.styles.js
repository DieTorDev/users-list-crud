import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-block: 30px;
`;

const StyledButton = styled.button`
	border: none;
	border-radius: 4px;
	color: white;
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	background-color: #559ff5;
	width: 100px;
	height: 30px;
	cursor: pointer;
`;

export { StyledNav, StyledButton };
