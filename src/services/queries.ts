import { api } from "services/config";

export const queries = {
	getAllResults: (category: string | string[], word: string | string[]) =>
		api.get(`/search/${category}?api_key=${process.env.TDBM_API_KEY}&query=${word}&language=pt`),
};
