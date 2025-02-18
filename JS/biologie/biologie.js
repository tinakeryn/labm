//? --> Générer NFS en fonction du contexte
const generateNfsButton = document.getElementById("generateNfsButton");
const contextSelect = document.getElementById("nfsContextSelect");

//* Fonction pour créer dynamiquement un tableau
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
  const selectedContext = contextSelect.value;
  const smoking = document.querySelector('input[name="tabac"]:checked') ? true : false;
  const alcohol = document.querySelector('input[name="alcool"]:checked') ? true : false;
  const onSoftDrug = document.querySelector('input[name="drogue_douce"]:checked') ? true : false;
  const onHardDrug = document.querySelector('input[name="drogue_dure"]:checked') ? true : false;
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

//? Afficher toute la section au clic sur le bouton
scrollToSection("generateNfsButton", "nfsSection");
scrollToSection("generateBloodTypeButton", "bloodTypeSection");
//? Afficher toute la section au clic sur le bouton <--

//? Masquer la section au clic sur la croix
document.getElementById("nfsClose").addEventListener("click", function () {
  hideElements(["nfsClose", "nfsResult"]);
});
document.getElementById("bloodTypeClose").addEventListener("click", function () {
  hideElements(["bloodTypeClose", "bloodTypeResult"]);
});
//? Masquer la section au clic sur la croix <--

//TODO: Automatiser VS/CRP
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
