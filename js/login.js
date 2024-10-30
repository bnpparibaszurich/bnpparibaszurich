document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Vérification des identifiants (exemple statique)
    if (username === 'user' && password === 'S09458930') {
        window.location.href = 'comptes.html';
    } else {
