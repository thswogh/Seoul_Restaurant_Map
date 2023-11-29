import { styled } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import PreviousArrowBtn from '../../img/previousArrow.png'
import NextArrowBtn from '../../img/nextArrow.png'
import DeleteListElementBtn from "../common/DeleteListElementBtn";

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const StyledTh = styled.th`
    padding: 8px 0;
    color: #BBBBBB;
    border-bottom: 2px solid black;
    text-align: left;
    &:first-child {width: 13%};
    &:nth-child(2) {width: 13%};
    &:nth-child(3) {width: 13%;}
    &:nth-child(4) {width: 52%;}
    &:nth-child(5) {width: 9%;}
`;

const StyledTd = styled.td`
    padding: 2vh 0;
    border-bottom: 1px solid #BBBBBB;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: black; /* 적절한 색상으로 변경하세요 */
    opacity: 0.8;
    cursor: pointer; /* 링크 포인터로 변경 */
`;

const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    object-fit: cover;
    justify-content: center;
    margin-top: 5vh;
`;
const PageButton = styled.img`
    height: 2vh;
    cursor: pointer;
    margin: 0 1vw;
`;
const PageNumber = styled.span`
    margin: 0 1vw;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    color: ${(props) => (props.active ? "#FF7A00" : "inherit")};
`;

const onClickDeleteRequest = async ({ requestId, fetchData, isMine }) => {
    const userId = sessionStorage.getItem("userId");
    let body = { userId: userId, requestId: requestId };
    console.log("isMine", isMine);
    if (isMine === false) {
        alert("사용자의 게시글이 아닙니다.");
        return;
    }
    try {
        const response = await axios.post("/requestBoard/deleteMyRequestElement", body);
        switch (response.data) {
            case 0:
                alert("삭제가 성공적으로 이루어졌습니다.");
                fetchData();
                break;
            case 1:
                alert("사용자가 유효하지 않습니다.");
                break;
            case 2:
                alert("유효하지 않은 요청리스트입니다.");
                break;
            case 3:
                alert("세션이 만료되었습니다.");
                break;
            default:
                alert("알 수 없는 상태 코드입니다:", response.data);
                break;
        }
    } catch (error) {
        alert("Error fetching data:", error.response.data);
    }
};

const TableRow = ({ requestData, fetchData }) => {
    return (
        <tr>
            <StyledTd>{requestData.userId}</StyledTd>
            <StyledTd>{requestData.channelName}</StyledTd>
            <StyledTd>{requestData.restaurantName}</StyledTd>
            <StyledTd>
                <StyledLink href={requestData.videoUrl} target="_blank" rel="noopener noreferrer">
                    {requestData.videoUrl}
                </StyledLink>
            </StyledTd>
            <StyledTd>{requestData.status}</StyledTd>
            <DeleteListElementBtn onClick={() => onClickDeleteRequest({ requestId: requestData.requestId, fetchData: fetchData, isMine: requestData.mine })} />
        </tr>
    );
};

const ITEMS_PER_PAGE = 5; // 페이지당 보여줄 아이템 수
const RequestMatzipBoard = () => {
    const [requestList, setRequestList] = useState([]);
    const [totalNum, setTotalNum] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async () => {
        const userId = sessionStorage.getItem("userId");
        try {
            const response = await axios.get("/requestBoard/searchRequestList", {
                params: {
                    userId: userId,
                },
            });
            setTotalNum(response.data.length);

            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const currentItems = response.data.slice(startIndex, endIndex);
            setRequestList(currentItems);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const totalPages = Math.ceil(totalNum / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    useEffect(() => {
        fetchData();
    }, []); // 초기 로딩 시에도 데이터를 가져오도록 변경

    return (
        <>
            <div style={{ marginBottom: "1vh" }}>
                총 <span style={{ color: "#FF7A00" }}>{totalNum}</span>건의 글이 있습니다
            </div>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>작성자</StyledTh>
                        <StyledTh>채널 이름</StyledTh>
                        <StyledTh>식당 이름</StyledTh>
                        <StyledTh>영상 URL</StyledTh>
                        <StyledTh>처리 상태</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {requestList.map((requestData) => (
                        <TableRow key={requestData.id} requestData={requestData} fetchData={fetchData} />
                    ))}
                </tbody>
            </StyledTable>

            <PaginationContainer>
                <PageButton
                    src={PreviousArrowBtn}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                    <PageNumber
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        active={currentPage === index + 1}
                    >
                        {index + 1}
                    </PageNumber>
                ))}
                <PageButton
                    src={NextArrowBtn}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </PaginationContainer>
        </>
    );
}

export default RequestMatzipBoard;
