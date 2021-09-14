import { SearchField } from "components/SearchField";

import * as GE from "styles/globalElements";
import * as S from "./styles";

export const HomeTemplate = () => {
	return (
		<GE.Container>
			<S.Content>
				<SearchField />
				<h1>HomeTemplate</h1>
			</S.Content>
		</GE.Container>
	);
};
