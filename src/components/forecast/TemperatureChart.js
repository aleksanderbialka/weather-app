import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const TemperatureChart = ({ maxTemps, minTemps, days }) => {
    const getDayLabels = () => {
        const labels = [];
        for (let i = 0; i < days; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            labels.push(date.toLocaleDateString('pl-PL', { weekday: 'short' }));
        }
        return labels;
    };

    const data = {
        labels: getDayLabels(),
        datasets: [
            {
                label: 'Temperatura maksymalna',
                data: maxTemps,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.3
            },
            {
                label: 'Temperatura minimalna',
                data: minTemps,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                tension: 0.3
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return value + '°C';
                    }
                }
            }
        }
    };

    return (
        <div className="temperature-chart">
            <Line options={options} data={data} />
        </div>
    );
};

export default TemperatureChart;
