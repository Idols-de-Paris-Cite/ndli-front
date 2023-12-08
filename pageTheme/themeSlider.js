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
        document.body.style.background = `linear-gradient(to right, ${gradientColorStart}, ${gradientColorEnd})`;
    } else {
        gradientColorStart = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    }
}

function toggleGradient() {
    isGradientEnabled = !isGradientEnabled;

    if (isGradientEnabled) {
        gradientColorStart = document.body.style.background-color;
    } else {
        updateColor(); // Mettre à jour la couleur si le gradient est désactivé
    }
}
