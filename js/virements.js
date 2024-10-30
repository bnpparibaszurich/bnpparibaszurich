document.getElementById('virement-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var amount = document.getElementById('amount').value;
    var account = document.getElementById('account').value;

    // Traitement du virement (exemple simplifié)
    alert('Virement de ' + amount + ' EUR vers le compte ' + account + ' effectué avec succès.');
});
