import { createContext, useContext, useState } from 'react';
import { MarkersInfo } from '../../data/MarkerPositions';

const MarkersContext = createContext();

export const useMarkers = () => {
    const context = useContext(MarkersContext);
    if (!context) {
        throw new Error('useMarkers must be used within a MarkersProvider');
    }
    return context;
};

export const MarkersProvider = ({ children }) => {
    const [markers, setMarkers] = useState(MarkersInfo);

    const value = {
        markers,
        setMarkers,
    };

    return (
        <MarkersContext.Provider value={value}>
            {children}
        </MarkersContext.Provider>
    );
};
