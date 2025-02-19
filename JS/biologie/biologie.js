//? --> Générer NFS en fonction du contexte
const generateNfsButton = document.getElementById("generateNfsButton");
const nfsContextSelect = document.getElementById("nfsContextSelect");

//* Fonction pour créer dynamiquement un tableau NFS
function createNfsTable(nfsData) {
  const nfsResultDiv = document.getElementById("nfsResult");

  nfsResultDiv.innerHTML = "";

  const nfsTableHtml = `
    <table id="nfsTable">
      <thead>
        <tr>
          <th>Élément</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tdTitle">Hématies</td>
          <td>${nfsData.hematies} /mm³</td>
        </tr>
        <tr>
          <td class="tdTitle">Hémoglobine</td>
          <td>${nfsData.hemoglobine} g/dL</td>
        </tr>
        <tr>
          <td class="tdTitle">Leucocytes</td>
          <td>${nfsData.leuco} /mm³</td>
        </tr>
        <tr>
          <td class="tdTitle">Plaquettes</td>
          <td>${nfsData.plaquettes} /mm³</td>
        </tr>
      </tbody>
    </table>`;
  nfsResultDiv.innerHTML += nfsTableHtml;
}

//* Génère la NFS en fonction du contexte au clic sur le bouton
generateNfsButton.addEventListener("click", () => {
  const selectedContext = nfsContextSelect.value;
  const smoking = document.querySelector('input[name="nfsTobacco"]:checked') ? true : false;
  const alcohol = document.querySelector('input[name="nfsAlcohol"]:checked') ? true : false;
  const onSoftDrug = document.querySelector('input[name="nfsSoftDrugs"]:checked') ? true : false;
  const onHardDrug = document.querySelector('input[name="nfsHardDrugs"]:checked') ? true : false;
  const randomTobaccoNFS = applyFactor(getRandomElement(tobaccoNFS), smoking);
  const randomalcoholNFS = applyFactor(getRandomElement(alcoholNFS), alcohol);
  const randomSoftDrugNFS = applyFactor(getRandomElement(softDrugsNFS), onSoftDrug);
  const randomHardDrugNFS = applyFactor(getRandomElement(hardDrugsNFS), onHardDrug);

  let randomNFS = "";
  if (selectedContext === "Normal") {
    randomNFS = getRandomElement(normalNFS);
  } else if (selectedContext === "Grossesse") {
    randomNFS = getRandomElement(pregnancyNFS);
  } else if (selectedContext === "Chimio") {
    randomNFS = getRandomElement(chemoNFS);
  } else if (selectedContext === "Saignement") {
    randomNFS = getRandomElement(bleedingNFS);
  } else if (selectedContext === "Infection") {
    randomNFS = getRandomElement(infectionNFS);
  } else {
    alert("Veuillez choisir un contexte !");
    return;
  }

  const moyenneNFS = calculerMoyenneSiObjets(
    randomNFS,
    randomTobaccoNFS,
    randomalcoholNFS,
    randomSoftDrugNFS,
    randomHardDrugNFS
  );

  createNfsTable(moyenneNFS);

  showNextElement("generateNfsButton");
  document.getElementById("nfsResult").classList.remove("hidden");
});
//? Générer NFS en fonction du contexte <--

//? --> Générer VS en fonction du contexte
const generateVSButton = document.getElementById("generateVSButton");

//* Fonction pour créer dynamiquement un tableau VS
function createVSTable(vsData) {
  const vsResultDiv = document.getElementById("vsResult");

  vsResultDiv.innerHTML = "";

  const vsTableHtml = `
    <table id="vsTable">
      <thead>
        <tr>
          <th>Élément</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tdTitle">VS</td>
          <td>${vsData.vs} mm/h</td>
        </tr>
      </tbody>
    </table>`;
  vsResultDiv.innerHTML += vsTableHtml;
}

generateVSButton.addEventListener("click", () => {
  const selectedContext = vsContextSelect.value;
  const smoking = document.querySelector('input[name="vsTobacco"]:checked') ? true : false;
  const alcohol = document.querySelector('input[name="vsAlcohol"]:checked') ? true : false;
  const onSoftDrug = document.querySelector('input[name="vsSoftDrugs"]:checked') ? true : false;
  const onHardDrug = document.querySelector('input[name="vsHardDrugs"]:checked') ? true : false;
  const randomTobaccoVS = applyFactor(getRandomElement(tobaccoVS), smoking);
  const randomalcoholVS = applyFactor(getRandomElement(alcoholVS), alcohol);
  const randomSoftDrugVS = applyFactor(getRandomElement(softDrugsVS), onSoftDrug);
  const randomHardDrugVS = applyFactor(getRandomElement(hardDrugsVS), onHardDrug);

  let randomVS = "";
  if (selectedContext === "Normal") {
    randomVS = getRandomElement(normalVS);
  } else if (selectedContext === "Grossesse") {
    randomVS = getRandomElement(pregnancyVS);
  } else if (selectedContext === "Chimio") {
    randomVS = getRandomElement(chemoVS);
  } else if (selectedContext === "Saignement") {
    randomVS = getRandomElement(bleedingVS);
  } else if (selectedContext === "Infection") {
    randomVS = getRandomElement(infectionVS);
  } else {
    alert("Veuillez choisir un contexte !");
    return;
  }

  const moyenneVS = calculerMoyenneSiObjets(
    randomVS,
    randomTobaccoVS,
    randomalcoholVS,
    randomSoftDrugVS,
    randomHardDrugVS
  );

  createVSTable(moyenneVS);

  showNextElement("generateVSButton");
  document.getElementById("vsResult").classList.remove("hidden");
});
//? Générer VS en fonction du contexte <--

//? --> Générer groupe sanguin aléatoire
//* Statistiques de répartition des groupes sanguins
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
//* Fonction pour générer un groupe sanguin aléatoire en tenant compte des statistiques
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
//* Génère un groupe aléatoire au clic sur le bouton
document.getElementById("generateBloodTypeButton").addEventListener("click", function () {
  const bloodTypeResultElement = document.getElementById("bloodTypeResult");
  showNextElement("generateBloodTypeButton");
  bloodTypeResultElement.textContent = generateBloodType();
  bloodTypeResultElement.classList.remove("hidden");
});
//? Générer groupe sanguin aléatoire <--

//? --> Générer TP/INR et TCA aléatoires
const generateCoagButton = document.getElementById("generateCoagButton");

//* Fonction pour créer dynamiquement un tableau VS
function createCoagTable(coagData) {
  const coagResultDiv = document.getElementById("coagResult");

  coagResultDiv.innerHTML = "";

  const coagTableHtml = `
    <table id="vsTable">
      <thead>
        <tr>
          <th>Élément</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tdTitle">TP</td>
          <td>${coagData.tp} %</td>
        </tr>
        <tr>
          <td class="tdTitle">INR</td>
          <td>${coagData.inr} </td>
        </tr>
        <tr>
          <td class="tdTitle">TCA</td>
          <td>${coagData.tca} sec</td>
        </tr>
      </tbody>
    </table>`;
  coagResultDiv.innerHTML += coagTableHtml;
}

generateCoagButton.addEventListener("click", () => {
  const selectedContext = coagContextSelect.value;
  const avk = document.querySelector('input[name="coagAVK"]:checked') ? true : false;
  const injured = document.querySelector('input[name="coagInjury"]:checked') ? true : false;
  const liver = document.querySelector('input[name="coagLiver"]:checked') ? true : false;
  const randomAVKCoag = applyFactor(getRandomElement(avkCoag), avk);
  const randomInjuredCoag = applyFactor(getRandomElement(injuryCoag), injured);
  const randomLiverCoag = applyFactor(getRandomElement(liverCoag), liver);

  let randomCoag = "";
  if (selectedContext === "Normal") {
    randomCoag = getRandomElement(normalCoag);
  } else if (selectedContext === "Grossesse") {
    randomCoag = getRandomElement(pregnancyCoag);
  } else if (selectedContext === "Chimio") {
    randomCoag = getRandomElement(chemoCoag);
  } else if (selectedContext === "Infection") {
    randomCoag = getRandomElement(infectionCoag);
  } else {
    alert("Veuillez choisir un contexte !");
    return;
  }

  const moyenneCoag = calculerMoyenneSiObjets(
    randomCoag,
    randomAVKCoag,
    randomInjuredCoag,
    randomLiverCoag
  );

  createCoagTable(moyenneCoag);

  showNextElement("generateCoagButton");
  document.getElementById("coagResult").classList.remove("hidden");
});
//? Générer TP/INR et TCA aléatoires <--

//? --> Générer DDIM aléatoire
const generateDDimButton = document.getElementById("generateDDimButton");

//* Fonction pour créer dynamiquement un tableau VS
function createDDimTable(ddimData) {
  const ddimResultDiv = document.getElementById("ddimResult");

  ddimResultDiv.innerHTML = "";

  const ddimTableHtml = `
    <table id="ddimTable">
      <thead>
        <tr>
          <th>Élément</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tdTitle">D-Dimères</td>
          <td>${ddimData.ddim} ng/mL</td>
        </tr>
      </tbody>
    </table>`;
  ddimResultDiv.innerHTML += ddimTableHtml;
}

generateDDimButton.addEventListener("click", () => {
  const selectedContext = ddimContextSelect.value;
  const thrombosis = document.querySelector('input[name="ddimThrombosis"]:checked') ? true : false;
  const stroke = document.querySelector('input[name="ddimStroke"]:checked') ? true : false;
  const injured = document.querySelector('input[name="ddimInjury"]:checked') ? true : false;
  const smoking = document.querySelector('input[name="ddimTobacco"]:checked') ? true : false;
  const alcohol = document.querySelector('input[name="ddimsAlcohol"]:checked') ? true : false;
  const onSoftDrug = document.querySelector('input[name="ddimSoftDrugs"]:checked') ? true : false;
  const onHardDrug = document.querySelector('input[name="ddimHardDrugs"]:checked') ? true : false;
  const randomThrombosisDDim = applyFactor(getRandomElement(thrombosisDDim), thrombosis);
  const randomStrokeDDim = applyFactor(getRandomElement(strokeDDim), stroke);
  const randomInjuredDDim = applyFactor(getRandomElement(injuryDDim), injured);
  const randomTobaccoDDim = applyFactor(getRandomElement(tobaccoDDim), smoking);
  const randomalcoholDDim = applyFactor(getRandomElement(alcoholDDim), alcohol);
  const randomSoftDrugDDim = applyFactor(getRandomElement(softDrugsDDim), onSoftDrug);
  const randomHardDrugDDim = applyFactor(getRandomElement(hardDrugsDDim), onHardDrug);

  let randomDDim = "";
  if (selectedContext === "Normal") {
    randomDDim = getRandomElement(normalDDim);
  } else if (selectedContext === "Grossesse") {
    randomDDim = getRandomElement(pregnancyDDim);
  } else if (selectedContext === "Chimio") {
    randomDDim = getRandomElement(chemoDDim);
  } else if (selectedContext === "Saignement") {
    randomDDim = getRandomElement(bleedingDDim);
  } else if (selectedContext === "Infection") {
    randomDDim = getRandomElement(infectionDDim);
  } else {
    alert("Veuillez choisir un contexte !");
    return;
  }

  const moyenneDDim = calculerMoyenneSiObjets(
    randomDDim,
    randomThrombosisDDim,
    randomStrokeDDim,
    randomInjuredDDim,
    randomTobaccoDDim,
    randomalcoholDDim,
    randomSoftDrugDDim,
    randomHardDrugDDim
  );

  createDDimTable(moyenneDDim);

  showNextElement("generateDDimButton");
  document.getElementById("ddimResult").classList.remove("hidden");
});
//? Générer DDIM aléatoire <--

//? Afficher toute la section au clic sur le bouton
scrollToSection("generateNfsButton", "nfsSection");
scrollToSection("generateVSButton", "vsSection");
scrollToSection("generateBloodTypeButton", "bloodTypeSection");
scrollToSection("generateCoagButton", "coagSection");
scrollToSection("generateDDimButton", "ddimSection");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("nfsClose").addEventListener("click", function () {
  hideElements(["nfsClose", "nfsResult"]);
});
document.getElementById("vsClose").addEventListener("click", function () {
  hideElements(["vsClose", "vsResult"]);
});
document.getElementById("bloodTypeClose").addEventListener("click", function () {
  hideElements(["bloodTypeClose", "bloodTypeResult"]);
});
document.getElementById("coagClose").addEventListener("click", function () {
  hideElements(["coagClose", "coagResult"]);
});
document.getElementById("ddimClose").addEventListener("click", function () {
  hideElements(["ddimClose", "ddimResult"]);
});
//? Masquer la section au clic sur la croix <--

//TODO: Automatiser Coag
//TODO: Automatiser Glycémie et HbA1C
//TODO: Automatiser EAL
//TODO: Automatiser Créat et iono
//TODO: Automatiser Bilan Hépatique
//TODO: Automatiser Allergies
//TODO: Automatiser Troponine
//TODO: Automatiser Vitamines
//TODO: Automatiser Biochimie urinaire

function calculateAverages(dictionnaires) {
  const sums = {};
  const counts = {};

  // Parcourir chaque objet
  for (const obj of dicts) {
    for (const key in obj) {
      // Initialiser les entries de sums et counts si elles n'existent pas
      if (!sums[key]) {
        sums[key] = 0;
        counts[key] = 0;
      }

      // Ajouter la valeur au dictionnaire de sommes et incrémenter le compteur
      sums[key] += obj[key];
      counts[key] += 1;
    }
  }

  // Calculer les moyennes avec le formatage désiré
  const averages = {};
  for (const key in sums) {
    const average = sums[key] / counts[key];

    if (key === "hemoglobine") {
      // Formater pour garder un seul chiffre après la virgule
      averages[key] = parseFloat(average.toFixed(1));
    } else {
      // Formater comme un entier pour hematies, leuco, et plaquettes
      averages[key] = Math.round(average);
    }
  }

  return averages;
}
