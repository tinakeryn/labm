//? --> Dictionnaires βHCG
const hcgRanges = {
  "3-4": { min: 5, max: 50 },
  "4-5": { min: 50, max: 500 },
  "5-6": { min: 500, max: 10000 },
  "6-8": { min: 10000, max: 100000 },
  "8-12": { min: 10000, max: 200000 },
  "12-16": { min: 10000, max: 100000 },
  "16-20": { min: 5000, max: 80000 },
  "20-24": { min: 4000, max: 60000 },
  "24-28": { min: 3000, max: 50000 },
  "28-32": { min: 2000, max: 40000 },
  "32-36": { min: 1000, max: 35000 },
  "36-40": { min: 500, max: 30000 },
};

const hcgRangesForTwins = {
  "3-4": { min: 10, max: 100 },
  "4-5": { min: 100, max: 1000 },
  "5-6": { min: 1000, max: 20000 },
  "6-8": { min: 20000, max: 200000 },
  "8-12": { min: 20000, max: 400000 },
  "12-16": { min: 20000, max: 200000 },
  "16-20": { min: 10000, max: 160000 },
  "20-24": { min: 8000, max: 120000 },
  "24-28": { min: 6000, max: 100000 },
  "28-32": { min: 4000, max: 80000 },
  "32-36": { min: 2000, max: 70000 },
  "36-40": { min: 1000, max: 60000 },
};

const hcgRangesForTriplets = {
  "3-4": { min: 15, max: 150 },
  "4-5": { min: 150, max: 1500 },
  "5-6": { min: 1500, max: 30000 },
  "6-8": { min: 30000, max: 300000 },
  "8-12": { min: 30000, max: 600000 },
  "12-16": { min: 30000, max: 300000 },
  "16-20": { min: 15000, max: 240000 },
  "20-24": { min: 12000, max: 180000 },
  "24-28": { min: 9000, max: 150000 },
  "28-32": { min: 6000, max: 120000 },
  "32-36": { min: 3000, max: 105000 },
  "36-40": { min: 1500, max: 90000 },
};
const hcgRangesForQuadruplets = {
  "3-4": { min: 20, max: 200 },
  "4-5": { min: 200, max: 2000 },
  "5-6": { min: 2000, max: 40000 },
  "6-8": { min: 40000, max: 400000 },
  "8-12": { min: 40000, max: 800000 },
  "12-16": { min: 40000, max: 400000 },
  "16-20": { min: 20000, max: 320000 },
  "20-24": { min: 16000, max: 240000 },
  "24-28": { min: 12000, max: 200000 },
  "28-32": { min: 8000, max: 160000 },
  "32-36": { min: 4000, max: 140000 },
  "36-40": { min: 2000, max: 120000 },
};

const hcgRangesEctopic = {
  "3-4": { min: 10, max: 40 },
  "4-5": { min: 100, max: 400 },
  "5-6": { min: 400, max: 3000 },
  "6-8": { min: 3000, max: 6000 },
  "8-12": { min: 2000, max: 10000 },
  "12-16": { min: 0, max: 2000 },
};

const hcgRangesMolar = {
  "3-4": { min: 100, max: 1000 },
  "4-5": { min: 1000, max: 10000 },
  "5-6": { min: 10000, max: 100000 },
  "6-8": { min: 100000, max: 200000 },
  "8-12": { min: 200000, max: 500000 },
  "12-16": { min: 100000, max: 500000 },
};

const hcgRangesNonViable = {
  "3-4": { min: 5, max: 100 },
  "4-5": { min: 10, max: 300 },
  "5-6": { min: 20, max: 600 },
  "6-8": { min: 50, max: 1000 },
  "8-12": { min: 60, max: 1500 },
  "12-16": { min: 50, max: 1000 },
};

const caseDictionary = {
  1: "1.1, 2.1, 3.2, 5.2, 6.1",
  2: "4.3, 4.4, 4.5",
  3: "8.2, 8.4",
  4: "9.1, 9.5",
  ectopic: "7.1",
  molar: "10.1",
  nonViable: "1.3, 1.4, 1.5, 2.2, 2.3, 6.2",
  risky: "1.2, 1.3, 1.4, 1.5, 2.2, 2.3, 3.1, 5.1, 6.2, 7.1, 10.1",
  riskyTwin: "4.1, 4.2",
  riskyTriplets: "8.1, 8.3, 8.5",
  riskyQuadruplets: "9.2, 9.3, 9.4",
};

//? Dictionnaires βHCG <--

//? --> Dictionnaires T21
const risksByAge = {
  "<25": "1/1500",
  "25-29": "1/1000",
  30: "1/900",
  31: "1/800",
  32: "1/600",
  33: "1/500",
  34: "1/400",
  35: "1/270",
  36: "1/200",
  37: "1/150",
  38: "1/100",
  39: "1/70",
  40: "1/50",
  41: "1/40",
  42: "1/30",
  ">42": "1/20",
};

const riskInterpretation = {
  "1/1500": "Risque très faible",
  "1/1000": "Risque très faible",
  "1/900": "Risque faible",
  "1/800": "Risque faible",
  "1/600": "Risque faible",
  "1/500": "Risque faible",
  "1/400": "Risque faible",
  "1/270": "Risque modéré",
  "1/200": "Risque modéré",
  "1/150": "Risque modéré",
  "1/100": "Risque élevé",
  "1/70": "Risque élevé",
  "1/50": "Risque élevé",
  "1/40": "Risque très élevé",
  "1/30": "Risque très élevé",
  "1/20": "Risque très élevé",
};
//? Dictionnaires T21 <--
