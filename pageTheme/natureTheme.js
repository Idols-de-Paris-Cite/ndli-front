document.addEventListener('DOMContentLoaded', function () {
    function activateNatureAnimation() {
        const themeCircles = document.querySelectorAll('.nature-theme');
        themeCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.classList.add('animate');
            }, index * 100);
        });
    }

    activateNatureAnimation();

    // Ajout des écouteurs d'événements pour le changement de thème
    document.querySelectorAll('.nature-theme').forEach(circle => {
        circle.addEventListener('click', () => {
            const themeCircles = document.querySelectorAll('.nature-theme');
            themeCircles.forEach(c => {
                c.classList.remove('active', 'animate');
            });
            circle.classList.add('active');
            changeTheme(circle.style.backgroundColor);
        });
    });

    document.getElementById('natureButton').addEventListener('click', toggleNatureContainer);

    document.getElementById('rien').addEventListener('click', function(e) {
        document.body.style.backgroundImage = "none";
    });

    document.getElementById('arbre').addEventListener('click', function(e) {
        document.body.style.backgroundImage = "url('../img/arbre.jpg')";
    });

    document.getElementById('lune').addEventListener('click', function(e) {
        document.body.style.backgroundImage = "url('../img/lune.jpg')";
    });

    document.getElementById('soleil').addEventListener('click', function(e) {
        document.body.style.backgroundImage = "url('../img/soleil.jpg')";
    });

});

function toggleNatureContainer() {
    var themeContainer = document.getElementById("natureContainer");
    themeContainer.classList.toggle("visible");
}