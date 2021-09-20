import { Result } from "types";

export type State = Result[];

export type Action = {
	type: string;
	payload: Result[];
};

export const initialState: State = [];

const removeDuplicates = (array: Result[]) => {
	const seen = new Set();

	return array.filter(el => {
		const duplicate = seen.has(el.id);
		seen.add(el.id);
		return !duplicate;
	});
};

export const resultsReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case "ADD_RESULTS":
			state = state.concat(action.payload);

			return removeDuplicates(state).sort().reverse();
		default:
			return state;
	}
};
