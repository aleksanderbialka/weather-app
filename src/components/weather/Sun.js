import React from 'react';
import '../../styles/components/weather/Sun.css';

const Sun = ({ weatherCode, isDay }) => {
  const shouldShowSun = (code) => {
    return [0, 1, 2].includes(code) && isDay;
  };

  const isSunBehindClouds = (code) => {
    return [1, 2].includes(code);
  };

  if (!shouldShowSun(weatherCode)) return null;

  const sunClass = `sun ${isSunBehindClouds(weatherCode) ? 'behind-clouds' : 'visible'}`;
  
  return <div className={sunClass} />;
};

export default Sun;
