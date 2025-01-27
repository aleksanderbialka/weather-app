import React from 'react';
import '../../styles/components/currentWeather/CurrentWeather.css';
import '../../styles/components/currentWeather/WeatherDisplay.css';
import '../../styles/components/currentWeather/HourlyForecast.css';
import '../../styles/components/currentWeather/WeatherIcons.css';
import WeatherDisplay from './WeatherDisplay';
import HourlyForecast from './HourlyForecast';
import { getFormattedHour, getNext24Hours, getWeatherIconColor } from '../../utils/weatherUtils';
import { getAirQualityStatus } from '../../utils/airQuality';

const CurrentWeather = ({ weatherData }) => {
    if (!weatherData?.current) {
        return <p className="weather-loading">Ładowanie danych pogodowych...</p>;
    }

    return (
        <div className="weather-container">
            <WeatherDisplay 
                weatherData={weatherData}
                getWeatherIconColor={getWeatherIconColor}
                getAirQualityStatus={getAirQualityStatus}
            />
            <HourlyForecast 
                weatherData={weatherData}
                getFormattedHour={(index) => getFormattedHour(weatherData, index)}
                getNext24Hours={() => getNext24Hours(weatherData)}
                getWeatherIconColor={getWeatherIconColor}
            />
        </div>
    );
};

export default CurrentWeather;