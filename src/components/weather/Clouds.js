import React, { useMemo } from 'react';
import weatherConstants from '../../constants/weatherConstants';
import { getCloudOpacity, getBrightness, getAnimationDuration, getRandomPosition } from '../../utils/weatherUtils';
import '../../styles/components/weather/Clouds.css';

const Clouds = ({ weatherCode, isDay }) => {
  const clouds = useMemo(() => {
    if (!weatherConstants.shouldShowClouds(weatherCode)) return null;

    const cloudOpacity = getCloudOpacity(weatherCode, isDay);
    const brightness = getBrightness(isDay);

    return Array(weatherConstants.getCloudCount(weatherCode)).fill(null).map((_, index) => {
      const size = Math.random() < 0.33 ? 'small' : Math.random() < 0.66 ? 'medium' : 'large';
      const topPosition = getRandomPosition();
      const startPosition = Math.random() * 120;
      const duration = getAnimationDuration();
      const opacity = (0.6 + Math.random() * 0.3) * cloudOpacity;

      return (
        <div
          key={index}
          className={`cloud ${size}`}
          style={{
            top: `${topPosition}%`,
            left: `${-20}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${-duration * (startPosition/100)}s`,
            opacity: opacity,
            zIndex: Math.floor(Math.random() * 3) - 1,
            filter: `blur(1px) brightness(${brightness})`
          }}
        />
      );
    });
  }, [weatherCode, isDay]);

  return <div className="clouds-container">{clouds}</div>;
};

export default Clouds;
