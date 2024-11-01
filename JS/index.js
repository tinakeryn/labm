//? --> Fonctions génériques
//* Retirer la class hidden
function showNextElement(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    const nextElement = button.nextElementSibling;
    if (nextElement && nextElement.classList.contains("hidden")) {
      nextElement.classList.remove("hidden");
    }
  }
}
//* Ajouter la class hidden
function hideElements(elementIds) {
  elementIds.forEach(function (id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("hidden");
    }
  });
}
//* Remonter en haut avec la flèche
//! Faire apparaître la flèche quand on scroll vers le bas
window.addEventListener("scroll", function () {
  const arrowUp = document.getElementById("arrowUp");
  if (window.scrollY > 100) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});
//! Scroller vers le haut au clic sur la flèche
document.getElementById("arrowUp").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//* Faire défiler la fenêtre vers une section spécifique
function scrollToSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  button.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
}
//? Fonctions génériques <--

//? --> Générer groupe sanguin aléatoire
// Statistiques de répartition des groupes sanguins
const bloodTypes = [
  { type: "O+", percentage: 37 },
  { type: "A+", percentage: 27 },
  { type: "B+", percentage: 23 },
  { type: "AB+", percentage: 7 },
  { type: "O-", percentage: 2 },
  { type: "A-", percentage: 2 },
  { type: "B-", percentage: 1 },
  { type: "AB-", percentage: 1 },
];
// Fonction pour générer un groupe sanguin aléatoire
function generateBloodType() {
  let rand = Math.random() * 100;
  let cumulativePercentage = 0;

  for (let i = 0; i < bloodTypes.length; i++) {
    cumulativePercentage += bloodTypes[i].percentage;
    if (rand <= cumulativePercentage) {
      return bloodTypes[i].type;
    }
  }
}
// Événement de clic sur le bouton
document.getElementById("generateBloodTypeButton").addEventListener("click", function () {
  let resultElement = document.getElementById("result");
  resultElement.textContent = generateBloodType();
});
//? Générer groupe sanguin aléatoire <--

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

  console.log(hgpoResult);
  console.log(resultDiv);

  // Rendre visible les résultats
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

//? --> Générer des germes aléatoires
//* Dictionnaires des germes
const urinaryGerms = [
  "Escherichia coli",
  "Klebsiella pneumoniae",
  "Proteus mirabilis",
  "Pseudomonas aeruginosa",
  "Staphylococcus saprophyticus",
  "Enterococcus faecalis",
];
const pulmonaryGerms = [
  "Streptococcus pneumoniae",
  "Haemophilus influenzae",
  "Staphylococcus aureus",
  "Legionella pneumophila",
  "Mycoplasma pneumoniae",
  "Chlamydia pneumoniae",
  "Candida albicans",
];
const orlGerms = [
  "Streptococcus pneumoniae",
  "Haemophilus influenzae",
  "Moraxella catarrhalis",
  "Streptococcus pyogenes",
  "Staphylococcus aureus",
  "Candida albicans",
];
//* Dictionnaires des antibiotiques
const urinaryATB = [
  "Amoxicilline + acide clavulanique",
  "Ceftriaxone",
  "Céfixime",
  "Ciprofloxacine",
  "Fosfomycine",
  "Gentamicine",
  "Nitrofurantoïne",
  "Pivmécillinam",
  "Tétracycline",
  "Triméthroprime + sulfamides",
];
const pulmonaryATB = [
  "Amoxicilline + acide clavulanique",
  "Azithromycine",
  "Céfuroxime",
  "Ciprofloxacine",
  "Clarithromycine",
  "Doxycycline",
  "Moxifloxacine",
  "Vancomycine",
  "Fluconazole",
  "Itraconazole",
];
const orlATB = [
  "Amoxicilline + acide clavulanique",
  "Azithromycine",
  "Ceftriaxone",
  "Céfuroxime",
  "Clarithromycine",
  "Doxycycline",
  "Gentamicine",
  "Moxifloxacine",
  "Vancomycine",
  "Fluconazole",
];
//* Dictionnaire des résistances connues
const resistancesConnues = {
  "Escherichia coli": ["Ciprofloxacine", "Nitrofurantoïne"],
  "Klebsiella pneumoniae": [
    "Amoxicilline + acide clavulanique",
    "Triméthroprime + sulfamides",
    "Ceftriaxone",
  ],
  "Proteus mirabilis": ["Ciprofloxacine", "Gentamicine"],
  "Pseudomonas aeruginosa": ["Ciprofloxacine", "Fosfomycine", "Ceftriaxone"],
  "Staphylococcus saprophyticus": ["Triméthroprime + sulfamides", "Ciprofloxacine"],
  "Enterococcus faecalis": [
    "Amoxicilline + acide clavulanique",
    "Triméthroprime + sulfamides",
    "Nitrofurantoïne",
  ],
  "Streptococcus pneumoniae": ["Céphalosporines", "Azithromycine"],
  "Haemophilus influenzae": ["Ampicilline", "Clarithromycine"],
  "Staphylococcus aureus": ["Methicillin", "Céfuroxime"],
  "Legionella pneumophila": ["Azithromycine", "Clarithromycine"],
  "Mycoplasma pneumoniae": [],
  "Chlamydia pneumoniae": ["Tétracycline"],
  "Candida albicans": [],
  "Streptococcus pyogenes": ["Pénicilline", "Céphalosporines"],
  "Moraxella catarrhalis": ["Amoxicilline"],
  "Fusobacterium necrophorum": [],
  "Corynebacterium diphtheriae": [],
};
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

//? Afficher toute la section au clic sur le bouton
scrollToSection("generateBloodTypeButton", "bloodTypeSection");
scrollToSection("generateECBUGermButton", "ecbuSection");
scrollToSection("generateECBCGermButton", "ecbcSection");
scrollToSection("generateORLGermButton", "orlSection");
scrollToSection("generateHGPOButton", "hgpoSection");
scrollToSection("generateT21Button", "t21Section");
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
document.getElementById("hgpoClose").addEventListener("click", function () {
  hideElements(["hgpoClose", "hgpoResult"]);
});
document.getElementById("t21Close").addEventListener("click", function () {
  hideElements(["t21Close", "t21Result"]);
});
//? Masquer la section au clic sur la croix <--
