"use strict";

// Slide 40: Déclaration d'un tableau d'objets étudiants
const etudiants = [
    {
        id: "Etudiant 1",
        nom: "nom1",
        prenom: "prenom1",
        age: 21
    },
    {
        id: "Etudiant 2",
        nom: "nom2", 
        prenom: "prenom2",
        age: 22
    },
    {
        id: "Etudiant 3",
        nom: "nom3",
        prenom: "prenom3",
        age: 23
    },
    {
        id: "Etudiant 4",
        nom: "nom4",
        prenom: "prenom4",
        age: 24
    }
];
/*
Fonction F1 - Affichage du tableau étudiants
*/
function f1() {
let i = 0;
    
    // Slide 44: Affichage avec while
    while(i<etudiants.length ){
        console.log(etudiants[i].id);
        i++;
    }
}

/*
Fonction F2 - Affichage du tableau d'objets étudiants
Slide 40: Tableau d'objets
 */
function f2() {
    // Slide 44: Parcours du tableau avec boucle for
    for (let i = 0; i < etudiants.length; i++) {
        console.log(`Étudiant ${i + 1}:`, etudiants[i]);
    }
}

/*
Fonction F3 - Formatage des données étudiants
Slide 38: Méthodes de tableau et manipulation de strings
 */
function f3() {
    // Slide 38: Utilisation de map pour transformer les données
    const etudiantsFormates = etudiants.map(etudiant => {
        // Format: "nom-prenom-age"
        return `${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`;
    });
    // Slide 44: Affichage avec forEach
    etudiantsFormates.forEach((etudiantFormate, index) => {
        console.log(etudiantFormate);
    });
}