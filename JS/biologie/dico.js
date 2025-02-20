//? --> Dictionnaires NFS
//* Dictionnaire NFS normale
const normalNFS = {
  "normal.1": {
    hematies: 5000000,
    hemoglobine: 15.0,
    leuco: 7000,
    plaquettes: 250000,
  },
  "normal.2": {
    hematies: 4700000,
    hemoglobine: 14.5,
    leuco: 6500,
    plaquettes: 280000,
  },
  "normal.3": {
    hematies: 5200000,
    hemoglobine: 16.0,
    leuco: 5500,
    plaquettes: 320000,
  },
  "normal.4": {
    hematies: 5100000,
    hemoglobine: 15.8,
    leuco: 8000,
    plaquettes: 230000,
  },
};
//* Dictionnaire NFS pendant une grossesse
const pregnancyNFS = {
  "pregnancy.1": {
    hematies: 4200000,
    hemoglobine: 12.5,
    leuco: 9000,
    plaquettes: 200000,
  },
  "pregnancy.2": {
    hematies: 4500000,
    hemoglobine: 13.0,
    leuco: 10000,
    plaquettes: 210000,
  },
  "pregnancy.3": {
    hematies: 4300000,
    hemoglobine: 11.8,
    leuco: 8500,
    plaquettes: 190000,
  },
  "pregnancy.4": {
    hematies: 4600000,
    hemoglobine: 12.7,
    leuco: 9500,
    plaquettes: 220000,
  },
};
//* Dictionnaire NFS pendant une chimiothérapie
const chemoNFS = {
  "chemo.1": {
    hematies: 3800000,
    hemoglobine: 10.0,
    leuco: 3500,
    plaquettes: 120000,
  },
  "chemo.2": {
    hematies: 3500000,
    hemoglobine: 9.5,
    leuco: 4000,
    plaquettes: 100000,
  },
  "chemo.3": {
    hematies: 3900000,
    hemoglobine: 10.2,
    leuco: 3200,
    plaquettes: 110000,
  },
  "chemo.4": {
    hematies: 3600000,
    hemoglobine: 9.8,
    leuco: 2800,
    plaquettes: 90000,
  },
  "chemo.normal": {
    hematies: 4800000,
    hemoglobine: 13.5,
    leuco: 6500,
    plaquettes: 250000,
  },
};
//* Dictionnaire NFS en cas d'hémorragie
const bleedingNFS = {
  "bleeding.1": {
    hematies: 3200000,
    hemoglobine: 8.0,
    leuco: 7000,
    plaquettes: 140000,
  },
  "bleeding.2": {
    hematies: 3500000,
    hemoglobine: 9.0,
    leuco: 6800,
    plaquettes: 130000,
  },
  "bleeding.3": {
    hematies: 3000000,
    hemoglobine: 7.5,
    leuco: 7500,
    plaquettes: 125000,
  },
  "bleeding.4": {
    hematies: 3400000,
    hemoglobine: 8.5,
    leuco: 7200,
    plaquettes: 145000,
  },
  "normal.reference": {
    hematies: 4800000,
    hemoglobine: 13.5,
    leuco: 6500,
    plaquettes: 250000,
  },
};
//* Dictionnaire d'une NFS en cas d'infection
const infectionNFS = {
  "infection.1": {
    hematies: 4500000,
    hemoglobine: 13.0,
    leuco: 12000,
    plaquettes: 230000,
  },
  "infection.2": {
    hematies: 4400000,
    hemoglobine: 12.5,
    leuco: 14000,
    plaquettes: 220000,
  },
  "infection.3": {
    hematies: 4600000,
    hemoglobine: 13.2,
    leuco: 11000,
    plaquettes: 240000,
  },
  "infection.4": {
    hematies: 4550000,
    hemoglobine: 13.1,
    leuco: 13000,
    plaquettes: 225000,
  },
  "normal.reference": {
    hematies: 4800000,
    hemoglobine: 13.5,
    leuco: 6500,
    plaquettes: 250000,
  },
};
//* Dictionnaire NFS en cas de consommation d'alcool
const alcoholNFS = {
  "alcohol.1": {
    hematies: 4400000,
    hemoglobine: 12.2,
    leuco: 8500,
    plaquettes: 210000,
  },
  "alcohol.2": {
    hematies: 4300000,
    hemoglobine: 12.0,
    leuco: 8000,
    plaquettes: 205000,
  },
  "alcohol.3": {
    hematies: 4250000,
    hemoglobine: 11.8,
    leuco: 8700,
    plaquettes: 215000,
  },
  "alcohol.4": {
    hematies: 4200000,
    hemoglobine: 11.5,
    leuco: 9000,
    plaquettes: 200000,
  },
};
//* Dictionnaire NFS en cas de consommation de tabac
const tobaccoNFS = {
  "tobacco.1": {
    hematies: 5200000,
    hemoglobine: 15.0,
    leuco: 8500,
    plaquettes: 230000,
  },
  "tobacco.2": {
    hematies: 5000000,
    hemoglobine: 14.5,
    leuco: 9000,
    plaquettes: 220000,
  },
  "tobacco.3": {
    hematies: 5100000,
    hemoglobine: 15.2,
    leuco: 8800,
    plaquettes: 240000,
  },
  "tobacco.4": {
    hematies: 5300000,
    hemoglobine: 15.5,
    leuco: 9200,
    plaquettes: 235000,
  },
};
//* Dictionnaire NFS en cas de consommation de drogue douce
const softDrugsNFS = {
  "softDrugs.1": {
    hematies: 4700000,
    hemoglobine: 13.2,
    leuco: 6800,
    plaquettes: 240000,
  },
  "softDrugs.2": {
    hematies: 4600000,
    hemoglobine: 13.0,
    leuco: 7200,
    plaquettes: 230000,
  },
  "softDrugs.3": {
    hematies: 4800000,
    hemoglobine: 13.5,
    leuco: 7000,
    plaquettes: 245000,
  },
  "softDrugs.4": {
    hematies: 4500000,
    hemoglobine: 12.8,
    leuco: 7500,
    plaquettes: 235000,
  },
};
//* Dictionnaire NFS en cas de consommation de drogue dure
const hardDrugsNFS = {
  "hardDrugs.1": {
    hematies: 4200000,
    hemoglobine: 11.5,
    leuco: 9000,
    plaquettes: 200000,
  },
  "hardDrugs.2": {
    hematies: 4000000,
    hemoglobine: 11.0,
    leuco: 10500,
    plaquettes: 180000,
  },
  "hardDrugs.3": {
    hematies: 4100000,
    hemoglobine: 11.2,
    leuco: 9500,
    plaquettes: 190000,
  },
  "hardDrugs.4": {
    hematies: 3900000,
    hemoglobine: 10.8,
    leuco: 11000,
    plaquettes: 175000,
  },
};
//? Dictionnaires NFS <--

//? --> Dictionnaires VS
//* Dictionnaire VS normale
const normalVS = {
  "normal.1": {
    vs: 10,
  },
  "normal.2": {
    vs: 12,
  },
  "normal.3": {
    vs: 9,
  },
  "normal.4": {
    vs: 11,
  },
  "normal.5": {
    vs: 8,
  },
  "normal.6": {
    vs: 13,
  },
};
//* Dictionnaire VS pendant une grossesse
const pregnancyVS = {
  "pregnancy.1": {
    vs: 20,
  },
  "pregnancy.2": {
    vs: 25,
  },
  "pregnancy.3": {
    vs: 30,
  },
  "pregnancy.4": {
    vs: 28,
  },
  "pregnancy.5": {
    vs: 22,
  },
  "pregnancy.6": {
    vs: 27,
  },
};
//* Dictionnaire VS en cas d'hémorragie
const bleedingVS = {
  "bleeding.1": {
    vs: 18,
  },
  "bleeding.2": {
    vs: 20,
  },
  "bleeding.3": {
    vs: 22,
  },
  "bleeding.4": {
    vs: 21,
  },
  "bleeding.5": {
    vs: 19,
  },
  "bleeding.6": {
    vs: 23,
  },
};
//* Dictionnaire VS en cas de chimiothérapie
const chemoVS = {
  "chemo.1": {
    vs: 25,
  },
  "chemo.2": {
    vs: 27,
  },
  "chemo.3": {
    vs: 30,
  },
  "chemo.4": {
    vs: 28,
  },
  "chemo.5": {
    vs: 31,
  },
  "chemo.6": {
    vs: 26,
  },
};
//* Dictionnaire VS en cas d'infection
const infectionVS = {
  "infection.1": {
    vs: 40,
  },
  "infection.2": {
    vs: 50,
  },
  "infection.3": {
    vs: 45,
  },
  "infection.4": {
    vs: 48,
  },
  "infection.5": {
    vs: 42,
  },
  "infection.6": {
    vs: 55,
  },
};
//* Dictionnaire VS en cas de consommation d'alcool
const alcoholVS = {
  "alcohol.1": {
    vs: 14,
  },
  "alcohol.2": {
    vs: 16,
  },
  "alcohol.3": {
    vs: 15,
  },
  "alcohol.4": {
    vs: 17,
  },
  "alcohol.5": {
    vs: 18,
  },
  "alcohol.6": {
    vs: 19,
  },
};
//* Dictionnaire VS en cas de consommation de tabac
const tobaccoVS = {
  "tobacco.1": {
    vs: 15,
  },
  "tobacco.2": {
    vs: 17,
  },
  "tobacco.3": {
    vs: 16,
  },
  "tobacco.4": {
    vs: 18,
  },
  "tobacco.5": {
    vs: 14,
  },
  "tobacco.6": {
    vs: 19,
  },
};
//* Dictionnaire VS en cas de consommation de drogue douce
const softDrugsVS = {
  "softDrugs.1": {
    vs: 18,
  },
  "softDrugs.2": {
    vs: 20,
  },
  "softDrugs.3": {
    vs: 19,
  },
  "softDrugs.4": {
    vs: 21,
  },
  "softDrugs.5": {
    vs: 17,
  },
  "softDrugs.6": {
    vs: 22,
  },
};
//* Dictionnaire VS en cas de consommation de drogue dure
const hardDrugsVS = {
  "hardDrugs.1": {
    vs: 25,
  },
  "hardDrugs.2": {
    vs: 28,
  },
  "hardDrugs.3": {
    vs: 27,
  },
  "hardDrugs.4": {
    vs: 30,
  },
  "hardDrugs.5": {
    vs: 26,
  },
  "hardDrugs.6": {
    vs: 29,
  },
};
//? Dictionnaires VS <--

//? --> Dictionnaires TP et TCA
//* Dictionnaire TP/TCA normaux
const normalCoag = {
  "normal.1": {
    tp: 90,
    inr: 1.11,
    tca: 30,
  },
  "normal.2": {
    tp: 95,
    inr: 1.05,
    tca: 32,
  },
  "normal.3": {
    tp: 100,
    inr: 1,
    tca: 28,
  },
  "normal.4": {
    tp: 85,
    inr: 1.18,
    tca: 31,
  },
};
//* Dictionnaire TP/TCA chez une femme enceinte
const pregnancyCoag = {
  "pregnancy.1": {
    tp: 85,
    inr: 1.18,
    tca: 29,
  },
  "pregnancy.2": {
    tp: 88,
    inr: 1.14,
    tca: 30,
  },
  "pregnancy.3": {
    tp: 90,
    inr: 1.11,
    tca: 28,
  },
  "pregnancy.4": {
    tp: 87,
    inr: 1.15,
    tca: 31,
  },
  "pregnancy.5": {
    tp: 92,
    inr: 1.09,
    tca: 29,
  },
  "pregnancy.6": {
    tp: 89,
    inr: 1.12,
    tca: 30,
  },
};
//* Dictionnaire TP/TCA chez une personne sous chimiothérapie
const chemoCoag = {
  "chemo.1": {
    tp: 92,
    inr: 1.09,
    tca: 30,
  },
  "chemo.2": {
    tp: 90,
    inr: 1.11,
    tca: 32,
  },
  "chemo.3": {
    tp: 88,
    inr: 1.14,
    tca: 31,
  },
  "chemo.4": {
    tp: 91,
    inr: 1.1,
    tca: 29,
  },
  "chemo.5": {
    tp: 87,
    inr: 1.15,
    tca: 33,
  },
  "chemo.6": {
    tp: 89,
    inr: 1.12,
    tca: 30,
  },
};
//* Dictionnaire TP/TCA chez une personne ayant une infection
const infectionCoag = {
  "infection.1": {
    tp: 93,
    inr: 1.08,
    tca: 31,
  },
  "infection.2": {
    tp: 90,
    inr: 1.11,
    tca: 33,
  },
  "infection.3": {
    tp: 88,
    inr: 1.14,
    tca: 32,
  },
  "infection.4": {
    tp: 92,
    inr: 1.09,
    tca: 30,
  },
  "infection.5": {
    tp: 91,
    inr: 1.1,
    tca: 34,
  },
  "infection.6": {
    tp: 89,
    inr: 1.12,
    tca: 31,
  },
};
//* Dictionnaire TP/TCA chez une personne ayant un traitement anti-coagulant
const avkCoag = {
  "avk.1": {
    tp: 40,
    inr: 2.5,
    tca: 45,
  },
  "avk.2": {
    tp: 35,
    inr: 2.86,
    tca: 50,
  },
  "avk.3": {
    tp: 30,
    inr: 3.33,
    tca: 48,
  },
  "avk.4": {
    tp: 42,
    inr: 2.38,
    tca: 46,
  },
  "avk.5": {
    tp: 38,
    inr: 2.63,
    tca: 49,
  },
  "avk.6": {
    tp: 33,
    inr: 3.03,
    tca: 47,
  },
};
//* Dictionnaire TP/TCA chez une personne ayant une blessure par arme (blanche ou à feu)
const injuryCoag = {
  "injury.1": {
    tp: 80,
    inr: 1.25,
    tca: 36,
  },
  "injury.2": {
    tp: 82,
    inr: 1.22,
    tca: 35,
  },
  "injury.3": {
    tp: 78,
    inr: 1.28,
    tca: 37,
  },
  "injury.4": {
    tp: 84,
    inr: 1.19,
    tca: 34,
  },
  "injury.5": {
    tp: 76,
    inr: 1.32,
    tca: 38,
  },
  "injury.6": {
    tp: 85,
    inr: 1.15,
    tca: 33,
  },
};
//* Dictionnaire TP/TCA chez une personne ayant un trouble hépatique
const liverCoag = {
  "liver.1": {
    tp: 55,
    inr: 1.82,
    tca: 42,
  },
  "liver.2": {
    tp: 60,
    inr: 1.67,
    tca: 40,
  },
  "liver.3": {
    tp: 50,
    inr: 2.0,
    tca: 45,
  },
  "liver.4": {
    tp: 65,
    inr: 1.54,
    tca: 39,
  },
  "liver.5": {
    tp: 58,
    inr: 1.72,
    tca: 43,
  },
  "liver.6": {
    tp: 52,
    inr: 1.92,
    tca: 44,
  },
};
//? Dictionnaires TP et TCA <--

//? --> Dictionnaires DDIM
//* Dictionnaire DDIM normaux
const normalDDim = {
  "normal.1": {
    ddim: 150,
  },
  "normal.2": {
    ddim: 200,
  },
  "normal.3": {
    ddim: 250,
  },
  "normal.4": {
    ddim: 300,
  },
  "normal.5": {
    ddim: 350,
  },
  "normal.6": {
    ddim: 400,
  },
};
//* Dictionnaire DDIM pendant une grossesse
const pregnancyDDim = {
  "pregnancy.1": {
    ddim: 500,
  },
  "pregnancy.2": {
    ddim: 600,
  },
  "pregnancy.3": {
    ddim: 700,
  },
  "pregnancy.4": {
    ddim: 800,
  },
  "pregnancy.5": {
    ddim: 900,
  },
  "pregnancy.6": {
    ddim: 1000,
  },
};
//* Dictionnaire DDIM pendant une chimio
const chemoDDim = {
  "chemo.1": {
    ddim: 450,
  },
  "chemo.2": {
    ddim: 550,
  },
  "chemo.3": {
    ddim: 650,
  },
  "chemo.4": {
    ddim: 750,
  },
  "chemo.5": {
    ddim: 850,
  },
  "chemo.6": {
    ddim: 950,
  },
};
//* Dictionnaire DDIM en cas d'hémorragie
const bleedingDDim = {
  "bleeding.1": {
    ddim: 500,
  },
  "bleeding.2": {
    ddim: 600,
  },
  "bleeding.3": {
    ddim: 700,
  },
  "bleeding.4": {
    ddim: 800,
  },
  "bleeding.5": {
    ddim: 900,
  },
  "bleeding.6": {
    ddim: 1000,
  },
};
//* Dictionnaire DDIM en cas d'infection
const infectionDDim = {
  "infection.1": {
    ddim: 500,
  },
  "infection.2": {
    ddim: 450,
  },
  "infection.3": {
    ddim: 650,
  },
  "infection.4": {
    ddim: 850,
  },
  "infection.5": {
    ddim: 300,
  },
  "infection.6": {
    ddim: 1100,
  },
};
//* Dictionnaire DDIM en cas de phlébite ou embolie pulmonaire
const thrombosisDDim = {
  "thrombosis.1": {
    ddim: 1000,
  },
  "thrombosis.2": {
    ddim: 1500,
  },
  "thrombosis.3": {
    ddim: 2000,
  },
  "thrombosis.4": {
    ddim: 2500,
  },
  "thrombosis.5": {
    ddim: 3000,
  },
  "thrombosis.6": {
    ddim: 3500,
  },
};
//* Dictionnaire DDIM en cas d'AVC
const strokeDDim = {
  "stroke.1": {
    ddim: 900,
  },
  "stroke.2": {
    ddim: 1200,
  },
  "stroke.3": {
    ddim: 1500,
  },
  "stroke.4": {
    ddim: 1800,
  },
  "stroke.5": {
    ddim: 2100,
  },
  "stroke.6": {
    ddim: 2400,
  },
};
//* Dictionnaire DDIM en cas de blessure au thorax
const injuryDDim = {
  "injury.1": {
    ddim: 1000,
  },
  "injury.2": {
    ddim: 1500,
  },
  "injury.3": {
    ddim: 2000,
  },
  "injury.4": {
    ddim: 2500,
  },
  "injury.5": {
    ddim: 3000,
  },
  "injury.6": {
    ddim: 3500,
  },
};
//* Dictionnaire DDIM en cas de consommation d'alcool
const alcoholDDim = {
  "alcohol.1": {
    ddim: 400,
  },
  "alcohol.2": {
    ddim: 450,
  },
  "alcohol.3": {
    ddim: 500,
  },
  "alcohol.4": {
    ddim: 550,
  },
  "alcohol.5": {
    ddim: 600,
  },
  "alcohol.6": {
    ddim: 650,
  },
};
//* Dictionnaire DDIM en cas de consommation de tabac
const tobaccoDDim = {
  "tobacco.1": {
    ddim: 450,
  },
  "tobacco.2": {
    ddim: 500,
  },
  "tobacco.3": {
    ddim: 550,
  },
  "tobacco.4": {
    ddim: 600,
  },
  "tobacco.5": {
    ddim: 650,
  },
  "tobacco.6": {
    ddim: 700,
  },
};
//* Dictionnaire DDIM en cas de consommation de drogue douce
const softDrugsDDim = {
  "softDrugs.1": {
    ddim: 400,
  },
  "softDrugs.2": {
    ddim: 450,
  },
  "softDrugs.3": {
    ddim: 500,
  },
  "softDrugs.4": {
    ddim: 550,
  },
  "softDrugs.5": {
    ddim: 600,
  },
  "softDrugs.6": {
    ddim: 650,
  },
};
//* Dictionnaire DDIM en cas de consommation de drogue dure
const hardDrugsDDim = {
  "hardDrugs.1": {
    ddim: 550,
  },
  "hardDrugs.2": {
    ddim: 600,
  },
  "hardDrugs.3": {
    ddim: 650,
  },
  "hardDrugs.4": {
    ddim: 700,
  },
  "hardDrugs.5": {
    ddim: 750,
  },
  "hardDrugs.6": {
    ddim: 800,
  },
};
//? Dictionnaires DDIM <--

//? --> Dictionnaires Glycémie et HbA1c
//* Dictionnaire "sugar" normal
const normalSugar = {
  "normal.1": {
    gly: 0.9,
    hba1c: 5.2,
  },
  "normal.2": {
    gly: 0.85,
    hba1c: 5.4,
  },
  "normal.3": {
    gly: 0.95,
    hba1c: 5.3,
  },
  "normal.4": {
    gly: 0.92,
    hba1c: 5.1,
  },
  "normal.5": {
    gly: 0.88,
    hba1c: 5.0,
  },
  "normal.6": {
    gly: 0.94,
    hba1c: 5.5,
  },
};
//* Dictionnaire "sugar" en cas de chimiothérapie
const chemoSugar = {
  "chemo.1": {
    gly: 1.05,
    hba1c: 5.8,
  },
  "chemo.2": {
    gly: 1.1,
    hba1c: 5.9,
  },
  "chemo.3": {
    gly: 1.12,
    hba1c: 6.0,
  },
  "chemo.4": {
    gly: 1.08,
    hba1c: 5.7,
  },
  "chemo.5": {
    gly: 1.15,
    hba1c: 6.1,
  },
  "chemo.6": {
    gly: 1.06,
    hba1c: 5.8,
  },
};
//* Dictionnaire "sugar" en cas d'infection
const infectionSugar = {
  "infection.1": {
    gly: 1.1,
    hba1c: 6.0,
  },
  "infection.2": {
    gly: 1.12,
    hba1c: 5.9,
  },
  "infection.3": {
    gly: 1.14,
    hba1c: 6.1,
  },
  "infection.4": {
    gly: 1.09,
    hba1c: 5.8,
  },
  "infection.5": {
    gly: 1.13,
    hba1c: 6.0,
  },
  "infection.6": {
    gly: 1.11,
    hba1c: 5.8,
  },
};
//* Dictionnaire "sugar" en cas de diabète gestationnel
const gestaSugar = {
  "gesta.1": {
    gly: 1.2,
    hba1c: 6.3,
  },
  "gesta.2": {
    gly: 1.18,
    hba1c: 6.2,
  },
  "gesta.3": {
    gly: 1.22,
    hba1c: 6.4,
  },
  "gesta.4": {
    gly: 1.15,
    hba1c: 6.1,
  },
  "gesta.5": {
    gly: 1.25,
    hba1c: 6.5,
  },
  "gesta.6": {
    gly: 1.19,
    hba1c: 6.2,
  },
};
//* Dictionnaire "sugar" en cas de diabète traité
const treatedSugar = {
  "treated.1": {
    gly: 1.0,
    hba1c: 6.0,
  },
  "treated.2": {
    gly: 1.05,
    hba1c: 5.9,
  },
  "treated.3": {
    gly: 1.02,
    hba1c: 6.1,
  },
  "treated.4": {
    gly: 1.03,
    hba1c: 5.8,
  },
  "treated.5": {
    gly: 1.04,
    hba1c: 6.0,
  },
  "treated.6": {
    gly: 1.01,
    hba1c: 5.9,
  },
};
//* Dictionnaire "sugar" en cas de malbouffe
const foodSugar = {
  "food.1": {
    gly: 1.2,
    hba1c: 6.5,
  },
  "food.2": {
    gly: 1.25,
    hba1c: 6.8,
  },
  "food.3": {
    gly: 1.18,
    hba1c: 6.6,
  },
  "food.4": {
    gly: 1.22,
    hba1c: 6.7,
  },
  "food.5": {
    gly: 1.3,
    hba1c: 7.0,
  },
  "food.6": {
    gly: 1.15,
    hba1c: 6.4,
  },
};
//* Dictionnaire "sugar" en cas d'activité physique régulière
const sportSugar = {
  "sport.1": {
    gly: 0.95,
    hba1c: 5.4,
  },
  "sport.2": {
    gly: 0.9,
    hba1c: 5.2,
  },
  "sport.3": {
    gly: 0.92,
    hba1c: 5.3,
  },
  "sport.4": {
    gly: 0.93,
    hba1c: 5.5,
  },
  "sport.5": {
    gly: 0.88,
    hba1c: 5.1,
  },
  "sport.6": {
    gly: 0.89,
    hba1c: 5.2,
  },
};
//* Dictionnaire "sugar" en cas de sédentarité
const sedentarySugar = {
  "sedentary.1": {
    gly: 1.1,
    hba1c: 6.0,
  },
  "sedentary.2": {
    gly: 1.12,
    hba1c: 6.2,
  },
  "sedentary.3": {
    gly: 1.14,
    hba1c: 6.1,
  },
  "sedentary.4": {
    gly: 1.08,
    hba1c: 5.9,
  },
  "sedentary.5": {
    gly: 1.15,
    hba1c: 6.3,
  },
  "sedentary.6": {
    gly: 1.11,
    hba1c: 6.0,
  },
};
//* Dictionnaire "sugar" en cas de diabète non ou mal traité
const untreatedSugar = {
  "untreated.1": {
    gly: 1.4,
    hba1c: 8.5,
  },
  "untreated.2": {
    gly: 1.5,
    hba1c: 9.0,
  },
  "untreated.3": {
    gly: 1.6,
    hba1c: 8.8,
  },
  "untreated.4": {
    gly: 1.45,
    hba1c: 9.2,
  },
  "untreated.5": {
    gly: 1.55,
    hba1c: 9.5,
  },
  "untreated.6": {
    gly: 1.48,
    hba1c: 8.7,
  },
};
//* Dictionnaire "sugar" en cas d'insuffisance rénale
const kidneySugar = {
  "kidney.1": {
    gly: 1.25,
    hba1c: 7.5,
  },
  "kidney.2": {
    gly: 1.3,
    hba1c: 7.8,
  },
  "kidney.3": {
    gly: 1.22,
    hba1c: 7.4,
  },
  "kidney.4": {
    gly: 1.28,
    hba1c: 7.6,
  },
  "kidney.5": {
    gly: 1.35,
    hba1c: 7.9,
  },
  "kidney.6": {
    gly: 1.27,
    hba1c: 7.7,
  },
};
//* Dictionnaire "sugar" en cas de consommation d'alcool
const alcoholSugar = {
  "alcohol.1": {
    gly: 1.05,
    hba1c: 6.2,
  },
  "alcohol.2": {
    gly: 1.1,
    hba1c: 6.5,
  },
  "alcohol.3": {
    gly: 1.07,
    hba1c: 6.3,
  },
  "alcohol.4": {
    gly: 1.12,
    hba1c: 6.7,
  },
  "alcohol.5": {
    gly: 1.08,
    hba1c: 6.4,
  },
  "alcohol.6": {
    gly: 1.15,
    hba1c: 6.8,
  },
};
//* Dictionnaire "sugar" en cas de consommation de drogues dures
const hardDrugsSugar = {
  "hardDrugs.1": {
    gly: 1.3,
    hba1c: 8.0,
  },
  "hardDrugs.2": {
    gly: 1.35,
    hba1c: 8.5,
  },
  "hardDrugs.3": {
    gly: 1.28,
    hba1c: 8.2,
  },
  "hardDrugs.4": {
    gly: 1.4,
    hba1c: 8.7,
  },
  "hardDrugs.5": {
    gly: 1.32,
    hba1c: 8.3,
  },
  "hardDrugs.6": {
    gly: 1.37,
    hba1c: 8.6,
  },
};
//? Dictionnaires Glycémie et HbA1c <--
//? --> Dictionnaires EAL
//* Dictionnaire EAL normal
const normalEAL = {
  "normal.1": {
    choles: 1.8,
    trigly: 1.0,
  },
  "normal.2": {
    choles: 1.9,
    trigly: 1.1,
  },
  "normal.3": {
    choles: 2.0,
    trigly: 0.9,
  },
  "normal.4": {
    choles: 1.7,
    trigly: 1.2,
  },
  "normal.5": {
    choles: 1.85,
    trigly: 1.0,
  },
  "normal.6": {
    choles: 1.95,
    trigly: 1.1,
  },
};
//* Dictionnaire EAL en cas de grossesse
const pregnancyEAL = {
  "pregnancy.1": {
    choles: 2.5,
    trigly: 1.5,
  },
  "pregnancy.2": {
    choles: 2.8,
    trigly: 1.7,
  },
  "pregnancy.3": {
    choles: 2.6,
    trigly: 1.8,
  },
  "pregnancy.4": {
    choles: 2.7,
    trigly: 1.6,
  },
  "pregnancy.5": {
    choles: 2.9,
    trigly: 1.9,
  },
  "pregnancy.6": {
    choles: 2.4,
    trigly: 1.4,
  },
};
//* Dictionnaire EAL en cas de diabète non traité
const sugarEAL = {
  "sugar.1": {
    choles: 2.3,
    trigly: 2.2,
  },
  "sugar.2": {
    choles: 2.5,
    trigly: 2.5,
  },
  "sugar.3": {
    choles: 2.6,
    trigly: 2.8,
  },
  "sugar.4": {
    choles: 2.4,
    trigly: 2.1,
  },
  "sugar.5": {
    choles: 2.7,
    trigly: 2.9,
  },
  "sugar.6": {
    choles: 2.8,
    trigly: 3.0,
  },
};
//* Dictionnaire EAL en cas de TTT cholesterol
const treatedEAL = {
  "treated.1": {
    choles: 1.8,
    trigly: 1.2,
  },
  "treated.2": {
    choles: 1.7,
    trigly: 1.1,
  },
  "treated.3": {
    choles: 1.9,
    trigly: 1.3,
  },
  "treated.4": {
    choles: 1.6,
    trigly: 1.0,
  },
  "treated.5": {
    choles: 1.5,
    trigly: 1.1,
  },
  "treated.6": {
    choles: 1.8,
    trigly: 1.2,
  },
};
//* Dictionnaire EAL en cas de malbouffe
const foodEAL = {
  "food.1": {
    choles: 2.6,
    trigly: 2.2,
  },
  "food.2": {
    choles: 2.8,
    trigly: 2.5,
  },
  "food.3": {
    choles: 2.7,
    trigly: 2.3,
  },
  "food.4": {
    choles: 3.0,
    trigly: 2.7,
  },
  "food.5": {
    choles: 2.9,
    trigly: 2.6,
  },
  "food.6": {
    choles: 2.5,
    trigly: 2.1,
  },
};
//* Dictionnaire EAL en cas d'activité physique régulière
const sportEAL = {
  "sport.1": {
    choles: 1.8, // Cholestérol total en g/L
    trigly: 1.0, // Triglycérides en g/L
  },
  "sport.2": {
    choles: 1.9,
    trigly: 0.9,
  },
  "sport.3": {
    choles: 1.7,
    trigly: 1.1,
  },
  "sport.4": {
    choles: 1.8,
    trigly: 1.0,
  },
  "sport.5": {
    choles: 1.9,
    trigly: 1.1,
  },
  "sport.6": {
    choles: 1.7,
    trigly: 0.8,
  },
};
//* Dictionnaire EAL en cas de sédentarité
const sedentaryEAL = {
  "sedentary.1": {
    choles: 2.4,
    trigly: 1.8,
  },
  "sedentary.2": {
    choles: 2.5,
    trigly: 1.9,
  },
  "sedentary.3": {
    choles: 2.3,
    trigly: 1.7,
  },
  "sedentary.4": {
    choles: 2.6,
    trigly: 2.0,
  },
  "sedentary.5": {
    choles: 2.7,
    trigly: 2.1,
  },
  "sedentary.6": {
    choles: 2.5,
    trigly: 1.8,
  },
};
//* Dictionnaire EAL en cas de consommation d'alcool
const alcoholEAL = {
  "alcohol.1": {
    choles: 2.3,
    trigly: 2.0,
  },
  "alcohol.2": {
    choles: 2.4,
    trigly: 2.1,
  },
  "alcohol.3": {
    choles: 2.5,
    trigly: 2.3,
  },
  "alcohol.4": {
    choles: 2.6,
    trigly: 2.2,
  },
  "alcohol.5": {
    choles: 2.4,
    trigly: 2.4,
  },
  "alcohol.6": {
    choles: 2.2,
    trigly: 1.9,
  },
};
//* Dictionnaire EAL en cas de consommation de tabac
const tobaccoEAL = {
  "tobacco.1": {
    choles: 2.4,
    trigly: 2.0,
  },
  "tobacco.2": {
    choles: 2.3,
    trigly: 1.8,
  },
  "tobacco.3": {
    choles: 2.5,
    trigly: 2.1,
  },
  "tobacco.4": {
    choles: 2.6,
    trigly: 2.3,
  },
  "tobacco.5": {
    choles: 2.7,
    trigly: 2.2,
  },
  "tobacco.6": {
    choles: 2.2,
    trigly: 1.9,
  },
};
//? Dictionnaires EAL <--

//? --> Dictionnaires Bilan rénal
//* Dictionnaire Bilan rénal normal
const normalKidney = {
  "normal.1": {
    creat: 1.0,
    na: 140,
    k: 4.2,
    cl: 105,
  },
  "normal.2": {
    creat: 0.8,
    na: 138,
    k: 3.8,
    cl: 103,
  },
  "normal.3": {
    creat: 1.1,
    na: 144,
    k: 4.5,
    cl: 107,
  },
  "normal.4": {
    creat: 0.9,
    na: 142,
    k: 4.0,
    cl: 108,
  },
  "normal.5": {
    creat: 1.2,
    na: 136,
    k: 3.6,
    cl: 104,
  },
  "normal.6": {
    creat: 0.7,
    na: 146,
    k: 4.8,
    cl: 101,
  },
};
//* Dictionnaire Bilan rénal en cas d'insuffisance rénale
const insufKidney = {
  "insuf.1": {
    creat: 3.5,
    na: 130,
    k: 5.5,
    cl: 95,
  },
  "insuf.2": {
    creat: 4.2,
    na: 133,
    k: 6.0,
    cl: 97,
  },
  "insuf.3": {
    creat: 2.8,
    na: 128,
    k: 5.8,
    cl: 92,
  },
  "insuf.4": {
    creat: 3.1,
    na: 135,
    k: 5.3,
    cl: 99,
  },
  "insuf.5": {
    creat: 4.8,
    na: 132,
    k: 6.2,
    cl: 94,
  },
  "insuf.6": {
    creat: 5.0,
    na: 129,
    k: 5.7,
    cl: 98,
  },
};
//* Dictionnaire Bilan rénal pendant la grossesse
const pregnancyKidney = {
  "pregnancy.1": {
    creat: 0.6,
    na: 138,
    k: 4.0,
    cl: 104,
  },
  "pregnancy.2": {
    creat: 0.7,
    na: 140,
    k: 3.9,
    cl: 106,
  },
  "pregnancy.3": {
    creat: 0.5,
    na: 137,
    k: 4.2,
    cl: 102,
  },
  "pregnancy.4": {
    creat: 0.8,
    na: 139,
    k: 4.1,
    cl: 105,
  },
  "pregnancy.5": {
    creat: 0.6,
    na: 141,
    k: 3.7,
    cl: 103,
  },
  "pregnancy.6": {
    creat: 0.75,
    na: 136,
    k: 4.0,
    cl: 107,
  },
};
//* Dictionnaire Bilan rénal en cas de chimiothérapie
const chemoKidney = {
  "chemo.1": {
    creat: 2.0,
    na: 135,
    k: 5.3,
    cl: 100,
  },
  "chemo.2": {
    creat: 1.8,
    na: 133,
    k: 5.5,
    cl: 99,
  },
  "chemo.3": {
    creat: 2.5,
    na: 137,
    k: 5.0,
    cl: 101,
  },
  "chemo.4": {
    creat: 1.9,
    na: 134,
    k: 5.7,
    cl: 98,
  },
  "chemo.5": {
    creat: 2.2,
    na: 132,
    k: 5.1,
    cl: 100,
  },
  "chemo.6": {
    creat: 2.8,
    na: 136,
    k: 5.6,
    cl: 97,
  },
};
//* Dictionnaire Bilan rénal en cas d'hémorragie
const bleedingKidney = {
  "bleeding.1": {
    creat: 1.4,
    na: 130,
    k: 4.5,
    cl: 95,
  },
  "bleeding.2": {
    creat: 1.7,
    na: 134,
    k: 4.3,
    cl: 97,
  },
  "bleeding.3": {
    creat: 1.5,
    na: 129,
    k: 4.7,
    cl: 96,
  },
  "bleeding.4": {
    creat: 1.6,
    na: 132,
    k: 4.0,
    cl: 94,
  },
  "bleeding.5": {
    creat: 1.3,
    na: 131,
    k: 4.4,
    cl: 93,
  },
  "bleeding.6": {
    creat: 1.8,
    na: 128,
    k: 4.6,
    cl: 98,
  },
};
//* Dictionnaire Bilan rénal en cas d'infection
const infectionKidney = {
  "infection.1": {
    creat: 1.3,
    na: 134,
    k: 4.9,
    cl: 100,
  },
  "infection.2": {
    creat: 1.5,
    na: 132,
    k: 5.0,
    cl: 99,
  },
  "infection.3": {
    creat: 1.4,
    na: 133,
    k: 4.7,
    cl: 101,
  },
  "infection.4": {
    creat: 1.6,
    na: 135,
    k: 5.1,
    cl: 98,
  },
  "infection.5": {
    creat: 1.2,
    na: 130,
    k: 4.5,
    cl: 97,
  },
  "infection.6": {
    creat: 1.7,
    na: 131,
    k: 5.3,
    cl: 99,
  },
};
//* Dictionnaire Bilan rénal en cas de consommation d'alcool
const alcoholKidney = {
  "alcohol.1": {
    creat: 1.1,
    na: 135,
    k: 4.4,
    cl: 101,
  },
  "alcohol.2": {
    creat: 1.2,
    na: 134,
    k: 4.5,
    cl: 100,
  },
  "alcohol.3": {
    creat: 1.3,
    na: 136,
    k: 4.2,
    cl: 102,
  },
  "alcohol.4": {
    creat: 1.4,
    na: 133,
    k: 4.6,
    cl: 99,
  },
  "alcohol.5": {
    creat: 1.2,
    na: 137,
    k: 4.0,
    cl: 103,
  },
  "alcohol.6": {
    creat: 1.1,
    na: 138,
    k: 4.3,
    cl: 104,
  },
};
//* Dictionnaire Bilan rénal en cas de consommation de tabac
const tobaccoKidney = {
  "tobacco.1": {
    creat: 1.0,
    na: 138,
    k: 4.1,
    cl: 103,
  },
  "tobacco.2": {
    creat: 1.1,
    na: 137,
    k: 4.0,
    cl: 102,
  },
  "tobacco.3": {
    creat: 1.2,
    na: 139,
    k: 4.2,
    cl: 104,
  },
  "tobacco.4": {
    creat: 1.1,
    na: 140,
    k: 4.3,
    cl: 105,
  },
  "tobacco.5": {
    creat: 1.0,
    na: 138,
    k: 3.9,
    cl: 101,
  },
  "tobacco.6": {
    creat: 1.1,
    na: 136,
    k: 4.1,
    cl: 103,
  },
};
//* Dictionnaire Bilan rénal en cas de consommation de drogues douces
const softDrugsKidney = {
  "softDrugs.1": {
    creat: 1.0,
    na: 139,
    k: 4.2,
    cl: 105,
  },
  "softDrugs.2": {
    creat: 0.9,
    na: 138,
    k: 4.0,
    cl: 102,
  },
  "softDrugs.3": {
    creat: 1.1,
    na: 140,
    k: 4.1,
    cl: 103,
  },
  "softDrugs.4": {
    creat: 1.0,
    na: 137,
    k: 4.3,
    cl: 104,
  },
  "softDrugs.5": {
    creat: 0.9,
    na: 136,
    k: 4.4,
    cl: 106,
  },
  "softDrugs.6": {
    creat: 1.1,
    na: 139,
    k: 3.9,
    cl: 101,
  },
};
//* Dictionnaire Bilan rénal en cas de consommation de drogues dures
const hardDrugsKidney = {
  "hardDrugs.1": {
    creat: 2.5,
    na: 130,
    k: 5.8,
    cl: 96,
  },
  "hardDrugs.2": {
    creat: 3.0,
    na: 132,
    k: 5.5,
    cl: 98,
  },
  "hardDrugs.3": {
    creat: 2.8,
    na: 129,
    k: 6.0,
    cl: 95,
  },
  "hardDrugs.4": {
    creat: 3.2,
    na: 131,
    k: 5.7,
    cl: 100,
  },
  "hardDrugs.5": {
    creat: 2.6,
    na: 128,
    k: 5.9,
    cl: 97,
  },
  "hardDrugs.6": {
    creat: 3.1,
    na: 133,
    k: 6.2,
    cl: 99,
  },
};
//* Dictionnaire Bilan rénal en cas de diabète gestationnel non traité
const gestaKidney = {
  "gesta.1": {
    creat: 1.0,
    na: 134,
    k: 5.0,
    cl: 103,
  },
  "gesta.2": {
    creat: 1.2,
    na: 132,
    k: 4.9,
    cl: 102,
  },
  "gesta.3": {
    creat: 1.1,
    na: 133,
    k: 5.1,
    cl: 101,
  },
  "gesta.4": {
    creat: 0.9,
    na: 135,
    k: 4.8,
    cl: 104,
  },
  "gesta.5": {
    creat: 1.0,
    na: 131,
    k: 5.2,
    cl: 100,
  },
  "gesta.6": {
    creat: 1.3,
    na: 133,
    k: 5.0,
    cl: 99,
  },
};
//* Dictionnaire Bilan rénal en cas de diabète traité
const treatedKidney = {
  "treated.1": {
    creat: 0.9,
    na: 138,
    k: 4.3,
    cl: 104,
  },
  "treated.2": {
    creat: 1.0,
    na: 137,
    k: 4.1,
    cl: 102,
  },
  "treated.3": {
    creat: 1.1,
    na: 136,
    k: 4.4,
    cl: 103,
  },
  "treated.4": {
    creat: 0.8,
    na: 139,
    k: 4.0,
    cl: 105,
  },
  "treated.5": {
    creat: 1.0,
    na: 140,
    k: 4.2,
    cl: 106,
  },
  "treated.6": {
    creat: 0.9,
    na: 138,
    k: 4.1,
    cl: 104,
  },
};
//* Dictionnaire Bilan rénal en cas de diabète non traité
const untreatedKidney = {
  "untreated.1": {
    creat: 1.8,
    na: 130,
    k: 5.5,
    cl: 98,
  },
  "untreated.2": {
    creat: 2.0,
    na: 132,
    k: 5.7,
    cl: 97,
  },
  "untreated.3": {
    creat: 1.9,
    na: 131,
    k: 5.3,
    cl: 100,
  },
  "untreated.4": {
    creat: 2.2,
    na: 129,
    k: 5.6,
    cl: 96,
  },
  "untreated.5": {
    creat: 1.7,
    na: 133,
    k: 5.4,
    cl: 99,
  },
  "untreated.6": {
    creat: 1.8,
    na: 130,
    k: 5.8,
    cl: 95,
  },
};
//* Dictionnaire Bilan rénal en cas de malbouffe
const foodKidney = {
  "food.1": {
    creat: 1.3,
    na: 142,
    k: 4.8,
    cl: 107,
  },
  "food.2": {
    creat: 1.4,
    na: 145,
    k: 4.5,
    cl: 108,
  },
  "food.3": {
    creat: 1.2,
    na: 144,
    k: 4.7,
    cl: 106,
  },
  "food.4": {
    creat: 1.5,
    na: 140,
    k: 5.0,
    cl: 105,
  },
  "food.5": {
    creat: 1.3,
    na: 143,
    k: 4.9,
    cl: 104,
  },
  "food.6": {
    creat: 1.4,
    na: 141,
    k: 4.6,
    cl: 107,
  },
};
//* Dictionnaire Bilan rénal en cas d'activité physique régulière
const sportKidney = {
  "sport.1": {
    creat: 1.0,
    na: 140,
    k: 4.4,
    cl: 104,
  },
  "sport.2": {
    creat: 1.1,
    na: 138,
    k: 4.5,
    cl: 103,
  },
  "sport.3": {
    creat: 1.2,
    na: 139,
    k: 4.3,
    cl: 105,
  },
  "sport.4": {
    creat: 0.9,
    na: 141,
    k: 4.2,
    cl: 102,
  },
  "sport.5": {
    creat: 1.0,
    na: 137,
    k: 4.6,
    cl: 106,
  },
  "sport.6": {
    creat: 1.1,
    na: 140,
    k: 4.4,
    cl: 104,
  },
};
//* Dictionnaire Bilan rénal en cas de sédentarité
const sedentaryKidney = {
  "sedentary.1": {
    creat: 1.2,
    na: 139,
    k: 4.2,
    cl: 104,
  },
  "sedentary.2": {
    creat: 1.3,
    na: 140,
    k: 4.0,
    cl: 103,
  },
  "sedentary.3": {
    creat: 1.1,
    na: 138,
    k: 4.1,
    cl: 105,
  },
  "sedentary.4": {
    creat: 1.4,
    na: 137,
    k: 4.3,
    cl: 102,
  },
  "sedentary.5": {
    creat: 1.2,
    na: 136,
    k: 4.4,
    cl: 106,
  },
  "sedentary.6": {
    creat: 1.3,
    na: 139,
    k: 4.2,
    cl: 104,
  },
};
//? Dictionnaires Bilan rénal <--
