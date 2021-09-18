import { Result } from "types";

import { parseDate } from "utils/parseDate";

import * as S from "./styles";

type ModalCardProps = {
	cardInfo: Result;
};

export const ModalCard = ({
	cardInfo: { backdrop_path, name, title, first_air_date, release_date, overview },
}: ModalCardProps) => {
	const defaultImage = "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg";

	return (
		<S.Wrapper>
			<img src={backdrop_path ? `https://image.tmdb.org/t/p/w200${backdrop_path}` : defaultImage} />

			<S.ModalCardInfo>
				<h1 className="card__title">{name || title}</h1>
				<p className="card__date">{parseDate(first_air_date) || parseDate(release_date)}</p>
				{overview ? (
					<p className="card__overview">{`${overview.substring(0, 400)}${overview && "..."}`}</p>
				) : (
					<p className="card__no-description">Nenhuma descrição encontrada...</p>
				)}
			</S.ModalCardInfo>
		</S.Wrapper>
	);
};
