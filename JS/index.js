//? --> Retirer la class hidden
function showNextElement(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    const nextElement = button.nextElementSibling;
    if (nextElement && nextElement.classList.contains("hidden")) {
      nextElement.classList.remove("hidden");
    }
  }
}
//? Retirer la class hidden <--

//? --> Ajouter la class hidden
function hideElements(elementIds) {
  elementIds.forEach(function (id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("hidden");
    }
  });
}
//? Ajouter la class hidden <--

//? --> Remonter en haut avec la flèche
//* Faire apparaître la flèche quand on scroll vers le bas
window.addEventListener("scroll", function () {
  const arrowUp = document.getElementById("arrowUp");
  if (window.scrollY > 100) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});
//* Scroller vers le haut au clic sur la flèche
document.getElementById("arrowUp").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//? Remonter en haut avec la flèche <--

//? --> Faire défiler la fenêtre vers une section spécifique
function scrollToSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  button.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
}
//? Faire défiler la fenêtre vers une section spécifique <--

//? --> Sélectionner un dictionnaire si une condition est remplie
function applyFactor(dictionnary, factor) {
  let factorDictionnary = null;

  if (factor) {
    factorDictionnary = { ...dictionnary }; // Création d'une copie de l'objet original
  }

  return factorDictionnary;
}
//? Sélectionner un dictionnaire si une condition est remplie  <--

//? --> Sélectionner un élément aléatoire d'un dictionnaire
function getRandomElement(dictionary) {
  const keys = Object.keys(dictionary);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return dictionary[randomKey];
}
//? Sélectionner un élément aléatoire d'un dictionnaire <--

//? --> Recharger la section
function reloadContainer(iconId, sectionId) {
  location.reload();
}
//? Recharger la section <--

//? --> Calculer une moyenne depuis plusieurs dictionnaires
// function calculerMoyenneObjets(...objets) {
//   if (objets.length === 0) {
//     return {}; // Retourne un objet vide si aucun objet n'est fourni
//   }

//   const moyenneObj = {};
//   const nombreObjets = objets.length;

//   // Utilisons les clés du premier objet comme base
//   const clés = Object.keys(objets[0]);

//   for (const clé of clés) {
//     // Vérifions si tous les objets ont la clé
//     let somme = 0;
//     let compte = 0;

//     for (const objet of objets) {
//       if (objet.hasOwnProperty(clé)) {
//         somme += objet[clé];
//         compte++;
//       }
//     }

//     // Calculons la moyenne uniquement si tous les objets ont la clé
//     if (compte === nombreObjets) {
//       moyenneObj[clé] = somme / nombreObjets;
//     }
//   }

//   return moyenneObj;
// }
function calculerMoyenneObjets(...objets) {
  if (objets.length === 0) {
    return {}; // Retourne un objet vide si aucun objet n'est fourni
  }
  const moyenneObj = {};
  const nombreObjets = objets.length;
  const clés = Object.keys(objets[0]);

  for (const clé of clés) {
    let somme = 0;
    let compte = 0;
    for (const objet of objets) {
      if (objet.hasOwnProperty(clé)) {
        somme += objet[clé];
        compte++;
      }
    }

    if (compte === nombreObjets) {
      let moyenne = somme / nombreObjets;

      // Arrondi spécifique pour les clés 'hematies', 'leuco', 'plaquettes'
      if (["hematies", "leuco", "plaquettes"].includes(clé)) {
        // Arrondir à l'entier le plus proche
        moyenne = Math.round(moyenne / 1000) * 1000;
      }
      // Arrondi spécifique pour la clé 'hemoglobine' à un chiffre après la virgule
      if (clé === "hemoglobine") {
        moyenne = Math.round(moyenne * 10) / 10;
      }
      if (clé === "inr") {
        moyenne = parseFloat((Math.round(moyenne * 100) / 100).toFixed(2));
      }
      moyenneObj[clé] = typeof moyenne === "number" ? moyenne.toLocaleString("fr-FR") : moyenne;
    }
  }
  return moyenneObj;
}

function calculerMoyenneSiObjets(...params) {
  // Filtre les paramètres pour ne garder que les objets non-null
  const objets = params.filter((param) => param !== null && typeof param === "object");
  return calculerMoyenneObjets(...objets);
}
//? Calculer une moyenne depuis plusieurs dictionnaires <--
