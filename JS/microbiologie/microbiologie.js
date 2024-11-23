//! ECBU
//* Générer un germe urinaire aléatoire
// Fonction pour générer un germe aléatoire à partir du dictionnaire des germes urinaires
function generateUrinaryGerm() {
  const randomIndex = Math.floor(Math.random() * urinaryGerms.length);
  return urinaryGerms[randomIndex];
}
//* Générer un antibiogramme urinaire
// Fonction pour générer un antibiogramme virtuel
function generateAntibiogram(germe) {
  const antibiogram = {};

  // Obtenir les résistances connues pour le germe
  const resistances = resistancesConnues[germe] || [];
  const antibiogramKeys = [...urinaryATB];

  // Assurer au moins une sensibilité
  const sensitivityIndex = Math.floor(Math.random() * antibiogramKeys.length);
  antibiogram[antibiogramKeys[sensitivityIndex]] = "Sensible";

  // Générer aléatoirement les résultats de l'antibiogramme
  antibiogramKeys.forEach((atb) => {
    if (!antibiogram[atb]) {
      // Si l'antibiotique n'est pas encore attribué
      antibiogram[atb] = resistances.includes(atb) ? "Résistant" : "Sensible";
    }
  });

  return antibiogram;
}
// Fonction pour formater les résultats selon l'ordre de urinaryATB
function formatAntibiogram(antibiogram) {
  const orderedResults = [];
  urinaryATB.forEach((atb) => {
    orderedResults.push(`${atb}: ${antibiogram[atb] || "Non testé"}`);
  });
  return orderedResults.join("\n");
}
//* Fonction qui génère un ECBU au clic
// Événement de clic sur le bouton de génération de germe pour l'ECBU
document.getElementById("generateECBUGermButton").addEventListener("click", function () {
  const germe = generateUrinaryGerm();
  const antibiogram = generateAntibiogram(germe);

  const ecbuResultElement = document.getElementById("ecbuResult");
  ecbuResultElement.textContent = `Germe : ${germe}`;
  ecbuResultElement.classList.remove("hidden"); // Affiche le germe

  const ecbuATBResultElement = document.getElementById("ecbuATBResult");
  ecbuATBResultElement.textContent = "Antibiogramme :\n\n" + formatAntibiogram(antibiogram);
  ecbuATBResultElement.classList.remove("hidden"); // Affiche l'antibiogramme

  showNextElement("generateECBUGermButton");
});
//! ECBC
//* Générer un germe ECBC aléatoire
// Fonction pour générer un germe aléatoire à partir du dictionnaire des germes pulmonaires
function generatePulmonaryGerm() {
  const randomIndex = Math.floor(Math.random() * pulmonaryGerms.length);
  return pulmonaryGerms[randomIndex];
}
//* Générer un antibiogramme ECBC
function generatePulmonaryAntibiogram(germe) {
  const antibiogram = {};

  // Obtenir les résistances connues pour le germe
  const resistances = resistancesConnues[germe] || [];
  const antibiogramKeys = [...pulmonaryATB];

  // Assurer au moins une sensibilité
  const sensitivityIndex = Math.floor(Math.random() * antibiogramKeys.length);
  antibiogram[antibiogramKeys[sensitivityIndex]] = "Sensible";

  // Générer aléatoirement les résultats de l'antibiogramme
  antibiogramKeys.forEach((atb) => {
    if (!antibiogram[atb]) {
      // Si l'antibiotique n'est pas encore attribué
      antibiogram[atb] = resistances.includes(atb) ? "Résistant" : "Sensible";
    }
  });

  return antibiogram;
}
// Fonction pour formater les résultats selon l'ordre de pulmonaryATB
function formatPulmonaryAntibiogram(antibiogram) {
  const orderedResults = [];
  pulmonaryATB.forEach((atb) => {
    orderedResults.push(`${atb}: ${antibiogram[atb] || "Non testé"}`);
  });
  return orderedResults.join("\n");
}
//* Fonction qui génère un ECBC au clic
// Événement de clic sur le bouton de génération de germe pour l'ECBC
document.getElementById("generateECBCGermButton").addEventListener("click", function () {
  const germe = generatePulmonaryGerm();
  const antibiogram = generatePulmonaryAntibiogram(germe);

  const ecbcResultElement = document.getElementById("ecbcResult");
  ecbcResultElement.textContent = `Germe : ${germe}`;
  ecbcResultElement.classList.remove("hidden"); // Affiche le germe

  const ecbcATBResultElement = document.getElementById("ecbcATBResult");
  ecbcATBResultElement.textContent =
    "Antibiogramme :\n\n" + formatPulmonaryAntibiogram(antibiogram);
  ecbcATBResultElement.classList.remove("hidden"); // Affiche l'antibiogramme

  showNextElement("generateECBCGermButton");
});
//! ORL
//* Générer un germe ORL aléatoire
// Fonction pour générer un germe aléatoire à partir du dictionnaire des germes ORL
function generateOrlGerm() {
  const randomIndex = Math.floor(Math.random() * orlGerms.length);
  return orlGerms[randomIndex];
}
//* Générer un antibiogramme ORL
function generateOrlAntibiogram(germe) {
  const antibiogram = {};

  // Obtenir les résistances connues pour le germe
  const resistances = resistancesConnues[germe] || [];
  const antibiogramKeys = [...orlATB];

  // Assurer au moins une sensibilité
  const sensitivityIndex = Math.floor(Math.random() * antibiogramKeys.length);
  antibiogram[antibiogramKeys[sensitivityIndex]] = "Sensible";

  // Générer aléatoirement les résultats de l'antibiogramme
  antibiogramKeys.forEach((atb) => {
    if (!antibiogram[atb]) {
      // Si l'antibiotique n'est pas encore attribué
      antibiogram[atb] = resistances.includes(atb) ? "Résistant" : "Sensible";
    }
  });

  return antibiogram;
}
// Fonction pour formater les résultats selon l'ordre de orlATB
function formatOrlAntibiogram(antibiogram) {
  const orderedResults = [];
  orlATB.forEach((atb) => {
    orderedResults.push(`${atb}: ${antibiogram[atb] || "Non testé"}`);
  });
  return orderedResults.join("\n");
}
//* Fonction qui génère un résultat de prélèvement ORL au clic
document.getElementById("generateORLGermButton").addEventListener("click", function () {
  const germe = generateOrlGerm();
  const antibiogram = generateOrlAntibiogram(germe);

  const orlResultElement = document.getElementById("orlResult");
  orlResultElement.textContent = `Germe : ${germe}`;
  orlResultElement.classList.remove("hidden"); // Affiche le germe

  const orlATBResultElement = document.getElementById("orlATBResult");
  orlATBResultElement.textContent = "Antibiogramme :\n\n" + formatOrlAntibiogram(antibiogram);
  orlATBResultElement.classList.remove("hidden"); // Affiche l'antibiogramme
  showNextElement("generateORLGermButton");
});
//? Générer des germes aléatoires <--

//? --> Afficher toute la section au clic sur le bouton
scrollToSection("generateECBUGermButton", "ecbuSection");
scrollToSection("generateECBCGermButton", "ecbcSection");
scrollToSection("generateORLGermButton", "orlSection");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("ecbuClose").addEventListener("click", function () {
  hideElements(["ecbuClose", "ecbuResult", "ecbuATBResult"]);
});
document.getElementById("ecbcClose").addEventListener("click", function () {
  hideElements(["ecbcClose", "ecbcResult", "ecbcATBResult"]);
});
document.getElementById("orlClose").addEventListener("click", function () {
  hideElements(["orlClose", "orlResult", "orlATBResult"]);
});
//? Masquer la section au clic sur la croix <--

//TODO: Automatiser Grippe/Covid
