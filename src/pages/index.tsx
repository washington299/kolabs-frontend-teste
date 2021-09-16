import { GetServerSideProps } from "next";

import { Root } from "types";
import { queries } from "services/queries";

import { HomeTemplate } from "templates/Home";

type HomeProps = {
	list: Root;
};

const Home = ({ list }: HomeProps) => {
	return <HomeTemplate list={list} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	if (Object.keys(query).length === 0) {
		return {
			props: {
				list: {
					page: null,
					results: [],
					total_pages: null,
					total_results: null,
				},
			},
		};
	}

	const category = query?.category || "multi";
	const word = query?.search || "";
	const page = query?.page || "1";

	const { data } = await queries.getAllResults(category, word, page);

	return {
		props: {
			list: data,
		},
	};
};

export default Home;
