const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));

// Route pour récupérer l'historique de facturation
app.get('/billing-history', (req, res) => {
    res.json([
        { date: '2024-09-01', service: 'Service A', invoice: '12345', recipient: 'John Doe', amount: '$50', status: 'Paid' },
        // Ajouter d'autres entrées
    ]);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
