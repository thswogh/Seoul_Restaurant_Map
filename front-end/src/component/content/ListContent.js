import React from 'react';
import ListSidebar from '../sidebar/ListSidebar';
import MapWrapper from './MapWrapper';
import styled from 'styled-components';

const AppWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

const ListContent = () => {
    return (
        <AppWrapper>
            <ListSidebar />
            <MapWrapper />
        </AppWrapper>
    );
};

export default ListContent;
