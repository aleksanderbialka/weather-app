import React, { useEffect, useState } from "react";
import { fetchWeather } from "../api/open-meteo-api";
import Navbar from "../components/layout/Navbar";

function Dashboard() {

const [weatherData, setWeatherData] = useState(null);
const [location, setLocation] = useState("Katowice");

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchWeather(location);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


return (
  <div>
    <Navbar />
  </div>
);
}


export default Dashboard;