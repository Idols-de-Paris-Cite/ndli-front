document.getElementById("red-slider").addEventListener("input", updateColor);
document.getElementById("green-slider").addEventListener("input", updateColor);
document.getElementById("blue-slider").addEventListener("input", updateColor);
document.getElementById("toggleGradientCheckbox").addEventListener("change", toggleGradient);

let isGradientEnabled = false;
let gradientColorStart = "rgb(0, 0, 0)"; // Couleur initiale du gradient
let gradientColorEnd = `rgb(${document.getElementById("red-slider").value}, ${document.getElementById("green-slider").value}, ${document.getElementById("blue-slider").value})`;

function updateColor() {
    let red = document.getElementById("red-slider").value;
    let green = document.getElementById("green-slider").value;
    let blue = document.getElementById("blue-slider").value;

    document.getElementById("current-valueR").innerText = red;
    document.getElementById("current-valueG").innerText = green;
    document.getElementById("current-valueB").innerText = blue;

    gradientColorEnd = `rgb(${red}, ${green}, ${blue})`;

    if (isGradientEnabled) {
        console.log("GRADIANT Start : ",gradientColorStart," End : ",gradientColorEnd);
        document.body.style.background = `linear-gradient(to right, ${gradientColorStart}, ${gradientColorEnd})`;
    } else {
        console.log("Start : ",gradientColorStart," End : ",gradientColorEnd);
        gradientColorStart = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    }
}

function toggleGradient() {
    isGradientEnabled = !isGradientEnabled;

    if (isGradientEnabled) {
        
    } else {
        updateColor(); // Mettre à jour la couleur si le gradient est désactivé
    }
}
function toggleGradient() {
    isGradientEnabled = !isGradientEnabled;

    if (isGradientEnabled) {
        // Ajoutez votre logique ici si nécessaire
    } else {
        updateColor(); // Mettre à jour la couleur si le gradient est désactivé
    }
}

function uncheckGradientCheckbox() {
    document.getElementById('toggleGradientCheckbox').checked = false;
    isGradientEnabled = false;
}

function toggleThemeContainer() {
    var themeContainer = document.getElementById("themeContainer");
    themeContainer.classList.toggle("visible");
}

function changeTheme(color) {
    document.body.style.backgroundColor = color;
}


document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.theme-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const themeCircles = document.querySelectorAll('.theme-circle');
            themeCircles.forEach(c => {
                c.classList.remove('active', 'animate');
            });
            console.log("UNCHEEEEEECK");
            circle.classList.add('active');
            // toggleThemeContainer();
            uncheckGradientCheckbox();
            changeTheme(circle.style.backgroundColor);
            updateColor();
        });
    });
});
