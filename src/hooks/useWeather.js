import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

export const useWeather = (initialLocation = 'Warszawa') => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(
        localStorage.getItem('currentLocation') || initialLocation
    );

    useEffect(() => {
        getWeatherData(currentLocation, setWeatherData);
    }, [currentLocation]);

    return {
        weatherData,
        currentLocation,
        setCurrentLocation
    };
};
