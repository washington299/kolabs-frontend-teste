import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";

import { Root } from "types";

import { Card } from "components/Card";
import { ModalWrapper } from "components/ModalWrapper";

import * as S from "./styles";

type CardsListProps = {
	list: Root;
};

export const CardsList = ({ list }: CardsListProps) => {
	const [selectedPage, setSelectedPage] = useState(1);
	const [modalOpen, setModalOpen] = useState(false);

	const history = useRouter();

	const handlePageChange = (data: { selected: number }) => {
		const { selected } = data;

		const { category, search } = history.query;

		const categoryPath = category ? `category=${category}` : "";
		const searchPath = search ? `search=${search}` : "";
		const pagePath = `page=${selected + 1}`;

		history.push(
			`?${categoryPath && `${categoryPath}&`}${searchPath && `${searchPath}&`}${pagePath}`,
		);
		setSelectedPage(selected + 1);
	};

	const handleModalClick = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<>
			{modalOpen && (
				<ModalWrapper handleModalClick={handleModalClick}>
					<div>Modal</div>
				</ModalWrapper>
			)}

			<S.Wrapper currentPage={list.page === selectedPage}>
				{list.results.length === 0 && <S.NotFound>Nenhum item encontrado na busca.</S.NotFound>}

				{list.results.map(
					({ id, backdrop_path, name, title, release_date, first_air_date, overview }) => (
						<Card
							key={id}
							id={id}
							backdrop_path={backdrop_path}
							name={name}
							title={title}
							release_date={release_date}
							first_air_date={first_air_date}
							overview={overview}
							handleModalClick={handleModalClick}
						/>
					),
				)}

				<ReactPaginate
					pageCount={list.total_pages}
					previousLabel="anterior"
					nextLabel="próximo"
					marginPagesDisplayed={1}
					pageRangeDisplayed={3}
					onPageChange={data => handlePageChange(data)}
					containerClassName="container"
					pageClassName="page"
					pageLinkClassName="pageLink"
					activeClassName="active"
					activeLinkClassName="activeLink"
					previousClassName="previous"
					nextClassName="next"
					previousLinkClassName="previousLink"
					nextLinkClassName="nextLink"
					disabledClassName="disabled"
				/>
			</S.Wrapper>
		</>
	);
};
