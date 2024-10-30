// Graphique de stockage par exemple
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Used Storage', 'Remaining Storage'],
        datasets: [{
            data: [0.65, 0.35],
            backgroundColor: ['#4e5dde', '#e6e6e6'],
        }]
    },
    options: {
        responsive: true
    }
});
