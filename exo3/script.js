"use strict";

// Slide 40: Tableau d'objets représentant les étudiants
const students = [
    { 
        id: 1000, 
        nom: "JOHN", 
        prenom: "DOE", 
        note1: 14, 
        note2: 5 
    },

    { 
        id: 2000,
        nom: "BOB",
        prenom: "CARLTON",
        note1: 7, 
        note2: 15 
    },
    
    { 
        id: 3000, 
        nom: "RAVANE", 
        prenom: "SMITH", 
        note1: 5, 
        note2: 3 
    }
];

function verifierAdmission(moyenne) {
    // Slide 42: Condition avec opérateur de comparaison
    return moyenne >= 10;
}

/** Slide 45-46: Fonction A qui appelle la fonction B
 Fonction A - Calcule les moyennes et affiche les résultats de délibération
 */
function deliberation() {
    // Slide 44: Boucle for pour parcourir le tableau d'étudiants
    for (let i = 0; i < students.length; i++) {
        const etudiant = students[i];
        
        // Slide 41: Opérateurs arithmétiques pour calculer la moyenne
        // Moyenne = (Note1 + Note2) / 2 + 5
        const moyenne = (etudiant.note1 + etudiant.note2) / 2 + 5;
        
        // Slide 46: Appel de la fonction B avec passage de paramètre
        const estAdmis = verifierAdmission(moyenne);
        
        // Slide 42: Condition if...else pour déterminer le statut
        let statut;
        if (estAdmis) {
            statut = "ADMIS";
        } else {
            statut = "AJOURNÉ";
        }
        
        // Slide 33: Utilisation de console.log() pour afficher le résultat
        console.log(etudiant.id + ": " + statut);
    }
}