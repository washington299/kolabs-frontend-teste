import styled from "styled-components";

export const InputWrapper = styled.form`
	display: flex;
	align-items: center;

	padding: 0 var(--extra-small-size);
	border-top: 1px solid var(--secondary-color);
	border-bottom: 1px solid var(--secondary-color);
`;

export const Input = styled.input`
	flex: 1;

	width: 100%;
	height: 100%;

	padding: var(--extra-small-size);
	margin-left: var(--extra-small-size);

	font-size: var(--small-size);
	border: none;
	outline: none;

	&::placeholder {
		color: var(--quartenary-color);
	}
`;
