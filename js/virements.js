function submitVirement() {
    // Empêcher le comportement par défaut de soumission du formulaire
    event.preventDefault();

    // Afficher le message de chargement (facultatif)
    document.getElementById('loading-container').style.display = 'block';

    // Simuler une vérification du virement
    setTimeout(function() {
        // Cacher la barre de chargement
        document.getElementById('loading-container').style.display = 'none';

        // Afficher le message de succès
        alert('Virement accepté');

        // Vous pouvez également réinitialiser le formulaire ici si nécessaire
        document.getElementById('virement-form').reset();
    }, 2000); // Simuler un délai de traitement de 2 secondes

    return false; // Retourner false pour éviter la soumission du formulaire
}
