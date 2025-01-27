import { fetchWeather } from "../api/open-meteo-api"

export const getWeatherData = async (currentLocation, setWeatherData) => {
    const data = await fetchWeather(currentLocation);
    setWeatherData(data);
};