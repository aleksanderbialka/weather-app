import React from 'react';
import '../../styles/components/currentWeather/WeatherDisplay.css';
import '../../styles/components/currentWeather/WeatherIcons.css';
import { WiThermometer, WiHumidity, WiStrongWind, WiWindDeg } from 'react-icons/wi';
import { RiTempHotLine } from 'react-icons/ri';
import { MdAir } from 'react-icons/md';
import { getWeatherIcon } from '../../utils/weatherIcons';

const WeatherDisplay = ({ weatherData, getWeatherIconColor, getAirQualityStatus }) => {
    const airQuality = weatherData.airQuality || {};
    const airQualityStatus = getAirQualityStatus(airQuality.pm2_5);
    const WeatherIcon = getWeatherIcon(weatherData.current.weather_code, weatherData.current.is_day === 1);

    return (
        <div className="weather-data current-weather">
            <p>
                <WeatherIcon 
                    className="weather-icon" 
                    style={{ 
                        color: getWeatherIconColor(
                            weatherData.current.weather_code, 
                            weatherData.current.is_day === 1
                        )
                    }}
                />
                <WiThermometer className="weather-icon wi-thermometer" />
                <span>{weatherData.current.temperature_2m}°C</span>
                Temperatura
                <small>
                    <RiTempHotLine className="weather-icon-small" />
                    Odczuwalna: {weatherData.current.apparent_temperature}°C
                </small>
            </p>
            <p>
                <WiHumidity className="weather-icon wi-humidity" />
                <span>{weatherData.current.relative_humidity_2m}%</span>
                Wilgotność
            </p>
            <p>
                <WiStrongWind className="weather-icon wi-strong-wind" />
                <span>{weatherData.current.wind_speed_10m} km/h</span>
                Wiatr
                <small>
                    <WiWindDeg 
                        className="weather-icon-small wi-wind-deg" 
                        style={{ 
                            transform: `rotate(${weatherData.current.wind_direction_10m}deg)`,
                            color: '#15aabf'
                        }} 
                    />
                    Kierunek: {weatherData.current.wind_direction_10m}°
                </small>
            </p>
            {weatherData.airQuality && (
                <p>
                    <MdAir className="weather-icon md-air" />
                    <span style={{ color: airQualityStatus.color }}>
                        {airQualityStatus.text}
                    </span>
                    Jakość powietrza
                    {airQuality.pm2_5 && (
                        <small>PM2.5: {airQuality.pm2_5} µg/m³</small>
                    )}
                    {airQuality.pm10 && (
                        <small>PM10: {airQuality.pm10} µg/m³</small>
                    )}
                </p>
            )}
        </div>
    );
};

export default WeatherDisplay;
