import { Search } from "styled-icons/bootstrap";

import * as S from "./styles";

export const SearchField = () => {
	return (
		<S.InputWrapper>
			<Search size={20} style={{ cursor: "pointer" }} />
			<S.Input placeholder="avengers" />
		</S.InputWrapper>
	);
};
