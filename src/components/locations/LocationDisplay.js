import React from 'react';
import '../../styles/components/locations/Location.css';

const LocationDisplay = ({ currentLocation, isDay }) => (
    <h1 style={{ color: isDay ? 'black' : 'white' }}>
        {currentLocation}
    </h1>
);

export default LocationDisplay;