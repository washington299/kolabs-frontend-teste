import { SearchField } from "components/SearchField";
import { Sidebar } from "components/Sidebar";

import * as GE from "styles/globalElements";
import * as S from "./styles";

export const HomeTemplate = () => {
	return (
		<GE.Container>
			<S.Content>
				<SearchField />

				<S.Wrapper>
					<Sidebar />
					<div>HomeTemplate</div>
				</S.Wrapper>
			</S.Content>
		</GE.Container>
	);
};
