document.addEventListener("DOMContentLoaded", function() {
    const houseIcon = document.querySelector("#house-icon");

    houseIcon.addEventListener("mouseover", function() {
        houseIcon.classList.remove("bi-house");
        houseIcon.classList.add("bi-house-fill");
    });

    houseIcon.addEventListener("mouseout", function() {
        houseIcon.classList.remove("bi-house-fill");
        houseIcon.classList.add("bi-house");
    });
});

window.onload = function() {
    const form = document.getElementById('form');
    const result = document.getElementById('result');
    const resultMessage = document.getElementById('resultMessage');

    form.onsubmit = function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const language = document.getElementById('language').value;

        resultMessage.textContent = `Olá, ${name}! Você tem ${age} anos de idade e já está aprendendo ${language}!`;
        result.classList.remove('hidden');
    };
}