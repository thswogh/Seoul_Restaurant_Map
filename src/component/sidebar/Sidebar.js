import React from 'react';
import styled from 'styled-components';
import SelectedTag from '../common/SelectedTag';

const SidebarWrapper = styled.div`
    width: 30%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 20px;
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
