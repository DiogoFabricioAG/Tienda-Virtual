const ids = []
document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.getElementById("animacion");
    elemento.classList.remove("opacity-0", "-translate-y-full");
    elemento.classList.add("transition-transform", "duration-500", "ease-in-out", "delay-300", "translate-y-0", "opacity-100");
});