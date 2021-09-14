import { Result } from "types";

import * as S from "./styles";

type CardsListProps = {
	list: Result[];
};

export const CardsList = ({ list }: CardsListProps) => {
	return (
		<S.Wrapper>
			{list.length === 0 && <S.NotFound>Nenhum item encontrado na busca.</S.NotFound>}
		</S.Wrapper>
	);
};
