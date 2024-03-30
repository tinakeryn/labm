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
