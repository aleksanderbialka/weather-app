import React from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import { WiWindDeg } from 'react-icons/wi';
import { getWeatherIcon } from '../../utils/weatherIcons';
import { getDayInfo, getWeatherIconColor } from '../../utils/forecastUtils';

const DailyForecastItem = ({ index, maxTemp, minTemp, precipitation, windSpeed, windDirection, weatherCode }) => {
    const dayInfo = getDayInfo(index);
    const WeatherIcon = getWeatherIcon(weatherCode, true);
    const iconColor = getWeatherIconColor(weatherCode);

    return (
        <div className="date-item">
            <h3>{dayInfo.dayName}</h3>
            <p className="date">{dayInfo.date}</p>
            <WeatherIcon className="weather-icon" style={{ color: iconColor, marginBottom: '10px' }} />
            <div className="daily-temp">
                <ThermostatIcon />
                <span>{maxTemp}°C / {minTemp}°C</span>
            </div>
            <div className="daily-precip">
                <OpacityIcon />
                <span>{precipitation} mm</span>
            </div>
            <div className="daily-wind">
                <AirIcon />
                <span>{windSpeed} km/h</span>
            </div>
            <div className="daily-wind-direction">
                <WiWindDeg />
                <span>{windDirection}°</span>
            </div>
        </div>
    );
};

export default DailyForecastItem;
