//* Dictionnaires des germes
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
//* Dictionnaires des antibiotiques
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
//* Dictionnaire des résistances connues
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
