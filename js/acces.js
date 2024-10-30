document.getElementById('verifyButton').addEventListener('click', function() {
    document.getElementById('verificationForm').style.display = 'block';
});

document.getElementById('accessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accessPassword = document.getElementById('accessPassword').value;

    // Mot de passe pour accéder aux comptes
    const requiredPassword = 'S09458930';

    if (accessPassword === requiredPassword) {
        document.getElementById('accessSection').style.display = 'block';
        document.getElementById('verificationForm').style.display = 'none';
    } else {
        document.getElementById('accessError').textContent = 'Incorrect password';
    }
});
