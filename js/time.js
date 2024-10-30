function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('fr-FR');
    const time = now.toLocaleTimeString('fr-FR');

    document.getElementById('date').textContent = `Date actuelle : ${date}`;
    document.getElementById('time').textContent = `Heure actuelle : ${time}`;
}

setInterval(updateTime, 1000);
updateTime();
