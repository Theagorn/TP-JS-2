class CompteBancaire {
    constructor(proprietaire) {
        this.proprietaire = proprietaire;
        this.solde = 0;
    }

    crediter(montant) {
        this.solde += montant;
        console.log(`Ajout de : ${montant} pour : ${this.proprietaire}`);
    }

    retirer(montant) {
        if (montant > this.solde) {
            console.log(`-----> ${this.proprietaire}, retrait de : ${montant} refusé avec un solde de : ${this.solde}`);
            return;
        }
        this.solde -= montant;
        console.log(`Retrait de : ${montant} pour : ${this.proprietaire}`);
    }

    virement(destinataire, montant) {
        if (montant > this.solde) {
            console.log(`-----> ${this.proprietaire}, virement de : ${montant} refusé avec solde : ${this.solde}`);
            return;
        }
        this.retirer(montant);
        destinataire.crediter(montant);
        console.log(`Virement de : ${montant} de : ${this.proprietaire} vers : ${destinataire.proprietaire}`);
    }

    afficherSolde() {
        console.log(`titulaire : ${this.proprietaire} a un solde de : ${this.solde}`);
    }
}

//*-----------------------------------------------------------------------------------------------------------------------------

const clients = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
};

clients.Alex.crediter(1000);
clients.Clovis.crediter(1000);
clients.Marco.crediter(1000);

clients.Alex.retirer(100);

clients.Marco.virement(clients.Clovis, 300);

clients.Alex.retirer(1200);

for (const nomClient in clients) {
    clients[nomClient].afficherSolde();
}
