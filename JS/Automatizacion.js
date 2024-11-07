function OpenAutomatiacion(){
    window.location = "";
}

function toggleContent(button) {
    const content = button.previousElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Leer menos";
    } else {
        content.style.display = "none";
        button.textContent = "Leer más";
    }
}