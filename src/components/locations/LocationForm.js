import React from 'react';
import '../../styles/components/locations/Location.css';

const LocationForm = ({ inputLocation, setInputLocation, handleSubmit, isDay }) => (
    <form onSubmit={handleSubmit} className="location-form">
        <input
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            placeholder="Wprowadź nazwę miasta..."
            className="location-input"
        />
        <button 
            type="submit" 
            className="location-button" 
            style={{ color: isDay ? 'black' : 'white' }}
        >
            Zmień lokalizację
        </button>
    </form>
);

export default LocationForm;
