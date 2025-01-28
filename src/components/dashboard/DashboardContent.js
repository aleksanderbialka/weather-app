import React from 'react';
import CurrentWeather from '../currentWeather/CurrentWeather';
import WeatherForecast from '../forecast/WeatherForecast';

const DashboardContent = ({ activeTab, weatherData }) => {
    switch (activeTab) {
        case "7days":
            return <WeatherForecast weatherData={weatherData} days={7} />;
        case "14days":
            return <WeatherForecast weatherData={weatherData} days={14} />;
        default:
            return <CurrentWeather weatherData={weatherData} />;
    }
};

export default DashboardContent;
