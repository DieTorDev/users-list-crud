import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 50px;
	width: 400px;
	height: 400px;
	background-color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	filter: drop-shadow(0.5);
	padding: 20px;
`;

export { StyledForm };
