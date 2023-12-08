document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour activer l'animation d'apparition des cercles
    function activateThemeAnimation() {
        const themeCircles = document.querySelectorAll('.theme-circle');
        themeCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.classList.add('animate');
            }, index * 100);
        });
    }
    // Activation de l'animation lorsque la page est chargée
    activateThemeAnimation();

    // Ajout des écouteurs d'événements pour le changement de thème
    document.querySelectorAll('.theme-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const themeCircles = document.querySelectorAll('.theme-circle');
            themeCircles.forEach(c => {
                c.classList.remove('active', 'animate');
            });
            circle.classList.add('active');
            changeTheme(circle.style.backgroundColor);
        });
    });

    // Ajout de l'écouteur d'événement pour le bouton Thèmes
    document.getElementById('themeButton').addEventListener('click', toggleThemeContainer);

    function updateSliders(color) {
        const rgbValues = color.match(/\d+/g); // Extraction des valeurs RGB de la couleur
        const [red, green, blue] = rgbValues.map(Number); // Conversion en nombres

        // Mettre à jour les valeurs des sliders
        document.getElementById('red-slider').value = red;
        document.getElementById('green-slider').value = green;
        document.getElementById('blue-slider').value = blue;

        // Mettre à jour les valeurs affichées à côté des sliders
        document.getElementById('current-valueR').innerText = red;
        document.getElementById('current-valueG').innerText = green;
        document.getElementById('current-valueB').innerText = blue;
    }

    document.querySelectorAll('.theme-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const themeCircles = document.querySelectorAll('.theme-circle');
            themeCircles.forEach(c => {
                c.classList.remove('active', 'animate');
            });
            circle.classList.add('active');

            const color = circle.style.backgroundColor;
            changeTheme(color);
            updateSliders(color);
        });
    });
});
