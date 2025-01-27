
export const getCloudOpacity = (weatherCode, isDay) => {
  if (!isDay) return 0.3;
    
  const opacityMap = {
    0: 0,
    1: 0.4,
    2: 0.6,
    3: 0.8
  };

  return opacityMap[weatherCode] || 0.7;
};

export const getBrightness = (isDay) => isDay ? 1 : 0.5;


export const getAnimationDuration = () => 40 + Math.random() * 40;

export const getRandomPosition = () => Math.random() * 85;

export const getFormattedHour = (weatherData, index) => {
    if (!weatherData?.hourly?.time) return "00:00";
    const timeString = weatherData.hourly.time[index];
    return timeString.split('T')[1].substring(0, 5);
};

export const getNext24Hours = (weatherData) => {
    if (!weatherData?.hourly) return [];
    const currentTimeIndex = weatherData.hourly.time.findIndex(time => 
        time.includes(weatherData.current.time.split('T')[0])
    );
    const currentHourIndex = parseInt(weatherData.current.time.split('T')[1].split(':')[0]);
    const startIndex = currentTimeIndex + currentHourIndex;
    return weatherData.hourly.temperature_2m.slice(startIndex, startIndex + 24);
};

export const getWeatherIconColor = (code, isDay) => {
    if (!isDay) return '#495057';
    
    switch (true) {
        case [0, 1].includes(code): return '#ffd43b';
        case [2, 3].includes(code): return '#868e96';
        case [45, 48].includes(code): return '#adb5bd';
        case [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code): return '#4dabf7';
        case [71, 73, 75, 77, 85, 86].includes(code): return '#dee2e6';
        case [95, 96, 99].includes(code): return '#495057';
        default: return isDay ? '#ffd43b' : '#495057';
    }
};
