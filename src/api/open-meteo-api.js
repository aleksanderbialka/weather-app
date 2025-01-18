import axios from "axios";
import { getCoordinates } from "./opencagedata-api";

const API_BASE = "https://api.open-meteo.com/v1/forecast";

export const fetchWeather = async (location) => {
    try{
        const coordinates = await getCoordinates(location);
        if (!coordinates) return;

        const response = await axios.get(API_BASE, {
            params: {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                current: "temperature_2m,is_day,rain,snowfall,wind_speed_10m",
                hourly: "temperature_2m,precipitation_probability,precipitation,rain,snowfall,wind_speed_10m",
                daily: "temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,wind_speed_10m_max",
                current_weather: true,
                timezone: "Europe/Berlin",
                forecast_days: 14
                }
            });
            const data = await response.json();
            return data;
            
    }catch(error){
        console.error("Error while fetching data:", error);
    }
}