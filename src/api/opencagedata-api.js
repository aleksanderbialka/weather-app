import axios from "axios";


const GEOCODING_API_KEY = process.env.REACT_APP_GEOCODING_API_KEY;

const GEOCODING_API = "https://api.opencagedata.com/geocode/v1/json";


export const getCoordinates = async (locationName) => {
    try {
        const response = await axios.get(GEOCODING_API, {
            params: {
                q: locationName,
                key: GEOCODING_API_KEY,
                limit: 1,
                language: "en",
            },
        });

        if (response.data.results && response.data.results.length > 0) {
            const { lat, lng } = response.data.results[0].geometry;
            return { latitude: lat, longitude: lng };
        } else {
            alert("Location not found. Please try another one.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        alert("Failed to fetch coordinates. Please try again later.");
        return null;
    }
};