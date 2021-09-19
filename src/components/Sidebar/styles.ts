import styled from "styled-components";

export const Wrapper = styled.div`
	width: 250px;

	margin-right: var(--small-size);

	.link {
		display: block;
		text-decoration: none;
		text-align: center;

		margin-top: var(--small-size);

		&:hover {
			text-decoration: underline;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;

		margin-bottom: var(--extra-large-size);
	}
`;

export const FilterArea = styled.aside`
	width: 100%;
`;

export const FilterHeader = styled.div`
	padding: var(--small-size);

	font-size: 18px;
	font-weight: var(--font-weight-medium);
	background-color: var(--primary-color);
	color: var(--white);

	border-top-left-radius: var(--extra-small-size);
	border-top-right-radius: var(--extra-small-size);
`;

export const FilterBody = styled.ul`
	border: 1px solid var(--secondary-color);
	border-bottom-left-radius: var(--extra-small-size);
	border-bottom-right-radius: var(--extra-small-size);

	list-style: none;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: var(--extra-small-size) var(--small-size);
	cursor: pointer;

	.quantity {
		padding: 4px var(--extra-small-size);
		background-color: var(--secondary-color);
		border: 1px solid var(--secondary-color);
		border-radius: 5px;
	}

	&:hover {
		background-color: var(--secondary-color);
		font-weight: var(--font-weight-bold);

		.quantity {
			background-color: var(--white);
		}
	}
`;

export const Tip = styled.p`
	margin-top: var(--small-size);
`;
