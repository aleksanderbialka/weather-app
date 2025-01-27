import axios from "axios";

const API_BASE = "https://air-quality-api.open-meteo.com/v1/air-quality";

export const fetchAirQuality = async (coordinates) => {
    try {
        const response = await axios.get(API_BASE, {
            params: {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                hourly: "pm10,pm2_5",
                current: "pm10,pm2_5",
                timezone: "auto"
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
};
