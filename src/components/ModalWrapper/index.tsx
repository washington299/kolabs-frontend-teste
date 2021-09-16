import { CloseOutline } from "styled-icons/evaicons-outline";

import * as S from "./styles";

type ModalWrapperProps = {
	handleModalClick: () => void;
	children: JSX.Element;
};

export const ModalWrapper = ({ handleModalClick, children }: ModalWrapperProps) => {
	return (
		<S.Wrapper>
			<S.ModalBox>
				<CloseOutline size={35} onClick={handleModalClick} />
				{children}
			</S.ModalBox>
		</S.Wrapper>
	);
};
