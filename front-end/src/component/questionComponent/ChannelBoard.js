import { styled } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import PreviousArrowBtn from '../../img/previousArrow.png'
import NextArrowBtn from '../../img/nextArrow.png'
import SelectedTag from "../common/SelectedTag";

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const StyledTh = styled.th`
    padding: 8px 0;
    color: #BBBBBB;
    border-bottom: 2px solid black;
    text-align: left;
    &:first-child {width: 10%};
    &:nth-child(2) {width: 60%};
    &:nth-child(3) {width: 15%;}
    &:nth-child(4) {width: 15%;}
`;

const StyledTd = styled.td`
    padding: 2vh 0;
    border-bottom: 1px solid #BBBBBB;
`;

const StyledDecoTd = styled.td`
    padding: 2vh 0;
    border-bottom: 1px solid #BBBBBB;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        color: #FF7A00;
        text-decoration-color:#FF7A00;
    }
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

const TableRow = ({ requestData, index, noticeData }) => {
    if (noticeData) {
        // noticeData가 존재하는 경우에 반환할 JSX
        return (
            <tr>
                <StyledTd><SelectedTag isSelected={true} text="공지사항" /></StyledTd>
                <StyledDecoTd>{noticeData.title}</StyledDecoTd>
                <StyledTd>{noticeData.userId}</StyledTd>
                <StyledTd>{noticeData.uploadDate}</StyledTd>
            </tr>
        );
    } else if (requestData) {
        // noticeData가 존재하지 않는 경우에 반환할 JSX
        return (
            <tr>
                <StyledTd style={{ fontWeight: "700" }}>{index + 1}</StyledTd>
                <StyledDecoTd>{requestData.title}</StyledDecoTd>
                <StyledTd>{requestData.userId}</StyledTd>
                <StyledTd>{requestData.uploadDate}</StyledTd>
            </tr>
        );
    }
};

const ITEMS_PER_PAGE = 5; // 페이지당 보여줄 아이템 수

const ChannelBoard = () => {
    const [nomalQuestionList, setNormalQuestionList] = useState([]);
    const [noticeList, setNoticeList] = useState([]);
    const [totalNum, setTotalNum] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async () => {
        const userId = sessionStorage.getItem("userId");
        try {
            const response = await axios.get("/channelRequestBoard/searchPost", {
                params: {
                    userId: userId,
                },
            });
            setTotalNum(response.data.normal.length);
            setNoticeList(response.data.notice);

            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const currentItems = response.data.normal.slice(startIndex, endIndex);
            setNormalQuestionList(currentItems);
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
                총 <span style={{ color: "#FF7A00" }}>{totalNum}</span>건의 게시물이 있습니다
            </div>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>NO</StyledTh>
                        <StyledTh>제목</StyledTh>
                        <StyledTh>작성자</StyledTh>
                        <StyledTh>등록일</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {/* noticeList가 존재하는 경우 먼저 렌더링 */}
                    {noticeList.map((noticeData, index) => (
                        <TableRow key={noticeData.id} noticeData={noticeData} index={index} />
                    ))}
                    {nomalQuestionList.map((requestData, index) => (
                        <TableRow key={requestData.id} requestData={requestData} index={totalNum - index - 1} />
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

export default ChannelBoard;