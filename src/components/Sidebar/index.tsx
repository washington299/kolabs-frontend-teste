import { HelpWithCircle } from "styled-icons/entypo";

import * as S from "./styles";

const options = [
	"Todos",
	"Filmes",
	"Séries",
	"Pessoas",
	"Coletâneas",
	"Palavras-chave",
	"Produtoras",
	"Emissoras",
];

export const Sidebar = () => {
	return (
		<S.Wrapper>
			<S.FilterArea>
				<S.FilterHeader>Resultado da Busca</S.FilterHeader>
				<S.FilterBody>
					{options.map(item => (
						<S.ListItem key={item}>
							<span className="name">{item}</span>
							<span className="quantity">0</span>
						</S.ListItem>
					))}
				</S.FilterBody>
			</S.FilterArea>

			<S.Tip>
				<HelpWithCircle size={18} style={{ marginRight: 5 }} />
				Dica: Você pode usar o filtro &apos;y:&apos; para limitar seus resultados por ano.
				<br />
				Exemplo: &apos;tropa de elite y: 2007&apos;.
			</S.Tip>
		</S.Wrapper>
	);
};
