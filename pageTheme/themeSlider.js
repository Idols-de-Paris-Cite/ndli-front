document.getElementById("red-slider").addEventListener("input", updateColor);
document.getElementById("green-slider").addEventListener("input", updateColor);
document.getElementById("blue-slider").addEventListener("input", updateColor);
document.getElementById("toggleGradientButton").addEventListener("click", toggleGradient);

let isGradientEnabled = false;
let gradientColorStart = ""; // Anciennes valeurs des sliders pour le gradient
let gradientColorEnd = "";   // Nouvelles valeurs des sliders pour le gradient

function updateColor() {
    let red = document.getElementById("red-slider").value;
    let green = document.getElementById("green-slider").value;
    let blue = document.getElementById("blue-slider").value;

    document.getElementById("current-valueR").innerText = red;
    document.getElementById("current-valueG").innerText = green;
    document.getElementById("current-valueB").innerText = blue;

    if (isGradientEnabled) {
        // Si le gradient est activé, utilisez le gradient avec les anciennes et nouvelles valeurs des sliders
        document.body.style.background = `linear-gradient(to right, ${gradientColorStart}, ${gradientColorEnd})`;
    } else {
        // Si le gradient est désactivé, utilisez simplement la couleur du fond
        document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    }
}

function toggleGradient() {
    isGradientEnabled = !isGradientEnabled;

    if (isGradientEnabled) {
        // Activer le gradient (stocker les anciennes valeurs des sliders)
        document.getElementById("toggleGradientButton").innerText = "Désactiver le Gradient";
        gradientColorStart = document.body.style.background; // Stocker la couleur actuelle du fond
    } else {
        // Désactiver le gradient (mettre à jour les nouvelles valeurs des sliders)
        document.getElementById("toggleGradientButton").innerText = "Activer le Gradient";
        gradientColorEnd = `rgb(${document.getElementById("red-slider").value}, ${document.getElementById("green-slider").value}, ${document.getElementById("blue-slider").value})`;
        updateColor(); // Mettre à jour la couleur si le gradient est désactivé
    }
}
