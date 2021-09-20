import { Result } from "types";

export type State = Result[];

export type Action = {
	type: string;
	payload: Result[];
};

export const initialState: State = [];

export const resultsReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case "ADD_RESULTS":
			return state.concat(action.payload);
		default:
			return state;
	}
};
