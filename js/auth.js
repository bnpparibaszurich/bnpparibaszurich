document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs saisies par l'utilisateur
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Identifiants valides
    const validUsername = 'S09458930';
    const validPassword = 'Ingrid0305';

    // Vérification des identifiants
    if (username === validUsername && password === validPassword) {
        alert('Connexion réussie ! Bienvenue.');
        // Redirection ou autre action après la connexion réussie
        window.location.href = 'dashboard.html'; // Exemple de redirection vers une page "dashboard"
    } else {
        alert('Identifiant ou mot de passe incorrect.');
    }
});
