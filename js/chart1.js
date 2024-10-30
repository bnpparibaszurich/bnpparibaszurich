// Exemple de graphique avec Chart.js pour les messages
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('messageChart').getContext('2d');
    var messageChart = new Chart(ctx, {
        type: 'pie', // ou 'bar', 'line', etc.
        data: {
            labels: ['Reçus', 'Envoyés', 'Répondis'],
            datasets: [{
                label: 'Statistiques des Messages',
                data: [50, 30, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
});
