let monTxt = document.getElementById('monTxt');
let rendu = document.getElementById('rendu');

let veleurStockee = localStorage.getItem('monSuperTexte');

if (veleurStockee) {
    rendu.innerText = veleurStockee;
}

monTxt.addEventListener('input', function() {
    let texteSaisi = monTxt.value;

    localStorage.setItem('monSuperTexte', texteSaisi);

    rendu.innerText = texteSaisi;
});