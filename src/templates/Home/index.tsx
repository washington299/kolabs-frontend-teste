import { Root } from "types";

import { SearchField } from "components/SearchField";
import { Sidebar } from "components/Sidebar";
import { CardsList } from "components/CardsList";

import * as GE from "styles/globalElements";
import * as S from "./styles";

type HomeTemplateProps = {
	list: Root;
};

export const HomeTemplate = ({ list }: HomeTemplateProps) => {
	return (
		<GE.Container>
			<S.Content>
				<SearchField />

				<S.Wrapper>
					<Sidebar />
					<CardsList list={list} />
				</S.Wrapper>
			</S.Content>
		</GE.Container>
	);
};
