import { createContext, Dispatch, useReducer } from "react";

import { initialState, resultsReducer, State, Action } from "./reducer";

type ResultContextProps = {
	state: State;
	dispatch: Dispatch<Action>;
};

export const ResultsContext = createContext<ResultContextProps>({} as ResultContextProps);

type ResultsProviderProps = {
	children: JSX.Element;
};

export const ResultsProvider = ({ children }: ResultsProviderProps) => {
	const [state, dispatch] = useReducer(resultsReducer, initialState);

	return <ResultsContext.Provider value={{ state, dispatch }}>{children}</ResultsContext.Provider>;
};
