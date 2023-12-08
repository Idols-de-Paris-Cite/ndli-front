document.getElementById("showSlidersButton").addEventListener("click", toggleSlidersVisibility);

function toggleSlidersVisibility() {
    const slidersContainer = document.getElementById("slidersContainer");
    slidersContainer.classList.toggle("visible");
    slidersContainer.classList.toggle("hidden");
}