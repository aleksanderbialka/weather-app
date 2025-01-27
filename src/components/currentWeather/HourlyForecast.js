import React from 'react';
import '../../styles/components/currentWeather/HourlyForecast.css';
import '../../styles/components/currentWeather/WeatherIcons.css';
import HourlyItem from './HourlyItem';

const HourlyForecast = ({ weatherData, getFormattedHour, getNext24Hours, getWeatherIconColor }) => {
    return (
        <div className="hourly-forecast" style={{ overflow: 'hidden' }}>
            <h2>Prognoza 24-godzinna</h2>
            <div className="hours-scroll-container">
                {getNext24Hours().map((temp, index) => {
                    const timeIndex = parseInt(weatherData.current.time.split('T')[1].split(':')[0]) + index;
                    const isDayTime = weatherData.hourly.is_day[timeIndex] === 1;
                    
                    return (
                        <HourlyItem
                            key={index}
                            hour={getFormattedHour(timeIndex)}
                            temp={temp}
                            humidity={weatherData.hourly.relative_humidity_2m[index]}
                            windSpeed={weatherData.hourly.wind_speed_10m[index]}
                            weatherCode={weatherData.hourly.weather_code[index]}
                            isDay={isDayTime}
                            getWeatherIconColor={getWeatherIconColor}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default HourlyForecast;
