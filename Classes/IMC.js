class Imc {
    constructor(nom, poids, taille) {
      this.nom = nom;
      this.poids = poids;
      this.taille = taille;
    }
  
    calculImc() {
      const imc = this.poids / (this.taille * this.taille);
      return imc.toFixed(2);
    }
  
    display() {
      const imc = this.calculImc();
      console.log(`${this.nom} (${this.poids} kg, ${this.taille} M) a un IMC de: ${imc}`);
    }
}
  
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];
  
//*Boucle qui parcourt list pour utiliser display()
list.forEach(personne => {
    personne.display();
});