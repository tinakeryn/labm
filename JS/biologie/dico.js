//? --> Dictionnaires NFS
//* Dictionnaire NFS normale
const normalNFS = {
  "normal.1": {
    hematies: 4900000,
    hemoglobine: 14.0,
    leuco: 6500,
    plaquettes: 250000,
  },
  "normal.2": {
    hematies: 4800000,
    hemoglobine: 13.8,
    leuco: 6400,
    plaquettes: 255000,
  },
  "normal.3": {
    hematies: 5000000,
    hemoglobine: 14.2,
    leuco: 6600,
    plaquettes: 260000,
  },
  "normal.4": {
    hematies: 4950000,
    hemoglobine: 13.9,
    leuco: 6300,
    plaquettes: 245000,
  },
  "normal.5": {
    hematies: 4850000,
    hemoglobine: 14.1,
    leuco: 6700,
    plaquettes: 248000,
  },
  "normal.6": {
    hematies: 5100000,
    hemoglobine: 14.5,
    leuco: 6550,
    plaquettes: 252000,
  },
};
//* Dictionnaire NFS pendant une grossesse
const pregnancyNFS = {
  "pregnancy.1": {
    hematies: 4200000,
    hemoglobine: 12.0,
    leuco: 8000,
    plaquettes: 230000,
  },
  "pregnancy.2": {
    hematies: 4100000,
    hemoglobine: 11.8,
    leuco: 8200,
    plaquettes: 225000,
  },
  "pregnancy.3": {
    hematies: 4300000,
    hemoglobine: 12.2,
    leuco: 8100,
    plaquettes: 235000,
  },
  "pregnancy.4": {
    hematies: 4150000,
    hemoglobine: 11.9,
    leuco: 7900,
    plaquettes: 228000,
  },
  "pregnancy.5": {
    hematies: 4250000,
    hemoglobine: 12.1,
    leuco: 8350,
    plaquettes: 220000,
  },
  "pregnancy.6": {
    hematies: 4200000,
    hemoglobine: 11.7,
    leuco: 8050,
    plaquettes: 215000,
  },
};
//* Dictionnaire NFS pendant une chimiothérapie
const chemoNFS = {
  "chemo.1": {
    hematies: 3500000,
    hemoglobine: 10.0,
    leuco: 3000,
    plaquettes: 150000,
  },
  "chemo.2": {
    hematies: 3400000,
    hemoglobine: 9.5,
    leuco: 2500,
    plaquettes: 140000,
  },
  "chemo.3": {
    hematies: 3300000,
    hemoglobine: 9.0,
    leuco: 2000,
    plaquettes: 130000,
  },
  "chemo.4": {
    hematies: 3200000,
    hemoglobine: 8.5,
    leuco: 3000,
    plaquettes: 120000,
  },
  "chemo.5": {
    hematies: 3100000,
    hemoglobine: 8.0,
    leuco: 1500,
    plaquettes: 110000,
  },
  "chemo.6": {
    hematies: 3000000,
    hemoglobine: 7.8,
    leuco: 1000,
    plaquettes: 100000,
  },
};
//* Dictionnaire NFS en cas d'hémorragie (ulcère à l'estomac par exemple)
const bleedingNFS = {
  "bleeding.1": {
    hematies: 3400000,
    hemoglobine: 8.5,
    leuco: 7200,
    plaquettes: 135000,
  },
  "bleeding.2": {
    hematies: 3300000,
    hemoglobine: 8.0,
    leuco: 7100,
    plaquettes: 132000,
  },
  "bleeding.3": {
    hematies: 3200000,
    hemoglobine: 7.8,
    leuco: 7300,
    plaquettes: 130000,
  },
  "bleeding.4": {
    hematies: 3100000,
    hemoglobine: 7.5,
    leuco: 7400,
    plaquettes: 128000,
  },
  "bleeding.5": {
    hematies: 3000000,
    hemoglobine: 7.2,
    leuco: 7500,
    plaquettes: 126000,
  },
  "bleeding.6": {
    hematies: 2900000,
    hemoglobine: 7.0,
    leuco: 7600,
    plaquettes: 125000,
  },
};
//* Dictionnaire d'une NFS en cas d'infection
const infectionNFS = {
  "infection.1": {
    hematies: 4700000,
    hemoglobine: 13.5,
    leuco: 12000,
    plaquettes: 230000,
  },
  "infection.2": {
    hematies: 4600000,
    hemoglobine: 13.2,
    leuco: 15000,
    plaquettes: 220000,
  },
  "infection.3": {
    hematies: 4550000,
    hemoglobine: 13.0,
    leuco: 14000,
    plaquettes: 225000,
  },
  "infection.4": {
    hematies: 4800000,
    hemoglobine: 13.6,
    leuco: 13000,
    plaquettes: 240000,
  },
  "infection.5": {
    hematies: 4750000,
    hemoglobine: 13.4,
    leuco: 12500,
    plaquettes: 235000,
  },
  "infection.6": {
    hematies: 4650000,
    hemoglobine: 13.1,
    leuco: 13500,
    plaquettes: 228000,
  },
};
//* Dictionnaire NFS en cas de troubles hépatiques
const liverNFS = {
  "liver.1": {
    hematies: 4200000,
    hemoglobine: 12.0,
    leuco: 7000,
    plaquettes: 180000,
  },
  "liver.2": {
    hematies: 4100000,
    hemoglobine: 11.5,
    leuco: 7500,
    plaquettes: 170000,
  },
  "liver.3": {
    hematies: 4000000,
    hemoglobine: 11.0,
    leuco: 7200,
    plaquettes: 160000,
  },
  "liver.4": {
    hematies: 3900000,
    hemoglobine: 10.5,
    leuco: 7800,
    plaquettes: 150000,
  },
  "liver.5": {
    hematies: 3800000,
    hemoglobine: 10.0,
    leuco: 8000,
    plaquettes: 140000,
  },
  "liver.6": {
    hematies: 3700000,
    hemoglobine: 9.5,
    leuco: 8200,
    plaquettes: 130000,
  },
};
//* Dictionnaire NFS en cas de blessure par arme (blanche ou à feu)
const injuryNFS = {
  "injury.1": {
    hematies: 3500000,
    hemoglobine: 10.0,
    leuco: 14000,
    plaquettes: 220000,
  },
  "injury.2": {
    hematies: 3300000,
    hemoglobine: 9.5,
    leuco: 14500,
    plaquettes: 210000,
  },
  "injury.3": {
    hematies: 3100000,
    hemoglobine: 9.0,
    leuco: 15000,
    plaquettes: 200000,
  },
  "injury.4": {
    hematies: 3400000,
    hemoglobine: 9.8,
    leuco: 14800,
    plaquettes: 205000,
  },
  "injury.5": {
    hematies: 3000000,
    hemoglobine: 8.5,
    leuco: 15500,
    plaquettes: 195000,
  },
  "injury.6": {
    hematies: 2950000,
    hemoglobine: 8.0,
    leuco: 16000,
    plaquettes: 190000,
  },
};
//* Dictionnaire NFS en cas d'insuffisance rénale'
const insufNFS = {
  "insuf.1": {
    hematies: 3900000,
    hemoglobine: 11.0,
    leuco: 7000,
    plaquettes: 180000,
  },
  "insuf.2": {
    hematies: 3800000,
    hemoglobine: 10.5,
    leuco: 7200,
    plaquettes: 170000,
  },
  "insuf.3": {
    hematies: 3700000,
    hemoglobine: 10.0,
    leuco: 7300,
    plaquettes: 160000,
  },
  "insuf.4": {
    hematies: 3600000,
    hemoglobine: 9.5,
    leuco: 7500,
    plaquettes: 155000,
  },
  "insuf.5": {
    hematies: 3500000,
    hemoglobine: 9.0,
    leuco: 7700,
    plaquettes: 150000,
  },
  "insuf.6": {
    hematies: 3400000,
    hemoglobine: 8.5,
    leuco: 7900,
    plaquettes: 140000,
  },
};
//* Dictionnaire NFS en cas de crise cardiaque
const infarctNFS = {
  "infarct.1": {
    hematies: 4700000,
    hemoglobine: 13.2,
    leuco: 12000,
    plaquettes: 240000,
  },
  "infarct.2": {
    hematies: 4650000,
    hemoglobine: 13.0,
    leuco: 12500,
    plaquettes: 235000,
  },
  "infarct.3": {
    hematies: 4600000,
    hemoglobine: 12.8,
    leuco: 13000,
    plaquettes: 230000,
  },
  "infarct.4": {
    hematies: 4550000,
    hemoglobine: 12.5,
    leuco: 13500,
    plaquettes: 225000,
  },
  "infarct.5": {
    hematies: 4500000,
    hemoglobine: 12.2,
    leuco: 14000,
    plaquettes: 220000,
  },
  "infarct.6": {
    hematies: 4450000,
    hemoglobine: 12.0,
    leuco: 14500,
    plaquettes: 215000,
  },
};
//* Dictionnaire NFS en cas de leucémie
const leukemiaNFS = {
  "leukemia.1": {
    hematies: 2500000,
    hemoglobine: 8.0,
    leuco: 50000,
    plaquettes: 80000,
  },
  "leukemia.2": {
    hematies: 3000000,
    hemoglobine: 9.0,
    leuco: 70000,
    plaquettes: 90000,
  },
  "leukemia.3": {
    hematies: 2800000,
    hemoglobine: 8.5,
    leuco: 60000,
    plaquettes: 75000,
  },
  "leukemia.4": {
    hematies: 2600000,
    hemoglobine: 7.5,
    leuco: 55000,
    plaquettes: 85000,
  },
  "leukemia.5": {
    hematies: 2700000,
    hemoglobine: 8.2,
    leuco: 65000,
    plaquettes: 92000,
  },
  "leukemia.6": {
    hematies: 2900000,
    hemoglobine: 8.8,
    leuco: 71000,
    plaquettes: 81000,
  },
};
//* Dictionnaire NFS en cas de consommation d'alcool
const alcoholNFS = {
  "alcohol.1": {
    hematies: 4200000,
    hemoglobine: 11.8,
    leuco: 6000,
    plaquettes: 150000,
  },
  "alcohol.2": {
    hematies: 4100000,
    hemoglobine: 11.5,
    leuco: 6200,
    plaquettes: 140000,
  },
  "alcohol.3": {
    hematies: 4300000,
    hemoglobine: 12.0,
    leuco: 5900,
    plaquettes: 145000,
  },
  "alcohol.4": {
    hematies: 4150000,
    hemoglobine: 11.7,
    leuco: 6100,
    plaquettes: 135000,
  },
  "alcohol.5": {
    hematies: 4250000,
    hemoglobine: 11.9,
    leuco: 6050,
    plaquettes: 130000,
  },
  "alcohol.6": {
    hematies: 4000000,
    hemoglobine: 11.3,
    leuco: 6000,
    plaquettes: 125000,
  },
};
//* Dictionnaire NFS en cas de consommation de tabac
const tobaccoNFS = {
  "tobacco.1": {
    hematies: 5100000,
    hemoglobine: 15.8,
    leuco: 8500,
    plaquettes: 240000,
  },
  "tobacco.2": {
    hematies: 5000000,
    hemoglobine: 15.5,
    leuco: 8800,
    plaquettes: 235000,
  },
  "tobacco.3": {
    hematies: 4950000,
    hemoglobine: 15.3,
    leuco: 8700,
    plaquettes: 245000,
  },
  "tobacco.4": {
    hematies: 5050000,
    hemoglobine: 15.6,
    leuco: 8600,
    plaquettes: 250000,
  },
  "tobacco.5": {
    hematies: 4900000,
    hemoglobine: 15.1,
    leuco: 9000,
    plaquettes: 238000,
  },
  "tobacco.6": {
    hematies: 5150000,
    hemoglobine: 16.0,
    leuco: 8800,
    plaquettes: 232000,
  },
};
//* Dictionnaire NFS en cas de consommation de drogue douce
const softDrugsNFS = {
  "softDrugs.1": {
    hematies: 4700000,
    hemoglobine: 13.8,
    leuco: 7000,
    plaquettes: 240000,
  },
  "softDrugs.2": {
    hematies: 4750000,
    hemoglobine: 14.0,
    leuco: 7200,
    plaquettes: 245000,
  },
  "softDrugs.3": {
    hematies: 4650000,
    hemoglobine: 13.7,
    leuco: 7100,
    plaquettes: 238000,
  },
  "softDrugs.4": {
    hematies: 4800000,
    hemoglobine: 14.1,
    leuco: 6950,
    plaquettes: 250000,
  },
  "softDrugs.5": {
    hematies: 4600000,
    hemoglobine: 13.5,
    leuco: 7300,
    plaquettes: 235000,
  },
  "softDrugs.6": {
    hematies: 4850000,
    hemoglobine: 14.2,
    leuco: 7050,
    plaquettes: 242000,
  },
};
//* Dictionnaire NFS en cas de consommation de drogue dure
const hardDrugsNFS = {
  "hardDrugs.1": {
    hematies: 3800000,
    hemoglobine: 11.0,
    leuco: 12000,
    plaquettes: 150000,
  },
  "hardDrugs.2": {
    hematies: 3700000,
    hemoglobine: 10.8,
    leuco: 13000,
    plaquettes: 140000,
  },
  "hardDrugs.3": {
    hematies: 3600000,
    hemoglobine: 10.5,
    leuco: 11000,
    plaquettes: 135000,
  },
  "hardDrugs.4": {
    hematies: 3550000,
    hemoglobine: 10.2,
    leuco: 12500,
    plaquettes: 130000,
  },
  "hardDrugs.5": {
    hematies: 3650000,
    hemoglobine: 10.7,
    leuco: 11500,
    plaquettes: 145000,
  },
  "hardDrugs.6": {
    hematies: 3750000,
    hemoglobine: 10.9,
    leuco: 13500,
    plaquettes: 138000,
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
//* Dictionnaire VS en cas de trouble hépatique
const liverVS = {
  "liver.1": {
    vs: 25,
  },
  "liver.2": {
    vs: 28,
  },
  "liver.3": {
    vs: 22,
  },
  "liver.4": {
    vs: 27,
  },
  "liver.5": {
    vs: 24,
  },
  "liver.6": {
    vs: 30,
  },
};
//* Dictionnaire VS en cas d'insuffisance rénale
const kidneyVS = {
  "kidney.1": {
    vs: 20,
  },
  "kidney.2": {
    vs: 23,
  },
  "kidney.3": {
    vs: 18,
  },
  "kidney.4": {
    vs: 22,
  },
  "kidney.5": {
    vs: 19,
  },
  "kidney.6": {
    vs: 25,
  },
};
//* Dictionnaire VS en cas de diabète gesta non traité
const gestaVS = {
  "gesta.1": {
    vs: 18,
  },
  "gesta.2": {
    vs: 20,
  },
  "gesta.3": {
    vs: 17,
  },
  "gesta.4": {
    vs: 21,
  },
  "gesta.5": {
    vs: 19,
  },
  "gesta.6": {
    vs: 22,
  },
};
//* Dictionnaire VS en cas de diabète traité
const treatedVS = {
  "treated.1": {
    vs: 13,
  },
  "treated.2": {
    vs: 15,
  },
  "treated.3": {
    vs: 12,
  },
  "treated.4": {
    vs: 14,
  },
  "treated.5": {
    vs: 16,
  },
  "treated.6": {
    vs: 13,
  },
};
//* Dictionnaire VS en cas de diabète non ou mal traité
const untreatedVS = {
  "untreated.1": {
    vs: 20,
  },
  "untreated.2": {
    vs: 22,
  },
  "untreated.3": {
    vs: 18,
  },
  "untreated.4": {
    vs: 25,
  },
  "untreated.5": {
    vs: 19,
  },
  "untreated.6": {
    vs: 23,
  },
};
//* Dictionnaire VS pour un cancer autre que leucémie
const cancerVS = {
  "cancer.1": {
    vs: 25,
  },
  "cancer.2": {
    vs: 30,
  },
  "cancer.3": {
    vs: 27,
  },
  "cancer.4": {
    vs: 35,
  },
  "cancer.5": {
    vs: 40,
  },
  "cancer.6": {
    vs: 45,
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
//* Dictionnaire VS en cas de malbouffe
const foodVS = {
  "food.1": {
    vs: 18,
  },
  "food.2": {
    vs: 20,
  },
  "food.3": {
    vs: 22,
  },
  "food.4": {
    vs: 17,
  },
  "food.5": {
    vs: 19,
  },
  "food.6": {
    vs: 21,
  },
};
//* Dictionnaire VS en cas d'activité physique régulière
const sportVS = {
  "sport.1": {
    vs: 12,
  },
  "sport.2": {
    vs: 10,
  },
  "sport.3": {
    vs: 14,
  },
  "sport.4": {
    vs: 13,
  },
  "sport.5": {
    vs: 11,
  },
  "sport.6": {
    vs: 9,
  },
};
//* Dictionnaire VS en cas de sédentarité
const sedentaryVS = {
  "sedentary.1": {
    vs: 16,
  },
  "sedentary.2": {
    vs: 17,
  },
  "sedentary.3": {
    vs: 18,
  },
  "sedentary.4": {
    vs: 19,
  },
  "sedentary.5": {
    vs: 16,
  },
  "sedentary.6": {
    vs: 18,
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
//* Dictionnaire TP/TCA chez une personne ayant une insuffisance rénale
const insufCoag = {
  "insuf.1": {
    tp: 58,
    inr: 1.8,
    tca: 48,
  },
  "insuf.2": {
    tp: 56,
    inr: 1.85,
    tca: 49,
  },
  "insuf.3": {
    tp: 54,
    inr: 1.9,
    tca: 50,
  },
  "insuf.4": {
    tp: 52,
    inr: 2.0,
    tca: 52,
  },
  "insuf.5": {
    tp: 50,
    inr: 2.1,
    tca: 54,
  },
  "insuf.6": {
    tp: 48,
    inr: 2.2,
    tca: 56,
  },
};
//* Dictionnaire TP/TCA en cas de consommation d'alcool
const alcoholCoag = {
  "alcohol.1": {
    tp: 68,
    inr: 1.45,
    tca: 39,
  },
  "alcohol.2": {
    tp: 66,
    inr: 1.5,
    tca: 40,
  },
  "alcohol.3": {
    tp: 64,
    inr: 1.55,
    tca: 41,
  },
  "alcohol.4": {
    tp: 62,
    inr: 1.6,
    tca: 42,
  },
  "alcohol.5": {
    tp: 60,
    inr: 1.65,
    tca: 43,
  },
  "alcohol.6": {
    tp: 58,
    inr: 1.7,
    tca: 44,
  },
};
//* Dictionnaire TP/TCA en cas de consommation de tabac
const tobaccoCoag = {
  "tobacco.1": {
    tp: 72,
    inr: 1.3,
    tca: 37,
  },
  "tobacco.2": {
    tp: 70,
    inr: 1.35,
    tca: 38,
  },
  "tobacco.3": {
    tp: 68,
    inr: 1.4,
    tca: 39,
  },
  "tobacco.4": {
    tp: 66,
    inr: 1.45,
    tca: 40,
  },
  "tobacco.5": {
    tp: 64,
    inr: 1.5,
    tca: 41,
  },
  "tobacco.6": {
    tp: 62,
    inr: 1.55,
    tca: 42,
  },
};
//* Dictionnaire TP/TCA en cas de consommation de drogue douce
const softDrugsCoag = {
  "softDrugs.1": {
    tp: 74,
    inr: 1.25,
    tca: 36,
  },
  "softDrugs.2": {
    tp: 73,
    inr: 1.3,
    tca: 37,
  },
  "softDrugs.3": {
    tp: 72,
    inr: 1.35,
    tca: 38,
  },
  "softDrugs.4": {
    tp: 71,
    inr: 1.4,
    tca: 39,
  },
  "softDrugs.5": {
    tp: 70,
    inr: 1.45,
    tca: 40,
  },
  "softDrugs.6": {
    tp: 69,
    inr: 1.5,
    tca: 41,
  },
};
//* Dictionnaire TP/TCA en cas de consommation de drogue dure
const hardDrugsCoag = {
  "hardDrugs.1": {
    tp: 65,
    inr: 1.6,
    tca: 43,
  },
  "hardDrugs.2": {
    tp: 63,
    inr: 1.65,
    tca: 44,
  },
  "hardDrugs.3": {
    tp: 60,
    inr: 1.7,
    tca: 46,
  },
  "hardDrugs.4": {
    tp: 58,
    inr: 1.8,
    tca: 48,
  },
  "hardDrugs.5": {
    tp: 55,
    inr: 1.9,
    tca: 50,
  },
  "hardDrugs.6": {
    tp: 52,
    inr: 2.0,
    tca: 52,
  },
};
//* Dictionnaire TP/TCA en cas de malbouffe
const foodCoag = {
  "food.1": {
    tp: 68,
    inr: 1.5,
    tca: 40,
  },
  "food.2": {
    tp: 66,
    inr: 1.55,
    tca: 41,
  },
  "food.3": {
    tp: 64,
    inr: 1.6,
    tca: 42,
  },
  "food.4": {
    tp: 62,
    inr: 1.65,
    tca: 43,
  },
  "food.5": {
    tp: 60,
    inr: 1.7,
    tca: 44,
  },
  "food.6": {
    tp: 58,
    inr: 1.75,
    tca: 45,
  },
};
//* Dictionnaire TP/TCA en cas d'activité physique régulière
const sportCoag = {
  "sport.1": {
    tp: 78,
    inr: 1.1,
    tca: 35,
  },
  "sport.2": {
    tp: 76,
    inr: 1.15,
    tca: 36,
  },
  "sport.3": {
    tp: 74,
    inr: 1.2,
    tca: 37,
  },
  "sport.4": {
    tp: 72,
    inr: 1.25,
    tca: 38,
  },
  "sport.5": {
    tp: 70,
    inr: 1.3,
    tca: 39,
  },
  "sport.6": {
    tp: 68,
    inr: 1.35,
    tca: 40,
  },
};
//* Dictionnaire TP/TCA en cas de sédentarité
const sedentaryCoag = {
  "sedentary.1": {
    tp: 66,
    inr: 1.5,
    tca: 42,
  },
  "sedentary.2": {
    tp: 65,
    inr: 1.55,
    tca: 43,
  },
  "sedentary.3": {
    tp: 64,
    inr: 1.6,
    tca: 44,
  },
  "sedentary.4": {
    tp: 63,
    inr: 1.65,
    tca: 45,
  },
  "sedentary.5": {
    tp: 62,
    inr: 1.7,
    tca: 46,
  },
  "sedentary.6": {
    tp: 61,
    inr: 1.75,
    tca: 47,
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

//? --> Dictionaires Bilan hépatique
const normalLiver = {
  "normal.1": {
    tgo: 25,
    tgp: 30,
    ggt: 20,
    pal: 70,
  },
  "normal.2": {
    tgo: 28,
    tgp: 32,
    ggt: 18,
    pal: 75,
  },
  "normal.3": {
    tgo: 30,
    tgp: 28,
    ggt: 22,
    pal: 80,
  },
  "normal.4": {
    tgo: 20,
    tgp: 24,
    ggt: 25,
    pal: 85,
  },
  "normal.5": {
    tgo: 18,
    tgp: 29,
    ggt: 21,
    pal: 65,
  },
  "normal.6": {
    tgo: 22,
    tgp: 27,
    ggt: 19,
    pal: 74,
  },
};
//* Dictionnaire Bilan hépatique pendant la grossesse
const pregnancyLiver = {
  "pregnancy.1": {
    tgo: 28,
    tgp: 25,
    ggt: 22,
    pal: 90,
  },
  "pregnancy.2": {
    tgo: 30,
    tgp: 27,
    ggt: 20,
    pal: 95,
  },
  "pregnancy.3": {
    tgo: 25,
    tgp: 24,
    ggt: 21,
    pal: 88,
  },
  "pregnancy.4": {
    tgo: 26,
    tgp: 26,
    ggt: 23,
    pal: 92,
  },
  "pregnancy.5": {
    tgo: 29,
    tgp: 28,
    ggt: 19,
    pal: 90,
  },
  "pregnancy.6": {
    tgo: 27,
    tgp: 25,
    ggt: 22,
    pal: 93,
  },
};
//* Dictionnaire Bilan hépatique en cas de chimiothérapie
const chemoLiver = {
  "chemo.1": {
    tgo: 60,
    tgp: 65,
    ggt: 55,
    pal: 130,
  },
  "chemo.2": {
    tgo: 70,
    tgp: 72,
    ggt: 60,
    pal: 135,
  },
  "chemo.3": {
    tgo: 65,
    tgp: 68,
    ggt: 58,
    pal: 128,
  },
  "chemo.4": {
    tgo: 75,
    tgp: 70,
    ggt: 62,
    pal: 140,
  },
  "chemo.5": {
    tgo: 68,
    tgp: 65,
    ggt: 57,
    pal: 132,
  },
  "chemo.6": {
    tgo: 74,
    tgp: 73,
    ggt: 61,
    pal: 138,
  },
};
//* Dictionnaire Bilan hépatique en cas d'infection virale
const infectionLiver = {
  "infection.1": {
    tgo: 45,
    tgp: 50,
    ggt: 30,
    pal: 100,
  },
  "infection.2": {
    tgo: 40,
    tgp: 52,
    ggt: 28,
    pal: 97,
  },
  "infection.3": {
    tgo: 48,
    tgp: 55,
    ggt: 32,
    pal: 105,
  },
  "infection.4": {
    tgo: 42,
    tgp: 54,
    ggt: 31,
    pal: 102,
  },
  "infection.5": {
    tgo: 46,
    tgp: 53,
    ggt: 29,
    pal: 99,
  },
  "infection.6": {
    tgo: 44,
    tgp: 51,
    ggt: 30,
    pal: 101,
  },
};
//* Dictionnaire Bilan hépatique en cas d'hépatite connue
const hepatitisLiver = {
  "hepatitis.1": {
    tgo: 200,
    tgp: 250,
    ggt: 65,
    pal: 160,
  },
  "hepatitis.2": {
    tgo: 180,
    tgp: 230,
    ggt: 70,
    pal: 155,
  },
  "hepatitis.3": {
    tgo: 220,
    tgp: 275,
    ggt: 68,
    pal: 162,
  },
  "hepatitis.4": {
    tgo: 190,
    tgp: 240,
    ggt: 72,
    pal: 158,
  },
  "hepatitis.5": {
    tgo: 210,
    tgp: 260,
    ggt: 66,
    pal: 165,
  },
  "hepatitis.6": {
    tgo: 195,
    tgp: 245,
    ggt: 69,
    pal: 160,
  },
};
//* Dictionnaire Bilan hépatique en cas de consommation d'alcool
const alcoholLiver = {
  "alcohol.1": {
    tgo: 90,
    tgp: 70,
    ggt: 120,
    pal: 140,
  },
  "alcohol.2": {
    tgo: 95,
    tgp: 75,
    ggt: 130,
    pal: 145,
  },
  "alcohol.3": {
    tgo: 88,
    tgp: 72,
    ggt: 115,
    pal: 138,
  },
  "alcohol.4": {
    tgo: 92,
    tgp: 70,
    ggt: 125,
    pal: 142,
  },
  "alcohol.5": {
    tgo: 85,
    tgp: 68,
    ggt: 118,
    pal: 136,
  },
  "alcohol.6": {
    tgo: 94,
    tgp: 74,
    ggt: 122,
    pal: 143,
  },
};
//* Dictionnaire Bilan hépatique en cas de consommation de tabac
const tobaccoLiver = {
  "tobacco.1": {
    tgo: 35,
    tgp: 30,
    ggt: 40,
    pal: 95,
  },
  "tobacco.2": {
    tgo: 37,
    tgp: 32,
    ggt: 42,
    pal: 98,
  },
  "tobacco.3": {
    tgo: 34,
    tgp: 31,
    ggt: 38,
    pal: 100,
  },
  "tobacco.4": {
    tgo: 36,
    tgp: 29,
    ggt: 39,
    pal: 97,
  },
  "tobacco.5": {
    tgo: 33,
    tgp: 28,
    ggt: 41,
    pal: 99,
  },
  "tobacco.6": {
    tgo: 35,
    tgp: 30,
    ggt: 37,
    pal: 96,
  },
};
//* Dictionnaire Bilan hépatique en cas de consommation de drogues douces
const softDrugsLiver = {
  "softDrugs.1": {
    tgo: 34,
    tgp: 29,
    ggt: 35,
    pal: 100,
  },
  "softDrugs.2": {
    tgo: 32,
    tgp: 28,
    ggt: 34,
    pal: 98,
  },
  "softDrugs.3": {
    tgo: 35,
    tgp: 30,
    ggt: 36,
    pal: 97,
  },
  "softDrugs.4": {
    tgo: 33,
    tgp: 29,
    ggt: 35,
    pal: 99,
  },
  "softDrugs.5": {
    tgo: 31,
    tgp: 27,
    ggt: 33,
    pal: 96,
  },
  "softDrugs.6": {
    tgo: 34,
    tgp: 28,
    ggt: 37,
    pal: 100,
  },
};
//* Dictionnaire Bilan hépatique en cas de consommation de drogues dures
const hardDrugsLiver = {
  "hardDrugs.1": {
    tgo: 150,
    tgp: 170,
    ggt: 90,
    pal: 160,
  },
  "hardDrugs.2": {
    tgo: 140,
    tgp: 160,
    ggt: 85,
    pal: 150,
  },
  "hardDrugs.3": {
    tgo: 155,
    tgp: 175,
    ggt: 95,
    pal: 165,
  },
  "hardDrugs.4": {
    tgo: 145,
    tgp: 168,
    ggt: 88,
    pal: 158,
  },
  "hardDrugs.5": {
    tgo: 160,
    tgp: 180,
    ggt: 92,
    pal: 170,
  },
  "hardDrugs.6": {
    tgo: 148,
    tgp: 173,
    ggt: 90,
    pal: 162,
  },
};
//* Dictionnaire Bilan hépatique en cas de diabète gestationnel non traité
const gestaLiver = {
  "gesta.1": {
    tgo: 50,
    tgp: 55,
    ggt: 45,
    pal: 120,
  },
  "gesta.2": {
    tgo: 52,
    tgp: 58,
    ggt: 42,
    pal: 115,
  },
  "gesta.3": {
    tgo: 49,
    tgp: 55,
    ggt: 44,
    pal: 122,
  },
  "gesta.4": {
    tgo: 51,
    tgp: 57,
    ggt: 43,
    pal: 118,
  },
  "gesta.5": {
    tgo: 48,
    tgp: 54,
    ggt: 46,
    pal: 121,
  },
  "gesta.6": {
    tgo: 50,
    tgp: 56,
    ggt: 45,
    pal: 119,
  },
};
//* Dictionnaire Bilan hépatique en cas de cholestase gravidique
const cholestaseLiver = {
  "cholestase.1": {
    tgo: 45,
    tgp: 50,
    ggt: 85,
    pal: 160,
  },
  "cholestase.2": {
    tgo: 48,
    tgp: 52,
    ggt: 90,
    pal: 165,
  },
  "cholestase.3": {
    tgo: 46,
    tgp: 49,
    ggt: 87,
    pal: 158,
  },
  "cholestase.4": {
    tgo: 47,
    tgp: 51,
    ggt: 89,
    pal: 162,
  },
  "cholestase.5": {
    tgo: 44,
    tgp: 48,
    ggt: 88,
    pal: 159,
  },
  "cholestase.6": {
    tgo: 45,
    tgp: 50,
    ggt: 91,
    pal: 161,
  },
};
//* Dictionnaire Bilan hépatique en cas de diabète traité
const treatedLiver = {
  "treated.1": {
    tgo: 28,
    tgp: 26,
    ggt: 35,
    pal: 100,
  },
  "treated.2": {
    tgo: 30,
    tgp: 28,
    ggt: 32,
    pal: 98,
  },
  "treated.3": {
    tgo: 27,
    tgp: 25,
    ggt: 34,
    pal: 101,
  },
  "treated.4": {
    tgo: 29,
    tgp: 27,
    ggt: 36,
    pal: 97,
  },
  "treated.5": {
    tgo: 26,
    tgp: 24,
    ggt: 33,
    pal: 99,
  },
  "treated.6": {
    tgo: 28,
    tgp: 26,
    ggt: 31,
    pal: 102,
  },
};
//* Dictionnaire Bilan hépatique en cas de diabète non traité
const untreatedLiver = {
  "untreated.1": {
    tgo: 60,
    tgp: 65,
    ggt: 75,
    pal: 130,
  },
  "untreated.2": {
    tgo: 58,
    tgp: 70,
    ggt: 78,
    pal: 125,
  },
  "untreated.3": {
    tgo: 62,
    tgp: 68,
    ggt: 80,
    pal: 135,
  },
  "untreated.4": {
    tgo: 61,
    tgp: 66,
    ggt: 77,
    pal: 128,
  },
  "untreated.5": {
    tgo: 59,
    tgp: 67,
    ggt: 76,
    pal: 132,
  },
  "untreated.6": {
    tgo: 63,
    tgp: 69,
    ggt: 79,
    pal: 134,
  },
};
//* Dictionnaire Bilan hépatique en cas de malbouffe
const foodLiver = {
  "food.1": {
    tgo: 55,
    tgp: 60,
    ggt: 50,
    pal: 115,
  },
  "food.2": {
    tgo: 53,
    tgp: 62,
    ggt: 52,
    pal: 118,
  },
  "food.3": {
    tgo: 58,
    tgp: 64,
    ggt: 54,
    pal: 120,
  },
  "food.4": {
    tgo: 56,
    tgp: 61,
    ggt: 53,
    pal: 117,
  },
  "food.5": {
    tgo: 54,
    tgp: 63,
    ggt: 51,
    pal: 119,
  },
  "food.6": {
    tgo: 57,
    tgp: 65,
    ggt: 50,
    pal: 116,
  },
};
//* Dictionnaire Bilan hépatique en cas d'activité physique régulière
const sportLiver = {
  "sport.1": {
    tgo: 25,
    tgp: 22,
    ggt: 28,
    pal: 85,
  },
  "sport.2": {
    tgo: 26,
    tgp: 24,
    ggt: 30,
    pal: 87,
  },
  "sport.3": {
    tgo: 24,
    tgp: 23,
    ggt: 29,
    pal: 88,
  },
  "sport.4": {
    tgo: 27,
    tgp: 25,
    ggt: 27,
    pal: 86,
  },
  "sport.5": {
    tgo: 23,
    tgp: 22,
    ggt: 28,
    pal: 84,
  },
  "sport.6": {
    tgo: 25,
    tgp: 24,
    ggt: 26,
    pal: 89,
  },
};
//* Dictionnaire Bilan hépatique en cas de sédentarité
const sedentaryLiver = {
  "sedentary.1": {
    tgo: 45,
    tgp: 50,
    ggt: 53,
    pal: 120,
  },
  "sedentary.2": {
    tgo: 43,
    tgp: 52,
    ggt: 50,
    pal: 115,
  },
  "sedentary.3": {
    tgo: 46,
    tgp: 54,
    ggt: 55,
    pal: 119,
  },
  "sedentary.4": {
    tgo: 44,
    tgp: 51,
    ggt: 52,
    pal: 117,
  },
  "sedentary.5": {
    tgo: 47,
    tgp: 53,
    ggt: 54,
    pal: 121,
  },
  "sedentary.6": {
    tgo: 45,
    tgp: 50,
    ggt: 51,
    pal: 118,
  },
};
//? Dictionaires Bilan hépatique <--

//? --> Dictionnaires Chimie urinaire
//* Dictionnaire chimie urinaire normale
const normalUrine = {
  "normal.1": {
    ucr: 1.5, // mmol/L
    una: 140, // mmol/L
    uk: 40, // mmol/L
    up: 0.1, // g/L
    ug: 0.01, // g/L
  },
  "normal.2": {
    ucr: 1.8, // mmol/L
    una: 160,
    uk: 50,
    up: 0.05,
    ug: 0.02, // g/L
  },
  "normal.3": {
    ucr: 1.2, // mmol/L
    una: 120,
    uk: 45,
    up: 0.08,
    ug: 0.01, // g/L
  },
  "normal.4": {
    ucr: 1.9, // mmol/L
    una: 150,
    uk: 55,
    up: 0.1,
    ug: 0.03, // g/L
  },
  "normal.5": {
    ucr: 2.0, // mmol/L
    una: 145,
    uk: 60,
    up: 0.09,
    ug: 0.02, // g/L
  },
  "normal.6": {
    ucr: 1.7, // mmol/L
    una: 130,
    uk: 47,
    up: 0.07,
    ug: 0.04, // g/L
  },
};
//* Dictionnaire chimie urinaire en cas de grossesse
const pregnancyUrine = {
  "pregnancy.1": {
    ucr: 1.3, // mmol/L
    una: 135, // mmol/L
    uk: 42, // mmol/L
    up: 0.15, // g/L
    ug: 0.02, // g/L
  },
  "pregnancy.2": {
    ucr: 1.1,
    una: 138,
    uk: 44,
    up: 0.12,
    ug: 0.03,
  },
  "pregnancy.3": {
    ucr: 1.4,
    una: 132,
    uk: 43,
    up: 0.1,
    ug: 0.03,
  },
  "pregnancy.4": {
    ucr: 1.2,
    una: 140,
    uk: 41,
    up: 0.14,
    ug: 0.01,
  },
  "pregnancy.5": {
    ucr: 1.5,
    una: 136,
    uk: 45,
    up: 0.13,
    ug: 0.02,
  },
  "pregnancy.6": {
    ucr: 1.0,
    una: 137,
    uk: 40,
    up: 0.11,
    ug: 0.01,
  },
};
//* Dictionnaire chimie urinaire en cas de chimio
const chemoUrine = {
  "chemo.1": {
    ucr: 1.0, // mmol/L
    una: 130, // mmol/L
    uk: 60, // mmol/L
    up: 0.2, // g/L
    ug: 0.04, // g/L
  },
  "chemo.2": {
    ucr: 0.9,
    una: 128,
    uk: 62,
    up: 0.18,
    ug: 0.05,
  },
  "chemo.3": {
    ucr: 1.1,
    una: 135,
    uk: 58,
    up: 0.22,
    ug: 0.03,
  },
  "chemo.4": {
    ucr: 0.8,
    una: 133,
    uk: 65,
    up: 0.25,
    ug: 0.02,
  },
  "chemo.5": {
    ucr: 1.2,
    una: 129,
    uk: 63,
    up: 0.19,
    ug: 0.01,
  },
  "chemo.6": {
    ucr: 1.0,
    una: 131,
    uk: 60,
    up: 0.21,
    ug: 0.04,
  },
};
//* Dictionnaire chimie urinaire en cas de consommation d'alcool
const alcoholUrine = {
  "alcohol.1": {
    ucr: 1.0, // mmol/L
    una: 142, // mmol/L
    uk: 45, // mmol/L
    up: 0.12, // g/L
    ug: 0.01, // g/L
  },
  "alcohol.2": {
    ucr: 0.9,
    una: 140,
    uk: 48,
    up: 0.1,
    ug: 0.02,
  },
  "alcohol.3": {
    ucr: 1.1,
    una: 138,
    uk: 46,
    up: 0.08,
    ug: 0.02,
  },
  "alcohol.4": {
    ucr: 0.8,
    una: 145,
    uk: 50,
    up: 0.11,
    ug: 0.01,
  },
  "alcohol.5": {
    ucr: 1.2,
    una: 135,
    uk: 44,
    up: 0.09,
    ug: 0.03,
  },
  "alcohol.6": {
    ucr: 1.0,
    una: 139,
    uk: 47,
    up: 0.07,
    ug: 0.06,
  },
};
//* Dictionnaire chimie urinaire en cas de consommation de drogues dures
const hardDrugsUrine = {
  "hardDrugs.1": {
    ucr: 0.8, // mmol/L
    una: 132, // mmol/L
    uk: 70, // mmol/L
    up: 0.3, // g/L
    ug: 0.05, // g/L
  },
  "hardDrugs.2": {
    ucr: 0.7,
    una: 130,
    uk: 75,
    up: 0.28,
    ug: 0.06,
  },
  "hardDrugs.3": {
    ucr: 1.0,
    una: 135,
    uk: 72,
    up: 0.32,
    ug: 0.04,
  },
  "hardDrugs.4": {
    ucr: 0.9,
    una: 134,
    uk: 74,
    up: 0.29,
    ug: 0.05,
  },
  "hardDrugs.5": {
    ucr: 0.6,
    una: 131,
    uk: 68,
    up: 0.35,
    ug: 0.07,
  },
  "hardDrugs.6": {
    ucr: 1.1,
    una: 133,
    uk: 73,
    up: 0.31,
    ug: 0.03,
  },
};
//* Dictionnaire chimie urinaire en cas de diabète gestationnel non traité
const gestaUrine = {
  "gesta.1": {
    ucr: 1.2, // mmol/L
    una: 130, // mmol/L
    uk: 40, // mmol/L
    up: 0.15, // g/L
    ug: 0.2, // g/L
  },
  "gesta.2": {
    ucr: 1.1,
    una: 128,
    uk: 42,
    up: 0.18,
    ug: 0.25,
  },
  "gesta.3": {
    ucr: 1.3,
    una: 132,
    uk: 39,
    up: 0.2,
    ug: 0.22,
  },
  "gesta.4": {
    ucr: 1.0,
    una: 129,
    uk: 41,
    up: 0.17,
    ug: 0.24,
  },
  "gesta.5": {
    ucr: 1.4,
    una: 131,
    uk: 38,
    up: 0.16,
    ug: 0.21,
  },
  "gesta.6": {
    ucr: 1.2,
    una: 130,
    uk: 40,
    up: 0.19,
    ug: 0.23,
  },
};
//* Dictionnaire chimie urinaire en cas de diabète traité
const treatedUrine = {
  "treated.1": {
    ucr: 1.4, // mmol/L
    una: 138, // mmol/L
    uk: 44, // mmol/L
    up: 0.1, // g/L
    ug: 0.02, // g/L
  },
  "treated.2": {
    ucr: 1.3,
    una: 140,
    uk: 42,
    up: 0.09,
    ug: 0.01,
  },
  "treated.3": {
    ucr: 1.5,
    una: 137,
    uk: 45,
    up: 0.08,
    ug: 0.03,
  },
  "treated.4": {
    ucr: 1.2,
    una: 139,
    uk: 43,
    up: 0.11,
    ug: 0.01,
  },
  "treated.5": {
    ucr: 1.4,
    una: 136,
    uk: 46,
    up: 0.1,
    ug: 0.05,
  },
  "treated.6": {
    ucr: 1.3,
    una: 140,
    uk: 44,
    up: 0.09,
    ug: 0.02,
  },
};
//* Dictionnaire chimie urinaire en cas de diabète non traité
const untreatedUrine = {
  "untreated.1": {
    ucr: 1.0, // mmol/L
    una: 125, // mmol/L
    uk: 50, // mmol/L
    up: 0.25, // g/L
    ug: 0.3, // g/L
  },
  "untreated.2": {
    ucr: 0.9,
    una: 128,
    uk: 48,
    up: 0.22,
    ug: 0.28,
  },
  "untreated.3": {
    ucr: 1.1,
    una: 130,
    uk: 52,
    up: 0.3,
    ug: 0.35,
  },
  "untreated.4": {
    ucr: 0.8,
    una: 122,
    uk: 49,
    up: 0.28,
    ug: 0.32,
  },
  "untreated.5": {
    ucr: 1.0,
    una: 126,
    uk: 51,
    up: 0.27,
    ug: 0.29,
  },
  "untreated.6": {
    ucr: 1.2,
    una: 124,
    uk: 50,
    up: 0.26,
    ug: 0.31,
  },
};
//* Dictionnaire chimie urinaire en cas d'insuffisance rénale
const insufUrine = {
  "insuf.1": {
    ucr: 0.5, // mmol/L
    una: 110, // mmol/L
    uk: 25, // mmol/L
    up: 0.4, // g/L
    ug: 0.02, // g/L
  },
  "insuf.2": {
    ucr: 0.4,
    una: 115,
    uk: 28,
    up: 0.45,
    ug: 0.02,
  },
  "insuf.3": {
    ucr: 0.6,
    una: 105,
    uk: 30,
    up: 0.35,
    ug: 0.01,
  },
  "insuf.4": {
    ucr: 0.5,
    una: 112,
    uk: 29,
    up: 0.38,
    ug: 0.02,
  },
  "insuf.5": {
    ucr: 0.7,
    una: 108,
    uk: 27,
    up: 0.42,
    ug: 0.05,
  },
  "insuf.6": {
    ucr: 0.5,
    una: 110,
    uk: 26,
    up: 0.4,
    ug: 0.06,
  },
};
//* Dictionnaire chimie urinaire en cas d'infection urinaire
const infectionUrine = {
  "infection.1": {
    ucr: 1.0, // mmol/L
    una: 120, // mmol/L
    uk: 38, // mmol/L
    up: 0.2, // g/L
    ug: 0.01,
  },
  "infection.2": {
    ucr: 0.9,
    una: 118,
    uk: 36,
    up: 0.25,
    ug: 0.02,
  },
  "infection.3": {
    ucr: 1.2,
    una: 125,
    uk: 39,
    up: 0.15,
    ug: 0.02,
  },
  "infection.4": {
    ucr: 1.1,
    una: 122,
    uk: 37,
    up: 0.3,
    ug: 0.05,
  },
  "infection.5": {
    ucr: 1.0,
    una: 119,
    uk: 38,
    up: 0.22,
    ug: 0.01,
  },
  "infection.6": {
    ucr: 1.3,
    una: 124,
    uk: 40,
    up: 0.18,
    ug: 0.06,
  },
};
//* Dictionnaire chimie urinaire en cas de malbouffe
const foodUrine = {
  "food.1": {
    ucr: 1.5, // mmol/L
    una: 150, // mmol/L
    uk: 35, // mmol/L
    up: 0.1, // g/L
    ug: 0.05, // g/L
  },
  "food.2": {
    ucr: 1.3,
    una: 155,
    uk: 32,
    up: 0.12,
    ug: 0.04,
  },
  "food.3": {
    ucr: 1.6,
    una: 148,
    uk: 34,
    up: 0.09,
    ug: 0.03,
  },
  "food.4": {
    ucr: 1.4,
    una: 160,
    uk: 33,
    up: 0.11,
    ug: 0.06,
  },
  "food.5": {
    ucr: 1.5,
    una: 152,
    uk: 31,
    up: 0.13,
    ug: 0.05,
  },
  "food.6": {
    ucr: 1.2,
    una: 145,
    uk: 36,
    up: 0.08,
    ug: 0.02,
  },
};
//* Dictionnaire chimie urinaire en cas d'activité physique régulière
const sportUrine = {
  "sport.1": {
    ucr: 1.8, // mmol/L
    una: 140, // mmol/L
    uk: 50, // mmol/L
    up: 0.08, // g/L
    ug: 0.01, // g/L
  },
  "sport.2": {
    ucr: 1.9,
    una: 142,
    uk: 48,
    up: 0.1,
    ug: 0.02,
  },
  "sport.3": {
    ucr: 1.7,
    una: 138,
    uk: 52,
    up: 0.09,
    ug: 0.01,
  },
  "sport.4": {
    ucr: 2.0,
    una: 141,
    uk: 51,
    up: 0.07,
    ug: 0.03,
  },
  "sport.5": {
    ucr: 1.8,
    una: 139,
    uk: 49,
    up: 0.06,
    ug: 0.04,
  },
  "sport.6": {
    ucr: 1.6,
    una: 140,
    uk: 53,
    up: 0.05,
    ug: 0.05,
  },
};
//* Dictionnaire chimie urinaire en cas de sédentarité
const sedentaryUrine = {
  "sedentary.1": {
    ucr: 1.2, // mmol/L
    una: 135, // mmol/L
    uk: 34, // mmol/L
    up: 0.15, // g/L
    ug: 0.01, // g/L
  },
  "sedentary.2": {
    ucr: 1.1,
    una: 138,
    uk: 32,
    up: 0.14,
    ug: 0.02,
  },
  "sedentary.3": {
    ucr: 1.3,
    una: 137,
    uk: 33,
    up: 0.1,
    ug: 0.01,
  },
  "sedentary.4": {
    ucr: 1.0,
    una: 136,
    uk: 35,
    up: 0.13,
    ug: 0.04,
  },
  "sedentary.5": {
    ucr: 1.2,
    una: 134,
    uk: 31,
    up: 0.12,
    ug: 0.05,
  },
  "sedentary.6": {
    ucr: 1.1,
    una: 135,
    uk: 34,
    up: 0.11,
    ug: 0.06,
  },
};
//? Dictionnaires Chimie urinaire <--

//? --> Dictionnaires Troponine
//* Dictionnaire troponine normale
const normalTropo = {
  "normal.1": {
    tropo: 0.01,
  },
  "normal.2": {
    tropo: 0.02,
  },
  "normal.3": {
    tropo: 0.01,
  },
  "normal.4": {
    tropo: 0.03,
  },
  "normal.5": {
    tropo: 0.02,
  },
  "normal.6": {
    tropo: 0.01,
  },
};
//* Dictionnaire troponine dans le cas d'un infarctus du myocarde
const infarctTropo = {
  "infarct.1": {
    tropo: 2.0,
  },
  "infarct.2": {
    tropo: 5.0,
  },
  "infarct.3": {
    tropo: 10.0,
  },
  "infarct.4": {
    tropo: 7.0,
  },
  "infarct.5": {
    tropo: 12.0,
  },
  "infarct.6": {
    tropo: 15.0,
  },
};
//* Dictionnaire troponine dans le cas d'un sepsis
const sepsisTropo = {
  "sepsis.1": {
    tropo: 0.05,
  },
  "sepsis.2": {
    tropo: 0.07,
  },
  "sepsis.3": {
    tropo: 0.08,
  },
  "sepsis.4": {
    tropo: 0.06,
  },
  "sepsis.5": {
    tropo: 0.09,
  },
  "sepsis.6": {
    tropo: 0.1,
  },
};
//* Dictionnaire troponine dans le cas d'une insuffisance cardiaque
const heartTropo = {
  "heart.1": {
    tropo: 0.05,
  },
  "heart.2": {
    tropo: 0.07,
  },
  "heart.3": {
    tropo: 0.06,
  },
  "heart.4": {
    tropo: 0.08,
  },
  "heart.5": {
    tropo: 0.05,
  },
  "heart.6": {
    tropo: 0.09,
  },
};
//* Dictionnaire troponine dans le cas d'un AVC
const strokeTropo = {
  "stroke.1": {
    tropo: 0.04,
  },
  "stroke.2": {
    tropo: 0.05,
  },
  "stroke.3": {
    tropo: 0.06,
  },
  "stroke.4": {
    tropo: 0.07,
  },
  "stroke.5": {
    tropo: 0.05,
  },
  "stroke.6": {
    tropo: 0.06,
  },
};
//* Dictionnaire troponine dans le cas d'une embolie pulmonaire
const thrombosisTropo = {
  "thrombosis.1": {
    tropo: 0.05,
  },
  "thrombosis.2": {
    tropo: 0.06,
  },
  "thrombosis.3": {
    tropo: 0.07,
  },
  "thrombosis.4": {
    tropo: 0.08,
  },
  "thrombosis.5": {
    tropo: 0.06,
  },
  "thrombosis.6": {
    tropo: 0.07,
  },
};
//* Dictionnaire troponine dans le cas d'une blessure au thorax
const injuryTropo = {
  "injury.1": {
    tropo: 0.06,
  },
  "injury.2": {
    tropo: 0.08,
  },
  "injury.3": {
    tropo: 0.11,
  },
  "injury.4": {
    tropo: 0.09,
  },
  "injury.5": {
    tropo: 0.1,
  },
  "injury.6": {
    tropo: 0.12,
  },
};
//* Dictionnaire troponine dans le cas d'un trouble hépatique
const liverTropo = {
  "liver.1": {
    tropo: 0.03,
  },
  "liver.2": {
    tropo: 0.04,
  },
  "liver.3": {
    tropo: 0.05,
  },
  "liver.4": {
    tropo: 0.03,
  },
  "liver.5": {
    tropo: 0.04,
  },
  "liver.6": {
    tropo: 0.05,
  },
};
//* Dictionnaire troponine dans le cas d'une insuffisance rénale
const kidneyTropo = {
  "kidney.1": {
    tropo: 0.06,
  },
  "kidney.2": {
    tropo: 0.08,
  },
  "kidney.3": {
    tropo: 0.07,
  },
  "kidney.4": {
    tropo: 0.09,
  },
  "kidney.5": {
    tropo: 0.1,
  },
  "kidney.6": {
    tropo: 0.11,
  },
};
//? Dictionnaires Troponine <--

//? --> Dictionnaires Vitamines
//* Dictionnaire vitamines normal
const normalVitamins = {
  "normal.1": {
    fol: 10,
    b12: 500,
    vitd: 40,
  },
  "normal.2": {
    fol: 15,
    b12: 600,
    vitd: 50,
  },
  "normal.3": {
    fol: 18,
    b12: 550,
    vitd: 55,
  },
  "normal.4": {
    fol: 12,
    b12: 650,
    vitd: 38,
  },
  "normal.5": {
    fol: 14,
    b12: 700,
    vitd: 45,
  },
  "normal.6": {
    fol: 16,
    b12: 750,
    vitd: 60,
  },
};
//* Dictionnaire vitamines en cas de grossesse
const pregnancyVitamins = {
  "pregnancy.1": {
    fol: 16,
    b12: 600,
    vitd: 50,
  },
  "pregnancy.2": {
    fol: 18,
    b12: 650,
    vitd: 55,
  },
  "pregnancy.3": {
    fol: 17,
    b12: 700,
    vitd: 60,
  },
  "pregnancy.4": {
    fol: 15,
    b12: 675,
    vitd: 52,
  },
  "pregnancy.5": {
    fol: 19,
    b12: 725,
    vitd: 64,
  },
  "pregnancy.6": {
    fol: 20,
    b12: 680,
    vitd: 58,
  },
};
//* Dictionnaire vitamines en cas de chimio
const chemoVitamins = {
  "chemo.1": {
    fol: 12,
    b12: 450,
    vitd: 35,
  },
  "chemo.2": {
    fol: 14,
    b12: 500,
    vitd: 38,
  },
  "chemo.3": {
    fol: 13,
    b12: 480,
    vitd: 30,
  },
  "chemo.4": {
    fol: 15,
    b12: 530,
    vitd: 32,
  },
  "chemo.5": {
    fol: 11,
    b12: 460,
    vitd: 36,
  },
  "chemo.6": {
    fol: 14,
    b12: 495,
    vitd: 34,
  },
};
//* Dictionnaire vitamines en cas d'hémorragie (ulcère à l'estomac par exemple)
const ulcerVitamins = {
  "bleeding.1": {
    fol: 8,
    b12: 300,
    vitd: 32,
  },
  "bleeding.2": {
    fol: 9,
    b12: 320,
    vitd: 35,
  },
  "bleeding.3": {
    fol: 7,
    b12: 310,
    vitd: 30,
  },
  "bleeding.4": {
    fol: 10,
    b12: 340,
    vitd: 33,
  },
  "bleeding.5": {
    fol: 8,
    b12: 330,
    vitd: 31,
  },
  "bleeding.6": {
    fol: 9,
    b12: 315,
    vitd: 34,
  },
};
//* Dictionnaire Vitamines en cas de leucémie
const leukemiaVitamins = {
  "leukemia.1": {
    fol: 11,
    b12: 400,
    vitd: 36,
  },
  "leukemia.2": {
    fol: 13,
    b12: 450,
    vitd: 38,
  },
  "leukemia.3": {
    fol: 10,
    b12: 380,
    vitd: 34,
  },
  "leukemia.4": {
    fol: 12,
    b12: 420,
    vitd: 35,
  },
  "leukemia.5": {
    fol: 9,
    b12: 390,
    vitd: 33,
  },
  "leukemia.6": {
    fol: 14,
    b12: 430,
    vitd: 37,
  },
};
//* Dictionnaire Vitamines en cas de cancer
const cancerVitamins = {
  "cancer.1": {
    fol: 12,
    b12: 420,
    vitd: 37,
  },
  "cancer.2": {
    fol: 14,
    b12: 450,
    vitd: 40,
  },
  "cancer.3": {
    fol: 11,
    b12: 430,
    vitd: 35,
  },
  "cancer.4": {
    fol: 13,
    b12: 460,
    vitd: 38,
  },
  "cancer.5": {
    fol: 10,
    b12: 415,
    vitd: 34,
  },
  "cancer.6": {
    fol: 15,
    b12: 470,
    vitd: 42,
  },
};
//* Dictionnaire Vitamines en cas de troubles hépatiques
const liverVitamins = {
  "liver.1": {
    fol: 10,
    b12: 390,
    vitd: 28,
  },
  "liver.2": {
    fol: 11,
    b12: 410,
    vitd: 30,
  },
  "liver.3": {
    fol: 9,
    b12: 380,
    vitd: 26,
  },
  "liver.4": {
    fol: 12,
    b12: 400,
    vitd: 32,
  },
  "liver.5": {
    fol: 8,
    b12: 370,
    vitd: 29,
  },
  "liver.6": {
    fol: 13,
    b12: 420,
    vitd: 31,
  },
};
//* Dictionnaire Vitamines en cas d'insuffisance rénale'
const insufVitamins = {
  "insuf.1": {
    fol: 11,
    b12: 420,
    vitd: 25,
  },
  "insuf.2": {
    fol: 13,
    b12: 450,
    vitd: 27,
  },
  "insuf.3": {
    fol: 10,
    b12: 400,
    vitd: 22,
  },
  "insuf.4": {
    fol: 12,
    b12: 430,
    vitd: 24,
  },
  "insuf.5": {
    fol: 9,
    b12: 410,
    vitd: 26,
  },
  "insuf.6": {
    fol: 14,
    b12: 440,
    vitd: 23,
  },
};
//* Dictionnaire Vitamines en cas de consommation d'alcool
const alcoholVitamins = {
  "alcohol.1": {
    fol: 8,
    b12: 380,
    vitd: 28,
  },
  "alcohol.2": {
    fol: 7,
    b12: 360,
    vitd: 30,
  },
  "alcohol.3": {
    fol: 10,
    b12: 400,
    vitd: 26,
  },
  "alcohol.4": {
    fol: 9,
    b12: 390,
    vitd: 27,
  },
  "alcohol.5": {
    fol: 8,
    b12: 370,
    vitd: 29,
  },
  "alcohol.6": {
    fol: 7,
    b12: 350,
    vitd: 25,
  },
};
//* Dictionnaire Vitamines en cas de consommation de tabac
const tobaccoVitamins = {
  "tobacco.1": {
    fol: 10,
    b12: 400,
    vitd: 32,
  },
  "tobacco.2": {
    fol: 9,
    b12: 380,
    vitd: 34,
  },
  "tobacco.3": {
    fol: 11,
    b12: 420,
    vitd: 30,
  },
  "tobacco.4": {
    fol: 8,
    b12: 390,
    vitd: 28,
  },
  "tobacco.5": {
    fol: 9,
    b12: 410,
    vitd: 33,
  },
  "tobacco.6": {
    fol: 10,
    b12: 395,
    vitd: 31,
  },
};
//* Dictionnaire Vitamines en cas de consommation de drogue douce
const softDrugsVitamins = {
  "softDrugs.1": {
    fol: 11,
    b12: 410,
    vitd: 36,
  },
  "softDrugs.2": {
    fol: 10,
    b12: 400,
    vitd: 35,
  },
  "softDrugs.3": {
    fol: 12,
    b12: 430,
    vitd: 38,
  },
  "softDrugs.4": {
    fol: 9,
    b12: 390,
    vitd: 33,
  },
  "softDrugs.5": {
    fol: 11,
    b12: 420,
    vitd: 34,
  },
  "softDrugs.6": {
    fol: 10,
    b12: 415,
    vitd: 32,
  },
};
//* Dictionnaire Vitamines en cas de consommation de drogue dure
const hardDrugsVitamins = {
  "hardDrugs.1": {
    fol: 6,
    b12: 320,
    vitd: 22,
  },
  "hardDrugs.2": {
    fol: 7,
    b12: 340,
    vitd: 24,
  },
  "hardDrugs.3": {
    fol: 5,
    b12: 300,
    vitd: 20,
  },
  "hardDrugs.4": {
    fol: 8,
    b12: 360,
    vitd: 25,
  },
  "hardDrugs.5": {
    fol: 6,
    b12: 310,
    vitd: 21,
  },
  "hardDrugs.6": {
    fol: 7,
    b12: 330,
    vitd: 23,
  },
};
//* Dictionnaire Vitamines en cas de malbouffe
const foodVitamins = {
  "food.1": {
    fol: 8,
    b12: 350,
    vitd: 28,
  },
  "food.2": {
    fol: 7,
    b12: 330,
    vitd: 26,
  },
  "food.3": {
    fol: 9,
    b12: 370,
    vitd: 30,
  },
  "food.4": {
    fol: 6,
    b12: 340,
    vitd: 25,
  },
  "food.5": {
    fol: 8,
    b12: 360,
    vitd: 27,
  },
  "food.6": {
    fol: 7,
    b12: 380,
    vitd: 29,
  },
};
//* Dictionnaire Vitamines en cas d'activité physique régulière
const sportVitamins = {
  "sport.1": {
    fol: 14,
    b12: 550,
    vitd: 50,
  },
  "sport.2": {
    fol: 13,
    b12: 530,
    vitd: 48,
  },
  "sport.3": {
    fol: 15,
    b12: 570,
    vitd: 52,
  },
  "sport.4": {
    fol: 12,
    b12: 540,
    vitd: 47,
  },
  "sport.5": {
    fol: 14,
    b12: 560,
    vitd: 49,
  },
  "sport.6": {
    fol: 13,
    b12: 580,
    vitd: 51,
  },
};
//* Dictionnaire Vitamines en cas de sédentarité
const sedentaryVitamins = {
  "sedentary.1": {
    fol: 10,
    b12: 400,
    vitd: 35,
  },
  "sedentary.2": {
    fol: 9,
    b12: 390,
    vitd: 33,
  },
  "sedentary.3": {
    fol: 11,
    b12: 410,
    vitd: 34,
  },
  "sedentary.4": {
    fol: 8,
    b12: 380,
    vitd: 32,
  },
  "sedentary.5": {
    fol: 10,
    b12: 395,
    vitd: 36,
  },
  "sedentary.6": {
    fol: 9,
    b12: 385,
    vitd: 31,
  },
};
//* Dictionnaire Vitamines si la personne est souvent dehors
const outsideVitamins = {
  "outside.1": {
    fol: 14,
    b12: 540,
    vitd: 65,
  },
  "outside.2": {
    fol: 13,
    b12: 520,
    vitd: 68,
  },
  "outside.3": {
    fol: 15,
    b12: 560,
    vitd: 70,
  },
  "outside.4": {
    fol: 12,
    b12: 550,
    vitd: 60,
  },
  "outside.5": {
    fol: 14,
    b12: 580,
    vitd: 72,
  },
  "outside.6": {
    fol: 13,
    b12: 530,
    vitd: 66,
  },
};
//* Dictionnaire Vitamines si la personne sort rarement
const insideVitamins = {
  "inside.1": {
    fol: 11,
    b12: 430,
    vitd: 20,
  },
  "inside.2": {
    fol: 10,
    b12: 410,
    vitd: 22,
  },
  "inside.3": {
    fol: 12,
    b12: 440,
    vitd: 18,
  },
  "inside.4": {
    fol: 11,
    b12: 420,
    vitd: 21,
  },
  "inside.5": {
    fol: 10,
    b12: 450,
    vitd: 19,
  },
  "inside.6": {
    fol: 12,
    b12: 415,
    vitd: 23,
  },
};
//? Dictionnaires Vitamines <--
