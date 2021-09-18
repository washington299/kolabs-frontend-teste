import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";

import { Root, Result } from "types";

import { Card } from "components/Card";
import { ModalWrapper } from "components/ModalWrapper";
import { ModalCard } from "components/ModalCard";

import * as S from "./styles";

type CardsListProps = {
	list: Root;
};

export const CardsList = ({ list }: CardsListProps) => {
	const [selectedPage, setSelectedPage] = useState(1);
	const [modalOpen, setModalOpen] = useState(false);
	const [cardInfo, setCardInfo] = useState<Result>({} as Result);

	const { query, push } = useRouter();

	const handlePageChange = (data: { selected: number }) => {
		const { selected } = data;

		const { category, search } = query;

		const categoryPath = category ? `category=${category}` : "";
		const searchPath = search ? `search=${search}` : "";
		const pagePath = `page=${selected + 1}`;

		push(`?${categoryPath && `${categoryPath}&`}${searchPath && `${searchPath}&`}${pagePath}`);
		setSelectedPage(selected + 1);
	};

	const openModal = (card: Result) => {
		setCardInfo(card);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			{modalOpen && (
				<ModalWrapper handleModalClick={closeModal}>
					<ModalCard cardInfo={cardInfo} />
				</ModalWrapper>
			)}

			<S.Wrapper currentPage={list.page === selectedPage}>
				{list.results.length === 0 && <S.NotFound>Nenhum item encontrado na busca.</S.NotFound>}

				{list.results.map(card => (
					<Card
						key={card.id}
						id={card.id}
						backdrop_path={card.backdrop_path}
						name={card.name}
						title={card.title}
						release_date={card.release_date}
						first_air_date={card.first_air_date}
						overview={card.overview}
						handleModalClick={() => openModal(card)}
					/>
				))}

				{list.results.length > 0 && (
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
				)}
			</S.Wrapper>
		</>
	);
};
