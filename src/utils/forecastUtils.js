export const getDayInfo = (index) => {                      
    const date = new Date();
    date.setDate(date.getDate() + index);
    return {
        dayName: date.toLocaleDateString('pl-PL', { weekday: 'long' }),
        date: date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'numeric' })
    };
};

export const getWeatherIconColor = (code) => {
    switch (true) {
        case [0, 1].includes(code): return '#ffd43b';
        case [2, 3].includes(code): return '#868e96';
        case [45, 48].includes(code): return '#adb5bd';
        case [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code): return '#4dabf7';
        case [71, 73, 75, 77, 85, 86].includes(code): return '#dee2e6';
        case [95, 96, 99].includes(code): return '#495057';
        default: return '#ffd43b';
    }
};
