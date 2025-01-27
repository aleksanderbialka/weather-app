import React from 'react';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';
import { getWeatherIcon } from '../../utils/weatherIcons';

const HourlyItem = ({ hour, temp, humidity, windSpeed, weatherCode, isDay, getWeatherIconColor }) => {
    const HourlyIcon = getWeatherIcon(weatherCode, isDay);
    const hourlyIconColor = getWeatherIconColor(weatherCode, isDay);

    return (
        <div className="hour-item">
            <p className="hour">{hour}</p>
            <HourlyIcon className="weather-icon-small" style={{ color: hourlyIconColor }}/>
            <div className="hour-temp">
                <WiThermometer className="weather-icon-small" />
                <span>{temp}°C</span>
            </div>
            <div className="hour-precip">
                <WiHumidity className="weather-icon-small" />
                <span>{humidity}%</span>
            </div>
            <div className="hour-wind">
                <WiStrongWind className="weather-icon-small" />
                <span>{windSpeed} km/h</span>
            </div>
        </div>
    );
};

export default HourlyItem;
