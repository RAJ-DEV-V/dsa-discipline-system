const ctx = document.getElementById("weeklyChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["W1", "W2", "W3", "W4"],
        datasets: [{
            data: [5, 12, 20, 31],
            borderColor: "#38bdf8",
            borderWidth: 2,
            tension: 0.3
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true }
        }
    }
});
