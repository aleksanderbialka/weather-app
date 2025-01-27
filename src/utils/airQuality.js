export const getAirQualityStatus = (pm25) => {
    if (!pm25) return { text: "Brak danych", color: "#666" };
    if (pm25 <= 10) return { text: "Bardzo dobra", color: "#57ab5a" };
    if (pm25 <= 20) return { text: "Dobra", color: "#74b816" };
    if (pm25 <= 25) return { text: "Umiarkowana", color: "#f59f00" };
    if (pm25 <= 50) return { text: "Dostateczna", color: "#fd7e14" };
    if (pm25 <= 75) return { text: "Zła", color: "#e03131" };
    return { text: "Bardzo zła", color: "#c92a2a" };
};
