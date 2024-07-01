import styled from 'styled-components';

const StyledUserList = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 16px;
`;

const StyledUser = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	background-color: white;
	width: 180px;
	height: 250px;
	border-radius: 8px;
	text-align: center;
	padding: 20px;
`;

const StyledUserImg = styled.div`
	width: 100px;
	border-radius: 50%;
	border: 1px solid lightgray;
	overflow: hidden;
`;

const StyledUserNameContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 6px;
`;

const StyledUserName = styled.p`
	font-size: 12px;
	font-weight: 800;
	margin: 0;
`;

const StyledUserNick = styled.p`
	font-size: 8px;
	color: gray;
	margin: 0;
`;

const StyledActionContainer = styled.div`
	display: flex;
`;

export {
	StyledUserList,
	StyledUser,
	StyledUserNameContainer,
	StyledUserName,
	StyledUserNick,
	StyledUserImg,
	StyledActionContainer
};