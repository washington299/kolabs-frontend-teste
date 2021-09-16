import styled, { css } from "styled-components";

type WrapperProps = {
	currentPage: boolean;
};

export const Wrapper = styled.main<WrapperProps>`
	flex: 1;

	width: 100%;

	.container {
		display: flex;
		justify-content: center;
	}

	.active {
		${props =>
			props.currentPage &&
			css`
				color: var(--white);
				background-color: var(--primary-color);
				font-weight: var(--font-weight-extra-bold);
				border: none;
			`}
	}

	.previous,
	.next,
	.break,
	.page {
		display: flex;
		border: 1px solid var(--secondary-color);
		font-size: 12px;
		text-decoration: none;
		cursor: pointer;

		:hover {
			color: var(--white);
			background-color: var(--primary-color);
			font-weight: var(--font-weight-extra-bold);
			border: none;
		}
	}
	.pageLink,
	.previousLink,
	.break,
	.nextLink {
		outline: none;
		padding: var(--extra-small-size) 12px;
	}
`;

export const NotFound = styled.p`
	text-align: center;
`;
