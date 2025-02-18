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

//? --> Dictionnaire VS
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
//? Dictionnaire VS <--
