// Fonction pour créer un diagramme de crédit
function createCreditChart() {
    const ctx = document.getElementById('creditChart').getContext('2d');
    const creditChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Dépenses', 'Limite disponible'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#900', '#007bff']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Fonction pour créer un diagramme de débit
function createDebitChart() {
    const ctx = document.getElementById('debitChart').getContext('2d');
    const debitChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Achats', 'Solde disponible'],
            datasets: [{
                data: [30, 70],
                backgroundColor: ['#900', '#007bff']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Appeler les fonctions après le chargement de la page
window.onload = function() {
    createCreditChart();
    createDebitChart();
};
