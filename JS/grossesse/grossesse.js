const hcgSection = document.getElementById("hcgSection");
//? --> Réinitialiser les sections
hcgReload.addEventListener("click", () => {
  reloadContainer(hcgReload, hcgSection);
});
//? Réinitialiser les sections <--

//? --> Générer un taux de βHCG
const generateHcgButton = document.getElementById("generateHcgButton");
generateHcgButton.disabled = true;
let numberOfBabies = "Non applicable";
let hcgRangesToUse;
let gestation;

//* Récupérer le nombre de bébé(s)
function getNumberOfBabies() {
  const numberOfBabiesSelect = document.getElementById("babyCountSelect");
  // Si le nombre de bébé(s) est rendu aléatoire
  if (numberOfBabiesSelect) {
    if (numberOfBabiesSelect.value === "random") {
      numberOfBabies = Math.floor(Math.random() * 4) + 1;
    } else {
      numberOfBabies = parseInt(numberOfBabiesSelect.value);
    }
  }
}

//* Utiliser le bon dictionnaire
function getDictionnary() {
  getNumberOfBabies();
  const miscarriageReasonSelect = document.getElementById("miscarriageReasonSelect");
  const miscarriageReason = miscarriageReasonSelect ? miscarriageReasonSelect.value : null;

  if (miscarriageReason === "molar") {
    hcgRangesToUse = hcgRangesMolar;
  } else if (miscarriageReason === "ectopic") {
    hcgRangesToUse = hcgRangesEctopic;
  } else if (miscarriageReason === "nonViable") {
    hcgRangesToUse = hcgRangesNonViable;
  } else {
    switch (numberOfBabies) {
      case 1:
        hcgRangesToUse = hcgRanges;
        break;
      case 2:
        hcgRangesToUse = hcgRangesForTwins;
        break;
      case 3:
        hcgRangesToUse = hcgRangesForTriplets;
        break;
      case 4:
        hcgRangesToUse = hcgRangesForQuadruplets;
        break;
      default:
        hcgRangesToUse = hcgRanges;
    }
  }
}

//* Sélectionner un cas au hasard
function selectCase(category) {
  // Extraire les cas et les transformer en tableau
  let cases = category.replace(/ ou /g, ",").split(", ");

  // Sélectionner un cas aléatoire
  return cases[Math.floor(Math.random() * cases.length)];
}

//* Afficher le temps de gestation en SA
function updateGestationValue() {
  switch (gestation) {
    case "3-4":
      gestation = "3 à 4 SA";
      break;
    case "4-5":
      gestation = "4 à 5 SA";
      break;
    case "5-6":
      gestation = "5 à 6 SA";
      break;
    case "6-8":
      gestation = "6 à 8 SA";
      break;
    case "8-12":
      gestation = "8 à 12 SA (3ème mois)";
      break;
    case "12-16":
      gestation = "12 à 16 SA (4ème mois)";
      break;
    case "16-20":
      gestation = "16 à 20 SA (5ème mois)";
      break;
    case "20-24":
      gestation = "20 à 24 SA (6ème mois)";
      break;
    case "24-28":
      gestation = "24 à 28 SA (7ème mois)";
      break;
    case "28-32":
      gestation = "28 à 32 SA (8ème mois)";
      break;
    case "32-36":
      gestation = "32 à 36 SA (9ème mois)";
      break;
    case "36-40":
      gestation = "36 à 40 SA (fin de la grossesse)";
      break;
    default:
      console.log(`Valeur de gestation inconnue : ${gestation}`);
  }
}

//* Formater les nombres pour les rendre plus lisibles
function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F");
}

//* Gérer l'activation et la désactivation du bouton
function changeButtonState(selector, button) {
  if (selector) {
    selector.addEventListener("change", () => {
      if (selector.value) {
        button.disabled = false;
        button.classList.remove("disabledButton");
      } else {
        button.disabled = true;
        button.classList.add("disabledButton");
      }
    });
  }
}

//* Générer un taux de βHCG aléatoire
function generateRandomHcg(pregnancyStage) {
  getDictionnary();

  // Si le stade de grossesse est rendu aléatoire
  if (pregnancyStage === "random") {
    const allowedStages = ["3-4", "4-5", "5-6", "6-8"];
    pregnancyStage = allowedStages[Math.floor(Math.random() * allowedStages.length)];
  } else if (pregnancyStage === "randomDenial") {
    const allowedStages = ["16-20", "20-24", "24-28", "28-32", "32-36", "36-40"];
    pregnancyStage = allowedStages[Math.floor(Math.random() * allowedStages.length)];
  } else if (pregnancyStage === "2ème trimestre") {
    const allowedStages = ["16-20", "20-24"];
    pregnancyStage = allowedStages[Math.floor(Math.random() * allowedStages.length)];
  } else if (pregnancyStage === "3ème trimestre") {
    const allowedStages = ["24-28", "28-32", "32-36", "36-40"];
    pregnancyStage = allowedStages[Math.floor(Math.random() * allowedStages.length)];
  } else if (pregnancyStage === "Accouchement") {
    const allowedStages = ["36-40"];
    pregnancyStage = allowedStages[Math.floor(Math.random() * allowedStages.length)];
  }
  // Récupérer et "convertir" le stade de grossesse
  gestation = pregnancyStage;
  updateGestationValue();

  // Génère un taux dans les bornes du stade de grossesse correspondant dans le dictionnaire
  if (hcgRangesToUse[pregnancyStage]) {
    const range = hcgRangesToUse[pregnancyStage];
    const hcgValue = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    const formattedHcg = formatNumberWithSpaces(hcgValue);

    return formattedHcg;
  } else {
    console.log(`Stade de grossesse invalide : ${pregnancyStage}`);
    return null;
  }
}

//* Générer une fausse couche
function createMiscarriage(form) {
  let reasonLabel = document.getElementById("reasonLabel");
  if (!reasonLabel) {
    reasonLabel = document.createElement("label");
    reasonLabel.id = "reasonLabel";
    reasonLabel.htmlFor = "miscarriageReasonSelect";
    reasonLabel.textContent = "Quelle est la raison de la fausse couche ?";
    form.appendChild(reasonLabel);
  }

  const reasonSelect = document.createElement("select");
  reasonSelect.id = "miscarriageReasonSelect";
  reasonSelect.name = "miscarriageReason";

  // Ajouter une option par défaut désactivée
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Raison de la fausse couche";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  reasonSelect.appendChild(defaultOption);

  const reasonOptions = [
    { value: "molar", text: "Grossesse molaire" },
    { value: "ectopic", text: "Grossesse extra-utérine" },
    { value: "nonViable", text: "Fœtus non viable" },
  ];

  reasonOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    reasonSelect.appendChild(option);
  });

  reasonSelect.addEventListener("change", (reasonEvent) => {
    const selectedReason = reasonEvent.target.value;

    // Supprimer les options précédentes de pregnancyStageSelect si elles existent
    const existingPregnancyStage = document.getElementById("pregnancyStageSelect");
    if (existingPregnancyStage) {
      existingPregnancyStage.remove();
    }
    removeStageLabelIfExist();
    // Ajouter les options selon la raison sélectionnée
    if (
      selectedReason === "molar" ||
      selectedReason === "ectopic" ||
      selectedReason === "nonViable"
    ) {
      createPregnancyStageField(form, selectedReason);
      const pregnancyStageSelect = document.getElementById("pregnancyStageSelect");
      // Activer le bouton lorsque le stage de grossesse est sélectionné
      changeButtonState(pregnancyStageSelect, generateHcgButton);
    }
  });

  form.appendChild(reasonSelect);
}

//* Eviter la duplication de label
function removeStageLabelIfExist() {
  const stageLabel = document.getElementById("pregnancyStageLabel");
  if (stageLabel) {
    stageLabel.remove();
  }
}

//* Créer le sélecteur "stade de grossesse"
function createPregnancyStageField(form, context = "general") {
  const stageLabel = document.createElement("label");
  stageLabel.htmlFor = "pregnancyStageSelect";
  stageLabel.textContent = "À quel stade de grossesse est la patiente ?";
  stageLabel.id = "pregnancyStageLabel";

  const stageSelect = document.createElement("select");
  stageSelect.id = "pregnancyStageSelect";
  stageSelect.name = "pregnancyStage";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Stade de la grossesse ?";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  stageSelect.appendChild(defaultOption);

  let stageOptions;
  if (context === "molar" || context === "ectopic" || context === "nonViable") {
    stageOptions = [
      { value: "3-4", text: "3-4 semaines (env. 1 mois)" },
      { value: "4-5", text: "4-5 semaines (1 à 1,5 mois)" },
      { value: "5-6", text: "5-6 semaines (env. 1,5 mois)" },
      { value: "6-8", text: "6-8 semaines (1,5 à 2 mois)" },
      { value: "8-12", text: "8-12 semaines (2 à 3 mois)" },
      { value: "12-16", text: "12-16 semaines (3 à 4 mois)" },
      { value: "random", text: "Le hasard décide" },
    ];
  } else if (context === "pregnant") {
    stageOptions = [
      { value: "3-4", text: "3-4 semaines (env. 1 mois)" },
      { value: "4-5", text: "4-5 semaines (1 à 1,5 mois)" },
      { value: "5-6", text: "5-6 semaines (env. 1,5 mois)" },
      { value: "6-8", text: "6-8 semaines (1,5 à 2 mois)" },
      { value: "random", text: "Le hasard décide" },
    ];
  } else if (context === "denial") {
    stageOptions = [
      { value: "2ème trimestre", text: "2ème trimestre" },
      { value: "3ème trimestre", text: "3ème trimestre" },
      { value: "Accouchement", text: "Accouchement" },
      { value: "randomDenial", text: "Le hasard décide" },
    ];
  }

  stageOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    stageSelect.appendChild(option);
  });

  form.appendChild(stageLabel);
  form.appendChild(stageSelect);
}

//* Générer un formulaire dynamique
document.addEventListener("DOMContentLoaded", () => {
  const hcgContextSelect = document.getElementById("hcgContextSelect");
  const hcgContextForm = document.getElementById("hcgContextForm");
  let isPregnant = false;

  hcgContextSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const pregnancyTest = document.getElementById("pregnancyTest");

    // Supprimer tout ancien formulaire déjà généré
    const existingForm = document.getElementById("extraForm");
    if (existingForm) {
      existingForm.remove();
    }

    // Si le choix grossesse ou non est laissé au hasard :
    if (selectedValue === "chance") {
      // Déterminer aléatoirement si la patiente est enceinte ou non
      isPregnant = Math.random() < 0.5; // 50% de chance

      if (isPregnant) {
        pregnancyTest.innerHTML = `<p>La patiente est <span class="important">enceinte</span> !<br>Veuillez continuer à remplir le formulaire pour obtenir le taux de βHCG.</p>`;
        hcgContextSelect.remove();
      } else {
        pregnancyTest.innerHTML = `<p>La patiente <span class="important">n'est pas enceinte</span>, rendre le taux <span class="important">< 5 UI/L</span>.</p>`;
        hcgContextForm.remove();
        generateHcgButton.remove();
      }
    }

    if (selectedValue === "notpregnant") {
      pregnancyTest.innerHTML = `<p>
            La joueuse ne souhaite pas être enceinte, rendre le taux
            <span class="important"> < 5 UI/L</span>.
          </p>`;
      hcgContextForm.remove();
      generateHcgButton.remove();
    }
    // Si "pregnant", "denial" ou "miscarriage" est sélectionné, générer un nouveau formulaire
    if (
      selectedValue === "pregnant" ||
      selectedValue === "denial" ||
      selectedValue === "miscarriage" ||
      isPregnant
    ) {
      const extraForm = document.createElement("form");
      extraForm.id = "extraForm";

      // Ajouter une question pour "pregnancyStageSelect" uniquement si ce n'est pas une fausse couche
      if (selectedValue === "denial" || selectedValue === "pregnant" || isPregnant) {
        addNumberOfBabiesSelector(extraForm);
        const pregnancyType = isPregnant ? "pregnant" : selectedValue;
        createPregnancyStageField(extraForm, pregnancyType);
        addRiskAcceptanceField(extraForm);
      }
      // Si "miscarriage" est sélectionné
      if (selectedValue === "miscarriage") {
        createMiscarriage(extraForm);
      }
      hcgContextForm.insertAdjacentElement("afterend", extraForm);

      const pregnancyStageSelect = document.getElementById("pregnancyStageSelect");
      if (hcgContextSelect) {
        hcgContextSelect.addEventListener("change", () => {
          // Si une option est sélectionnée, activer le bouton
          generateHcgButton.disabled = true;
          generateHcgButton.classList.add("disabledButton");
        });
      }
      changeButtonState(pregnancyStageSelect, generateHcgButton);
    }
  });

  function addNumberOfBabiesSelector(form) {
    const label = document.createElement("label");
    label.htmlFor = "babyCountSelect";
    label.textContent = "Combien de bébé(s) ?";
    form.appendChild(label);

    const select = document.createElement("select");
    select.id = "babyCountSelect";
    select.name = "babyCount";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Nombre de bébés...";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    select.appendChild(defaultOption);

    const options = [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: "random", text: "Le hasard décide" },
    ];

    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.text;
      select.appendChild(option);
    });

    form.appendChild(select);
  }
});

//* Générer le tableau dynamiquement
function createHcgTable(hcgResult) {
  const hcgResultDiv = document.getElementById("hcgResult");
  const miscarriageReasonSelect = document.getElementById("miscarriageReasonSelect");
  const riskAcceptanceSelect = document.getElementById("riskAcceptance");

  let caseDescription = "Non applicable";
  const riskCategory = determineRiskyCategory();

  if (miscarriageReasonSelect && miscarriageReasonSelect.value === "ectopic") {
    caseDescription = caseDictionary.ectopic;
  } else if (miscarriageReasonSelect && miscarriageReasonSelect.value === "molar") {
    caseDescription = caseDictionary.molar;
  } else if (miscarriageReasonSelect && miscarriageReasonSelect.value === "nonViable") {
    caseDescription = caseDictionary.nonViable;
    numberOfBabies = "Non applicable";
  } else if (numberOfBabies !== "Non applicable" && caseDictionary[numberOfBabies]) {
    caseDescription = caseDictionary[numberOfBabies];
  }

  if (riskAcceptanceSelect && riskAcceptanceSelect.value === "yes") {
    caseDescription =
      caseDictionary[riskCategory] + ", " + caseDictionary[numberOfBabies] || "Cas inconnu";
  }
  console.log(caseDescription);

  let randomCase = selectCase(caseDescription);

  hcgResultDiv.innerHTML = "";
  const hcgTableHTML = `
   <table id="hcgTable">
  <thead>
    <tr>
      <th>Élément</th>
      <th>Résultat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tdTitle">Taux de βHCG</td>
      <td>${hcgResult} UI/L</td>
    </tr>
    <tr>
      <td class="tdTitle">Nombre de bébé(s) *</td>
      <td>${numberOfBabies}</td>
    </tr>
    <tr>
      <td class="tdTitle">Stade de la grossesse *</td>
      <td>${gestation}</td>
    </tr>
    <tr>
      <td class="tdTitle">N° de cas à transmettre aux gynécos</td>
      <td>Cas n°${randomCase}</td>
    </tr>
  </tbody>
</table>
<p class="resultParagraph"><span class="important">*</span> Les données "nombre de bébé(s)" et "stade de grossesse" sont à titre purement
          <span class="important">indicatif</span> ! <br />Seule l'échographie réalisée par un
          gynécoloque fait foi. <br />Ne pas donner ces infos aux joueurs autres que gynéco !
        </p>`;
  hcgResultDiv.innerHTML += hcgTableHTML;
}

//* Générer le formulaire qui propose la grossesse à risque
function addRiskAcceptanceField(form) {
  const label = document.createElement("label");
  label.htmlFor = "riskAcceptance";
  label.textContent = "Acceptez-vous une grossesse à risque ?";

  const select = document.createElement("select");
  select.id = "riskAcceptance";
  select.name = "riskAcceptance";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Choisissez...";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  select.appendChild(defaultOption);

  const options = [
    { value: "yes", text: "Oui" },
    { value: "no", text: "Non" },
  ];

  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    select.appendChild(option);
  });

  form.appendChild(label);
  form.appendChild(select);
}

//* Déterminer le type de grossesse à risque
function determineRiskyCategory() {
  switch (numberOfBabies) {
    case 1:
      return "risky";
    case 2:
      return "riskyTwin";
    case 3:
      return "riskyTriplets";
    case 4:
      return "riskyQuadruplets";
    default:
      console.log("Nombre de bébés non valide.");
      return null;
  }
}

generateHcgButton.addEventListener("click", () => {
  const pregnancyStageSelect = document.getElementById("pregnancyStageSelect");
  const selectedPregnancyStage = pregnancyStageSelect ? pregnancyStageSelect.value : null;

  if (selectedPregnancyStage) {
    const hcgResult = generateRandomHcg(selectedPregnancyStage);
    createHcgTable(hcgResult);
  } else {
    alert("Veuillez remplir tous les champs.");
  }
});

//? Générer un taux de βHCG <--

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

//TODO: Automatiser Toxoplasmose
//TODO: Automatiser Rubéole
//TODO: Automatiser CMV
//TODO: Automatiser BHCG : Prévoir IVG
