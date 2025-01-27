import {
    WiDaySunny, WiNightClear, WiDayCloudy, WiNightCloudy,
    WiCloud, WiCloudy, WiRain, WiDayRain, WiNightRain,
    WiSnow, WiDayFog, WiNightFog, WiThunderstorm
} from 'react-icons/wi';

const weatherCodes = {
    clear: [0],
    partlyCloudy: [1, 2],
    cloudy: [3],
    fog: [45, 48],
    lightRain: [51, 53, 55, 61, 63, 65],
    snow: [71, 73, 75, 77, 85, 86],
    rain: [80, 81, 82],
    thunder: [95, 96, 99]
};

export const getWeatherIcon = (code, isDay = true) => {
    const findWeatherType = () => {
        return Object.entries(weatherCodes).find(([_, codes]) => 
            codes.includes(code)
        )?.[0] || 'clear';
    };

    const icons = {
        clear: isDay ? WiDaySunny : WiNightClear,
        partlyCloudy: isDay ? WiDayCloudy : WiNightCloudy,
        cloudy: isDay ? WiCloud : WiCloudy,
        fog: isDay ? WiDayFog : WiNightFog,
        lightRain: isDay ? WiDayRain : WiNightRain,
        snow: WiSnow,
        rain: WiRain,
        thunder: WiThunderstorm
    };

    return icons[findWeatherType()];
};
