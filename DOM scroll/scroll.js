document.addEventListener('scroll', function (event) {
    var hauteurPage = document.body.scrollHeight;
    var hauteurAffichage = document.documentElement.clientHeight;
    var scrollPosition = document.documentElement.scrollTop;

    var onEstOu = (scrollPosition / (hauteurPage - hauteurAffichage)) * 100;
    onEstOu = Math.min(onEstOu, 100);

    var elementsRemplissage = document.getElementsByClassName("remplissage");

    for (var i = 0; i < elementsRemplissage.length; i++) {
        elementsRemplissage[i].style.width = onEstOu + '%';
    }
  
    console.log(`
        Hauteur de la page : ${document.body.scrollHeight}
        Hauteur de l\'affichage : ${innerHeight}
        Scroll Position : ${scrollY}
        Pourcentage de défilement : ${onEstOu.toFixed(2)} %
    `)

});
  