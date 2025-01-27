import { useState } from 'react';

export const useLocation = (initialLocation = '') => {
    const [inputLocation, setInputLocation] = useState('');

    const handleLocationChange = (newLocation, setCurrentLocation) => {
        if (newLocation.trim()) {
            const location = newLocation.trim();
            setCurrentLocation(location);
            localStorage.setItem('currentLocation', location);
            setInputLocation('');
        }
    };

    return {
        inputLocation,
        setInputLocation,
        handleLocationChange
    };
};
