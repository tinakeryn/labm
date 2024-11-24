//? --> Générer un taux de βHCG
const generateHcgButton = document.getElementById("generateHcgButton");

function generateRandomHcg(pregnancyStage) {
  const miscarriageReasonSelect = document.getElementById("miscarriageReasonSelect");
  const miscarriageReason = miscarriageReasonSelect ? miscarriageReasonSelect.value : null;

  // Choisir le dictionnaire en fonction de la raison
  let hcgRangesToUse = hcgRanges; // Par défaut
  if (miscarriageReason === "molar") {
    hcgRangesToUse = hcgRangesMolar;
  } else if (miscarriageReason === "ectopic") {
    hcgRangesToUse = hcgRangesEctopic;
  }

  // Vérifier que le stade de grossesse existe dans le dictionnaire choisi
  if (hcgRangesToUse[pregnancyStage]) {
    const range = hcgRangesToUse[pregnancyStage];
    // Générer un taux aléatoire entre min et max
    return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  } else {
    return null; // Si le stade n'existe pas
  }
}
//* Générer un formulaire dynamique
document.addEventListener("DOMContentLoaded", () => {
  const hcgContextSelect = document.getElementById("hcgContextSelect");
  const hcgContextForm = document.getElementById("hcgContextForm");

  hcgContextSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    // Supprimer tout ancien formulaire déjà généré
    const existingForm = document.getElementById("extraForm");
    if (existingForm) {
      existingForm.remove();
    }

    // Si "pregnant", "denial" ou "miscarriage" est sélectionné, générer un nouveau formulaire
    if (
      selectedValue === "pregnant" ||
      selectedValue === "denial" ||
      selectedValue === "miscarriage"
    ) {
      const extraForm = document.createElement("form");
      extraForm.id = "extraForm";

      // Ajouter une question pour "pregnancyStageSelect" uniquement si ce n'est pas une fausse couche
      if (selectedValue === "denial" || selectedValue === "pregnant") {
        addNumberOfBabiesSelector(extraForm);
      }
      if (selectedValue === "denial" || selectedValue === "pregnant") {
        createPregnancyStageField(extraForm, selectedValue);
      }

      // Si "miscarriage" est sélectionné
      if (selectedValue === "miscarriage") {
        let reasonLabel = document.getElementById("reasonLabel");
        if (!reasonLabel) {
          reasonLabel = document.createElement("label");
          reasonLabel.id = "reasonLabel";
          reasonLabel.htmlFor = "miscarriageReasonSelect";
          reasonLabel.textContent = "Quelle est la raison de la fausse couche ?";
          extraForm.appendChild(reasonLabel);
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
          { value: "other", text: "Autre" },
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

          // Ajouter les options selon la raison sélectionnée
          if (selectedReason === "molar" || selectedReason === "ectopic") {
            createPregnancyStageField(extraForm, selectedReason);
          }
        });

        extraForm.appendChild(reasonSelect);
      }

      // Insérer le formulaire dans le DOM
      hcgContextForm.insertAdjacentElement("afterend", extraForm);
    }
  });

  /**
   * Crée le champ pregnancyStageSelect et l'ajoute au formulaire donné.
   * @param {HTMLElement} form - Le formulaire où ajouter le champ.
   * @param {string} context - Le contexte pour personnaliser les options (facultatif).
   */
  function createPregnancyStageField(form, context = "general") {
    const stageLabel = document.createElement("label");
    stageLabel.htmlFor = "pregnancyStageSelect";
    stageLabel.textContent = "À quel stade de grossesse est la patiente ?";

    const stageSelect = document.createElement("select");
    stageSelect.id = "pregnancyStageSelect";
    stageSelect.name = "pregnancyStage";

    let stageOptions;
    if (context === "molar" || context === "ectopic") {
      stageOptions = [
        { value: "3-4", text: "3-4 semaines (env. 1 mois)" },
        { value: "4-5", text: "4-5 semaines (1 à 1,5 mois)" },
        { value: "5-6", text: "5-6 semaines (env. 1,5 mois)" },
        { value: "6-8", text: "6-8 semaines (1,5 à 2 mois)" },
        { value: "8-12", text: "8-12 semaines (2 à 3 mois)" },
        { value: "12-16", text: "12-16 semaines (3 à 4 mois)" },
      ];
    } else if (context === "pregnant") {
      stageOptions = [
        { value: "3-4", text: "3-4 semaines (env. 1 mois)" },
        { value: "4-5", text: "4-5 semaines (1 à 1,5 mois)" },
        { value: "5-6", text: "5-6 semaines (env. 1,5 mois)" },
        { value: "6-8", text: "6-8 semaines (1,5 à 2 mois)" },
        { value: "Le hasard décide", text: "Le hasard décide" },
      ];
    } else {
      stageOptions = [
        { value: "1er trimestre", text: "1er trimestre" },
        { value: "2ème trimestre", text: "2ème trimestre" },
        { value: "3ème trimestre", text: "3ème trimestre" },
        { value: "Accouchement", text: "Accouchement" },
        { value: "Le hasard décide", text: "Le hasard décide" },
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

  function addNumberOfBabiesSelector(form) {
    const label = document.createElement("label");
    label.htmlFor = "babyCountSelect";
    label.textContent = "Combien de bébés sont attendus ?";
    form.appendChild(label);

    const select = document.createElement("select");
    select.id = "babyCountSelect";
    select.name = "babyCount";

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

//*Générer le tableau dynamiquement
function createHcgTable(hcgResult) {
  const hcgResultDiv = document.getElementById("hcgResult");
  const miscarriageReasonSelect = document.getElementById("miscarriageReasonSelect");
  const numberOfBabiesSelect = document.getElementById("babyCountSelect");

  let numberOfBabies = "Non applicable";
  let caseDescription = "Non applicable";

  if (numberOfBabiesSelect) {
    if (numberOfBabiesSelect.value === "random") {
      numberOfBabies = Math.floor(Math.random() * 4) + 1; // Générer un nombre entre 1 et 4
    } else {
      numberOfBabies = numberOfBabiesSelect.value;
    }
  }

  if (miscarriageReasonSelect && miscarriageReasonSelect.value === "ectopic") {
    caseDescription = caseDictionary.ectopic;
  } else if (miscarriageReasonSelect && miscarriageReasonSelect.value === "molar") {
    caseDescription = caseDictionary.molar;
  } else if (numberOfBabies !== "Non applicable" && caseDictionary[numberOfBabies]) {
    caseDescription = caseDictionary[numberOfBabies];
  }

  // Affichage du tableau
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
      <td class="tdTitle">Nombre de bébé(s)</td>
      <td>${numberOfBabies}</td>
    </tr>
    <tr>
      <td class="tdTitle">Cas d'écho 1er trimestre</td>
      <td>${caseDescription}</td>
    </tr>
  </tbody>
</table>`;
  hcgResultDiv.innerHTML += hcgTableHTML;
}

generateHcgButton.addEventListener("click", () => {
  const pregnancyStageSelect = document.getElementById("pregnancyStageSelect");
  const selectedPregnancyStage = pregnancyStageSelect ? pregnancyStageSelect.value : null;

  // Vérifier si un stade de grossesse est sélectionné
  if (selectedPregnancyStage) {
    // Appeler la fonction pour générer le taux de βHCG
    const hcgResult = generateRandomHcg(selectedPregnancyStage);
    // Afficher le tableau avec le taux généré
    createHcgTable(hcgResult);
  } else {
    alert("Veuillez sélectionner un stade de grossesse.");
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

//TODO: Automatiser BHCG : mettre en place la génération du taux en fonction du nombre de bébés
//TODO: Automatiser CMV
//TODO: Automatiser Toxoplasmose
//TODO: Automatiser Rubéole
//TODO: Automatiser DPNI
