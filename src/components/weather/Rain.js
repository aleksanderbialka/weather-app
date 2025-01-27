import React, { useMemo } from 'react';
import weatherConstants from '../../constants/weatherConstants';
import '../../styles/components/weather/Rain.css';

const Rain = ({ weatherCode }) => {
  const raindrops = useMemo(() => {
    if (!weatherConstants.shouldShowRain(weatherCode)) return null;

    const intensity = weatherConstants.getRainIntensity(weatherCode);
    const dropCount = intensity === 'light' ? 150 : intensity === 'moderate' ? 250 : 350;

    return (
      <div className="rain-container">
        {Array(dropCount).fill(null).map((_, index) => {
          const left = Math.random() * 100;
          const duration = 2 + Math.random() * 1;
          const delay = Math.random() * -3;
          const opacity = (0.3 + Math.random() * 0.2);

          return (
            <div
              key={`rain-${index}`}
              className={`rain ${intensity === 'heavy' ? 'heavy-rain' : intensity === 'light' ? 'light-rain' : ''}`}
              style={{
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                opacity
              }}
            />
          );
        })}
      </div>
    );
  }, [weatherCode]);

  return raindrops;
};

export default Rain;
