import axios from "axios";
import { getCoordinates } from "./opencagedata-api";
import { fetchAirQuality } from './air-quality-api';

const API_BASE = "https://api.open-meteo.com/v1/forecast";

export const fetchWeather = async (location) => {
    try {
        const coordinates = await getCoordinates(location);
        if (!coordinates) return null;

        const weatherResponse = await axios.get(API_BASE, {
            params: {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,wind_speed_10m,wind_direction_10m,weather_code",
                hourly: "temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m,weather_code,is_day",
                daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant,weather_code",
                timezone: "auto", 
                forecast_days: 14
            }
        });

        let airQualityData = null;
        try {
            airQualityData = await fetchAirQuality(coordinates);
        } catch (error) {
            console.error("Error fetching air quality, continuing with weather data:", error);
        }

        if (weatherResponse.data) {
            return {
                ...weatherResponse.data,
                airQuality: airQualityData?.current || null
            };
        }
        return null;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};