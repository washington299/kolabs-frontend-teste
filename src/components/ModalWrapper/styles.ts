import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalBox = styled.section`
	position: relative;

	padding: var(--large-size);
	background-color: var(--white);

	svg {
		position: absolute;
		top: 0;
		right: 0;

		cursor: pointer;
	}
`;
