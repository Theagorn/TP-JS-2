//*Exo 1

let textarea = document.getElementById('monTextArea');
    let affichage = document.getElementById('affichage');

    textarea.addEventListener('input', function() {
        affichage.textContent = textarea.value;
    });

//*Exo 2

let input = document.getElementById('secondTextArea');
let bouton = document.getElementById('boutonADesactiver');

input.addEventListener('input', function() {
    if (input.value.length >= 5) {
        bouton.disabled = true;
    } else {
        bouton.disabled = false;
    }
});