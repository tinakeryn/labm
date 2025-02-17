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
