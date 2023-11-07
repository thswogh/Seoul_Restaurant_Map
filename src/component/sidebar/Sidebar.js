import React from 'react';
import styled from 'styled-components';
import SelectedTag from '../common/SelectedTag';

const SidebarWrapper = styled.div`
    width: 30%;
    background-color: aliceblue;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    padding: 20px;
    
    &::-webkit-scrollbar {
    width: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: black;
        border-radius: 0px;
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

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SelectedTag text="seoul" />
        </SidebarWrapper>
    );
};

export default Sidebar;
