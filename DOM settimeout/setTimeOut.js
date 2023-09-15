setTimeout(function() {
    let monTitre = document.getElementById('monTitre');
    
    monTitre.style.display = 'block';
    monTitre.style.textAlign = 'center';
    monTitre.style.fontWeight = 'bold';
    monTitre.style.color = 'white';
    monTitre.textContent = 'Welcome to the DOM';
    document.body.style.backgroundColor = 'transparent';
    document.body.style.background = 'linear-gradient(45deg, rgba(181,115,251,1) 0%, rgba(255,173,65,1) 50%, rgba(255,222,112,1) 100%)';
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundAttachment = 'fixed';
}, 3000); 