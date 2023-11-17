import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChannelWrapper from '../Channel';
import FoodWrapper from '../Food';
import ViewBar from '../ViewBar';
import RegionDropdown from '../Region';
import { OrangeCircle } from '../common/OrangeCircle';


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


const MainSidebar = () => {
    const [grandParentChannelTagArray, setGrandParentChannelTagArray] = useState([]);

    // 부모의 부모 컴포넌트에서 사용하려는 selectedChannelTagArray 값 감지
    const handleTagArrayChange = (newTagArray) => {
        setGrandParentChannelTagArray(newTagArray);
    };
    useEffect(() => {
        console.log("channel", grandParentChannelTagArray);
    }, [grandParentChannelTagArray])

    return (
        <SidebarWrapper>
            <h2 style={{ marginTop: "0" }}>나에게 딱 맞는 맛집!</h2>
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
