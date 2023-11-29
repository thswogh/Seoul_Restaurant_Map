import { styled } from "styled-components";

const StyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    padding: 20vh 20vw;
    background-color: aliceblue;
`;
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* 블러 효과를 위한 반투명 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 50vw;
    background-color: white;
    border-radius:8px;
`;

const RequestMatzipCard = ({ onClose }) => {
    return (
        <ModalWrapper>
            <ModalContent>
                <h3>모달 내용</h3>
                <button onClick={onClose}>닫기</button>
            </ModalContent>
        </ModalWrapper>
    )
}

export default RequestMatzipCard;