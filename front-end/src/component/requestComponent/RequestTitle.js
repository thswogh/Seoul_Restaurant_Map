import { useState } from "react";
import OrangeBtn from "../common/OrangeBtn";
import { styled } from "styled-components";
import RequestMatzipCard from "./RequestMatzipCard";


const InputContainer = styled.div`
    input {
        caret-color: #FF7A00;
        width: 25vw;
        font-size: 1rem;
        color: #222222;
        border-radius: 8px;
        border: 1px solid black;
        padding-bottom: 5px;
        padding: 8px 10px;
        background: none;
        margin-right: 10px; // 버튼과의 간격을 설정
    }
    input:focus {
        outline: none;
    }
`;

const RequestTitle = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const requestMatzip = async () => {
        openModal();
    }

    return (
        <>
            <h2>요청 게시판</h2>
            <InputContainer >
                <input type="text" placeholder="맛집을 요청해주세요." />
                <OrangeBtn text={"맛집 요청하기"} style={{ boxShadow: 'none' }} onClick={requestMatzip} />
            </InputContainer>
            <span style={{ margin: "1px 0px 60px 1px", color: "#FF7A00", fontSize: "0.8rem" }}>
                요청 자체 등록 요청은 게시판을 이용해주세요.
            </span>
            {/* 모달 표시 여부에 따라 컴포넌트를 렌더링 */}
            {isModalOpen && <RequestMatzipCard onClose={closeModal} />}
        </>
    )
}

export default RequestTitle;