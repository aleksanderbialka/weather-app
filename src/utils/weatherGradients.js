const gradients = {
  clear: 'linear-gradient(to bottom, #0ab5f9, #d2d2d2)',
  partlyCloudy: 'linear-gradient(to bottom, #78b6e4, #c7c7c7)',
  cloudy: 'linear-gradient(to bottom, #9eb3c7, #b8b8b8)',
  rainy: 'linear-gradient(to bottom, #6a8ca3, #a3a3a3)',
  stormy: 'linear-gradient(to bottom, #4a6276, #8a8a8a)',
  night: 'linear-gradient(to bottom, rgb(11, 11, 57), rgb(10, 10, 29))'
};

const getBackgroundGradient = (weatherCode, isDay) => {
  if (!isDay) return gradients.night;

  switch (true) {
    case [0].includes(weatherCode):
      return gradients.clear;
    case [1, 2].includes(weatherCode):
      return gradients.partlyCloudy;
    case [3, 45, 48].includes(weatherCode):
      return gradients.cloudy;
    case [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode):
      return gradients.rainy;
    case [95, 96, 99].includes(weatherCode):
      return gradients.stormy;
    default:
      return gradients.clear;
  }
};

export default getBackgroundGradient;
