import MainSidebar from '../sidebar/MainSidebar';
import MapWrapper from './MapWrapper';
import styled from 'styled-components';

const AppWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

const MainContent = () => {
    return (
        <AppWrapper>
            <MainSidebar />
            <MapWrapper />
        </AppWrapper>
    );
};

export default MainContent;
