//? --> Générer un résultat HGPO aléatoire
// Seuils pour le diagnostic de diabète gestationnel
const hgpoLimits = {
  fasting: 0.92, // à jeun (en g/L)
  oneHour: 1.8, // 1 heure post-charge
  twoHours: 1.53, // 2 heures post-charge
};
// Générer des valeurs HGPO aléatoires en tenant compte des seuils diagnostiques
function generateHGPOResult() {
  const fasting = (Math.random() * 0.3 + 0.7).toFixed(2); // Entre 0.7 et 1.0
  const oneHour = (Math.random() * 0.4 + 1.4).toFixed(2); // Entre 1.4 et 1.8
  const twoHours = (Math.random() * 0.3 + 1.2).toFixed(2); // Entre 1.2 et 1.5

  // Affichage du diagnostic basé sur les résultats
  let diagnosis = "Résultat normal";
  if (
    parseFloat(fasting) >= hgpoLimits.fasting ||
    parseFloat(oneHour) >= hgpoLimits.oneHour ||
    parseFloat(twoHours) >= hgpoLimits.twoHours
  ) {
    diagnosis = "Diabète gestationnel suspecté";
  }

  return {
    fasting,
    oneHour,
    twoHours,
    diagnosis,
  };
}
// Événement de clic pour générer le résultat HGPO
document.getElementById("generateHGPOButton").addEventListener("click", function () {
  const hgpoResult = generateHGPOResult();
  const resultDiv = document.getElementById("hgpoResult");

  resultDiv.classList.remove("hidden"); // Affiche l'antibiogramme

  resultDiv.innerHTML = `À jeun : ${hgpoResult.fasting} g/L
    <br>1 heure : ${hgpoResult.oneHour} g/L
    <br>2 heures : ${hgpoResult.twoHours} g/L
    <br><strong>Diagnostic :</strong> ${hgpoResult.diagnosis}  `;

  showNextElement("generateHGPOButton");
});
//? Générer un résultat HGPO aléatoire <--

//? --> Calcul du risque de T21
//* Calculer le risque
function calculateT21Risk(age, nuchalThickness) {
  let ageRisk = "";
  let nuchalRisk = "";

  // Détermination du risque en fonction de l'âge
  if (age < 25) {
    ageRisk = "1/1500";
  } else if (age >= 25 && age < 30) {
    ageRisk = "1/1000";
  } else if (age >= 30 && age < 31) {
    ageRisk = "1/900";
  } else if (age === 31) {
    ageRisk = "1/800";
  } else if (age === 32) {
    ageRisk = "1/600";
  } else if (age === 33) {
    ageRisk = "1/500";
  } else if (age === 34) {
    ageRisk = "1/400";
  } else if (age === 35) {
    ageRisk = "1/270";
  } else if (age === 36) {
    ageRisk = "1/200";
  } else if (age === 37) {
    ageRisk = "1/150";
  } else if (age === 38) {
    ageRisk = "1/100";
  } else if (age === 39) {
    ageRisk = "1/70";
  } else if (age === 40) {
    ageRisk = "1/50";
  } else if (age === 41) {
    ageRisk = "1/40";
  } else if (age === 42) {
    ageRisk = "1/30";
  } else {
    ageRisk = "1/20";
  }

  // Ajustement du risque selon la clarté nucale
  if (nuchalThickness <= 2.5) {
    nuchalRisk = "faible";
  } else if (nuchalThickness > 2.5 && nuchalThickness <= 3.5) {
    nuchalRisk = "modéré";
  } else {
    nuchalRisk = "élevé";
  }

  // Estimation finale
  let finalRisk;
  if (ageRisk === "1/1500" && nuchalRisk === "faible") {
    finalRisk = "Risque faible";
  } else if (
    (ageRisk === "1/1000" && nuchalRisk === "faible") ||
    (ageRisk === "1/900" && nuchalRisk === "faible") ||
    (ageRisk === "1/800" && nuchalRisk === "faible") ||
    (ageRisk === "1/600" && nuchalRisk === "faible")
  ) {
    finalRisk = "Risque faible";
  } else if (
    (ageRisk === "1/500" && nuchalRisk === "faible") ||
    (ageRisk === "1/400" && nuchalRisk === "faible") ||
    (ageRisk === "1/270" && nuchalRisk === "faible") ||
    (ageRisk === "1/200" && nuchalRisk === "faible") ||
    (ageRisk === "1/150" && nuchalRisk === "modéré") ||
    (ageRisk === "1/100" && nuchalRisk === "modéré")
  ) {
    finalRisk = "Risque modéré";
  } else {
    finalRisk = "Risque élevé";
  }

  return { ageRisk, nuchalRisk, finalRisk };
}
//* Faire le calcul au clic ou en appuyant sur Entrée
document.getElementById("generateT21Button").addEventListener("click", function () {
  const dobInput = document.getElementById("dobInput").value;
  const nuchalInput = parseFloat(document.getElementById("nuchalInput").value);

  if (!dobInput || isNaN(nuchalInput)) {
    alert("Veuillez entrer une date de naissance valide et une clarté nucale.");
    return;
  }

  // Calcul de l'âge de la patiente
  const dob = new Date(dobInput);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  // Ajustement si l'anniversaire n'est pas encore passé cette année
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  // Calcul du risque
  const { ageRisk, nuchalRisk, finalRisk } = calculateT21Risk(age, nuchalInput);

  // Affichage du résultat
  const t21ResultElement = document.getElementById("t21Result");
  t21ResultElement.innerHTML = `Risque basé sur l'âge: ${ageRisk}, <br>Risque basé sur la clarté nucale: ${nuchalRisk},<br>Estimation finale: ${finalRisk}`;
  t21ResultElement.classList.remove("hidden"); // Affiche le résultat

  // Affichage du bouton pour fermer ou naviguer
  showNextElement("generateT21Button");
});
// Cible les éléments input et le bouton
const dobInput = document.getElementById("dobInput");
const nuchalInput = document.getElementById("nuchalInput");
const generateT21Button = document.getElementById("generateT21Button");
// Fonction pour vérifier les conditions et simuler un clic sur le bouton
function triggerGenerateT21(event) {
  if (event.key === "Enter" && dobInput.value && nuchalInput.value) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    generateT21Button.click(); // Simule un clic sur le bouton
  }
}
// Ajouter les écouteurs d'événement pour chaque input
dobInput.addEventListener("keydown", triggerGenerateT21);
nuchalInput.addEventListener("keydown", triggerGenerateT21);
//? Calcul du risque de T21 <--

//? --> Afficher toute la section au clic sur le bouton
scrollToSection("generateHGPOButton", "hgpoSection");
scrollToSection("generateT21Button", "t21Section");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("hgpoClose").addEventListener("click", function () {
  hideElements(["hgpoClose", "hgpoResult"]);
});
document.getElementById("t21Close").addEventListener("click", function () {
  hideElements(["t21Close", "t21Result"]);
});
//? Masquer la section au clic sur la croix <--

//TODO: Automatiser BHCG
//TODO: Automatiser CMV
//TODO: Automatiser Toxoplasmose
//TODO: Automatiser Rubéole
//TODO: Automatiser DPNI
