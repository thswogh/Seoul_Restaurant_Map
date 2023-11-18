import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChannelWrapper from '../Channel';
import FoodWrapper from '../Food';
import ViewBar from '../ViewBar';
import RegionDropdown from '../Region';
import { OrangeCircle } from '../common/OrangeCircle';
import OrangeBtn from '../common/OrangeBtn';
import { json } from 'react-router-dom';


const SidebarWrapper = styled.div`
    min-width: 400px;
    width: 25%;
    background-color: white;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    padding: 40px;

    &::-webkit-scrollbar {
    width: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: black;
        height: auto;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
        border: 1px solid black;
    }
`;

// const SidebarContent = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
// `;

const StyleTitleWrapper = styled.div`
    margin-bottom: 10px;
`;

const StyledTitle = styled.span`
    font-size: 18px;
    font-weight: 800;
    color: black;
    margin-right: 10px;
`;

const StyledSubTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #BBBBBB; 
`;

const StyledTItleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledMainTitle = styled.h2`
    margin-top: 0;
    display: inline-block;
`


const MainSidebar = () => {
    const [grandParentChannelTagArray, setGrandParentChannelTagArray] = useState([]);

    // 부모의 부모 컴포넌트에서 사용하려는 selectedChannelTagArray 값 감지
    const handleTagArrayChange = (newTagArray) => {
        setGrandParentChannelTagArray(newTagArray);
    };
    useEffect(() => {
        console.log("channel", grandParentChannelTagArray);
    }, [grandParentChannelTagArray])

    const onClickSearchHandler = () => {
        console.log(grandParentChannelTagArray);
    };

    return (
        <SidebarWrapper>
            <StyledTItleContainer>
                <StyledMainTitle>나에게 딱 맞는 맛집!</StyledMainTitle>
                <OrangeBtn onClick={onClickSearchHandler} text="검색" />
            </StyledTItleContainer>
            <StyleTitleWrapper> <OrangeCircle /><StyledTitle>CHANNEL</StyledTitle><StyledSubTitle>채널</StyledSubTitle></StyleTitleWrapper>
            <ChannelWrapper onTagArrayChange={handleTagArrayChange} />
            <StyleTitleWrapper> <OrangeCircle /><StyledTitle>FOOD</StyledTitle><StyledSubTitle>음식</StyledSubTitle></StyleTitleWrapper>
            <FoodWrapper />
            <StyleTitleWrapper> <OrangeCircle /><StyledTitle>REGION</StyledTitle><StyledSubTitle>지역</StyledSubTitle></StyleTitleWrapper>
            <RegionDropdown />
            <StyleTitleWrapper> <OrangeCircle /><StyledTitle>VIEWS</StyledTitle><StyledSubTitle>조회수</StyledSubTitle></StyleTitleWrapper>
            <ViewBar />
        </SidebarWrapper>
    );
};

export default MainSidebar;
