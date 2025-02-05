import React from "react";
import "../../styles/components/layout/Background.css";
import getBackgroundGradient from "../../utils/weatherGradients";
import weatherConstants from "../../constants/weatherConstants";
import Sun from "../weather/Sun";
import Clouds from "../weather/Clouds";
import Rain from "../weather/Rain";

const Background = ({ weatherCode, isDay }) => {
  const gradient = getBackgroundGradient(weatherCode, isDay);

  return (
    <div className="background" style={{ background: gradient }}>
      <Sun weatherCode={weatherCode} isDay={isDay} />
      {weatherConstants.shouldShowClouds(weatherCode) && (
        <Clouds weatherCode={weatherCode} isDay={isDay} />
      )}
      <Rain weatherCode={weatherCode} />
    </div>
  );
};

export default Background;
