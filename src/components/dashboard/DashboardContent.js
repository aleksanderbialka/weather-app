import React from 'react';
import CurrentWeather from '../currentWeather/CurrentWeather';


const DashboardContent = ({ activeTab, weatherData }) => {
    switch (activeTab) {
        case "7days":
            break;
        case "14days":
            break;
        default:
            return <CurrentWeather weatherData={weatherData} />;
    }
};

export default DashboardContent;
