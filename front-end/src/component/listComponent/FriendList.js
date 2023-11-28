import { FriendListData } from "../../data/friendListData";
import { useState } from "react";
import { styled } from "styled-components";
import OrangeTriangle from "../common/OrangeTriangle";
import InvertedOrangeTriangle from "../common/InvertedOrangeTrianlge";
import PngSearch from '../../img/Search.png'
import axios from "axios";

const AddBtn = styled.div`
    font-size: 1.1rem;
    font-weight: 900;
    margin-bottom: 10px;
    margin-top: 18px;
    cursor: pointer;
`
const InputContainer = styled.div`
    display: ${props => (props.showinput ? 'flex' : 'none')}; // showInput이 true일 때만 flex로 설정

    input {
        background-image: url(${PngSearch});
        background-position: left center; /* 이미지를 왼쪽 중앙에 배치 */
        background-repeat: no-repeat; /* 이미지 반복 없음 */
        background-size: auto 80%; /* 높이를 80%로 설정, 너비는 자동으로 조절됨 */

        caret-color: #FF7A00;
        flex: 1; // 남은 공간을 모두 차지하도록 설정
        font-size: 15px;
        color: #222222;
        border: none;
        border-bottom: solid black 2px;
        padding-bottom: 5px;
        padding-left: 30px;
        z-index: 5;
        margin-right: 10px; // 버튼과의 간격을 설정
    }
    input:focus {
        outline: none;
    }
    button {
        width: 80px;
        padding: 3px 5px;
        box-sizing: border-box;
    }
`;

const SmallOrangeTriangle = () => (
    <span style={{ color: '#FFA500', marginRight: '5px' }}>▼</span>
);

const SmallInvertedOrangeTriangle = () => (
    <span style={{ color: '#FFA500', marginRight: '5px' }}>▲</span>
);

const ToggleList = ({ friend }) => {
    const [isFriendOpen, setIsFriendOpen] = useState(false);

    const handleFriendToggle = () => setIsFriendOpen(!isFriendOpen);

    return (
        <div>
            <h3 onClick={handleFriendToggle} style={{ display: 'flex', alignItems: 'center', color: "black", backgroundColor: "white" }}>
                {isFriendOpen ? <OrangeTriangle /> : <InvertedOrangeTriangle />} {friend.friendId}
            </h3>
            {isFriendOpen && (
                <ul style={{ listStyle: 'none', }}>
                    {friend.listInfo.map((list, index) => (
                        <ToggleListItems key={index} list={list} />
                    ))}
                </ul>
            )}
        </div>
    );
};

const ToggleListItems = ({ list }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const handleListToggle = () => {
        setIsListOpen(!isListOpen);
    };

    return (
        <li>
            <h4 onClick={handleListToggle} style={{ display: 'flex', alignItems: 'center' }}>
                {isListOpen ? <SmallOrangeTriangle /> : <SmallInvertedOrangeTriangle />} {list.listName}
            </h4>
            {isListOpen && (
                <ul>
                    {list.restaurantInfo.map((restaurant, index) => (
                        <li key={index}>
                            <span style={{ fontWeight: 700, color: "#FF7A00" }}>{restaurant.restaurantName}</span>
                            {/* <ul>
                                {info.tagList.map((tag, tagIndex) => (
                                    <li key={tagIndex}>{tag}</li>
                                ))}
                            </ul> */}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const FriendList = () => {
    const [showInput, setShowInput] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const onClickAddBtn = () => setShowInput(!showInput);
    const onInputChange = e => setInputValue(e.target.value);

    const onClickSearchFriend = async () => {
        try {
            //우선 친구아이디가 존재하는지 확인, 존재하면 친구 리스트 불러오기
            const responseExistId = await axios.get("/list/isExistFriend", {
                params: {
                    friendId: inputValue,
                },
            });
            switch (responseExistId.data) {
                case 0:
                    console.log("친구를 찾았습니다!");
                    const responseSearchFriendList = await axios.get("/list/searchFriendList", {
                        params: {
                            friendId: inputValue,
                        },
                    });
                    // searchFriendList에서 받은 값에 따라 처리
                    switch (responseSearchFriendList.data) {
                        case 0:
                            console.log("친구 목록을 성공적으로 가져왔습니다.");
                            break;
                        default:
                            console.error("searchFriendList에서 알 수 없는 상태 코드입니다:", responseSearchFriendList.data);
                            break;
                    }
                    break;
                case 1:
                    console.error("본인 아이디를 입력했습니다. 다른 아이디를 입력해주세요.");
                    break;
                case 2:
                    console.error("아이디가 없습니다. 다시 시도해주세요.");
                    break;
                default:
                    console.error("알 수 없는 상태 코드입니다:", responseExistId.data);
                    break;
            }
        } catch (error) {
            console.error("Error:", error.response.data);
            return false;
        }
    };

    return (
        <>
            <AddBtn onClick={onClickAddBtn}>친구 아이디 검색하기</AddBtn>
            <InputContainer showinput={showInput}>
                <input type="text" value={inputValue} onChange={onInputChange} placeholder="친구 아이디를 입력해주세요" />
                <button onClick={onClickSearchFriend}>검색하기</button>
            </InputContainer>
            <div>
                {FriendListData.map((friend, index) => (
                    <ToggleList key={index} friend={friend} />
                ))}
            </div>
        </>
    );
};

export default FriendList;