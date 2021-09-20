import { useContext } from "react";

import { ResultsContext } from "contexts/LastResults";

import { CardsList } from "components/CardsList";

import * as GE from "styles/globalElements";
import * as S from "./styles";

export const HistoricoTemplate = () => {
	const { state } = useContext(ResultsContext);

	const cardsPerPage = 20;
	const totalResults = state.length;

	const list = {
		page: 1,
		results: state,
		total_pages: Math.ceil(totalResults / cardsPerPage),
		total_results: totalResults,
	};

	return (
		<GE.Container>
			<S.Wrapper>
				<CardsList list={list} hasPagination={false} />
			</S.Wrapper>
		</GE.Container>
	);
};
