import React from 'react';
import '../../styles/components/locations/Location.css';
import LocationDisplay from './LocationDisplay';
import LocationForm from './LocationForm';
import { useLocation }  from '../../hooks/useLocation';

const Location = ({ currentLocation, setCurrentLocation, isDay }) => {
    const { inputLocation, setInputLocation, handleLocationChange } = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLocationChange(inputLocation, setCurrentLocation);
    };

    return (
        <div className="location-container">
            <LocationDisplay currentLocation={currentLocation} isDay={isDay} />
            <LocationForm 
                inputLocation={inputLocation}
                setInputLocation={setInputLocation}
                handleSubmit={handleSubmit}
                isDay={isDay}
            />
        </div>
    );
};

export default Location;