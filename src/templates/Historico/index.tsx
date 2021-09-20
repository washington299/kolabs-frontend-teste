import { useContext } from "react";

import { ResultsContext } from "contexts/LastResults";

export const HistoricoTemplate = () => {
	const { state } = useContext(ResultsContext);

	return <pre>{JSON.stringify(state)}</pre>;
};
