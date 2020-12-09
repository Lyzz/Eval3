//--------------------------Exercice 1:  -------------------------//
// -------------------------Version 1 : -------------------------//
// function affichZero(nombre) {
//     return nombre < 10 ? '0' + nombre : nombre;
// }

// function dateEtHeure() {
//     const infos = new Date();
//     document.getElementById('heure_exacte').innerHTML = ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
// }

// window.onload = function() {
//     setInterval("dateEtHeure()", 101);
// };

//----------------------- version test: ---------------------//

// let form = document.getElementById('formulaire');
// let seconde = document.getElementById("seconde");
// let minute = document.getElementById("minute");
// let heure = document.getElementById("heure");
// let resultat = document.getElementById("resultat");

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     seconde = getSeconds()
//     if (seconde > 59) {
//         minute =
//     }

// });
//-------------------- fin de l'exercice 1 ----------------//


//---------------------- Exercice 2 : ---------------------//
//---------------------- Exercice 3 : ---------------------//
// --------------------- Exercice 4 : ---------------------//
// let random = Math.floor(Math.random() * 100 + 1);
// let jeux = document.getElementById('jeu');
// let nombre = document.getElementById('nombre');
// let resultat = document.getElementById('resultat');

// jeux.addEventListener('submit', e => {
//     e.preventDefault();

//     nombres = nombre.value;

//     if (nombres < random) {
//         resultat.innerHTML = "c'est plus";
//     }
//     if (nombres > random) {
//         resultat.innerHTML = "c'est moins";
//     }
//     if (nombres === random) {
//         resultat.innerHTML = "bravo";
//     }
//     console.log(random);
// });
// ---------------- fin de l'exercice 4 -------------------//
//-----------------------Exercice 5 : ---------------------//
// let form = document.getElementById('formulaire');
// let nom = document.getElementById('nom');
// let prenom = document.getElementById('prenom');
// let dateDeNaissance = document.getElementById('date');
// let resultat = document.getElementById('resultat');
// let dateAjourdhui = Date();

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     if (dateDeNaissance === dateAjourdhui) {
//         resultat = ("Joyeux anniversaire " + nom.value + prenom.value + "passe une bonne journée");
//     } else {
//         resultat = ("Bonjour " + nom.value + prenom.value + "nous somme le : " + dateAjourdhui);
//     }
//     console.log(resultat);

// });

//-----------------------Exercice 6 : ---------------------//

// let tab1 = [4, 8, 7, 12];
// let tab2 = [3, 6];

// for (let i = 0; i < tab1.lengt++) {


// }