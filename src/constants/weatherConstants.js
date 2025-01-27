
const WEATHER_CODES = {
  CLEAR: [0],
  PARTLY_CLOUDY: [1, 2],
  CLOUDY: [3, 45, 48],
  LIGHT_RAIN: [51, 61, 80],
  MODERATE_RAIN: [52, 62, 81],
  HEAVY_RAIN: [53, 63, 82],
  STORM: [95, 96, 99]
};

const weatherLogic = {
  WEATHER_CODES,
  shouldShowClouds: (code) => {
    return [...WEATHER_CODES.PARTLY_CLOUDY, 
            ...WEATHER_CODES.CLOUDY,
            ...WEATHER_CODES.LIGHT_RAIN,
            ...WEATHER_CODES.MODERATE_RAIN,
            ...WEATHER_CODES.HEAVY_RAIN,
            ...WEATHER_CODES.STORM].includes(code);
  },

  getCloudCount: (code) => {
    if (WEATHER_CODES.PARTLY_CLOUDY.includes(code)) {
      return code === 1 ? 10 : 15;
    }
    if (WEATHER_CODES.CLOUDY.includes(code)) return 25;
    if ([...WEATHER_CODES.LIGHT_RAIN, 
         ...WEATHER_CODES.MODERATE_RAIN, 
         ...WEATHER_CODES.HEAVY_RAIN].includes(code)) return 30;
    if (WEATHER_CODES.STORM.includes(code)) return 35;
    return 0;
  },

  shouldShowRain: (code) => {
    return [...WEATHER_CODES.LIGHT_RAIN,
            ...WEATHER_CODES.MODERATE_RAIN,
            ...WEATHER_CODES.HEAVY_RAIN].includes(code);
  },

  getRainIntensity: (code) => {
    if (WEATHER_CODES.LIGHT_RAIN.includes(code)) return 'light';
    if (WEATHER_CODES.MODERATE_RAIN.includes(code)) return 'moderate';
    if (WEATHER_CODES.HEAVY_RAIN.includes(code)) return 'heavy';
    return 'moderate';
  }
};

export default weatherLogic;
