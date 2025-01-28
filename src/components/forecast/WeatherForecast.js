import React from 'react';
import '../../styles/components/forecast/ForecastContainer.css';
import '../../styles/components/forecast/DailyForecast.css';
import '../../styles/components/forecast/TemperatureChart.css';
import '../../styles/common/DateScroll.css';
import DailyForecastItem from './DailyForecastItem';
import TemperatureChart from './TemperatureChart';

const WeatherForecast = ({ weatherData, days }) => {
    if (!weatherData?.daily) return null;

    const isDay = weatherData.current.is_day === 1;

    return (
        <div className="forecast-container">
            <h2 style={{ maxWidth: '1200px', margin: '0 auto 20px', color: isDay ? 'black' : 'white'}}>
                Prognoza na {days} dni
            </h2>
            <div className="dates-scroll-container">
                {weatherData.daily.temperature_2m_max.slice(0, days).map((maxTemp, index) => (
                    <DailyForecastItem
                        key={index}
                        index={index}
                        maxTemp={maxTemp}
                        minTemp={weatherData.daily.temperature_2m_min[index]}
                        precipitation={weatherData.daily.precipitation_sum[index]}
                        windSpeed={weatherData.daily.wind_speed_10m_max[index]}
                        windDirection={weatherData.daily.wind_direction_10m_dominant[index]}
                        weatherCode={weatherData.daily.weather_code[index]}
                    />
                ))}
            </div>
            <TemperatureChart 
                maxTemps={weatherData.daily.temperature_2m_max.slice(0, days)}
                minTemps={weatherData.daily.temperature_2m_min.slice(0, days)}
                days={days}
            />
        </div>
    );
};

export default WeatherForecast;
