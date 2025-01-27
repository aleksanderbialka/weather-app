import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import Location from "../components/locations/Location";
import DashboardContent from "../components/dashboard/DashboardContent";
import { useWeather } from "../hooks/useWeather";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("current");
    const { weatherData, currentLocation, setCurrentLocation } = useWeather();

    return (
        <>
            <Background 
                weatherCode={weatherData?.current?.weather_code} 
                isDay={weatherData?.current?.is_day === 1}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar 
                    activeTab={activeTab} 
                    onTabChange={setActiveTab} 
                    isDay={weatherData?.current?.is_day === 1} 
                />
                <Location 
                    currentLocation={currentLocation} 
                    setCurrentLocation={setCurrentLocation}
                    isDay={weatherData?.current?.is_day === 1}
                />
                {weatherData && (
                    <DashboardContent 
                        activeTab={activeTab} 
                        weatherData={weatherData} 
                    />
                )}
            </div>
        </>
    );
}

export default Dashboard;