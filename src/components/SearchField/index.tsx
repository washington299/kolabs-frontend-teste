import { useRouter } from "next/router";
import { useState } from "react";
import { Search } from "styled-icons/bootstrap";

import * as S from "./styles";

export const SearchField = () => {
	const [value, setValue] = useState("");

	const { push } = useRouter();

	const handleClick = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (!value) return;

		push(`?category=multi&search=${value}`);
	};

	return (
		<S.InputWrapper onSubmit={handleClick}>
			<Search size={20} style={{ cursor: "pointer" }} onClick={handleClick} type="submit" />
			<S.Input placeholder="avengers" value={value} onChange={e => setValue(e.target.value)} />
		</S.InputWrapper>
	);
};
