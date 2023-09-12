class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
    }
  
    calculSalaireAnnuel() {
        return this.salaireMensuel * 12;
    }
}

class Pme {
    constructor(nom, equipe, revenus, fraisFixes, fraisAchats) {
        this.nom = nom;
        this.equipe = equipe;
        this.revenus = revenus;
        this.fraisFixes = fraisFixes;
        this.fraisAchats = fraisAchats;
    }
  
    bilanAnnuel() {
        const coûtInitial = this.equipe.reduce((total, employee) => {
            return total + employee.calculSalaireAnnuel();
        }, 0);
        
        const coûtTotalÉquipe = this.equipe.reduce((total, employee) => {
            return total + (employee.salaireMensuel * 12);
        }, 0);
    
        const charges = coûtTotalÉquipe * 0.9;
        const benefices = this.revenus - charges - this.fraisFixes - this.fraisAchats;
    
        console.log(`------------------MA PME------------------`);
        console.log(`${this.nom} : Coût Initial : ${coûtInitial}`);
        console.log(`${this.nom} : Coût Total Equipe : ${coûtTotalÉquipe}`);
        console.log(`${this.nom} : VENTES : ${this.revenus}`);
        console.log(`${this.nom} : BILAN : ${benefices}`);
    }
}
  
//Scénario
const pme = new Pme (
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);

pme.bilanAnnuel();
