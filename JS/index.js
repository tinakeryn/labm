// Statistiques de répartition des groupes sanguins
const bloodGroups = [
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
function generateBloodGroup() {
  let rand = Math.random() * 100;
  let cumulativePercentage = 0;

  for (let i = 0; i < bloodGroups.length; i++) {
    cumulativePercentage += bloodGroups[i].percentage;
    if (rand <= cumulativePercentage) {
      return bloodGroups[i].type;
    }
  }
}

// Événement de clic sur le bouton
document.getElementById("generateButton").addEventListener("click", function () {
  let resultElement = document.getElementById("result");
  resultElement.textContent = generateBloodGroup();
});

// Dictionnaires des germes
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

// Dictionnaires des antibiotiques
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

// Dictionnaire des résistances connues
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

// Fonction pour générer un germe aléatoire à partir du dictionnaire des germes urinaires
function generateUrinaryGerm() {
  const randomIndex = Math.floor(Math.random() * urinaryGerms.length);
  return urinaryGerms[randomIndex];
}

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
});

// Fonction pour générer un germe aléatoire à partir du dictionnaire des germes pulmonaires
function generatePulmonaryGerm() {
  const randomIndex = Math.floor(Math.random() * pulmonaryGerms.length);
  return pulmonaryGerms[randomIndex];
}

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
});

// Fonction pour générer un germe aléatoire à partir du dictionnaire des germes ORL
function generateOrlGerm() {
  const randomIndex = Math.floor(Math.random() * orlGerms.length);
  return orlGerms[randomIndex];
}

// Fonction pour générer un antibiogramme virtuel pour les germes ORL
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

// Événement de clic sur le bouton de génération de germe pour le prélèvement ORL
document.getElementById("generateORLGermButton").addEventListener("click", function () {
  const germe = generateOrlGerm();
  const antibiogram = generateOrlAntibiogram(germe);

  const orlResultElement = document.getElementById("orlResult");
  orlResultElement.textContent = `Germe : ${germe}`;
  orlResultElement.classList.remove("hidden"); // Affiche le germe

  const orlATBResultElement = document.getElementById("orlATBResult");
  orlATBResultElement.textContent = "Antibiogramme :\n\n" + formatOrlAntibiogram(antibiogram);
  orlATBResultElement.classList.remove("hidden"); // Affiche l'antibiogramme
});
