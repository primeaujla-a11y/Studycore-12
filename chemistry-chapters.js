window.ChemistryChapters = [
  {
    id: "solutions",
    title: "Solutions",
    description: "Study of homogeneous mixtures, concentration terms, Raoult's law, colligative properties, and abnormal molar masses.",
    keywords: ["solution", "concentration", "Raoult's law", "colligative properties", "van't Hoff factor", "molarity", "molality"],
    concepts: [
      {
        title: "Types of Solutions",
        content: "A solution is a homogeneous mixture of two or more substances. Solutions can be classified based on the physical state of solute and solvent. A solution has two components: solute (dissolved substance) and solvent (dissolving medium). The solubility of a solute depends on the nature of solute, nature of solvent, temperature, and pressure (for gases).",
        keywords: ["solute", "solvent", "homogeneous mixture", "binary solution"],
        points: [
          "Gaseous solutions: solute is gas (e.g., air - N2 in O2)",
          "Liquid solutions: solute can be solid, liquid, or gas (e.g., salt in water)",
          "Solid solutions: solute is solid (e.g., alloys like brass)",
          "Saturated solution contains maximum solute at given temperature",
          "Unsaturated solution contains less than maximum solute"
        ]
      },
      {
        title: "Concentration Terms",
        content: "Concentration of a solution can be expressed in various ways. Molarity (M) is moles of solute per liter of solution. Molality (m) is moles of solute per kilogram of solvent. Mole fraction is ratio of moles of one component to total moles. Mass percentage is mass of solute per 100g of solution.",
        keywords: ["molarity", "molality", "mole fraction", "mass percentage", "normality"],
        points: [
          "Molarity = Moles of solute / Volume of solution (L)",
          "Molality = Moles of solute / Mass of solvent (kg)",
          "Mole fraction (x) = Moles of component / Total moles",
          "Mass % = (Mass of solute / Mass of solution) x 100",
          "Normality = Gram equivalents of solute / Volume of solution (L)",
          "Molarity changes with temperature, molality does not"
        ]
      },
      {
        title: "Raoult's Law",
        content: "Raoult's law states that the partial vapor pressure of each volatile component in an ideal solution is directly proportional to its mole fraction in the solution. For an ideal solution: p_A = x_A x pA_0, where p_A is partial vapor pressure, x_A is mole fraction, and pA_0 is vapor pressure of pure component.",
        keywords: ["vapor pressure", "ideal solution", "mole fraction", "Raoult's law"],
        points: [
          "Ideal solutions obey Raoult's law at all concentrations",
          "Real solutions deviate from Raoult's law",
          "Positive deviation: higher vapor pressure than predicted",
          "Negative deviation: lower vapor pressure than predicted",
          "Total vapor pressure: p_total = p_A + p_B",
          "At specific composition, azeotropes form (constant boiling mixtures)"
        ]
      },
      {
        title: "Colligative Properties",
        content: "Colligative properties depend only on the number of solute particles, not their nature. Four main colligative properties: relative lowering of vapor pressure, elevation of boiling point, depression of freezing point, and osmotic pressure. These properties help determine molar mass of solutes.",
        keywords: ["boiling point elevation", "freezing point depression", "osmotic pressure", "vapor pressure lowering"],
        points: [
          "Relative lowering of vapor pressure: dp/p0 = x_B (mole fraction of solute)",
          "Elevation of boiling point: dT_b = K_b x m x i",
          "Depression of freezing point: dT_f = K_f x m x i",
          "Osmotic pressure: p = CRT (C = molarity, R = gas constant)",
          "p = nRT/V (n = moles of solute, V = volume of solution)",
          "K_b = Elevation constant, K_f = Depression constant"
        ]
      },
      {
        title: "van't Hoff Factor",
        content: "The van't Hoff factor (i) accounts for abnormal molar masses due to association or dissociation of solutes in solution. It is the ratio of observed colligative property to calculated colligative property. For dissociation, i > 1; for association, i < 1.",
        keywords: ["van't Hoff factor", "dissociation", "association", "abnormal molar mass"],
        points: [
          "i = Observed colligative property / Calculated colligative property",
          "For NaCl in water: i approx 2 (Na+ + Cl-)",
          "For CaCl2 in water: i approx 3 (Ca2+ + 2Cl-)",
          "For acetic acid in benzene: i < 1 (dimer formation)",
          "Modified formulas: dT_b = i x K_b x m, p = iCRT",
          "Degree of dissociation (a) = (i - 1)/(n - 1)"
        ]
      }
    ],
    definitions: [
      { term: "Solution", definition: "A homogeneous mixture of two or more substances." },
      { term: "Solute", definition: "The substance that is dissolved in the solvent." },
      { term: "Solvent", definition: "The substance in which solute is dissolved." },
      { term: "Molarity (M)", definition: "Number of moles of solute per liter of solution." },
      { term: "Molality (m)", definition: "Number of moles of solute per kilogram of solvent." },
      { term: "Mole Fraction", definition: "Ratio of moles of a component to total moles of all components." },
      { term: "Colligative Properties", definition: "Properties that depend on the number of solute particles but not on their nature." },
      { term: "van't Hoff Factor (i)", definition: "Ratio of observed colligative property to calculated colligative property, accounting for association or dissociation." }
    ],
    formulas: [
      {
        name: "Molarity",
        formula: "M = n/V = w/(M_mol x V)",
        variables: { "M": "Molarity (mol/L)", "n": "moles of solute", "V": "volume of solution (L)", "w": "mass of solute (g)", "M_mol": "molar mass (g/mol)" },
        example: "58.5 g NaCl in 1L solution: M = 58.5/(58.5x1) = 1 M",
        meaning: "Concentration expressed as moles of solute per liter of solution"
      },
      {
        name: "Molality",
        formula: "m = n/w_solvent = w/(M_mol x w_solvent)",
        variables: { "m": "Molality (mol/kg)", "n": "moles of solute", "w_solvent": "mass of solvent (kg)", "w": "mass of solute (g)", "M_mol": "molar mass (g/mol)" },
        example: "5.85 g NaCl in 100g water: m = 0.1/(58.5x0.1) = 1.71 m",
        meaning: "Concentration expressed as moles of solute per kilogram of solvent"
      },
      {
        name: "Elevation of Boiling Point",
        formula: "dT_b = K_b x m x i",
        variables: { "dT_b": "Elevation in boiling point (K)", "K_b": "Molal elevation constant (K kg/mol)", "m": "molality", "i": "van't Hoff factor" },
        example: "0.1 m NaCl: dT_b = 0.52 x 0.1 x 2 = 0.104 K",
        meaning: "Increase in boiling point of solvent due to addition of non-volatile solute"
      },
      {
        name: "Depression of Freezing Point",
        formula: "dT_f = K_f x m x i",
        variables: { "dT_f": "Depression in freezing point (K)", "K_f": "Molal depression constant (K kg/mol)", "m": "molality", "i": "van't Hoff factor" },
        example: "0.1 m glucose: dT_f = 1.86 x 0.1 = 0.186 K",
        meaning: "Decrease in freezing point of solvent due to addition of non-volatile solute"
      },
      {
        name: "Osmotic Pressure",
        formula: "p = iCRT = inRT/V",
        variables: { "p": "Osmotic pressure (atm)", "i": "van't Hoff factor", "C": "molarity (mol/L)", "R": "gas constant (0.0821 L atm/mol K)", "T": "temperature (K)" },
        example: "0.1 M NaCl at 300K: p = 2 x 0.1 x 0.0821 x 300 = 4.93 atm",
        meaning: "Pressure required to stop osmosis of solvent through semipermeable membrane"
      }
    ],
    reactions: [
      {
        name: "Dissolution of NaCl in Water",
        equation: "NaCl(s) -> Na+(aq) + Cl-(aq)",
        type: "Dissociation",
        condition: "In water",
        note: "Complete dissociation, i = 2"
      },
      {
        name: "Dissociation of CaCl2 in Water",
        equation: "CaCl2(s) -> Ca2+(aq) + 2Cl-(aq)",
        type: "Dissociation",
        condition: "In water",
        note: "Complete dissociation, i = 3"
      },
      {
        name: "Dimerization of Acetic Acid in Benzene",
        equation: "2CH3COOH -> (CH3COOH)2",
        type: "Association",
        condition: "In benzene",
        note: "Dimer formation, i = 0.5"
      }
    ],
    derivations: [
      {
        title: "Derivation of Elevation of Boiling Point",
        steps: [
          "At boiling point, vapor pressure of solution = atmospheric pressure",
          "Addition of solute lowers vapor pressure (Raoult's law)",
          "Higher temperature needed to reach atmospheric pressure",
          "From Clausius-Clapeyron equation: ln(p0/p) = dH_vap/R x (1/T - 1/T0)",
          "For small changes: dT_b = K_b x m",
          "Including van't Hoff factor: dT_b = i x K_b x m"
        ]
      },
      {
        title: "Derivation of Osmotic Pressure",
        steps: [
          "Osmosis: flow of solvent from low concentration to high concentration",
          "Osmotic pressure (p) is pressure needed to stop osmosis",
          "For dilute solutions, van't Hoff applied gas laws",
          "pV = nRT (analogous to ideal gas law)",
          "p = (n/V)RT = CRT",
          "With van't Hoff factor: p = iCRT"
        ]
      }
    ],
    examples: [
      {
        question: "Calculate the molality of 10% NaCl solution by mass.",
        solution: {
          formula: "m = (w/M_mol) x (1000/w_solvent)",
          steps: [
            { label: "Step 1", text: "In 100g solution: 10g NaCl, 90g water", math: "" },
            { label: "Step 2", text: "Calculate moles of NaCl", math: "n = 10/58.5 = 0.171 mol" },
            { label: "Step 3", text: "Calculate molality", math: "m = (0.171/90) x 1000 = 1.90 m" }
          ],
          answer: "1.90 m",
          explanation: "Molality is calculated using mass of solvent, not solution"
        }
      },
      {
        question: "A solution of urea (mol. mass 60) boils at 100.18C at 1 atm. Calculate the amount of urea dissolved in 100g water. (K_b for water = 0.512 K kg/mol)",
        solution: {
          formula: "dT_b = K_b x m",
          steps: [
            { label: "Step 1", text: "Calculate elevation in boiling point", math: "dT_b = 100.18 - 100 = 0.18C = 0.18 K" },
            { label: "Step 2", text: "Calculate molality", math: "m = dT_b/K_b = 0.18/0.512 = 0.3516 mol/kg" },
            { label: "Step 3", text: "Calculate moles of urea in 100g water", math: "n = 0.3516 x 0.1 = 0.03516 mol" },
            { label: "Step 4", text: "Calculate mass of urea", math: "w = 0.03516 x 60 = 2.11 g" }
          ],
          answer: "2.11 g",
          explanation: "Using boiling point elevation formula to find amount of solute"
        }
      },
      {
        question: "Calculate the osmotic pressure of 0.1 M glucose solution at 300K. (R = 0.0821 L atm/mol K)",
        solution: {
          formula: "p = CRT",
          steps: [
            { label: "Step 1", text: "Identify given values", math: "C = 0.1 mol/L, T = 300 K, R = 0.0821" },
            { label: "Step 2", text: "Calculate osmotic pressure", math: "p = 0.1 x 0.0821 x 300 = 2.463 atm" }
          ],
          answer: "2.463 atm",
          explanation: "Glucose does not dissociate, so i = 1"
        }
      }
    ],
    commonMistakes: [
      { title: "Confusing Molarity and Molality", text: "Molarity uses volume of solution, molality uses mass of solvent. Molarity is temperature-dependent, molality is not." },
      { title: "Forgetting van't Hoff Factor", text: "For electrolytes like NaCl, CaCl2, always include i factor in colligative property calculations." },
      { title: "Using Wrong Mass", text: "In molality calculation, use mass of solvent (not solution). In mass percentage, use mass of solution." },
      { title: "Sign Errors in dT", text: "dT_b is always positive (boiling point increases), dT_f is always positive (freezing point depression, but temperature decreases)." }
    ],
    quickRevision: [
      { title: "Solution Composition", text: "Solution = Solute + Solvent. Solute: lesser amount, Solvent: greater amount." },
      { title: "Concentration Units", text: "Molarity (mol/L), Molality (mol/kg), Mole fraction (ratio), Mass % (w/w x 100)" },
      { title: "Raoult's Law", text: "p_A = x_A x pA_0 for ideal solutions. Positive deviation: p > p_ideal, Negative: p < p_ideal." },
      { title: "Colligative Properties", text: "4 properties: dp/p0 = x_B, dT_b = iK_bm, dT_f = iK_fm, p = iCRT" },
      { title: "van't Hoff Factor", text: "i = observed property/calculated property. Dissociation: i > 1, Association: i < 1." },
      { title: "Osmotic Pressure", text: "Used to find molar mass of proteins. p = iCRT where C = molarity." }
    ],
    importantQuestions: [
      { question: "State Raoult's law. When does a solution show positive deviation from Raoult's law?", type: "Short Answer" },
      { question: "Calculate the freezing point depression when 0.5 mol of NaCl is dissolved in 1kg water. (K_f = 1.86 K kg/mol)", type: "Numerical" },
      { question: "Explain the significance of van't Hoff factor with examples.", type: "Long Answer" },
      { question: "How is osmotic pressure used to determine the molar mass of proteins?", type: "Conceptual" },
      { question: "Derive the relationship between osmotic pressure and concentration.", type: "Long Answer" }
    ],
    examTips: [
      "Always specify units in numerical problems",
      "Remember that Molarity changes with temperature but Molality does not",
      "For electrolytes, always use van't Hoff factor (i) in colligative property formulas",
      "Practice conversion between different concentration terms",
      "Know the difference between ideal and real solutions"
    ]
  },
  {
    id: "electrochemistry",
    title: "Electrochemistry",
    description: "Study of interconversion of chemical and electrical energy, galvanic cells, electrolytic cells, and conductance.",
    keywords: ["electrochemistry", "galvanic cell", "electrolysis", "Nernst equation", "conductance", "electrode potential"],
    concepts: [
      {
        title: "Electrochemical Cells",
        content: "Electrochemical cells convert chemical energy to electrical energy (galvanic/voltaic cells) or vice versa (electrolytic cells). A galvanic cell consists of two half-cells connected by a salt bridge. The electrode with higher reduction potential acts as cathode (reduction), lower as anode (oxidation).",
        keywords: ["galvanic cell", "electrolytic cell", "anode", "cathode", "salt bridge"],
        points: [
          "Anode: electrode where oxidation occurs (negative in galvanic cell)",
          "Cathode: electrode where reduction occurs (positive in galvanic cell)",
          "Salt bridge maintains electrical neutrality in both half-cells",
          "Electrons flow from anode to cathode through external circuit",
          "Cell notation: Anode | Anode ion || Cathode ion | Cathode",
          "E_cell = E_cathode - E_anode (both as reduction potentials)"
        ]
      },
      {
        title: "Electrode Potential and EMF",
        content: "Electrode potential is tendency of an electrode to gain or lose electrons. Standard electrode potential (E0) is measured at standard conditions (1M concentration, 1 atm pressure, 25C). EMF of cell is the potential difference between two electrodes when no current flows.",
        keywords: ["electrode potential", "standard electrode potential", "EMF", "reduction potential"],
        points: [
          "Higher E0 means greater tendency to get reduced",
          "E0_cell must be positive for spontaneous reaction",
          "SHE (Standard Hydrogen Electrode) = 0 V reference",
          "E0_cell = E0_cathode - E0_anode",
          "Positive E0_cell means spontaneous (dG0 < 0)",
          "Negative E0_cell means non-spontaneous (dG0 > 0)"
        ]
      },
      {
        title: "Nernst Equation",
        content: "The Nernst equation relates electrode potential to concentration of reactants and products. It allows calculation of cell potential under non-standard conditions. E = E0 - (RT/nF)ln(Q), where Q is reaction quotient.",
        keywords: ["Nernst equation", "reaction quotient", "concentration cell", "non-standard conditions"],
        points: [
          "At 25C: E = E0 - (0.0592/n)log(Q)",
          "For concentration cell: E = (0.0592/n)log(C1/C2)",
          "At equilibrium: E = 0, Q = K (equilibrium constant)",
          "Relationship: E0 = (RT/nF)ln(K)",
          "For reaction: E = E0 - (0.0592/n)log([Products]/[Reactants])",
          "E0_cell = (0.0592/n)log(K) at 25C"
        ]
      },
      {
        title: "Electrolysis and Faraday's Laws",
        content: "Electrolysis is decomposition of electrolyte by passing electricity. Faraday's first law states mass deposited is proportional to charge. Faraday's second law states mass deposited is proportional to equivalent weight for same charge.",
        keywords: ["electrolysis", "Faraday's law", "electrolyte", "deposition"],
        points: [
          "Faraday's 1st law: w = (M x I x t)/(n x F)",
          "Faraday's 2nd law: w1/w2 = E1/E2 (for same I and t)",
          "1 Faraday = 96487 C/mol of electrons",
          "w = ZIt (Z = electrochemical equivalent)",
          "Time for deposition: t = (w x n x F)/(M x I)",
          "Amount of substance: n = (I x t)/(n_e x F)"
        ]
      },
      {
        title: "Conductance in Solutions",
        content: "Conductance (G) is reciprocal of resistance. Conductivity (k) is conductance of 1 cm3 solution. Molar conductivity (L_m) is conductivity per molar concentration. Equivalent conductivity (L_eq) is conductivity per equivalent concentration.",
        keywords: ["conductance", "conductivity", "molar conductivity", "resistance"],
        points: [
          "G = 1/R (Siemens, S)",
          "k = G x l/A (S/cm)",
          "L_m = k/C (S cm2/mol)",
          "L_m for strong electrolytes: L_m = L0_m - AsqrtC",
          "L_m for weak electrolytes: L_m = aL0_m",
          "Degree of dissociation: a = L_m/L0_m"
        ]
      },
      {
        title: "Batteries and Corrosion",
        content: "Batteries are devices that convert chemical energy to electrical energy. Primary batteries are non-rechargeable (dry cell, mercury cell). Secondary batteries are rechargeable (lead-acid, lithium-ion). Corrosion is degradation of metals by electrochemical reactions.",
        keywords: ["dry cell", "lead-acid battery", "fuel cell", "corrosion"],
        points: [
          "Dry cell: Zn-Carbon cell, E = 1.5 V",
          "Lead-acid battery: Pb-PbO2, E = 2 V per cell",
          "Hydrogen-oxygen fuel cell: H2 + O2 -> H2O",
          "Corrosion: anodic oxidation of metal, cathodic reduction of O2",
          "Prevention: galvanization, sacrificial protection, cathodic protection",
          "Rusting of iron: Fe -> Fe2+ + 2e- (anode), O2 + 2H2O + 4e- -> 4OH- (cathode)"
        ]
      }
    ],
    definitions: [
      { term: "Electrochemical Cell", definition: "Device that converts chemical energy to electrical energy (galvanic) or vice versa (electrolytic)." },
      { term: "Electrode Potential", definition: "Tendency of an electrode to gain or lose electrons when in contact with its ions in solution." },
      { term: "EMF", definition: "Electromotive force; maximum potential difference between two electrodes of a cell." },
      { term: "Conductance", definition: "Reciprocal of electrical resistance; ability of solution to conduct electricity." },
      { term: "Molar Conductivity", definition: "Conductivity of all ions produced by dissolving 1 mole of electrolyte in solution." },
      { term: "Electrolysis", definition: "Decomposition of an electrolyte by passing direct current through it." },
      { term: "Faraday", definition: "Quantity of electricity (96487 C) required to deposit one gram equivalent of substance." }
    ],
    formulas: [
      {
        name: "Nernst Equation",
        formula: "E = E0 - (0.0592/n)log(Q)",
        variables: { "E": "Cell potential (V)", "E0": "Standard cell potential (V)", "n": "number of electrons transferred", "Q": "Reaction quotient" },
        example: "For Zn-Cu cell: E = 1.10 - (0.0592/2)log([Zn2+]/[Cu2+])",
        meaning: "Relates cell potential to concentrations under non-standard conditions"
      },
      {
        name: "Faraday's First Law",
        formula: "w = (M x I x t)/(n x F)",
        variables: { "w": "mass deposited (g)", "M": "molar mass (g/mol)", "I": "current (A)", "t": "time (s)", "n": "electrons transferred", "F": "Faraday constant (96487 C/mol)" },
        example: "Deposit Cu from CuSO4: w = (64 x 2 x 3600)/(2 x 96487) = 2.39 g",
        meaning: "Mass of substance deposited is proportional to charge passed"
      },
      {
        name: "Molar Conductivity",
        formula: "L_m = k/C",
        variables: { "L_m": "Molar conductivity (S cm2/mol)", "k": "conductivity (S/cm)", "C": "concentration (mol/L)" },
        example: "If k = 0.012 S/cm and C = 0.1 mol/L: L_m = 0.012/0.1 = 120 S cm2/mol",
        meaning: "Conductivity per unit molar concentration"
      },
      {
        name: "Cell EMF and Gibbs Energy",
        formula: "dG0 = -nFE0_cell",
        variables: { "dG0": "standard Gibbs energy change (J/mol)", "n": "electrons transferred", "F": "Faraday constant", "E0_cell": "standard cell potential (V)" },
        example: "For n=2, E0=1.10V: dG0 = -2 x 96487 x 1.10 = -212,271 J/mol",
        meaning: "Relationship between cell potential and thermodynamic spontaneity"
      },
      {
        name: "Equilibrium Constant and EMF",
        formula: "E0_cell = (0.0592/n)log(K)",
        variables: { "E0_cell": "standard cell potential (V)", "n": "electrons transferred", "K": "equilibrium constant" },
        example: "For n=2, E0=1.10V: K = 10^(nE0/0.0592) = 10^37.1",
        meaning: "Relates standard cell potential to equilibrium constant"
      }
    ],
    reactions: [
      {
        name: "Daniel Cell (Zn-Cu)",
        equation: "Zn(s) + Cu2+(aq) -> Zn2+(aq) + Cu(s)",
        type: "Redox",
        condition: "Spontaneous (E0 = 1.10 V)",
        note: "Anode: Zn -> Zn2+ + 2e-; Cathode: Cu2+ + 2e- -> Cu"
      },
      {
        name: "Electrolysis of Water",
        equation: "2H2O(l) -> 2H2(g) + O2(g)",
        type: "Electrolysis",
        condition: "Electric current through acidified water",
        note: "Cathode: 2H+ + 2e- -> H2; Anode: 4OH- -> 2H2O + O2 + 4e-"
      },
      {
        name: "Electrolysis of CuCl2",
        equation: "CuCl2(l) -> Cu(s) + Cl2(g)",
        type: "Electrolysis",
        condition: "Molten CuCl2 or aqueous solution",
        note: "Cathode: Cu2+ + 2e- -> Cu; Anode: 2Cl- -> Cl2 + 2e-"
      },
      {
        name: "Rusting of Iron",
        equation: "4Fe + 3O2 + 6H2O -> 4Fe(OH)3",
        type: "Corrosion",
        condition: "Presence of water and oxygen",
        note: "Electrochemical process involving oxidation of iron"
      }
    ],
    derivations: [
      {
        title: "Derivation of Nernst Equation",
        steps: [
          "From Gibbs energy: dG = dG0 + RT ln(Q)",
          "Also: dG = -nFE and dG0 = -nFE0",
          "-nFE = -nFE0 + RT ln(Q)",
          "E = E0 - (RT/nF) ln(Q)",
          "At 25C (298K): E = E0 - (0.0592/n) log(Q)"
        ]
      },
      {
        title: "Relationship Between EMF and Equilibrium Constant",
        steps: [
          "At equilibrium: E = 0 and Q = K",
          "Substitute in Nernst equation: 0 = E0 - (RT/nF) ln(K)",
          "E0 = (RT/nF) ln(K)",
          "At 25C: E0 = (0.0592/n) log(K)",
          "Also: dG0 = -RT ln(K) = -nFE0"
        ]
      }
    ],
    examples: [
      {
        question: "Calculate the EMF of the cell: Zn | Zn2+ (0.01 M) || Cu2+ (1 M) | Cu. (E0_cell = 1.10 V, n = 2)",
        solution: {
          formula: "E = E0 - (0.0592/n)log([Zn2+]/[Cu2+])",
          steps: [
            { label: "Step 1", text: "Write the cell reaction", math: "Zn + Cu2+ -> Zn2+ + Cu" },
            { label: "Step 2", text: "Calculate Q", math: "Q = [Zn2+]/[Cu2+] = 0.01/1 = 0.01" },
            { label: "Step 3", text: "Apply Nernst equation", math: "E = 1.10 - (0.0592/2)log(0.01)" },
            { label: "Step 4", text: "Calculate E", math: "E = 1.10 - 0.0296 x (-2) = 1.10 + 0.0592 = 1.1592 V" }
          ],
          answer: "1.159 V",
          explanation: "Lower concentration of Zn2+ increases cell potential"
        }
      },
      {
        question: "How much copper will be deposited by passing 2A current for 2 hours through CuSO4 solution? (M = 64 g/mol, F = 96487 C/mol)",
        solution: {
          formula: "w = (M x I x t)/(n x F)",
          steps: [
            { label: "Step 1", text: "Convert time to seconds", math: "t = 2 x 60 x 60 = 7200 s" },
            { label: "Step 2", text: "Identify values", math: "M = 64, I = 2, n = 2, F = 96487" },
            { label: "Step 3", text: "Calculate mass", math: "w = (64 x 2 x 7200)/(2 x 96487) = 921600/192974 = 4.776 g" }
          ],
          answer: "4.78 g",
          explanation: "Using Faraday's first law for electrolysis"
        }
      },
      {
        question: "Calculate the equilibrium constant for the reaction: Zn + Cu2+ -> Zn2+ + Cu (E0 = 1.10 V, n = 2)",
        solution: {
          formula: "log(K) = nE0/0.0592",
          steps: [
            { label: "Step 1", text: "Use the relationship between E0 and K", math: "E0 = (0.0592/n)log(K)" },
            { label: "Step 2", text: "Rearrange for log(K)", math: "log(K) = nE0/0.0592 = 2 x 1.10/0.0592 = 37.16" },
            { label: "Step 3", text: "Calculate K", math: "K = 10^37.16 = 1.45 x 10^37" }
          ],
          answer: "1.45 x 10^37",
          explanation: "Large K indicates reaction goes virtually to completion"
        }
      }
    ],
    commonMistakes: [
      { title: "Confusing Anode and Cathode", text: "In galvanic cell: Anode is negative (oxidation), Cathode is positive (reduction). In electrolytic cell: Anode is positive (oxidation), Cathode is negative (reduction)." },
      { title: "Wrong E0 Calculation", text: "E0_cell = E0_cathode - E0_anode, both taken as reduction potentials. Don't reverse sign of anode potential." },
      { title: "Forgetting n in Faraday's Law", text: "Always include number of electrons transferred (n) in Faraday's law calculations." },
      { title: "Concentration Cell EMF", text: "For concentration cell, E0 = 0, so E = (0.0592/n)log(C2/C1) where C2 > C1." }
    ],
    quickRevision: [
      { title: "Galvanic Cell", text: "Converts chemical to electrical energy. Anode: oxidation (-), Cathode: reduction (+). E_cell = E_cathode - E_anode." },
      { title: "Nernst Equation", text: "E = E0 - (0.0592/n)log(Q). At equilibrium: E = 0, Q = K. E0 = (0.0592/n)log(K)." },
      { title: "Faraday's Laws", text: "w = MIT/(nF). 1F = 96487 C. Mass proportional to charge for same substance." },
      { title: "Conductance", text: "G = 1/R. L_m = k/C. Strong electrolytes: L_m decreases with sqrtC. Weak: L_m = aL0_m." },
      { title: "dG and EMF", text: "dG = -nFE. Spontaneous: E > 0, dG < 0. Equilibrium: E = 0, dG = 0." }
    ],
    importantQuestions: [
      { question: "State Nernst equation and derive the relationship between standard EMF and equilibrium constant.", type: "Long Answer" },
      { question: "Calculate the EMF of the cell: Zn | Zn2+ (0.001 M) || Cu2+ (1 M) | Cu", type: "Numerical" },
      { question: "Explain the working of a Daniel cell with diagram.", type: "Long Answer" },
      { question: "What is molar conductivity? How does it vary with concentration for strong and weak electrolytes?", type: "Short Answer" },
      { question: "Explain the process of electroplating and its applications.", type: "Conceptual" }
    ],
    examTips: [
      "Always write cell notation correctly: Anode | Anode ion || Cathode ion | Cathode",
      "Remember that E0_cell must be positive for spontaneous reaction",
      "For Nernst equation, use log (base 10) at 25C, not ln (natural log)",
      "Faraday's law: convert time to seconds",
      "Practice numericals on concentration cells and electrolysis"
    ]
  },
  {
    id: "chemical-kinetics",
    title: "Chemical Kinetics",
    description: "Study of rate of reactions, rate laws, order, molecularity, and factors affecting reaction rates.",
    keywords: ["rate of reaction", "rate law", "order", "molecularity", "Arrhenius equation", "activation energy", "catalyst"],
    concepts: [
      {
        title: "Rate of Reaction",
        content: "Rate of reaction is change in concentration of reactants or products per unit time. Average rate is calculated over a time interval, instantaneous rate at a specific moment. For reaction aA -> bB: Rate = -(1/a)(d[A]/dt) = (1/b)(d[B]/dt).",
        keywords: ["rate", "average rate", "instantaneous rate", "concentration"],
        points: [
          "Rate = -d[Reactant]/dt = d[Product]/dt",
          "For aA -> bB: Rate = -(1/a)(d[A]/dt) = (1/b)(d[B]/dt)",
          "Units of rate: mol L-1 s-1 or M/s",
          "Rate depends on concentration of reactants",
          "Rate decreases as reaction proceeds (reactants consumed)",
          "Initial rate method is used to determine order"
        ]
      },
      {
        title: "Rate Law and Order",
        content: "Rate law expresses rate in terms of concentration of reactants raised to some powers. Rate = k[A]^m[B]^n where m and n are orders with respect to A and B. Overall order = m + n. Order is determined experimentally, not from stoichiometry.",
        keywords: ["rate law", "rate constant", "order", "molecularity", "rate expression"],
        points: [
          "Rate = k[A]^m[B]^n (rate law)",
          "k = rate constant (specific rate constant)",
          "Order: sum of powers in rate law (m + n)",
          "Molecularity: number of molecules colliding (elementary reaction)",
          "Zero order: Rate = k, independent of concentration",
          "First order: Rate = k[A], half-life constant",
          "Second order: Rate = k[A]^2, half-life depends on concentration"
        ]
      },
      {
        title: "Integrated Rate Equations",
        content: "Integrated rate equations relate concentration to time. For zero order: [A] = [A]0 - kt. For first order: ln[A] = ln[A]0 - kt or [A] = [A]0e^(-kt). These equations help determine order and rate constant from experimental data.",
        keywords: ["integrated rate equation", "half-life", "first order", "zero order"],
        points: [
          "Zero order: [A] = [A]0 - kt, t1/2 = [A]0/(2k)",
          "First order: ln[A] = ln[A]0 - kt, t1/2 = 0.693/k",
          "First order: [A] = [A]0 x e^(-kt)",
          "Plot of [A] vs t: straight line for zero order",
          "Plot of ln[A] vs t: straight line for first order",
          "Plot of 1/[A] vs t: straight line for second order"
        ]
      },
      {
        title: "Arrhenius Equation",
        content: "The Arrhenius equation relates rate constant to temperature: k = Ae^(-Ea/RT). A is frequency factor (pre-exponential factor), Ea is activation energy. Taking logarithms: ln(k) = ln(A) - Ea/RT.",
        keywords: ["Arrhenius equation", "activation energy", "frequency factor", "temperature dependence"],
        points: [
          "k = Ae^(-Ea/RT)",
          "ln(k) = ln(A) - Ea/RT",
          "Plot of ln(k) vs 1/T gives straight line with slope = -Ea/R",
          "For two temperatures: ln(k2/k1) = (Ea/R)(1/T1 - 1/T2)",
          "Higher temperature means larger k means faster reaction",
          "Higher Ea means smaller k means slower reaction"
        ]
      },
      {
        title: "Catalysts and Activation Energy",
        content: "A catalyst increases rate of reaction by providing alternative pathway with lower activation energy. It does not change dG, K_eq, or thermodynamic equilibrium. It increases both forward and reverse reaction rates equally.",
        keywords: ["catalyst", "activation energy", "alternative pathway", "positive catalyst", "negative catalyst"],
        points: [
          "Catalyst lowers Ea but does not change dH or dG",
          "Increases rate constant k",
          "Does not affect equilibrium constant K_eq",
          "Does not change final equilibrium composition",
          "Positive catalyst: increases rate (e.g., MnO2 in H2O2 decomposition)",
          "Negative catalyst (inhibitor): decreases rate (e.g., tetraethyl lead in petrol)"
        ]
      },
      {
        title: "Collision Theory",
        content: "Collision theory states that for a reaction to occur, reactant molecules must collide with proper orientation and minimum energy (activation energy). Only effective collisions lead to product formation.",
        keywords: ["collision theory", "effective collision", "activation energy", "steric factor"],
        points: [
          "Molecules must collide to react",
          "Collision must have energy >= Ea",
          "Collision must have proper orientation (steric factor)",
          "Rate = Z x p x e^(-Ea/RT) (Z = collision frequency, p = steric factor)",
          "Not all collisions are effective",
          "Higher temperature increases number of effective collisions"
        ]
      }
    ],
    definitions: [
      { term: "Rate of Reaction", definition: "Change in concentration of reactants or products per unit time." },
      { term: "Rate Law", definition: "Mathematical expression relating rate to concentration of reactants raised to some powers." },
      { term: "Order of Reaction", definition: "Sum of powers of concentration terms in the rate law expression." },
      { term: "Rate Constant", definition: "Proportionality constant in rate law; equals rate when concentrations are unity." },
      { term: "Activation Energy", definition: "Minimum energy required for reactant molecules to undergo chemical reaction." },
      { term: "Half-life", definition: "Time required for concentration of reactant to reduce to half its initial value." },
      { term: "Molecularity", definition: "Number of molecules, atoms, or ions involved in an elementary reaction." },
      { term: "Arrhenius Equation", definition: "Equation relating rate constant to temperature: k = Ae^(-Ea/RT)." }
    ],
    formulas: [
      {
        name: "Rate Expression",
        formula: "Rate = -(1/a)(d[A]/dt) = (1/b)(d[B]/dt)",
        variables: { "Rate": "rate of reaction (mol/L/s)", "a, b": "stoichiometric coefficients", "[A], [B]": "concentrations" },
        example: "For 2N2O5 -> 4NO2 + O2: Rate = -(1/2)(d[N2O5]/dt) = (1/4)(d[NO2]/dt)",
        meaning: "Rate is same regardless of which species is measured"
      },
      {
        name: "Integrated Rate Equation (First Order)",
        formula: "ln[A] = ln[A]0 - kt or [A] = [A]0e^(-kt)",
        variables: { "[A]": "concentration at time t", "[A]0": "initial concentration", "k": "rate constant", "t": "time" },
        example: "For first order reaction, if k = 0.023 s-1, [A]0 = 1M, after 30s: [A] = 1xe^(-0.023x30) = 0.495 M",
        meaning: "Concentration decreases exponentially with time"
      },
      {
        name: "Half-life (First Order)",
        formula: "t1/2 = 0.693/k",
        variables: { "t1/2": "half-life", "k": "rate constant" },
        example: "For k = 0.05 s-1: t1/2 = 0.693/0.05 = 13.86 s",
        meaning: "Half-life is independent of initial concentration for first order"
      },
      {
        name: "Arrhenius Equation",
        formula: "k = Ae^(-Ea/RT)",
        variables: { "k": "rate constant", "A": "frequency factor", "Ea": "activation energy (J/mol)", "R": "gas constant (8.314 J/mol/K)", "T": "temperature (K)" },
        example: "If A = 10^13 s-1, Ea = 50 kJ/mol, T = 300K: k = 10^13 x e^(-50000/(8.314x300)) = 2.0 x 10^4 s-1",
        meaning: "Rate constant increases exponentially with temperature"
      },
      {
        name: "Two Temperature Form",
        formula: "ln(k2/k1) = (Ea/R)(1/T1 - 1/T2)",
        variables: { "k1, k2": "rate constants at T1 and T2", "Ea": "activation energy", "R": "gas constant" },
        example: "If k doubles when T increases from 300K to 310K: Ea = Rxln(2)x(T1T2)/(T2-T1) = 52.9 kJ/mol",
        meaning: "Calculates activation energy from rate constants at two temperatures"
      }
    ],
    reactions: [
      {
        name: "Decomposition of N2O5",
        equation: "2N2O5(g) -> 4NO2(g) + O2(g)",
        type: "First order",
        condition: "In CCl4 solution",
        note: "Classic example of first order reaction, k = 3.4 x 10^-5 s-1"
      },
      {
        name: "Hydrolysis of Ester",
        equation: "CH3COOC2H5 + H2O -> CH3COOH + C2H5OH",
        type: "First order (pseudo)",
        condition: "Catalyzed by H+",
        note: "Pseudo-first order as water is in large excess"
      },
      {
        name: "Decomposition of H2O2",
        equation: "2H2O2(aq) -> 2H2O(l) + O2(g)",
        type: "First order",
        condition: "Catalyzed by MnO2 or I-",
        note: "Rate depends on H2O2 concentration, not catalyst"
      }
    ],
    derivations: [
      {
        title: "Derivation of Integrated Rate Equation (First Order)",
        steps: [
          "Rate law: -d[A]/dt = k[A]",
          "Separate variables: d[A]/[A] = -k dt",
          "Integrate from [A]0 to [A] and 0 to t",
          "integral(d[A]/[A]) = -k integral(dt)",
          "ln[A] - ln[A]0 = -kt",
          "ln[A] = ln[A]0 - kt or [A] = [A]0e^(-kt)"
        ]
      },
      {
        title: "Derivation of Half-life (First Order)",
        steps: [
          "At t = t1/2, [A] = [A]0/2",
          "Substitute in integrated rate equation",
          "ln([A]0/2) = ln[A]0 - kt1/2",
          "ln([A]0/2) - ln[A]0 = -kt1/2",
          "ln(1/2) = -kt1/2",
          "-0.693 = -kt1/2",
          "t1/2 = 0.693/k"
        ]
      }
    ],
    examples: [
      {
        question: "For a first order reaction, the half-life is 10 minutes. What fraction of reactant remains after 40 minutes?",
        solution: {
          formula: "n = t/t1/2",
          steps: [
            { label: "Step 1", text: "Calculate number of half-lives", math: "n = 40/10 = 4" },
            { label: "Step 2", text: "Calculate remaining fraction", math: "Remaining = (1/2)^n = (1/2)^4 = 1/16" },
            { label: "Step 3", text: "Express as percentage", math: "(1/16) x 100 = 6.25%" }
          ],
          answer: "1/16 or 6.25%",
          explanation: "For first order reactions, each half-life reduces concentration by half"
        }
      },
      {
        question: "The rate constant of a reaction is 0.01 s-1. Calculate the time required for 90% completion of the reaction.",
        solution: {
          formula: "t = (2.303/k)log([A]0/[A])",
          steps: [
            { label: "Step 1", text: "For 90% completion, [A] = 10% of [A]0", math: "[A] = 0.1[A]0" },
            { label: "Step 2", text: "Calculate time", math: "t = (2.303/0.01)log([A]0/(0.1[A]0))" },
            { label: "Step 3", text: "Simplify", math: "t = 230.3 x log(10) = 230.3 x 1 = 230.3 s" }
          ],
          answer: "230.3 s",
          explanation: "For first order, time for 90% completion = 3.32 x t1/2"
        }
      },
      {
        question: "The rate constant of a reaction doubles when temperature increases from 300K to 310K. Calculate the activation energy.",
        solution: {
          formula: "ln(k2/k1) = (Ea/R)(1/T1 - 1/T2)",
          steps: [
            { label: "Step 1", text: "Given: k2 = 2k1, T1 = 300K, T2 = 310K", math: "ln(2) = (Ea/8.314)(1/300 - 1/310)" },
            { label: "Step 2", text: "Calculate temperature term", math: "1/300 - 1/310 = (310-300)/(300x310) = 10/93000 = 1.075 x 10^-4" },
            { label: "Step 3", text: "Calculate Ea", math: "0.693 = (Ea/8.314)(1.075 x 10^-4)" },
            { label: "Step 4", text: "Solve for Ea", math: "Ea = (0.693 x 8.314)/(1.075 x 10^-4) = 53500 J/mol = 53.5 kJ/mol" }
          ],
          answer: "53.5 kJ/mol",
          explanation: "Rule of thumb: rate doubles for every 10K rise near room temperature"
        }
      }
    ],
    commonMistakes: [
      { title: "Confusing Order and Molecularity", text: "Order is experimental (from rate law), molecularity is theoretical (for elementary reactions only). They are equal only for elementary reactions." },
      { title: "Wrong Units of Rate Constant", text: "For nth order: units of k = M^(1-n) s-1. Zero order: M s-1; First order: s-1; Second order: M-1 s-1." },
      { title: "Using Stoichiometry for Rate Law", text: "Rate law is determined experimentally. Do not assume order from balanced equation unless it is an elementary reaction." },
      { title: "Forgetting Arrhenius Equation", text: "ln(k2/k1) = (Ea/R)(1/T1 - T2). Use natural log, not log base 10." }
    ],
    quickRevision: [
      { title: "Rate Expression", text: "Rate = -(1/a)(d[A]/dt) = (1/b)(d[B]/dt). Units: mol L-1 s-1." },
      { title: "Zero Order", text: "[A] = [A]0 - kt, t1/2 = [A]0/(2k). Plot [A] vs t: straight line." },
      { title: "First Order", text: "ln[A] = ln[A]0 - kt, t1/2 = 0.693/k. Plot ln[A] vs t: straight line." },
      { title: "Arrhenius Equation", text: "k = Ae^(-Ea/RT). ln(k) = ln(A) - Ea/RT. Plot ln(k) vs 1/T: straight line." },
      { title: "Catalyst", text: "Lowers Ea, increases k, does not change dG, K_eq, or equilibrium composition." },
      { title: "Collision Theory", text: "Rate = Zpe^(-Ea/RT). Z = collision frequency, p = steric factor, Ea = activation energy." }
    ],
    importantQuestions: [
      { question: "Derive the integrated rate equation for a first order reaction.", type: "Long Answer" },
      { question: "How does a catalyst increase the rate of reaction? Does it affect the equilibrium constant?", type: "Conceptual" },
      { question: "For a first order reaction, t1/2 = 20 minutes. How long will it take for 75% completion?", type: "Numerical" },
      { question: "State and explain the Arrhenius equation.", type: "Short Answer" },
      { question: "Distinguish between order and molecularity of a reaction.", type: "Short Answer" }
    ],
    examTips: [
      "Always write units of rate constant correctly based on order",
      "For first order, t1/2 is constant regardless of initial concentration",
      "Use natural log (ln) in Arrhenius equation, not log base 10",
      "Remember: catalyst does not change K_eq or dG",
      "Practice problems on half-life and time for given completion percentage"
    ]
  },
  {
    id: "surface-chemistry",
    title: "Surface Chemistry",
    description: "Study of phenomena occurring at surfaces and interfaces - adsorption, colloids, catalysis, and emulsions.",
    keywords: ["adsorption", "colloid", "catalysis", "emulsion", "surface area", "Tyndall effect"],
    concepts: [
      {
        title: "Adsorption",
        content: "Adsorption is accumulation of molecular species at the surface rather than in bulk. Adsorbent is the surface on which adsorption occurs, adsorbate is the substance adsorbed. Adsorption is different from absorption (which occurs throughout bulk).",
        keywords: ["adsorption", "adsorbent", "adsorbate", "physisorption", "chemisorption"],
        points: [
          "Physisorption: weak van der Waals forces, reversible, low enthalpy",
          "Chemisorption: strong chemical bonds, irreversible, high enthalpy",
          "Physisorption decreases with temperature",
          "Chemisorption first increases then decreases with temperature",
          "Physisorption not specific, chemisorption is specific",
          "Enthalpy of adsorption: physisorption approx 20-40 kJ/mol, chemisorption approx 80-240 kJ/mol"
        ]
      },
      {
        title: "Adsorption Isotherms",
        content: "Adsorption isotherms describe relationship between amount of gas adsorbed and pressure at constant temperature. Freundlich isotherm: x/m = kP^(1/n) (valid at moderate pressures). Langmuir isotherm assumes monolayer adsorption on fixed sites.",
        keywords: ["adsorption isotherm", "Freundlich", "Langmuir", "surface coverage"],
        points: [
          "Freundlich: x/m = kP^(1/n), where 1/n = 0 to 1",
          "Langmuir: theta = bP/(1 + bP), theta = surface coverage",
          "At low pressure: x/m proportional to P (Freundlich: x/m = kP)",
          "At high pressure: x/m = constant (saturation)",
          "Log plot of Freundlich: log(x/m) = log(k) + (1/n)log(P)",
          "Langmuir assumes monolayer, Freundlich is empirical"
        ]
      },
      {
        title: "Colloids",
        content: "Colloidal solution is intermediate between true solution and suspension. Particle size: 1-1000 nm. Colloids have dispersed phase (solute) and dispersion medium (solvent). Properties include Tyndall effect, Brownian movement, electrophoresis.",
        keywords: ["colloid", "dispersed phase", "dispersion medium", "Tyndall effect", "Brownian movement"],
        points: [
          "Tyndall effect: scattering of light by colloidal particles",
          "Brownian movement: random zigzag motion of colloidal particles",
          "Electrophoresis: movement of colloidal particles under electric field",
          "Coagulation: settling of colloidal particles",
          "Protective colloid: prevents coagulation of lyophobic colloid",
          "Gold number: mg of protective colloid that prevents coagulation of 10 mL gold sol"
        ]
      },
      {
        title: "Emulsions",
        content: "Emulsions are colloidal solutions of two immiscible liquids. Oil-in-water (O/W): oil dispersed in water (e.g., milk). Water-in-oil (W/O): water dispersed in oil (e.g., butter). Emulsifying agent stabilizes emulsions.",
        keywords: ["emulsion", "O/W", "W/O", "emulsifying agent"],
        points: [
          "O/W emulsion: oil droplets in water (milk, cream)",
          "W/O emulsion: water droplets in oil (butter, vanishing cream)",
          "Emulsifying agent: soap, detergent, proteins",
          "Emulsions can be broken by centrifugation, heating, electrolytes",
          "Dilution test: O/W dilutes with water, W/O dilutes with oil",
          "Conductivity test: O/W conducts, W/O does not"
        ]
      },
      {
        title: "Catalysis",
        content: "Catalysis is phenomenon of increasing rate of reaction by adding a catalyst. Homogeneous: catalyst in same phase as reactants. Heterogeneous: catalyst in different phase. Enzyme catalysis: biological catalysts, specific, efficient.",
        keywords: ["catalysis", "homogeneous catalysis", "heterogeneous catalysis", "enzyme catalysis"],
        points: [
          "Homogeneous: SO2 oxidation by NO (both gases)",
          "Heterogeneous: Haber process (Fe catalyst, gas phase)",
          "Enzyme: highly specific, high efficiency, work at mild conditions",
          "Selectivity: catalyst promotes specific reaction",
          "Promoters increase catalyst activity",
          "Poisons decrease catalyst activity"
        ]
      }
    ],
    definitions: [
      { term: "Adsorption", definition: "Accumulation of molecular species at the surface rather than in the bulk of a substance." },
      { term: "Adsorbent", definition: "The substance on whose surface adsorption occurs." },
      { term: "Adsorbate", definition: "The substance that gets adsorbed on the surface." },
      { term: "Colloid", definition: "Heterogeneous mixture with particle size between 1-1000 nm." },
      { term: "Tyndall Effect", definition: "Scattering of light by colloidal particles when a beam of light passes through a colloidal solution." },
      { term: "Brownian Movement", definition: "Continuous zigzag motion of colloidal particles due to bombardment by molecules of dispersion medium." },
      { term: "Emulsion", definition: "Colloidal solution of two immiscible liquids." },
      { term: "Coagulation", definition: "Process of settling down of colloidal particles." }
    ],
    formulas: [
      {
        name: "Freundlich Adsorption Isotherm",
        formula: "x/m = kP^(1/n)",
        variables: { "x": "mass of adsorbate", "m": "mass of adsorbent", "P": "pressure", "k, n": "constants" },
        example: "For charcoal adsorbing N2 at 25C: x/m = 0.5 x P^(0.5)",
        meaning: "Relates amount of gas adsorbed to pressure at constant temperature"
      },
      {
        name: "Langmuir Adsorption Isotherm",
        formula: "theta = bP/(1 + bP)",
        variables: { "theta": "fraction of surface covered", "P": "pressure", "b": "adsorption constant" },
        example: "At high pressure: theta approx 1 (saturation); At low pressure: theta approx bP (linear)",
        meaning: "Assumes monolayer adsorption on fixed number of sites"
      },
      {
        name: "Freundlich Equation (Logarithmic Form)",
        formula: "log(x/m) = log(k) + (1/n)log(P)",
        variables: { "x/m": "amount adsorbed per unit mass", "P": "pressure", "k, n": "constants" },
        example: "Plot of log(x/m) vs log(P) gives straight line with slope = 1/n",
        meaning: "Linear form for experimental determination of constants"
      }
    ],
    reactions: [
      {
        name: "Preparation of Colloidal Fe(OH)3",
        equation: "FeCl3 + 3H2O -> Fe(OH)3(sol) + 3HCl",
        type: "Hydrolysis",
        condition: "Adding FeCl3 to boiling water",
        note: "Fe(OH)3 sol is positively charged"
      },
      {
        name: "Coagulation of As2S3 by NaCl",
        equation: "As2S3(sol) + NaCl -> As2S3(ppt)",
        type: "Coagulation",
        condition: "Adding electrolyte",
        note: "BaCl2 is more effective than NaCl (higher charge on cation)"
      },
      {
        name: "Haber Process (Catalysis)",
        equation: "N2 + 3H2 <=> 2NH3",
        type: "Heterogeneous catalysis",
        condition: "Fe catalyst, 450C, 200 atm",
        note: "Iron catalyst with K2O and Al2O3 as promoters"
      }
    ],
    derivations: [
      {
        title: "Derivation of Freundlich Adsorption Isotherm",
        steps: [
          "At equilibrium, rate of adsorption = rate of desorption",
          "Rate of adsorption proportional to P x (1-theta) where theta = surface coverage",
          "Rate of desorption proportional to theta",
          "At equilibrium: k1P(1-theta) = k2theta",
          "Solving for theta: theta = k1P/(k2 + k1P)",
          "Divide by k2: theta = (k1/k2)P/(1 + (k1/k2)P) = bP/(1 + bP)"
        ]
      }
    ],
    examples: [
      {
        question: "Differentiate between physisorption and chemisorption.",
        solution: {
          formula: "Compare properties",
          steps: [
            { label: "Feature", text: "Physisorption", math: "Weak van der Waals forces, reversible, low enthalpy (20-40 kJ/mol), not specific" },
            { label: "Feature", text: "Chemisorption", math: "Strong chemical bonds, irreversible, high enthalpy (80-240 kJ/mol), specific" },
            { label: "Temperature", text: "Physisorption decreases", math: "Chemisorption first increases then decreases" }
          ],
          answer: "See comparison above",
          explanation: "The key differences are based on nature of forces, reversibility, and specificity"
        }
      },
      {
        question: "What is Tyndall effect? Explain with examples.",
        solution: {
          formula: "Light scattering",
          steps: [
            { label: "Definition", text: "Scattering of light by colloidal particles", math: "" },
            { label: "Condition", text: "Refractive indices of dispersed phase and medium must differ", math: "" },
            { label: "Examples", text: "Sunlight through dusty room, beam of headlight in fog", math: "" },
            { label: "Application", text: "Distinguish colloidal from true solution", math: "" }
          ],
          answer: "Tyndall effect is scattering of light by colloidal particles",
          explanation: "True solutions do not show Tyndall effect because particles are too small"
        }
      }
    ],
    commonMistakes: [
      { title: "Confusing Adsorption and Absorption", text: "Adsorption is surface phenomenon (accumulates at surface), absorption is bulk phenomenon (occurs throughout volume)." },
      { title: "Wrong Charge on Colloids", text: "Fe(OH)3 sol is positively charged, As2S3 sol is negatively charged. Coagulating ion has opposite charge." },
      { title: "Emulsion Types", text: "O/W: oil in water (milk), dilutes with water. W/O: water in oil (butter), dilutes with oil." },
      { title: "Freundlich Isotherm Limits", text: "Freundlich isotherm is valid at moderate pressures, not at very low or very high pressures." }
    ],
    quickRevision: [
      { title: "Adsorption Types", text: "Physisorption: weak, reversible, non-specific. Chemisorption: strong, irreversible, specific." },
      { title: "Colloid Properties", text: "Tyndall effect, Brownian movement, electrophoresis, coagulation." },
      { title: "Emulsions", text: "O/W: oil in water (milk). W/O: water in oil (butter). Emulsifying agent stabilizes." },
      { title: "Catalysis", text: "Homogeneous: same phase. Heterogeneous: different phase. Enzyme: biological, specific." },
      { title: "Isotherms", text: "Freundlich: x/m = kP^(1/n). Langmuir: theta = bP/(1+bP)." }
    ],
    importantQuestions: [
      { question: "Distinguish between physisorption and chemisorption with examples.", type: "Short Answer" },
      { question: "Explain the Tyndall effect and its applications.", type: "Short Answer" },
      { question: "What are emulsions? How are they classified? Give examples.", type: "Short Answer" },
      { question: "Describe the Freundlich adsorption isotherm.", type: "Long Answer" },
      { question: "Explain homogeneous and heterogeneous catalysis with examples.", type: "Long Answer" }
    ],
    examTips: [
      "Remember particle size range for colloids: 1-1000 nm",
      "Know the difference between lyophilic and lyophobic colloids",
      "Emulsion types: O/W dilutes with water, W/O dilutes with oil",
      "Catalyst does not change equilibrium constant or dG",
      "Freundlich isotherm: log(x/m) vs log(P) plot is linear"
    ]
  },
  {
    id: "isolation",
    title: "General Principles and Processes of Isolation of Elements",
    description: "Study of extraction of metals from minerals, thermodynamic principles, and refining methods.",
    keywords: ["mineral", "ore", "metallurgy", "refining", "thermodynamic principles", "Ellingham diagram"],
    concepts: [
      {
        title: "Occurrence of Metals",
        content: "Metals are found in earth's crust as minerals and ores. A mineral is naturally occurring substance with definite chemical composition. An ore is mineral from which metal can be extracted profitably. The concentration of metal in ore is called grade.",
        keywords: ["mineral", "ore", "gangue", "flux", "slag"],
        points: [
          "Native metals: Au, Ag, Pt found in free state",
          "Sulphide ores: PbS (galena), ZnS (zinc blende)",
          "Oxide ores: Al2O3 (bauxite), Fe2O3 (hematite)",
          "Carbonate ores: CaCO3 (limestone), CuCO3",
          "Gangue: unwanted earthy material in ore",
          "Flux combines with gangue to form slag"
        ]
      },
      {
        title: "Extraction of Metals",
        content: "The process of extracting metals involves: concentration of ore, conversion to oxide, reduction to metal, and refining. The method depends on reactivity of metal. Highly reactive metals are extracted by electrolysis.",
        keywords: ["concentration", "roasting", "smelting", "electrolysis", "thermite process"],
        points: [
          "Hydraulic washing: gravity separation (oxide ores)",
          "Froth flotation: sulphide ores using pine oil",
          "Magnetic separation: magnetic ores",
          "Roasting: heating in air (sulphide ores)",
          "Smelting: reduction with carbon in furnace",
          "Electrolysis: reactive metals (Na, K, Al, Mg)"
        ]
      },
      {
        title: "Thermodynamic Principles",
        content: "Ellingham diagram plots dG0 vs T for formation of oxides. It helps determine: temperature at which reduction becomes feasible, which reducing agent to use, and stability of oxides. Lower dG0 means more stable oxide.",
        keywords: ["Ellingham diagram", "Gibbs energy", "reduction", "stability"],
        points: [
          "More negative dG0 means more stable oxide",
          "Line below another means can reduce that oxide",
          "Carbon line crosses metal oxide line means reduction feasible",
          "Aluminum can reduce many metal oxides (thermite)",
          "Carbon reduction feasible at high temperatures",
          "At intersection point: dG0 = 0, equilibrium"
        ]
      },
      {
        title: "Refining Methods",
        content: "Refining purifies impure metals. Methods include: distillation (low boiling metals), liquation (low melting metals), electrolytic refining (most metals), zone refining (semiconductors), vapor phase refining (Ni, Ti).",
        keywords: ["distillation", "liquation", "electrolytic refining", "zone refining", "vapor phase"],
        points: [
          "Distillation: Zn, Hg (low boiling points)",
          "Liquation: Sn, Pb (low melting points)",
          "Electrolytic: Cu, Zn, Al (most common)",
          "Zone refining: Si, Ge (semiconductors)",
          "Mond process: Ni purification (Ni + CO -> Ni(CO)4)",
          "Van Arkel process: Ti, Zr purification"
        ]
      }
    ],
    definitions: [
      { term: "Mineral", definition: "Naturally occurring substance with definite chemical composition." },
      { term: "Ore", definition: "Mineral from which metal can be extracted profitably." },
      { term: "Gangue", definition: "Unwanted earthy or rocky material present in ore." },
      { term: "Flux", definition: "Substance added to combine with gangue and form fusible slag." },
      { term: "Slag", definition: "Fusible product formed by combination of flux with gangue." },
      { term: "Roasting", definition: "Heating of sulphide ore in air to convert it to oxide." },
      { term: "Smelting", definition: "Reduction of metal oxide to metal in a furnace with carbon or CO." },
      { term: "Ellingham Diagram", definition: "Graphical representation of variation of standard Gibbs energy of formation of oxides with temperature." }
    ],
    formulas: [
      {
        name: "Gibbs Energy Change",
        formula: "dG0 = dH0 - TdS0",
        variables: { "dG0": "standard Gibbs energy change", "dH0": "standard enthalpy change", "T": "temperature (K)", "dS0": "standard entropy change" },
        example: "For oxidation of Zn: dG0 = -350 kJ at 298K",
        meaning: "Determines spontaneity of reaction at given temperature"
      },
      {
        name: "Ellingham Diagram Equation",
        formula: "dG0 = dH0 - TdS0",
        variables: { "dG0": "Gibbs energy of formation", "T": "temperature" },
        example: "At intersection of C and ZnO lines: carbon can reduce ZnO",
        meaning: "Line with more negative dG0 can reduce oxide above it"
      }
    ],
    reactions: [
      {
        name: "Roasting of Zinc Blende",
        equation: "2ZnS + 3O2 -> 2ZnO + 2SO2",
        type: "Roasting",
        condition: "Heating in air",
        note: "SO2 is used for H2SO4 production"
      },
      {
        name: "Smelting of Zinc Oxide",
        equation: "ZnO + C -> Zn + CO",
        type: "Reduction",
        condition: "High temperature in furnace",
        note: "Carbon acts as reducing agent"
      },
      {
        name: "Thermite Process",
        equation: "Fe2O3 + 2Al -> 2Fe + Al2O3",
        type: "Reduction",
        condition: "Ignition with Mg ribbon",
        note: "Exothermic reaction, produces molten iron"
      },
      {
        name: "Mond Process for Nickel",
        equation: "Ni + 4CO -> Ni(CO)4",
        type: "Vapor phase refining",
        condition: "60-80C, 1 atm",
        note: "Ni(CO)4 decomposes at 200C to give pure Ni"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "Explain the extraction of aluminum from bauxite.",
        solution: {
          formula: "Electrolysis",
          steps: [
            { label: "Step 1", text: "Purification of bauxite (Bayer process)", math: "Al2O3 + 2NaOH -> 2NaAlO2 + H2O" },
            { label: "Step 2", text: "Digestion with Na2CO3", math: "NaAlO2 + 2H2O -> Al(OH)3 + NaOH" },
            { label: "Step 3", text: "Calcination", math: "2Al(OH)3 -> Al2O3 + 3H2O" },
            { label: "Step 4", text: "Electrolysis of molten Al2O3 in cryolite", math: "2Al2O3 -> 4Al + 3O2" }
          ],
          answer: "Pure aluminum is obtained at cathode",
          explanation: "Cryolite (Na3AlF6) lowers melting point of Al2O3 from 2050C to 950C"
        }
      }
    ],
    commonMistakes: [
      { title: "Confusing Mineral and Ore", text: "All ores are minerals, but not all minerals are ores. Ore is mineral from which metal can be extracted profitably." },
      { title: "Wrong Flux Selection", text: "Acidic flux (SiO2) for basic gangue, basic flux (CaO, MgO) for acidic gangue." },
      { title: "Roasting vs Smelting", text: "Roasting: heating in air (oxidation). Smelting: reduction with carbon." }
    ],
    quickRevision: [
      { title: "Ore Types", text: "Sulphide (ZnS), Oxide (Al2O3), Carbonate (CaCO3), Halide (NaCl)" },
      { title: "Extraction Steps", text: "Concentration -> Conversion to oxide -> Reduction -> Refining" },
      { title: "Roasting", text: "2ZnS + 3O2 -> 2ZnO + 2SO2 (sulphide to oxide)" },
      { title: "Smelting", text: "ZnO + C -> Zn + CO (oxide to metal with carbon)" },
      { title: "Refining", text: "Electrolytic (Cu, Al), Zone (Si, Ge), Mond (Ni), Van Arkel (Ti)" }
    ],
    importantQuestions: [
      { question: "What is the difference between a mineral and an ore?", type: "Short Answer" },
      { question: "Explain the Ellingham diagram and its applications.", type: "Long Answer" },
      { question: "Describe the extraction of aluminum from bauxite.", type: "Long Answer" },
      { question: "What is the Mond process? Write the reactions involved.", type: "Short Answer" },
      { question: "Explain the role of flux in metallurgy.", type: "Short Answer" }
    ],
    examTips: [
      "Remember: Roasting = oxidation in air, Smelting = reduction with carbon",
      "Ellingham diagram: lower line can reduce upper line's oxide",
      "Cryolite is used to lower melting point of Al2O3",
      "Zone refining works on principle of fractional crystallization",
      "Know specific ores for important metals"
    ]
  },
  {
    id: "p-block",
    title: "p-Block Elements",
    description: "Chemistry of Group 15, 16, 17, and 18 elements including preparation, properties, and compounds.",
    keywords: ["p-block", "Group 15", "Group 16", "Group 17", "Group 18", "nitrogen", "oxygen", "halogens", "noble gases"],
    concepts: [
      {
        title: "Group 15 Elements (Nitrogen Family)",
        content: "Group 15 includes N, P, As, Sb, Bi. Common oxidation states: -3, +3, +5. Nitrogen forms p-pi bonds due to small size. Down the group, +3 state becomes more stable than +5 due to inert pair effect.",
        keywords: ["nitrogen", "phosphorus", "oxidation states", "inert pair effect"],
        points: [
          "N2: triple bond, very stable, inert at room temperature",
          "NH3: pyramidal, H-bonding, Lewis base",
          "HNO3: strong oxidizing acid, acts as both acid and oxidant",
          "P4: tetrahedral, white phosphorus (reactive), red phosphorus (stable)",
          "H3PO4: tribasic acid, weak oxidizing agent",
          "Down the group: +3 state more stable than +5 (inert pair effect)"
        ]
      },
      {
        title: "Group 16 Elements (Oxygen Family)",
        content: "Group 16 includes O, S, Se, Te, Po. Common oxidation states: -2, +4, +6. Oxygen shows anomalous behavior due to small size and high electronegativity. Sulfur shows catenation and multiple bonding.",
        keywords: ["oxygen", "sulfur", "sulphuric acid", "catenation"],
        points: [
          "O2: paramagnetic, double bond, essential for life",
          "O3: ozone, bent molecule, powerful oxidizing agent",
          "H2O: bent, H-bonding, universal solvent",
          "H2S: weak acid, reducing agent, rotten egg smell",
          "H2SO4: dibasic, strong acid, dehydrating agent, oxidizing agent",
          "SO2: reducing agent, bleach, used in H2SO4 manufacture"
        ]
      },
      {
        title: "Group 17 Elements (Halogens)",
        content: "Group 17 includes F, Cl, Br, I, At. Most electronegative elements. Common oxidation states: -1, +1, +3, +5, +7. F shows only -1 state. Strength of halogens as oxidizing agents decreases down the group.",
        keywords: ["fluorine", "chlorine", "halogens", "hydrogen halides", "interhalogen"],
        points: [
          "F2: strongest oxidizing agent, reacts with noble gases",
          "Cl2: greenish-yellow gas, bleaching agent",
          "HCl: strong acid, used in laboratory",
          "HF: weak acid (H-bonding), etches glass",
          "HClO4: strongest oxoacid, powerful oxidizing agent",
          "Interhalogen compounds: XY, XY3, XY5, XY7"
        ]
      },
      {
        title: "Group 18 Elements (Noble Gases)",
        content: "Group 18 includes He, Ne, Ar, Kr, Xe, Rn. Complete octet, very low reactivity. Xe forms compounds with F and O. He has lowest boiling point of all elements.",
        keywords: ["noble gases", "xenon compounds", "inert gases"],
        points: [
          "He: lightest noble gas, used in balloons, MRI machines",
          "Ne: used in neon signs, discharge tubes",
          "Ar: most abundant in atmosphere (0.93%)",
          "XeF2, XeF4, XeF6: xenon fluorides",
          "XeO3: powerful explosive, tetrahedral",
          "Kr and Xe: used in lighting and anesthesia"
        ]
      }
    ],
    definitions: [
      { term: "Inert Pair Effect", definition: "Tendency of ns2 electrons to remain inert in heavier p-block elements, making +2 oxidation state more stable than expected." },
      { term: "Catenation", definition: "Ability of an element to form chains of identical atoms bonded to each other." },
      { term: "Interhalogen Compound", definition: "Compound formed between two different halogen atoms." },
      { term: "Peroxide", definition: "Compound containing O-O single bond (e.g., H2O2, Na2O2)." },
      { term: "Superoxide", definition: "Compound containing O2- ion (e.g., KO2)." },
      { term: "Oxoacid", definition: "Acid containing oxygen, hydrogen, and another element." }
    ],
    formulas: [
      {
        name: "Ammonia Preparation",
        formula: "2NH4Cl + Ca(OH)2 -> CaCl2 + 2NH3 + 2H2O",
        variables: {},
        example: "Laboratory preparation of ammonia",
        meaning: "Heating ammonium salt with base produces ammonia"
      },
      {
        name: "Contact Process",
        formula: "2SO2 + O2 <=> 2SO3",
        variables: {},
        example: "Industrial production of sulfur trioxide",
        meaning: "Catalyzed by V2O5 at 450C, 2 atm"
      },
      {
        name: "Ostwald Process",
        formula: "4NH3 + 5O2 -> 4NO + 6H2O",
        variables: {},
        example: "Production of nitric acid from ammonia",
        meaning: "Catalyzed by Pt-Rh gauze at 800C"
      },
      {
        name: "Downs Process",
        formula: "2NaCl(l) -> 2Na(l) + Cl2(g)",
        variables: {},
        example: "Industrial preparation of sodium",
        meaning: "Electrolysis of molten NaCl with CaCl2"
      }
    ],
    reactions: [
      {
        name: "Ammonia with Copper Oxide",
        equation: "2NH3 + 3CuO -> 3Cu + N2 + 3H2O",
        type: "Reduction",
        condition: "Heating",
        note: "Ammonia acts as reducing agent"
      },
      {
        name: "Chlorine with NaOH",
        equation: "Cl2 + 2NaOH -> NaCl + NaOCl + H2O",
        type: "Disproportionation",
        condition: "Cold, dilute NaOH",
        note: "Produces bleaching powder component"
      },
      {
        name: "Sulfuric Acid with Copper",
        equation: "Cu + 2H2SO4(conc) -> CuSO4 + SO2 + 2H2O",
        type: "Oxidation",
        condition: "Concentrated H2SO4, heating",
        note: "H2SO4 acts as oxidizing agent"
      },
      {
        name: "Xenon with Fluorine",
        equation: "Xe + 2F2 -> XeF4",
        type: "Synthesis",
        condition: "6 atm pressure, 400C",
        note: "XeF4 is square planar"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "How is ammonia prepared in the laboratory? Write the reactions.",
        solution: {
          formula: "Heating NH4Cl with Ca(OH)2",
          steps: [
            { label: "Step 1", text: "Mix NH4Cl and Ca(OH)2", math: "2NH4Cl + Ca(OH)2 -> CaCl2 + 2NH3 + 2H2O" },
            { label: "Step 2", text: "Collect by downward displacement of water", math: "" },
            { label: "Step 3", text: "Dry over quicklime (CaO)", math: "" }
          ],
          answer: "Ammonia is collected by downward displacement of water",
          explanation: "CaO absorbs water, does not react with NH3"
        }
      },
      {
        question: "Explain the structure of sulfuric acid.",
        solution: {
          formula: "H2SO4 structure",
          steps: [
            { label: "Step 1", text: "S is central atom with sp3 hybridization", math: "" },
            { label: "Step 2", text: "Two S-OH bonds and two S=O bonds", math: "" },
            { label: "Step 3", text: "Tetrahedral geometry around S", math: "" },
            { label: "Step 4", text: "Dibasic acid due to two replaceable H atoms", math: "" }
          ],
          answer: "H2SO4 is tetrahedral with S as central atom",
          explanation: "Resonance between S=O bonds makes it strong acid"
        }
      }
    ],
    commonMistakes: [
      { title: "Nitrogen vs Phosphorus", text: "N2 is inert due to triple bond, P4 is reactive due to strained structure. N does not form pentahalides, P does." },
      { title: "Oxidation States", text: "N shows +5 (HNO3) but P shows +5 more commonly. F only shows -1, never positive." },
      { title: "HF vs HCl Acidity", text: "HF is weak acid (H-bonding), HCl is strong acid. Don't assume F being most electronegative makes HF strongest acid." },
      { title: "Noble Gas Compounds", text: "Only Xe forms stable compounds with F and O. He, Ne, Ar do not form compounds." }
    ],
    quickRevision: [
      { title: "Group 15", text: "N, P, As, Sb, Bi. +3 and +5 states. NH3: pyramidal. HNO3: strong oxidizing acid." },
      { title: "Group 16", text: "O, S, Se, Te, Po. -2, +4, +6 states. H2SO4: dibasic, dehydrating, oxidizing agent." },
      { title: "Group 17", text: "F, Cl, Br, I. -1, +1, +3, +5, +7 states. F strongest oxidizing agent. HF weak acid." },
      { title: "Group 18", text: "He, Ne, Ar, Kr, Xe, Rn. Inert, complete octet. Xe forms XeF2, XeF4, XeF6." },
      { title: "Key Compounds", text: "NH3, HNO3, H2SO4, HCl, HF, HClO4. Know preparation and properties." }
    ],
    importantQuestions: [
      { question: "Compare the structures of H2O and H2S.", type: "Short Answer" },
      { question: "How is sulfuric acid manufactured by Contact process?", type: "Long Answer" },
      { question: "Explain the anomalous behavior of nitrogen.", type: "Long Answer" },
      { question: "Why does HF have low boiling point but high bond energy?", type: "Conceptual" },
      { question: "Describe the preparation and properties of xenon fluorides.", type: "Long Answer" }
    ],
    examTips: [
      "Remember: F is most electronegative but HF is weak acid",
      "N2 is inert, P4 is reactive - understand why",
      "H2SO4 properties: acid, dehydrating agent, oxidizing agent",
      "Noble gases: only Xe forms compounds with F and O",
      "Practice reactions of HNO3 as oxidizing agent"
    ]
  },
  {
    id: "d-block",
    title: "d and f Block Elements",
    description: "Chemistry of transition metals, lanthanides, and actinides including electronic configuration, properties, and compounds.",
    keywords: ["transition metals", "d-block", "lanthanides", "actinides", "inner transition metals", "variable oxidation states"],
    concepts: [
      {
        title: "Electronic Configuration",
        content: "d-block elements: (n-1)d1-10 ns1-2. They show variable oxidation states due to involvement of (n-1)d and ns electrons. Lanthanides: [Xe]4f1-145d0-16s2. Actinides: [Rn]5f1-146d0-17s2.",
        keywords: ["electronic configuration", "variable oxidation states", "lanthanide contraction"],
        points: [
          "d-block: (n-1)d1-10 ns1-2",
          "Maximum oxidation state = sum of ns and (n-1)d electrons",
          "Mn shows +7 (3d54s2), Fe shows +6 (3d64s2)",
          "Lanthanides: mostly +3 oxidation state",
          "Actinides: more variable oxidation states (+3 to +7)",
          "Lanthanide contraction: decrease in size from La to Lu"
        ]
      },
      {
        title: "Properties of Transition Metals",
        content: "Transition metals show: variable oxidation states, colored compounds, catalytic activity, paramagnetism, complex formation, interstitial compounds, alloy formation. These properties arise from partially filled d orbitals.",
        keywords: ["colored compounds", "catalytic activity", "paramagnetism", "complex formation"],
        points: [
          "Colors due to d-d transitions (crystal field splitting)",
          "Catalytic activity due to variable oxidation states",
          "Paramagnetism due to unpaired electrons",
          "Complex formation due to vacant d orbitals",
          "High melting points and boiling points",
          "Hard and strong metals"
        ]
      },
      {
        title: "Lanthanides",
        content: "Lanthanides (4f series): La to Lu, 14 elements. Common oxidation state: +3. Show lanthanide contraction. Used in magnets (Nd2Fe14B), phosphors (Eu, Tb), catalysts (Ce).",
        keywords: ["lanthanides", "lanthanide contraction", "4f elements", "mischmetal"],
        points: [
          "Lanthanide contraction: decrease in atomic/ionic radius",
          "Cause: poor shielding by 4f electrons",
          "Result: similar size of 2nd and 3rd row transition metals",
          "Ce4+ and Eu2+ are stable due to empty/half-filled f orbitals",
          "Lanthanides are soft, silvery white metals",
          "They tarnish rapidly in air"
        ]
      },
      {
        title: "Actinides",
        content: "Actinides (5f series): Ac to Lr, 14 elements. Radioactive, man-made (except Th, U). More variable oxidation states than lanthanides. Actinide contraction similar to lanthanide contraction but more pronounced.",
        keywords: ["actinides", "5f elements", "radioactive", "transuranium elements"],
        points: [
          "First half: show multiple oxidation states",
          "Second half: +3 becomes more common",
          "Uranium: most important, used as fuel",
          "Plutonium: used in nuclear weapons",
          "Actinide contraction greater than lanthanide contraction",
          "All actinides are radioactive"
        ]
      }
    ],
    definitions: [
      { term: "Transition Metal", definition: "Element with partially filled d orbitals in its atoms or common ions." },
      { term: "Lanthanide Contraction", definition: "Gradual decrease in atomic and ionic radii of lanthanides with increasing atomic number." },
      { term: "Interstitial Compound", definition: "Compound where small atoms occupy interstitial sites in metal lattice." },
      { term: "Alloy", definition: "Homogeneous mixture of two or more metals." },
      { term: "Crystal Field Splitting", definition: "Breaking of degeneracy of d orbitals in presence of ligands." },
      { term: "Mischmetal", definition: "Alloy containing approx 95% Ce, approx 5% La, and other rare earths." }
    ],
    formulas: [
      {
        name: "Magnetic Moment",
        formula: "mu = sqrt(n(n+2)) BM",
        variables: { "mu": "magnetic moment", "n": "number of unpaired electrons", "BM": "Bohr magneton" },
        example: "Fe2+ (3d6): n=4, mu = sqrt(4x6) = 4.9 BM",
        meaning: "Calculates magnetic moment from number of unpaired electrons"
      },
      {
        name: "Lanthanide Contraction",
        formula: "r(La3+) > r(Ce3+) > r(Pr3+) > ... > r(Lu3+)",
        variables: {},
        example: "r(La3+) = 1.061 A, r(Lu3+) = 0.848 A",
        meaning: "Ionic radius decreases across the series"
      }
    ],
    reactions: [
      {
        name: "Preparation of Potassium Dichromate",
        equation: "2FeCr2O7 + 4K2CO3 + 7O2 -> 2K2Cr2O7 + 2Fe2O3 + 4CO2",
        type: "Oxidation",
        condition: "Roasting with K2CO3",
        note: "Orange crystals of K2Cr2O7"
      },
      {
        name: "Preparation of KMnO4",
        equation: "2MnO2 + 4KOH + O2 -> 2K2MnO4 + 2H2O",
        type: "Oxidation",
        condition: "Fusion in air",
        note: "K2MnO4 is oxidized to KMnO4"
      },
      {
        name: "MnO4- in Acidic Medium",
        equation: "2MnO4- + 16H+ + 10Cl- -> 2Mn2+ + 5Cl2 + 8H2O",
        type: "Redox",
        condition: "Acidic solution",
        note: "MnO4- is powerful oxidizing agent"
      },
      {
        name: "Cr2O72- in Acidic Medium",
        equation: "Cr2O72- + 14H+ + 6e- -> 2Cr3+ + 7H2O",
        type: "Reduction",
        condition: "Acidic solution",
        note: "Orange to green color change"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "Why do transition metals show variable oxidation states?",
        solution: {
          formula: "Electronic configuration",
          steps: [
            { label: "Reason", text: "Very small energy difference between (n-1)d and ns orbitals", math: "" },
            { label: "Evidence", text: "Mn shows +2 to +7 (3d54s2)", math: "" },
            { label: "Trend", text: "Maximum oxidation state decreases across the period", math: "" },
            { label: "Example", text: "Fe: +2, +3, +6; Co: +2, +3; Ni: +2", math: "" }
          ],
          answer: "Variable oxidation states due to small energy difference between (n-1)d and ns electrons",
          explanation: "Both sets of electrons can participate in bonding"
        }
      },
      {
        question: "Explain the cause of lanthanide contraction.",
        solution: {
          formula: "Poor shielding",
          steps: [
            { label: "Cause", text: "Poor shielding of 4f electrons", math: "" },
            { label: "Effect", text: "Effective nuclear charge increases", math: "" },
            { label: "Result", text: "Atomic/ionic radius decreases", math: "" },
            { label: "Consequence", text: "Similar size of 2nd and 3rd row transition metals", math: "" }
          ],
          answer: "Lanthanide contraction is due to poor shielding of 4f electrons",
          explanation: "4f electrons have irregular shapes, poor at shielding"
        }
      }
    ],
    commonMistakes: [
      { title: "Mn Maximum Oxidation", text: "Mn shows +7 in KMnO4 (3d54s2), not +8. Maximum oxidation state = ns + (n-1)d electrons." },
      { title: "Lanthanide vs Actinide", text: "Lanthanides: mostly +3, less variable. Actinides: more variable oxidation states." },
      { title: "Color Origin", text: "Colors in transition metals are due to d-d transitions, not f-f transitions (lanthanides)." },
      { title: "Ce4+ Stability", text: "Ce4+ is stable because it has empty 4f orbital (4f0), not because of half-filled." }
    ],
    quickRevision: [
      { title: "d-Block Config", text: "(n-1)d1-10 ns1-2. Variable oxidation states, colored, paramagnetic." },
      { title: "Lanthanides", text: "4f series, +3 state, lanthanide contraction, used in magnets and phosphors." },
      { title: "Actinides", text: "5f series, radioactive, more variable oxidation states, U and Pu important." },
      { title: "Key Compounds", text: "KMnO4 (purple), K2Cr2O7 (orange), FeSO4 (green), CuSO4 (blue)." },
      { title: "Magnetic Moment", text: "mu = sqrt(n(n+2)) BM. Higher n means higher magnetic moment." }
    ],
    importantQuestions: [
      { question: "Why do transition metals show variable oxidation states?", type: "Short Answer" },
      { question: "Explain lanthanide contraction and its consequences.", type: "Long Answer" },
      { question: "Compare the properties of lanthanides and actinides.", type: "Long Answer" },
      { question: "How is KMnO4 prepared? Write its reactions in acidic and alkaline medium.", type: "Long Answer" },
      { question: "Why are interstitial compounds hard and have high melting points?", type: "Conceptual" }
    ],
    examTips: [
      "Mn shows +7 maximum, Fe shows +6 maximum",
      "Lanthanide contraction affects size of 2nd and 3rd row transition metals",
      "Know preparation and properties of KMnO4 and K2Cr2O7",
      "Magnetic moment formula: mu = sqrt(n(n+2)) BM",
      "Transition metals are good catalysts due to variable oxidation states"
    ]
  },
  {
    id: "coordination",
    title: "Coordination Compounds",
    description: "Study of complex compounds including Werner's theory, bonding, isomerism, and crystal field theory.",
    keywords: ["coordination compound", "complex", "ligand", "Werner's theory", "CFT", "isomerism", "chelate"],
    concepts: [
      {
        title: "Werner's Theory",
        content: "Werner's theory explains structure of coordination compounds. Central metal atom shows two types of valencies: primary (ionizable, satisfied by anions) and secondary (non-ionizable, satisfied by ligands). Coordination number determines geometry.",
        keywords: ["primary valency", "secondary valency", "coordination number", "Werner's theory"],
        points: [
          "Primary valency: ionizable, shown by counter ions",
          "Secondary valency: non-ionizable, shown by ligands",
          "Coordination number = number of ligand donor atoms",
          "CN = 2: linear, CN = 4: tetrahedral/square planar",
          "CN = 6: octahedral (most common)",
          "Complex ion: [Cu(NH3)4]2+, counter ion: SO42-"
        ]
      },
      {
        title: "Nomenclature",
        content: "IUPAC nomenclature follows rules: ligands named first (alphabetical order), then central metal. Anionic ligands end in 'o' (chloro, sulphato). Neutral ligands named as molecules (H2O: aqua, NH3: ammine).",
        keywords: ["nomenclature", "IUPAC naming", "ligand naming", "complex naming"],
        points: [
          "Ligands: anionic (-o), neutral (as is), cationic (+ium)",
          "Order: anionic, then neutral, then cationic ligands",
          "Central metal: ends in '-ate' if complex is anionic",
          "Prefixes: di, tri, tetra (for 4 or less), bis, tris, tetrakis (for more than 4 or complex ligands)",
          "Oxidation state in Roman numerals in parentheses",
          "Example: K3[Fe(CN)6] = Potassium hexacyanidoferrate(III)"
        ]
      },
      {
        title: "Bonding in Coordination Compounds",
        content: "Valence Bond Theory: metal uses inner or outer orbitals for hybridization. Inner orbital complexes use (n-1)d orbitals (d2sp3). Outer orbital complexes use nd orbitals (sp3d2). Crystal Field Theory: ligands cause splitting of d orbitals.",
        keywords: ["VBT", "CFT", "hybridization", "crystal field splitting", "spectrochemical series"],
        points: [
          "VBT: d2sp3 (inner, octahedral), sp3d2 (outer, octahedral)",
          "VBT: dsp2 (square planar), sp3 (tetrahedral)",
          "CFT: d orbitals split into t2g and eg in octahedral field",
          "Spectrochemical series: I- < Br- < Cl- < F- < OH- < H2O < NH3 < CN- < CO",
          "Strong field ligands: low spin, large delta_o",
          "Weak field ligands: high spin, small delta_o"
        ]
      },
      {
        title: "Isomerism",
        content: "Coordination compounds show two types of isomerism: structural (ionization, hydrate, linkage, coordination) and stereoisomerism (geometrical, optical).",
        keywords: ["isomerism", "geometrical isomerism", "optical isomerism", "structural isomerism"],
        points: [
          "Ionization: [Co(NH3)5Br]SO4 vs [Co(NH3)5SO4]Br",
          "Hydrate: [Co(NH3)5H2O]Cl3 vs [Co(NH3)5Cl]Cl2.H2O",
          "Linkage: -NO2 (nitro) vs -ONO (nitrito)",
          "Coordination: [Co(NH3)6][Cr(CN)6] vs [Cr(NH3)6][Co(CN)6]",
          "Geometrical: cis (adjacent) vs trans (opposite)",
          "Optical: non-superimposable mirror images (chirality)"
        ]
      },
      {
        title: "Applications",
        content: "Coordination compounds are used in: analytical chemistry (complexometric titrations), metallurgy (extraction of Au, Ag), biological systems (hemoglobin, chlorophyll), medicine (cisplatin as anticancer), photography.",
        keywords: ["applications", "biological importance", "analytical chemistry", "metallurgy"],
        points: [
          "EDTA: hexadentate ligand, used in complexometric titrations",
          "Hemoglobin: Fe2+ complex with porphyrin",
          "Chlorophyll: Mg2+ complex with porphyrin",
          "Vitamin B12: Co3+ complex",
          "Cisplatin: cis-[Pt(NH3)2Cl2] anticancer drug",
          "AgCN- used in electroplating"
        ]
      }
    ],
    definitions: [
      { term: "Coordination Compound", definition: "Compound containing central metal atom/ion bonded to ligands forming complex ion." },
      { term: "Ligand", definition: "Molecule or ion that donates electron pair to central metal atom/ion." },
      { term: "Coordination Number", definition: "Number of ligand donor atoms directly bonded to central metal." },
      { term: "Chelate", definition: "Complex formed by polydentate ligand forming ring structure with metal." },
      { term: "Spectrochemical Series", definition: "Arrangement of ligands in increasing order of crystal field splitting." },
      { term: "Crystal Field Splitting", definition: "Breaking of degeneracy of d orbitals in presence of ligands." }
    ],
    formulas: [
      {
        name: "Crystal Field Splitting Energy",
        formula: "delta_o = 10Dq",
        variables: { "delta_o": "crystal field splitting energy", "Dq": "unit of splitting" },
        example: "For [Ti(H2O)6]3+: delta_o = 243 kJ/mol (absorbs green light, appears purple)",
        meaning: "Energy difference between t2g and eg orbitals"
      },
      {
        name: "CFSE Calculation",
        formula: "CFSE = (-0.4x + 0.6y)delta_o + P",
        variables: { "x": "electrons in t2g", "y": "electrons in eg", "P": "pairing energy" },
        example: "For d6 low spin: CFSE = (-0.4x6 + 0.6x0)delta_o + 2P = -2.4delta_o + 2P",
        meaning: "Crystal Field Stabilization Energy"
      }
    ],
    reactions: [
      {
        name: "Test for Fe3+ with SCN-",
        equation: "Fe3+ + 6SCN- -> [Fe(SCN)6]3-",
        type: "Complex formation",
        condition: "In solution",
        note: "Blood red color confirms Fe3+"
      },
      {
        name: "Test for Cu2+ with NH3",
        equation: "Cu2+ + 4NH3 -> [Cu(NH3)4]2+",
        type: "Complex formation",
        condition: "Excess ammonia",
        note: "Deep blue color confirms Cu2+"
      },
      {
        name: "Test for Ni2+ with DMG",
        equation: "Ni2+ + 2DMG -> [Ni(DMG)2]",
        type: "Chelate formation",
        condition: "In ammoniacal solution",
        note: "Rose red precipitate confirms Ni2+"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "Write the IUPAC name of K3[Fe(CN)6].",
        solution: {
          formula: "Naming rules",
          steps: [
            { label: "Step 1", text: "Identify counter ion: K+", math: "Potassium" },
            { label: "Step 2", text: "Identify ligands: CN-", math: "hexacyanido" },
            { label: "Step 3", text: "Identify central metal: Fe", math: "ferrate" },
            { label: "Step 4", text: "Determine oxidation state", math: "3(+1) + x + 6(-1) = 0 gives x = +3" }
          ],
          answer: "Potassium hexacyanidoferrate(III)",
          explanation: "Complex is anionic, so metal name ends in '-ate'"
        }
      },
      {
        question: "Explain geometrical isomerism in [Co(NH3)4Cl2]+.",
        solution: {
          formula: "cis-trans isomerism",
          steps: [
            { label: "cis", text: "Cl ligands adjacent (90 degrees)", math: "Less stable, more polar" },
            { label: "trans", text: "Cl ligands opposite (180 degrees)", math: "More stable, less polar" },
            { label: "Properties", text: "Different colors, dipole moments", math: "" }
          ],
          answer: "Exists as cis (violet) and trans (green) isomers",
          explanation: "Geometrical isomerism occurs in square planar and octahedral complexes"
        }
      }
    ],
    commonMistakes: [
      { title: "Werner's Valencies", text: "Primary valency = ionizable (counter ions), Secondary valency = non-ionizable (ligands). Don't confuse them." },
      { title: "Nomenclature Order", text: "Ligands named first (alphabetical), then metal. If complex is anionic, metal name ends in '-ate'." },
      { title: "cis vs trans", text: "cis: ligands adjacent (90 degrees), trans: ligands opposite (180 degrees). cis has higher dipole moment." },
      { title: "Strong vs Weak Field", text: "Strong field means low spin, large delta_o. Weak field means high spin, small delta_o." }
    ],
    quickRevision: [
      { title: "Coordination Number", text: "CN = number of donor atoms bonded to metal. CN=2: linear, CN=4: tetrahedral/square planar, CN=6: octahedral." },
      { title: "Ligand Types", text: "Monodentate: 1 donor. Bidentate: 2 (en, ox). Tetradentate: 4. Hexadentate: 6 (EDTA)." },
      { title: "CFT Splitting", text: "Octahedral: t2g (lower) and eg (higher). Tetrahedral: e (lower) and t2 (higher)." },
      { title: "Isomerism", text: "Structural: ionization, hydrate, linkage, coordination. Stereo: geometrical, optical." },
      { title: "Applications", text: "EDTA titrations, hemoglobin, chlorophyll, cisplatin, electroplating." }
    ],
    importantQuestions: [
      { question: "State Werner's theory of coordination compounds.", type: "Short Answer" },
      { question: "Write IUPAC names of: (i) [Co(NH3)6]Cl3 (ii) K4[Fe(CN)6] (iii) [Pt(NH3)2Cl2]", type: "Short Answer" },
      { question: "Explain crystal field theory with diagram for octahedral complexes.", type: "Long Answer" },
      { question: "Differentiate between geometrical and optical isomerism.", type: "Long Answer" },
      { question: "Describe the biological importance of coordination compounds.", type: "Long Answer" }
    ],
    examTips: [
      "Know IUPAC naming rules thoroughly",
      "Remember spectrochemical series for crystal field splitting",
      "Practice drawing cis and trans isomers",
      "EDTA is hexadentate ligand, forms 1:1 complex",
      "Know biological examples: hemoglobin, chlorophyll, vitamin B12"
    ]
  },
  {
    id: "haloalkanes",
    title: "Haloalkanes and Haloarenes",
    description: "Study of alkyl and aryl halides - nomenclature, preparation, reactions, and Grignard reagent.",
    keywords: ["haloalkane", "haloarene", "Grignard reagent", "nucleophilic substitution", "elimination"],
    concepts: [
      {
        title: "Nomenclature and Classification",
        content: "Haloalkanes: R-X (alkyl halides). Haloarenes: Ar-X (aryl halides). Classified as mono, di, tri halogenated. Also by type of carbon: primary, secondary, tertiary. IUPAC: halo prefix + alkane name.",
        keywords: ["nomenclature", "classification", "alkyl halide", "aryl halide"],
        points: [
          "Primary (1 deg): X on primary carbon (CH3CH2Cl)",
          "Secondary (2 deg): X on secondary carbon ((CH3)2CHCl)",
          "Tertiary (3 deg): X on tertiary carbon ((CH3)3CCl)",
          "IUPAC: chloromethane, bromoethane, 2-chloropropane",
          "Common: ethyl chloride, isopropyl chloride, tert-butyl chloride",
          "Fluoro > chloro > bromo > iodo (in reactivity)"
        ]
      },
      {
        title: "Preparation Methods",
        content: "Haloalkanes can be prepared from: alcohols (with HX, PX3, PX5, SOCl2), alkenes (HX addition), hydrocarbons (free radical halogenation). Grignard reagent formation requires dry conditions.",
        keywords: ["preparation", "alcohol to haloalkane", "addition to alkene", "Grignard reagent"],
        points: [
          "ROH + HX -> RX + H2O (HCl needs ZnCl2, HBr/HI direct)",
          "ROH + PCl3 -> RCl + H3PO3",
          "ROH + SOCl2 -> RCl + SO2 + HCl (best method)",
          "R2C=CR2 + HX -> R2CX-CRH (Markovnikov addition)",
          "Mg + RX (dry ether) -> RMgX (Grignard reagent)",
          "Free radical: CH4 + Cl2 -> CH3Cl + HCl (UV light)"
        ]
      },
      {
        title: "Nucleophilic Substitution",
        content: "Haloalkanes undergo nucleophilic substitution: SN1 (unimolecular, two-step, carbocation intermediate) and SN2 (bimolecular, one-step, backside attack). Tertiary halides favor SN1, primary favor SN2.",
        keywords: ["SN1", "SN2", "nucleophilic substitution", "carbocation", "backside attack"],
        points: [
          "SN1: R-X -> R+ + X- -> R-Nu (two steps)",
          "SN2: Nu- + R-X -> [Nu...R...X]- -> Nu-R + X- (one step)",
          "SN1: rate = k[RX], first order",
          "SN2: rate = k[RX][Nu-], second order",
          "SN1: racemization (planar carbocation)",
          "SN2: inversion of configuration (backside attack)"
        ]
      },
      {
        title: "Elimination Reactions",
        content: "Dehydrohalogenation: removal of HX to form alkene. Follows Zaitsev's rule: more substituted alkene is major product. E1 mechanism (carbocation) and E2 mechanism (concerted).",
        keywords: ["elimination", "dehydrohalogenation", "Zaitsev's rule", "E1", "E2"],
        points: [
          "R-CH2-CHX-R' + KOH (alc) -> R-CH=CH-R' + KX + H2O",
          "Zaitsev's rule: more substituted alkene is major",
          "E1: two-step, carbocation intermediate",
          "E2: one-step, concerted mechanism",
          "E2 requires anti-periplanar arrangement",
          "Bulky base (t-BuOK) gives less substituted alkene"
        ]
      },
      {
        title: "Grignard Reagent",
        content: "RMgX is organometallic compound formed by reaction of alkyl halide with Mg in dry ether. Highly reactive, acts as nucleophile and strong base. Reacts with water, CO2, aldehydes, ketones.",
        keywords: ["Grignard reagent", "organometallic", "nucleophile", "carbon dioxide"],
        points: [
          "RMgX + H2O -> RH + Mg(OH)X (decomposition)",
          "RMgX + CO2 -> RCOOMgX -> RCOOH (acid)",
          "RMgX + HCHO -> RCH2OH (primary alcohol)",
          "RMgX + R'CHO -> RR'CHOH (secondary alcohol)",
          "RMgX + R'COR'' -> RR'R''COH (tertiary alcohol)",
          "Must be prepared in absolutely dry conditions"
        ]
      }
    ],
    definitions: [
      { term: "Haloalkane", definition: "Organic compound where one or more hydrogen atoms in alkane are replaced by halogen atoms." },
      { term: "Haloarene", definition: "Organic compound where halogen is directly bonded to aromatic ring." },
      { term: "Grignard Reagent", definition: "Organometallic compound of formula RMgX, where R = alkyl/aryl, X = halogen." },
      { term: "Nucleophilic Substitution", definition: "Reaction where nucleophile replaces leaving group in organic molecule." },
      { term: "SN1 Reaction", definition: "Unimolecular nucleophilic substitution, two-step mechanism with carbocation intermediate." },
      { term: "SN2 Reaction", definition: "Bimolecular nucleophilic substitution, one-step mechanism with backside attack." },
      { term: "Zaitsev's Rule", definition: "In elimination reactions, more substituted alkene is the major product." }
    ],
    formulas: [
      {
        name: "Wurtz Reaction",
        formula: "2R-X + 2Na -> R-R + 2NaX",
        variables: { "R": "alkyl group", "X": "halogen" },
        example: "2CH3Br + 2Na -> C2H6 + 2NaBr",
        meaning: "Preparation of higher alkane from alkyl halide"
      },
      {
        name: "Grignard with CO2",
        formula: "RMgX + CO2 -> RCOOMgX -> RCOOH",
        variables: { "R": "alkyl group", "X": "halogen" },
        example: "CH3MgBr + CO2 -> CH3COOMgBr -> CH3COOH",
        meaning: "Preparation of carboxylic acid with one more carbon"
      }
    ],
    reactions: [
      {
        name: "Reaction with Aqueous KOH",
        equation: "CH3CH2Cl + KOH(aq) -> CH3CH2OH + KCl",
        type: "Substitution",
        condition: "Aqueous KOH",
        note: "Forms alcohol (nucleophilic substitution)"
      },
      {
        name: "Reaction with Alcoholic KOH",
        equation: "CH3CH2Cl + KOH(alc) -> CH2=CH2 + KCl + H2O",
        type: "Elimination",
        condition: "Alcoholic KOH, heating",
        note: "Forms alkene (dehydrohalogenation)"
      },
      {
        name: "Wurtz Reaction",
        equation: "2CH3I + 2Na -> C2H6 + 2NaI",
        type: "Coupling",
        condition: "Dry ether",
        note: "Preparation of ethane from methyl iodide"
      },
      {
        name: "Reaction with Mg",
        equation: "CH3Br + Mg -> CH3MgBr",
        type: "Grignard formation",
        condition: "Dry ether",
        note: "Methylmagnesium bromide"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "How will you convert ethanol to ethyl bromide?",
        solution: {
          formula: "ROH + HBr -> RBr + H2O",
          steps: [
            { label: "Method 1", text: "Reaction with HBr", math: "C2H5OH + HBr -> C2H5Br + H2O" },
            { label: "Method 2", text: "Reaction with PBr3", math: "3C2H5OH + PBr3 -> 3C2H5Br + H3PO3" },
            { label: "Method 3", text: "Reaction with SOCl2", math: "C2H5OH + SOCl2 -> C2H5Br + SO2 + HCl" }
          ],
          answer: "Any of the above methods",
          explanation: "SOCl2 method is preferred as by-products are gaseous"
        }
      },
      {
        question: "What is the product when 2-bromobutane reacts with alcoholic KOH?",
        solution: {
          formula: "Elimination reaction",
          steps: [
            { label: "Step 1", text: "Identify type of reaction", math: "Elimination (dehydrohalogenation)" },
            { label: "Step 2", text: "Apply Zaitsev's rule", math: "More substituted alkene is major" },
            { label: "Step 3", text: "Products", math: "But-2-ene (major) + But-1-ene (minor)" }
          ],
          answer: "But-2-ene (major) and But-1-ene (minor)",
          explanation: "Zaitsev's rule predicts more substituted alkene as major product"
        }
      }
    ],
    commonMistakes: [
      { title: "SN1 vs SN2", text: "SN1: tertiary favored, racemization, rate depends on [RX]. SN2: primary favored, inversion, rate depends on [RX][Nu-]." },
      { title: "Aqueous vs Alcoholic KOH", text: "Aqueous KOH: substitution (forms alcohol). Alcoholic KOH: elimination (forms alkene)." },
      { title: "Grignard Reagent Handling", text: "Must be prepared in dry conditions. Reacts with water, so moisture must be excluded." },
      { title: "Zaitsev's Rule", text: "More substituted alkene is major product. Exception: bulky base gives less substituted (Hofmann product)." }
    ],
    quickRevision: [
      { title: "Preparation", text: "ROH + HX/SOCl2/PCl5 -> RX. Grignard: RX + Mg -> RMgX (dry ether)." },
      { title: "Substitution", text: "SN1: 2 steps, carbocation, racemization. SN2: 1 step, backside attack, inversion." },
      { title: "Elimination", text: "KOH(alc) -> alkene. Zaitsev's rule: more substituted alkene major." },
      { title: "Grignard", text: "RMgX: nucleophile + strong base. Reacts with H2O, CO2, aldehydes, ketones." },
      { title: "Reactivity", text: "RI > RBr > RCl > RF. 3 deg > 2 deg > 1 deg for SN1. 1 deg > 2 deg > 3 deg for SN2." }
    ],
    importantQuestions: [
      { question: "Differentiate between SN1 and SN2 mechanisms.", type: "Long Answer" },
      { question: "How is Grignard reagent prepared? What are its reactions?", type: "Long Answer" },
      { question: "What is Zaitsev's rule? Explain with example.", type: "Short Answer" },
      { question: "Convert ethanol to ethyl bromide by two methods.", type: "Short Answer" },
      { question: "Why is SOCl2 preferred for converting alcohols to alkyl halides?", type: "Conceptual" }
    ],
    examTips: [
      "Remember: aqueous KOH means substitution, alcoholic KOH means elimination",
      "SN1: tertiary > secondary > primary. SN2: primary > secondary > tertiary",
      "Grignard reagent must be prepared in dry conditions",
      "SOCl2 method is best for alcohol to alkyl halide conversion",
      "Know the test for alkyl halides: Beilstein test (green flame)"
    ]
  },
  {
    id: "alcohols-phenols",
    title: "Alcohols, Phenols and Ethers",
    description: "Study of compounds containing -OH group and ethers - preparation, reactions, and acidity.",
    keywords: ["alcohol", "phenol", "ether", "acidity", "esterification", "Williamson synthesis"],
    concepts: [
      {
        title: "Classification and Nomenclature",
        content: "Alcohols: R-OH (monohydric, dihydric, trihydric). Phenols: Ar-OH (hydroxyl on aromatic ring). Ethers: R-O-R'. Classification: primary, secondary, tertiary (based on carbon bearing -OH).",
        keywords: ["classification", "nomenclature", "monohydric", "dihydric", "trihydric"],
        points: [
          "Monohydric: one -OH (CH3OH, C2H5OH)",
          "Dihydric: two -OH (ethylene glycol, HOCH2CH2OH)",
          "Trihydric: three -OH (glycerol, HOCH2CHOHCH2OH)",
          "Primary: -CH2OH (ethanol)",
          "Secondary: -CHOH (isopropanol)",
          "Tertiary: -COH (tert-butanol)"
        ]
      },
      {
        title: "Preparation Methods",
        content: "Alcohols: hydration of alkenes, reduction of carbonyls, hydrolysis of alkyl halides. Phenols: chlorobenzene hydrolysis, benzene sulfonic acid fusion, cumene process.",
        keywords: ["preparation", "hydration", "reduction", "hydrolysis"],
        points: [
          "Alkene + H2O (H+) -> Alcohol (Markovnikov)",
          "RCHO + NaBH4 -> RCH2OH (reduction)",
          "R-X + NaOH(aq) -> ROH + NaX",
          "Chlorobenzene + NaOH (high T, P) -> Phenol (Dow process)",
          "Cumene + O2 -> Cumene hydroperoxide -> Phenol + Acetone",
          "C6H5SO3H + NaOH -> C6H5ONa -> C6H5OH"
        ]
      },
      {
        title: "Reactions of Alcohols",
        content: "Alcohols undergo: dehydration (to alkenes), oxidation (to aldehydes/acids), esterification (with acids), reaction with HX (to alkyl halides), dehydrogenation (with Cu).",
        keywords: ["dehydration", "oxidation", "esterification", "reaction with HX"],
        points: [
          "RCH2OH (H2SO4, 443K) -> RCH=CH2 + H2O (dehydration)",
          "RCH2OH (Cu, 573K) -> RCHO + H2 (dehydrogenation)",
          "RCH2OH + R'COOH <-> R'COOR + H2O (esterification)",
          "ROH + HX -> RX + H2O (Lucas test)",
          "ROH (K2Cr2O7/H+) -> RCHO -> RCOOH (oxidation)",
          "3ROH + PCl3 -> 3RCl + H3PO3"
        ]
      },
      {
        title: "Acidity of Alcohols and Phenols",
        content: "Phenols are more acidic than alcohols due to resonance stabilization of phenoxide ion. Electron-withdrawing groups increase acidity, electron-donating groups decrease acidity. p-Nitrophenol is more acidic than phenol.",
        keywords: ["acidity", "phenoxide ion", "electron-withdrawing", "resonance"],
        points: [
          "Phenol pKa approx 10, Ethanol pKa approx 16",
          "Phenoxide ion stabilized by resonance",
          "Ethoxide ion not stabilized by resonance",
          "NO2 group increases acidity (electron-withdrawing)",
          "CH3 group decreases acidity (electron-donating)",
          "o-Nitrophenol less acidic than p-nitrophenol (H-bonding)"
        ]
      },
      {
        title: "Reactions of Phenols",
        content: "Phenols undergo electrophilic aromatic substitution (activation by -OH): bromination, nitration, sulfonation, Kolbe's reaction, Reimer-Tiemann reaction. Phenols also form esters.",
        keywords: ["electrophilic substitution", "bromination", "Kolbe's reaction", "Reimer-Tiemann"],
        points: [
          "C6H5OH + 3Br2 -> C6H2Br3OH + 3HBr (white ppt)",
          "C6H5OH + dil HNO3 -> o-nitrophenol + p-nitrophenol",
          "C6H5OH + CO2 + NaOH -> C6H4(OH)COOH (Kolbe's)",
          "C6H5OH + CHCl3 + NaOH -> C6H4(OH)CHO (Reimer-Tiemann)",
          "C6H5OH + (CH3CO)2O -> C6H5OCOCH3 (esterification)",
          "Phenol + Br2 water -> 2,4,6-tribromophenol (white ppt)"
        ]
      }
    ],
    definitions: [
      { term: "Alcohol", definition: "Organic compound containing -OH group bonded to sp3 hybridized carbon." },
      { term: "Phenol", definition: "Organic compound containing -OH group directly bonded to aromatic ring." },
      { term: "Ether", definition: "Organic compound with oxygen bonded to two alkyl/aryl groups (R-O-R')." },
      { term: "Esterification", definition: "Reaction of alcohol with carboxylic acid to form ester and water." },
      { term: "Lucas Test", definition: "Test using Lucas reagent (ZnCl2/HCl) to distinguish 1 deg, 2 deg, 3 deg alcohols." },
      { term: "Kolbe's Reaction", definition: "Reaction of phenol with CO2 and NaOH to form salicylic acid." },
      { term: "Reimer-Tiemann Reaction", definition: "Reaction of phenol with CHCl3 and NaOH to form salicylaldehyde." }
    ],
    formulas: [
      {
        name: "Dehydration of Alcohol",
        formula: "RCH2CH2OH (H2SO4, 443K) -> RCH=CH2 + H2O",
        variables: {},
        example: "C2H5OH (H2SO4, 443K) -> C2H4 + H2O",
        meaning: "Formation of alkene from alcohol"
      },
      {
        name: "Esterification",
        formula: "R'COOH + ROH <-> R'COOR + H2O",
        variables: {},
        example: "CH3COOH + C2H5OH <-> CH3COOC2H5 + H2O",
        meaning: "Formation of ester from acid and alcohol"
      }
    ],
    reactions: [
      {
        name: "Lucas Test",
        equation: "ROH + HCl (ZnCl2) -> RCl + H2O",
        type: "Substitution",
        condition: "Lucas reagent",
        note: "3 deg alcohol: immediate turbidity, 2 deg: 5 min, 1 deg: no turbidity at room temp"
      },
      {
        name: "Oxidation of Ethanol",
        equation: "CH3CH2OH (K2Cr2O7/H+) -> CH3CHO -> CH3COOH",
        type: "Oxidation",
        condition: "Acidified K2Cr2O7",
        note: "Orange to green color change"
      },
      {
        name: "Kolbe's Reaction",
        equation: "C6H5OH + CO2 + NaOH -> C6H4(OH)COOH",
        type: "Electrophilic substitution",
        condition: "400K, 4-7 atm",
        note: "Forms salicylic acid"
      },
      {
        name: "Williamson Synthesis",
        equation: "R-O-Na+ + R'-X -> R-O-R' + NaX",
        type: "Nucleophilic substitution",
        condition: "Primary alkyl halide",
        note: "Best method for preparing ethers"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "How will you distinguish between ethanol and phenol?",
        solution: {
          formula: "FeCl3 test",
          steps: [
            { label: "Step 1", text: "Add FeCl3 solution to both", math: "" },
            { label: "Phenol", text: "Violet color due to formation of complex", math: "" },
            { label: "Ethanol", text: "No color change", math: "" },
            { label: "Alternative", text: "Bromine water test", math: "Phenol: white ppt, Ethanol: no ppt" }
          ],
          answer: "Phenol gives violet color with FeCl3, ethanol does not",
          explanation: "Phenol forms colored complex with Fe3+"
        }
      },
      {
        question: "Arrange in increasing order of acidity: ethanol, water, phenol, p-nitrophenol.",
        solution: {
          formula: "Compare pKa values",
          steps: [
            { label: "Water", text: "pKa = 15.7", math: "" },
            { label: "Ethanol", text: "pKa = 16", math: "" },
            { label: "Phenol", text: "pKa = 10", math: "" },
            { label: "p-Nitrophenol", text: "pKa = 7.15", math: "" }
          ],
          answer: "Ethanol < Water < Phenol < p-Nitrophenol",
          explanation: "NO2 group is electron-withdrawing, increases acidity"
        }
      }
    ],
    commonMistakes: [
      { title: "Alcohol vs Phenol Acidity", text: "Phenols are more acidic than alcohols due to resonance stabilization of phenoxide ion. Don't confuse pKa values." },
      { title: "Lucas Test Timing", text: "3 deg alcohol: immediate, 2 deg: 5 min, 1 deg: no turbidity at room temperature. Don't assume all alcohols react immediately." },
      { title: "Williamson Synthesis", text: "Use primary alkyl halide. Tertiary halides undergo elimination, not substitution." },
      { title: "Esterification", text: "Reversible reaction. Use excess alcohol or remove water to shift equilibrium." }
    ],
    quickRevision: [
      { title: "Classification", text: "1 deg, 2 deg, 3 deg alcohols. Monohydric, dihydric, trihydric. Phenols: Ar-OH." },
      { title: "Preparation", text: "Alcohols: hydration, reduction. Phenols: Dow process, cumene process." },
      { title: "Reactions", text: "Dehydration, oxidation, esterification, Lucas test, Kolbe's, Reimer-Tiemann." },
      { title: "Acidity", text: "Phenol > Water > Alcohol. NO2 increases, CH3 decreases acidity." },
      { title: "Ethers", text: "Williamson synthesis: R-O-Na+ + R'-X -> R-O-R'." }
    ],
    importantQuestions: [
      { question: "Why are phenols more acidic than alcohols?", type: "Short Answer" },
      { question: "Explain Lucas test for alcohols.", type: "Short Answer" },
      { question: "Describe Kolbe's reaction and Reimer-Tiemann reaction.", type: "Long Answer" },
      { question: "How is phenol prepared from cumene?", type: "Short Answer" },
      { question: "What is Williamson synthesis? Write its mechanism.", type: "Long Answer" }
    ],
    examTips: [
      "Lucas test: 3 deg immediate, 2 deg 5 min, 1 deg no reaction at room temp",
      "Phenol gives violet color with FeCl3 test",
      "NO2 group increases acidity of phenol",
      "Williamson synthesis: use primary alkyl halide",
      "Esterification is reversible, needs acid catalyst"
    ]
  },
  {
    id: "aldehydes-ketones",
    title: "Aldehydes, Ketones and Carboxylic Acids",
    description: "Study of carbonyl compounds and carboxylic acids - preparation, reactions, and nucleophilic addition.",
    keywords: ["aldehyde", "ketone", "carboxylic acid", "nucleophilic addition", "Cannizzaro reaction", "Aldol condensation"],
    concepts: [
      {
        title: "Nomenclature and Structure",
        content: "Aldehydes: R-CHO (formyl group). Ketones: R-CO-R' (carbonyl group). Carboxylic acids: R-COOH (carboxyl group). Carbonyl carbon is sp2 hybridized, trigonal planar (120 deg bond angle).",
        keywords: ["nomenclature", "carbonyl group", "formyl group", "carboxyl group"],
        points: [
          "Aldehydes: suffix -al (ethanal, propanal)",
          "Ketones: suffix -one (propanone, butanone)",
          "Carboxylic acids: suffix -oic acid (ethanoic acid)",
          "Common: formaldehyde, acetaldehyde, acetone, acetic acid",
          "C=O is polar (delta+ on C, delta- on O)",
          "Aldehydes have H on carbonyl, ketones have two R groups"
        ]
      },
      {
        title: "Preparation Methods",
        content: "Aldehydes: oxidation of primary alcohols, reduction of acid chlorides (Rosenmund), ozonolysis of alkenes. Ketones: oxidation of secondary alcohols, Friedel-Crafts acylation. Carboxylic acids: oxidation of aldehydes, hydrolysis of nitriles.",
        keywords: ["preparation", "Rosenmund reduction", "ozonolysis", "Friedel-Crafts"],
        points: [
          "RCH2OH (PCC) -> RCHO (controlled oxidation)",
          "RCOCl + H2/Pd-BaSO4 -> RCHO (Rosenmund reduction)",
          "R2C=CR2 (O3/Zn-H2O) -> RCHO + R'CHO (ozonolysis)",
          "R2CHOH (K2Cr2O7/H+) -> R2CO (oxidation)",
          "ArH + RCOCl (AlCl3) -> ArCOR (Friedel-Crafts acylation)",
          "RCHO (KMnO4/H+) -> RCOOH (oxidation)"
        ]
      },
      {
        title: "Nucleophilic Addition",
        content: "Aldehydes and ketones undergo nucleophilic addition (not substitution). Nucleophile attacks carbonyl carbon, forming tetrahedral intermediate. Aldehydes more reactive than ketones (less steric hindrance).",
        keywords: ["nucleophilic addition", "reactivity", "steric hindrance", "HCN", "NaHSO3"],
        points: [
          "RCHO + HCN -> RCH(OH)CN (cyanohydrin)",
          "RCHO + NaHSO3 -> RCH(OH)SO3Na (bisulfite adduct)",
          "RCHO + RMgX -> RR'CHOH (after hydrolysis)",
          "RCHO + 2R'OH (dry HCl) -> RCH(OR')2 (acetal)",
          "Aldehydes more reactive than ketones",
          "Electron-withdrawing groups increase reactivity"
        ]
      },
      {
        title: "Reactions of Carboxylic Acids",
        content: "Carboxylic acids undergo: esterification, amide formation, reduction, Hell-Volhard-Zelinsky reaction, decarboxylation. They are acidic due to resonance stabilization of carboxylate ion.",
        keywords: ["esterification", "amide", "Hell-Volhard-Zelinsky", "decarboxylation"],
        points: [
          "RCOOH + R'OH (H+) -> RCOOR' + H2O (esterification)",
          "RCOOH + NH3 -> RCOONH4 -> RCONH2 (amide formation)",
          "RCOOH (LiAlH4) -> RCH2OH (reduction)",
          "RCH2COOH (Br2/P) -> RCHBrCOOH (Hell-Volhard-Zelinsky)",
          "RCOONa + NaOH/CaO -> RH + Na2CO3 (decarboxylation)",
          "RCOOH is weak acid (Ka approx 10^-5)"
        ]
      },
      {
        title: "Special Reactions",
        content: "Cannizzaro reaction: aldehydes without alpha-hydrogen undergo disproportionation with conc. NaOH. Aldol condensation: aldehydes with alpha-hydrogen form beta-hydroxy aldehyde. Tollen's test: aldehydes reduce Ag+ to Ag.",
        keywords: ["Cannizzaro reaction", "Aldol condensation", "Tollen's test", "Fehling's test"],
        points: [
          "Cannizzaro: 2HCHO (conc NaOH) -> CH3OH + HCOONa",
          "Aldol: 2CH3CHO (dil NaOH) -> CH3CH(OH)CH2CHO",
          "Tollen's test: RCHO + 2[Ag(NH3)2]+ -> RCOONH4 + 2Ag + 3NH3",
          "Fehling's test: RCHO + Cu2+ (alkaline) -> RCOOH + Cu2O (red ppt)",
          "Iodoform test: CH3CO-R + 3I2/NaOH -> CHI3 (yellow ppt) + RCOONa",
          "2,4-DNP test: aldehydes/ketones form yellow-orange ppt"
        ]
      }
    ],
    definitions: [
      { term: "Aldehyde", definition: "Organic compound containing -CHO (formyl) group bonded to H or R." },
      { term: "Ketone", definition: "Organic compound containing >C=O (carbonyl) group bonded to two R groups." },
      { term: "Carboxylic Acid", definition: "Organic compound containing -COOH (carboxyl) group." },
      { term: "Cannizzaro Reaction", definition: "Disproportionation of aldehydes without alpha-hydrogen with conc. NaOH." },
      { term: "Aldol Condensation", definition: "Condensation of aldehydes/ketones with alpha-hydrogen to form beta-hydroxy carbonyl compound." },
      { term: "Rosenmund Reduction", definition: "Selective reduction of acid chloride to aldehyde using H2/Pd-BaSO4." },
      { term: "Tollen's Test", definition: "Test for aldehydes using ammoniacal silver nitrate (silver mirror test)." }
    ],
    formulas: [
      {
        name: "Cannizzaro Reaction",
        formula: "2RCHO (conc NaOH) -> RCH2OH + RCOONa",
        variables: { "R": "H or aryl (no alpha-H)" },
        example: "2HCHO (conc NaOH) -> CH3OH + HCOONa",
        meaning: "Aldehydes without alpha-hydrogen undergo disproportionation"
      },
      {
        name: "Aldol Condensation",
        formula: "2RCH2CHO (dil NaOH) -> RCH2CH(OH)CHRCHO",
        variables: { "R": "alkyl group" },
        example: "2CH3CHO (dil NaOH) -> CH3CH(OH)CH2CHO (aldol)",
        meaning: "Aldehydes with alpha-hydrogen undergo self-condensation"
      },
      {
        name: "Tollen's Test",
        formula: "RCHO + 2[Ag(NH3)2]+ -> RCOONH4 + 2Ag + 3NH3",
        variables: {},
        example: "CH3CHO + 2[Ag(NH3)2]+ -> CH3COONH4 + 2Ag + 3NH3",
        meaning: "Aldehydes reduce Ag+ to metallic Ag (silver mirror)"
      },
      {
        name: "Fehling's Test",
        formula: "RCHO + 2Cu2+ (alkaline) -> RCOOH + Cu2O (red ppt)",
        variables: {},
        example: "HCHO + 2Cu2+ -> HCOOH + Cu2O",
        meaning: "Aldehydes reduce Cu2+ to Cu+ (red precipitate)"
      }
    ],
    reactions: [
      {
        name: "Aldol Condensation",
        equation: "2CH3CHO (dil NaOH) -> CH3CH(OH)CH2CHO",
        type: "Condensation",
        condition: "Dilute NaOH, room temperature",
        note: "Product is beta-hydroxy aldehyde (aldol)"
      },
      {
        name: "Cannizzaro Reaction",
        equation: "2HCHO (conc NaOH) -> CH3OH + HCOONa",
        type: "Disproportionation",
        condition: "Concentrated NaOH",
        note: "Aldehydes without alpha-hydrogen only"
      },
      {
        name: "Rosenmund Reduction",
        equation: "RCOCl + H2 (Pd-BaSO4) -> RCHO + HCl",
        type: "Reduction",
        condition: "Pd-BaSO4 catalyst, quinoline",
        note: "Selective reduction of acid chloride to aldehyde"
      },
      {
        name: "Hell-Volhard-Zelinsky",
        equation: "RCH2COOH (Br2/P) -> RCHBrCOOH",
        type: "Alpha-halogenation",
        condition: "Br2, P catalyst",
        note: "Bromination at alpha-carbon of carboxylic acid"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "How will you distinguish between acetaldehyde and acetone?",
        solution: {
          formula: "Tollen's test or Iodoform test",
          steps: [
            { label: "Tollen's", text: "Acetaldehyde: silver mirror forms", math: "" },
            { label: "Tollen's", text: "Acetone: no silver mirror", math: "" },
            { label: "Iodoform", text: "Acetone: yellow ppt (CHI3)", math: "" },
            { label: "Iodoform", text: "Acetaldehyde: no yellow ppt (except for CH3CHO)", math: "" }
          ],
          answer: "Use Tollen's test: acetaldehyde gives silver mirror, acetone does not",
          explanation: "Aldehydes are easily oxidized, ketones are not"
        }
      },
      {
        question: "Explain why aldehydes are more reactive than ketones towards nucleophilic addition.",
        solution: {
          formula: "Steric and electronic factors",
          steps: [
            { label: "Steric", text: "Aldehydes have only one R group, less steric hindrance", math: "" },
            { label: "Electronic", text: "Alkyl groups are electron-donating, decrease electrophilicity of C=O", math: "" },
            { label: "Result", text: "Nucleophile attacks aldehyde carbonyl more easily", math: "" },
            { label: "Order", text: "HCHO > RCHO > R2CO", math: "" }
          ],
          answer: "Aldehydes are more reactive due to less steric hindrance and less electron donation",
          explanation: "Both steric and electronic factors favor aldehyde reactivity"
        }
      }
    ],
    commonMistakes: [
      { title: "Aldol vs Cannizzaro", text: "Aldol: aldehydes WITH alpha-hydrogen. Cannizzaro: aldehydes WITHOUT alpha-hydrogen. Don't confuse which reaction occurs." },
      { title: "Tollen's Test Specificity", text: "Tollen's test is for aldehydes, not ketones. Both aliphatic and aromatic aldehydes give positive test." },
      { title: "Acid Strength", text: "Carboxylic acids are weaker than mineral acids but stronger than phenols. pKa approx 4-5." },
      { title: "Esterification Conditions", text: "Needs acid catalyst (H2SO4 or dry HCl). Reversible reaction." }
    ],
    quickRevision: [
      { title: "Aldehydes", text: "R-CHO. Oxidize easily. Tollen's and Fehling's test positive. Cannizzaro (no alpha-H), Aldol (with alpha-H)." },
      { title: "Ketones", text: "R-CO-R'. Do not oxidize easily. 2,4-DNP test positive. No Tollen's/Fehling's." },
      { title: "Carboxylic Acids", text: "R-COOH. Weak acids (Ka approx 10^-5). Esterification, amide formation, reduction." },
      { title: "Nucleophilic Addition", text: "Aldehydes > ketones. Reactivity: HCHO > RCHO > R2CO." },
      { title: "Special Tests", text: "Tollen's (Ag mirror), Fehling's (Cu2O), Iodoform (CHI3), 2,4-DNP (orange ppt)." }
    ],
    importantQuestions: [
      { question: "Write the mechanism of nucleophilic addition of HCN to acetaldehyde.", type: "Long Answer" },
      { question: "Explain Cannizzaro reaction with example.", type: "Short Answer" },
      { question: "Why are aldehydes more reactive than ketones?", type: "Short Answer" },
      { question: "How is acetic acid prepared from acetaldehyde?", type: "Short Answer" },
      { question: "Describe Hell-Volhard-Zelinsky reaction.", type: "Short Answer" }
    ],
    examTips: [
      "Know Tollen's, Fehling's, and 2,4-DNP tests for aldehydes/ketones",
      "Aldol: alpha-H present. Cannizzaro: no alpha-H.",
      "Aldehydes more reactive than ketones in nucleophilic addition",
      "Carboxylic acids: know esterification and amide formation reactions",
      "Practice problems on nucleophilic addition reactions"
    ]
  },
  {
    id: "amines",
    title: "Amines",
    description: "Study of organic derivatives of ammonia - classification, preparation, reactions, and diazonium salts.",
    keywords: ["amine", "primary amine", "secondary amine", "tertiary amine", "diazonium salt", "Hinsberg test"],
    concepts: [
      {
        title: "Classification and Nomenclature",
        content: "Amines: derivatives of ammonia (NH3) where H atoms are replaced by alkyl/aryl groups. Primary (RNH2), secondary (R2NH), tertiary (R3N). Quaternary ammonium salts: R4N+X-.",
        keywords: ["classification", "primary amine", "secondary amine", "tertiary amine"],
        points: [
          "Primary (1 deg): one H replaced (CH3NH2, methylamine)",
          "Secondary (2 deg): two H replaced ((CH3)2NH, dimethylamine)",
          "Tertiary (3 deg): three H replaced ((CH3)3N, trimethylamine)",
          "Quaternary: R4N+X- (tetramethylammonium chloride)",
          "IUPAC: alkanamine (methanamine, ethanamine)",
          "Common: methylamine, dimethylamine, trimethylamine"
        ]
      },
      {
        title: "Preparation Methods",
        content: "Amines can be prepared from: alkyl halides (ammonolysis), reduction of nitro compounds, reduction of nitriles, reduction of amides, Gabriel phthalimide synthesis (primary amines only).",
        keywords: ["preparation", "ammonolysis", "reduction", "Gabriel phthalimide"],
        points: [
          "R-X + NH3 -> RNH2 + HX (ammonolysis, excess NH3)",
          "RNO2 (Sn/HCl) -> RNH2 (reduction of nitro compound)",
          "RCN (LiAlH4) -> RCH2NH2 (reduction of nitrile)",
          "RCONH2 (LiAlH4) -> RCH2NH2 (reduction of amide)",
          "Gabriel: phthalimide + KOH -> potassium phthalimide + RX -> N-alkylphthalimide -> hydrolysis -> RNH2",
          "Hofmann bromamide: RCONH2 + Br2 + 4NaOH -> RNH2 + Na2CO3 + 2NaBr"
        ]
      },
      {
        title: "Basicity",
        content: "Amines are basic due to lone pair on nitrogen. In aqueous solution, basicity order: (CH3)2NH > CH3NH2 > (CH3)3N > NH3. In gas phase: (CH3)3N > (CH3)2NH > CH3NH2 > NH3. Aryl amines weaker than alkyl amines.",
        keywords: ["basicity", "pKb", "gas phase", "aqueous phase"],
        points: [
          "Amines accept H+ to form R-NH3+ (conjugate acid)",
          "pKb lower means stronger base",
          "Aqueous: secondary > primary > tertiary > NH3",
          "Gas phase: tertiary > secondary > primary > NH3",
          "Aniline much weaker than cyclohexylamine",
          "Electron-donating groups increase basicity"
        ]
      },
      {
        title: "Reactions of Amines",
        content: "Amines undergo: alkylation (excess RX gives quaternary salt), acylation (with acid chlorides), reaction with nitrous acid, carbylamine reaction (primary amines), Hinsberg test.",
        keywords: ["alkylation", "acylation", "nitrous acid", "carbylamine", "Hinsberg test"],
        points: [
          "RNH2 + RX -> R2NH2+X- -> R2NH -> R3N -> R4N+X-",
          "RNH2 + R'COCl -> R'CONHR (amide, acylation)",
          "RNH2 + HNO2 -> ROH + N2 + H2O (1 deg aliphatic)",
          "ArNH2 + HNO2 (0-5C) -> ArN2+Cl- (diazotization)",
          "RNH2 + CHCl3 + 3KOH -> RNC + 3KCl + 3H2O (carbylamine)",
          "Hinsberg test: RNH2 + PhSO2Cl -> PhSO2NHR (soluble in NaOH if 1 deg)"
        ]
      },
      {
        title: "Diazonium Salts",
        content: "Arenediazonium salts (ArN2+X-) are formed by reaction of primary aromatic amines with nitrous acid at 0-5C. They are important intermediates for preparing azo dyes, phenols, haloarenes.",
        keywords: ["diazonium salt", "Sandmeyer reaction", "Gattermann reaction", "azo coupling"],
        points: [
          "ArNH2 + NaNO2 + 2HCl (0-5C) -> ArN2+Cl- + NaCl + 2H2O",
          "Sandmeyer: ArN2+ + CuCl/HBr -> ArCl/ArBr",
          "Gattermann: ArN2+ + Cu/HCl -> ArCl",
          "ArN2+ + H3PO2 -> ArH + N2 + H3PO3",
          "ArN2+ + H2O (warm) -> ArOH + N2",
          "ArN2+ + Ar'OH -> Ar-N=N-Ar'-OH (azo dye, coupling)"
        ]
      }
    ],
    definitions: [
      { term: "Amine", definition: "Organic derivative of ammonia formed by replacement of one or more H atoms by alkyl/aryl groups." },
      { term: "Primary Amine", definition: "Amine with one alkyl/aryl group bonded to nitrogen (RNH2)." },
      { term: "Diazonium Salt", definition: "Salt containing -N2+X- group bonded to aromatic ring." },
      { term: "Carbylamine Reaction", definition: "Reaction of primary amines with CHCl3 and KOH to form isocyanide (RNC)." },
      { term: "Hinsberg Test", definition: "Test using benzenesulfonyl chloride to distinguish primary, secondary, and tertiary amines." },
      { term: "Azo Coupling", definition: "Reaction of diazonium salt with phenol or aromatic amine to form azo dye." },
      { term: "Gabriel Phthalimide Synthesis", definition: "Method of preparing pure primary amines using phthalimide." }
    ],
    formulas: [
      {
        name: "Hofmann Bromamide Reaction",
        formula: "RCONH2 + Br2 + 4NaOH -> RNH2 + Na2CO3 + 2NaBr",
        variables: { "R": "alkyl/aryl group" },
        example: "CH3CONH2 + Br2 + 4NaOH -> CH3NH2 + Na2CO3 + 2NaBr",
        meaning: "Preparation of primary amine with one less carbon atom"
      },
      {
        name: "Diazotization",
        formula: "ArNH2 + NaNO2 + 2HCl (0-5C) -> ArN2+Cl- + NaCl + 2H2O",
        variables: { "Ar": "aryl group" },
        example: "C6H5NH2 + NaNO2 + 2HCl -> C6H5N2+Cl- + NaCl + 2H2O",
        meaning: "Formation of diazonium salt from primary aromatic amine"
      },
      {
        name: "Sandmeyer Reaction",
        formula: "ArN2+Cl- + CuX -> ArX + N2 + CuCl",
        variables: { "X": "Cl, Br, CN" },
        example: "C6H5N2+Cl- + CuCl -> C6H5Cl + N2 + CuCl",
        meaning: "Replacement of diazonium group by halogen using copper salt"
      }
    ],
    reactions: [
      {
        name: "Carbylamine Reaction",
        equation: "RNH2 + CHCl3 + 3KOH -> RNC + 3KCl + 3H2O",
        type: "Test reaction",
        condition: "Heating with alcoholic KOH",
        note: "Foul smell of isocyanide confirms primary amine"
      },
      {
        name: "Diazotization",
        equation: "C6H5NH2 + NaNO2 + 2HCl (0-5C) -> C6H5N2+Cl- + 2H2O + NaCl",
        type: "Diazotization",
        condition: "0-5C, NaNO2/HCl",
        note: "Must be done at low temperature to prevent decomposition"
      },
      {
        name: "Azo Coupling",
        equation: "C6H5N2+Cl- + C6H5OH -> C6H5-N=N-C6H4-OH + HCl",
        type: "Electrophilic substitution",
        condition: "Weakly alkaline medium",
        note: "Forms orange-red azo dye"
      },
      {
        name: "Hinsberg Test",
        equation: "RNH2 + C6H5SO2Cl -> C6H5SO2NHR + HCl",
        type: "Acylation",
        condition: "NaOH present",
        note: "1 deg: product soluble in NaOH, 2 deg: insoluble, 3 deg: no reaction"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "How will you distinguish between methylamine and dimethylamine?",
        solution: {
          formula: "Carbylamine test or Hinsberg test",
          steps: [
            { label: "Carbylamine", text: "Methylamine: foul smell of isocyanide", math: "" },
            { label: "Carbylamine", text: "Dimethylamine: no foul smell", math: "" },
            { label: "Hinsberg", text: "Methylamine: product soluble in NaOH", math: "" },
            { label: "Hinsberg", text: "Dimethylamine: product insoluble in NaOH", math: "" }
          ],
          answer: "Use carbylamine test: methylamine gives foul smell, dimethylamine does not",
          explanation: "Only primary amines give carbylamine reaction"
        }
      },
      {
        question: "Write the reactions involved in the preparation of aniline from nitrobenzene.",
        solution: {
          formula: "Reduction with Sn/HCl",
          steps: [
            { label: "Step 1", text: "Reduction of nitrobenzene", math: "C6H5NO2 + 6[H] (Sn/HCl) -> C6H5NH2 + 2H2O" },
            { label: "Step 2", text: "Liberation of aniline", math: "C6H5NH3+Cl- + NaOH -> C6H5NH2 + NaCl + H2O" }
          ],
          answer: "Nitrobenzene is reduced to aniline using Sn/HCl",
          explanation: "NaOH is added to free the amine from its salt"
        }
      }
    ],
    commonMistakes: [
      { title: "Amine Basicity Order", text: "In aqueous solution: 2 deg > 1 deg > 3 deg > NH3. In gas phase: 3 deg > 2 deg > 1 deg > NH3. Don't confuse the two orders." },
      { title: "Hinsberg Test", text: "1 deg amine: product soluble in NaOH (acidic H on N). 2 deg: insoluble. 3 deg: no reaction with reagent." },
      { title: "Diazonium Salt Stability", text: "Must be prepared at 0-5C. Decomposes at higher temperatures. Do not warm during preparation." },
      { title: "Gabriel Synthesis", text: "Only gives primary amines. Cannot prepare secondary or tertiary amines." }
    ],
    quickRevision: [
      { title: "Classification", text: "1 deg (RNH2), 2 deg (R2NH), 3 deg (R3N), 4 deg (R4N+X-)." },
      { title: "Basicity", text: "Aqueous: 2 deg > 1 deg > 3 deg > NH3. Gas: 3 deg > 2 deg > 1 deg > NH3." },
      { title: "Preparation", text: "Ammonolysis, reduction, Gabriel phthalimide, Hofmann bromamide." },
      { title: "Special Reactions", text: "Carbylamine (1 deg only), Hinsberg test, diazotization, azo coupling." },
      { title: "Diazonium Salts", text: "ArN2+Cl-: Sandmeyer, Gattermann, phenol formation, azo dye formation." }
    ],
    importantQuestions: [
      { question: "Compare the basicity of amines in aqueous and gas phase.", type: "Long Answer" },
      { question: "Describe Gabriel phthalimide synthesis of primary amines.", type: "Long Answer" },
      { question: "Write the mechanism of diazotization reaction.", type: "Long Answer" },
      { question: "Explain Hinsberg test for amines.", type: "Short Answer" },
      { question: "How is azo dye prepared from aniline?", type: "Short Answer" }
    ],
    examTips: [
      "Hinsberg test: know the difference between 1 deg, 2 deg, 3 deg amines",
      "Diazonium salts: prepare at 0-5C, use immediately",
      "Carbylamine test: only for primary amines",
      "Basicity order: aqueous vs gas phase are different",
      "Gabriel phthalimide: only for primary amines"
    ]
  },
  {
    id: "biomolecules",
    title: "Biomolecules",
    description: "Study of carbohydrates, proteins, nucleic acids, and enzymes - structure, classification, and biological importance.",
    keywords: ["carbohydrate", "protein", "nucleic acid", "enzyme", "amino acid", "glucose", "DNA", "RNA"],
    concepts: [
      {
        title: "Carbohydrates",
        content: "Carbohydrates are polyhydroxy aldehydes or ketones, or substances that give these on hydrolysis. General formula: Cx(H2O)y. Classified as monosaccharides, disaccharides, and polysaccharides based on hydrolysis.",
        keywords: ["monosaccharide", "disaccharide", "polysaccharide", "glucose", "fructose"],
        points: [
          "Monosaccharides: cannot be hydrolyzed (glucose, fructose, galactose)",
          "Disaccharides: two monosaccharide units (sucrose, lactose, maltose)",
          "Polysaccharides: many monosaccharide units (starch, cellulose, glycogen)",
          "Reducing sugars: free aldehyde or ketone group (glucose, maltose)",
          "Non-reducing sugars: no free aldehyde or ketone (sucrose)",
          "Glucose is the most important monosaccharide"
        ]
      },
      {
        title: "Proteins",
        content: "Proteins are polymers of alpha-amino acids linked by peptide bonds. Classified as fibrous (structural) and globular (functional). Have four levels of structure: primary, secondary, tertiary, quaternary.",
        keywords: ["amino acid", "peptide bond", "fibrous protein", "globular protein"],
        points: [
          "Amino acids: H2N-CHR-COOH (20 common amino acids)",
          "Peptide bond: -CO-NH- (formed by condensation)",
          "Fibrous: insoluble, structural (keratin, collagen)",
          "Globular: soluble, functional (enzymes, antibodies)",
          "Primary: sequence of amino acids",
          "Secondary: alpha-helix, beta-pleated sheet",
          "Tertiary: 3D folding of polypeptide chain",
          "Quaternary: association of multiple polypeptide chains"
        ]
      },
      {
        title: "Nucleic Acids",
        content: "Nucleic acids are polymers of nucleotides. Each nucleotide has: sugar (ribose or deoxyribose), nitrogenous base (purine or pyrimidine), and phosphate group. DNA stores genetic information, RNA helps in protein synthesis.",
        keywords: ["nucleotide", "nucleoside", "DNA", "RNA", "purine", "pyrimidine"],
        points: [
          "Nucleoside = base + sugar",
          "Nucleotide = nucleoside + phosphate",
          "Purines: adenine (A), guanine (G) - double ring",
          "Pyrimidines: cytosine (C), thymine (T) in DNA, uracil (U) in RNA",
          "DNA: double helix, A-T and G-C base pairing",
          "RNA: single strand, A-U and G-C base pairing",
          "DNA: deoxyribose sugar, RNA: ribose sugar"
        ]
      },
      {
        title: "Enzymes",
        content: "Enzymes are biological catalysts made of proteins. They are specific, efficient, and work under mild conditions. Lock and key model and induced fit model explain enzyme action.",
        keywords: ["enzyme", "substrate", "active site", "lock and key model", "induced fit model"],
        points: [
          "Substrate binds to active site of enzyme",
          "Lock and key model: exact fit of substrate to active site",
          "Induced fit model: enzyme changes shape to fit substrate",
          "Enzymes lower activation energy (like chemical catalysts)",
          "Optimum temperature: 25-37C for most enzymes",
          "Optimum pH: varies (pepsin: 2, trypsin: 8)",
          "Denaturation: loss of activity at high temperature or extreme pH"
        ]
      },
      {
        title: "Vitamins",
        content: "Vitamins are organic compounds required in small amounts for normal growth and health. Classified as fat-soluble (A, D, E, K) and water-soluble (B complex, C). Deficiency causes specific diseases.",
        keywords: ["vitamin", "fat-soluble", "water-soluble", "deficiency diseases"],
        points: [
          "Fat-soluble: A, D, E, K (stored in body fat)",
          "Water-soluble: B complex, C (excreted in urine)",
          "Vitamin A: night blindness, xerophthalmia",
          "Vitamin B1: beriberi",
          "Vitamin C: scurvy",
          "Vitamin D: rickets, osteomalacia",
          "Vitamin K: blood clotting"
        ]
      }
    ],
    definitions: [
      { term: "Carbohydrate", definition: "Polyhydroxy aldehyde or ketone, or substances giving these on hydrolysis." },
      { term: "Monosaccharide", definition: "Simplest carbohydrate that cannot be hydrolyzed further." },
      { term: "Disaccharide", definition: "Carbohydrate that yields two monosaccharide units on hydrolysis." },
      { term: "Polysaccharide", definition: "Carbohydrate that yields many monosaccharide units on hydrolysis." },
      { term: "Amino Acid", definition: "Organic compound containing both amino (-NH2) and carboxyl (-COOH) groups." },
      { term: "Peptide Bond", definition: "Amide bond (-CO-NH-) formed between two amino acids." },
      { term: "Nucleotide", definition: "Building block of nucleic acids consisting of base, sugar, and phosphate." },
      { term: "Enzyme", definition: "Biological catalyst made of protein that speeds up biochemical reactions." }
    ],
    formulas: [
      {
        name: "Peptide Bond Formation",
        formula: "R1CH(NH2)COOH + R2CH(NH2)COOH -> R1CH(NH2)CONHCH(R2)COOH + H2O",
        variables: {},
        example: "Glycine + Glycine -> Glycylglycine + H2O",
        meaning: "Condensation reaction between two amino acids"
      },
      {
        name: "Glucose Oxidation",
        formula: "C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy",
        variables: {},
        example: "Complete oxidation of glucose",
        meaning: "Cellular respiration releasing energy (ATP)"
      },
      {
        name: "DNA Base Pairing",
        formula: "A=T (2 H-bonds), G=C (3 H-bonds)",
        variables: {},
        example: "Adenine pairs with Thymine, Guanine pairs with Cytosine",
        meaning: "Complementary base pairing in DNA double helix"
      }
    ],
    reactions: [
      {
        name: "Hydrolysis of Sucrose",
        equation: "C12H22O11 + H2O -> C6H12O6 + C6H12O6",
        type: "Hydrolysis",
        condition: "Dilute acid or invertase enzyme",
        note: "Sucrose yields glucose and fructose (inversion of sugar)"
      },
      {
        name: "Hydrolysis of Starch",
        equation: "(C6H10O5)n + nH2O -> nC6H12O6",
        type: "Hydrolysis",
        condition: "Dilute acid or amylase enzyme",
        note: "Starch yields glucose units"
      },
      {
        name: "Biuret Test for Proteins",
        equation: "Protein + CuSO4 + NaOH -> Violet color complex",
        type: "Test reaction",
        condition: "Alkaline CuSO4 solution",
        note: "Violet color confirms presence of peptide bonds"
      }
    ],
    derivations: [],
    examples: [
      {
        question: "What are reducing and non-reducing sugars? Give examples.",
        solution: {
          formula: "Based on free aldehyde/ketone group",
          steps: [
            { label: "Reducing", text: "Have free aldehyde or ketone group", math: "Glucose, fructose, maltose, lactose" },
            { label: "Non-reducing", text: "No free aldehyde or ketone", math: "Sucrose" },
            { label: "Test", text: "Tollen's or Fehling's test", math: "Reducing sugars give positive test" }
          ],
          answer: "Reducing sugars: glucose, fructose, maltose, lactose. Non-reducing: sucrose.",
          explanation: "Sucrose has glycosidic bond between both anomeric carbons"
        }
      },
      {
        question: "Explain the structure of DNA.",
        solution: {
          formula: "Double helix model",
          steps: [
            { label: "Sugar", text: "Deoxyribose sugar in backbone", math: "" },
            { label: "Bases", text: "Purines (A, G) and pyrimidines (C, T)", math: "" },
            { label: "Pairing", text: "A=T (2 H-bonds), G=C (3 H-bonds)", math: "" },
            { label: "Structure", text: "Two antiparallel strands form double helix", math: "" }
          ],
          answer: "DNA is a double helix with complementary base pairing",
          explanation: "Watson and Crick proposed the double helix model of DNA"
        }
      }
    ],
    commonMistakes: [
      { title: "Reducing vs Non-reducing Sugars", text: "Sucrose is non-reducing because glycosidic bond involves both anomeric carbons. Maltose and lactose are reducing." },
      { title: "DNA vs RNA", text: "DNA: double-stranded, deoxyribose, thymine. RNA: single-stranded, ribose, uracil." },
      { title: "Enzyme Specificity", text: "Each enzyme is specific for a particular substrate. Lock and key model explains specificity." },
      { title: "Peptide Bond", text: "Peptide bond is -CO-NH- (amide bond). It is formed by condensation reaction with loss of water." }
    ],
    quickRevision: [
      { title: "Carbohydrates", text: "Mono (glucose), Di (sucrose), Poly (starch). Reducing: free CHO group. Non-reducing: sucrose." },
      { title: "Proteins", text: "Polymer of amino acids. Peptide bond (-CO-NH-). 4 levels: primary to quaternary." },
      { title: "Nucleic Acids", text: "DNA: double helix, A=T, G=C. RNA: single strand, A-U, G-C." },
      { title: "Enzymes", text: "Biological catalysts. Lock and key model. Optimum T and pH." },
      { title: "Vitamins", text: "Fat-soluble: A, D, E, K. Water-soluble: B complex, C." }
    ],
    importantQuestions: [
      { question: "Classify carbohydrates with examples.", type: "Short Answer" },
      { question: "Describe the structure of DNA double helix.", type: "Long Answer" },
      { question: "What are enzymes? Explain their mechanism of action.", type: "Long Answer" },
      { question: "Differentiate between DNA and RNA.", type: "Short Answer" },
      { question: "Explain the structure of a protein at four levels.", type: "Long Answer" }
    ],
    examTips: [
      "Know the difference between reducing and non-reducing sugars",
      "DNA: A=T (2 H-bonds), G=C (3 H-bonds)",
      "Enzymes are proteins, not nucleic acids",
      "Vitamins: know which are fat-soluble and water-soluble",
      "Peptide bond is -CO-NH-"
    ]
  }
];
