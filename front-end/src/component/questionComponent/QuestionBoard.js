import { useState } from "react";
import GeneralBoard from "./GeneralBoard";
import ChannelBoard from "./ChannelBoard";
import { styled } from "styled-components";
import OrangeBtn from "../common/OrangeBtn";
import AddGeneralBoardCard from "./AddGeneralBoardCard";
import AddChannelBoardCard from "./AddChannelBoardCard";

const BoardListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavigationBar = ({ selectedTab, onTabChange, buttonStyle }) => {
    const handleClick = (tab) => {
        onTabChange(tab);
    };
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const requestMatzip = async () => {
        openModal();
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                <button
                    onClick={() => handleClick('generalBoard')}
                    style={{
                        ...buttonStyle,
                        color: selectedTab === 'generalBoard' ? '#FF7A00' : 'black',
                        borderBottom: selectedTab === 'generalBoard' ? '1px solid #FF7A00' : 'none',
                    }}
                >
                    일반 게시판
                </button>
                <button
                    onClick={() => handleClick('channelBoard')}
                    style={{
                        ...buttonStyle,
                        color: selectedTab === 'channelBoard' ? '#FF7A00' : 'black',
                        borderBottom: selectedTab === 'channelBoard' ? '1px solid #FF7A00' : 'none',
                    }}
                >
                    채널 요청 게시판
                </button>
            </div>
            <OrangeBtn text={"글 작성하기"} style={{ boxShadow: 'none', borderRadius: 0 }} onClick={requestMatzip} />
            {/* 모달 표시 여부에 따라 컴포넌트를 렌더링 */}
            {selectedTab === 'generalBoard' && isModalOpen && <AddGeneralBoardCard onClose={closeModal} />}
            {selectedTab === 'channelBoard' && isModalOpen && <AddChannelBoardCard onClose={closeModal} />}
        </div>
    );
};
const QuestionBoard = () => {
    const [selectedTab, setSelectedTab] = useState('generalBoard');

    const customButtonStyle = {
        border: 'none',
        backgroundColor: 'white',
        fontSize: '1.3rem',
        fontWeight: '700',
        marginTop: '0px',
        marginRight: '2vw',
        marginLeft: '0px',
        marginBottom: '3vh',
        padding: '8px',
        cursor: 'pointer',
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <BoardListWrapper>
            <div>
                <NavigationBar selectedTab={selectedTab} onTabChange={handleTabChange} buttonStyle={customButtonStyle} />
                {selectedTab === 'generalBoard' ? <GeneralBoard /> : null}
                {selectedTab === 'channelBoard' ? <ChannelBoard /> : null}
            </div>
        </BoardListWrapper>
    );
}

export default QuestionBoard;