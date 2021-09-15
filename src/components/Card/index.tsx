import { parseDate } from "utils/parseDate";

import * as S from "./styles";

type CardProps = {
	id: number;
	backdrop_path?: string;
	name?: string;
	title?: string;
	first_air_date?: string;
	release_date?: string;
	overview: string;
};

export const Card = ({
	backdrop_path,
	name,
	title,
	first_air_date,
	release_date,
	overview,
}: CardProps) => {
	const defaultImage = "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg";

	return (
		<S.Wrapper>
			<img
				src={backdrop_path ? `https://image.tmdb.org/t/p/w200${backdrop_path}` : defaultImage}
				alt={overview}
				width={100}
				height={150}
			/>

			<S.CardData>
				<h1 className="card__title">{name || title}</h1>
				<p className="card__date">{parseDate(first_air_date) || parseDate(release_date)}</p>
				<p className="card__overview">{`${overview.substring(0, 145)}${overview && "..."}`}</p>
			</S.CardData>
		</S.Wrapper>
	);
};
