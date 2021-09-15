import styled from "styled-components";

export const Content = styled.section`
	padding: var(--extra-large-size) 0;
`;

export const Wrapper = styled.div`
	display: flex;

	margin-top: var(--medium-size);

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
