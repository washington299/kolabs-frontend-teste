import { Result } from "types";

import { Card } from "components/Card";

import * as S from "./styles";

type CardsListProps = {
	list: Result[];
};

export const CardsList = ({ list }: CardsListProps) => {
	return (
		<S.Wrapper>
			{list.length === 0 && <S.NotFound>Nenhum item encontrado na busca.</S.NotFound>}

			{list.map(({ id, backdrop_path, name, title, release_date, first_air_date, overview }) => (
				<Card
					key={id}
					id={id}
					backdrop_path={backdrop_path}
					name={name}
					title={title}
					release_date={release_date}
					first_air_date={first_air_date}
					overview={overview}
				/>
			))}
		</S.Wrapper>
	);
};
