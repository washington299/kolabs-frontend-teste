import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;

	margin-bottom: var(--medium-size);
	border-radius: var(--extra-small-size);
	box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
`;

export const CardData = styled.div`
	padding: var(--small-size);

	.title {
		font-size: 18px;
	}
	.card__date {
		font-size: 14px;
	}
	.card__overview {
		margin-top: var(--extra-small-size);
	}
`;
