// Comptes.js

document.addEventListener('DOMContentLoaded', () => {
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    profileDropdown.addEventListener('click', () => {
        profileDropdown.classList.toggle('open');
    });
});

// Ajout d'animations légères
document.querySelectorAll('.change-plan-btn, .manage-payments-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
