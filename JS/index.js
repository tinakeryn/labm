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
function calculerMoyenneObjets(...objets) {
  if (objets.length === 0) {
    return {};
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
      // Arrondi spécifique à l'entier le + proche
      if (
        clé === "na" ||
        clé === "tgo" ||
        clé === "tgp" ||
        clé === "ggt" ||
        clé === "pal" ||
        clé === "fol" ||
        clé === "b12" ||
        clé === "vitd" ||
        clé === "una" ||
        clé === "uk"
      ) {
        moyenne = Math.round(moyenne).toFixed(0);
      }
      // Arrondi spécifique à un chiffre après la virgule
      if (clé === "hemoglobine" || clé === "hba1c" || clé === "creat" || clé === "k") {
        moyenne = (Math.round(moyenne * 10) / 10).toFixed(1);
      }
      // Arrondi spécifique à 2 chiffres après la virgule
      if (
        clé === "inr" ||
        clé === "gly" ||
        clé === "choles" ||
        clé === "trigly" ||
        clé === "tropo" ||
        clé === "ucr" ||
        clé === "ug"
      ) {
        moyenne = (Math.round(moyenne * 100) / 100).toFixed(2);
      }
      // Convertir systématiquement en nombre puis formater en "fr-FR" pour obtenir le séparateur virgule
      moyenneObj[clé] = parseFloat(moyenne).toLocaleString("fr-FR");
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
