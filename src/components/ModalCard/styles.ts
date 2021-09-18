import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;

	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

export const ModalCardInfo = styled.div`
	flex: 1;

	margin-left: var(--small-size);

	.card__title {
		font-size: var(--medium-size);
	}
	.card__date {
		font-size: 14px;
		color: var(--quartenary-color);
	}
	.card__overview {
		margin-top: var(--extra-small-size);
	}
	.card__no-description {
		margin-top: var(--small-size);
		text-align: center;
	}
`;
