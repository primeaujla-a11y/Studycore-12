window.PhysicsChapters = [
  {
    id: "electrostatics",
    title: "Electrostatics",
    description: "Study of electric charges at rest, their properties, forces between them, electric fields, and potential.",
    keywords: ["electrostatics", "electric charge", "Coulomb's law", "electric field", "Gauss's theorem", "electric potential", "capacitance", "dielectrics"],
    concepts: [
      {
        title: "Electric Charge and Its Properties",
        content: "Electric charge is a fundamental property of matter that causes it to experience a force when placed in an electric and magnetic field. There are two types of charges: positive (+) and negative (-). Like charges repel each other, while unlike charges attract. Charge is quantized, meaning it exists in discrete packets. The smallest unit of charge is the elementary charge e = 1.6 x 10^-19 C. Any charge q on a body is an integral multiple of e: q = ne, where n is an integer. Charge is conserved in an isolated system and is additive.",
        keywords: ["quantization", "conservation", "additive", "elementary charge"],
        points: [
          "Charge is quantized: q = ne where n is integer and e = 1.6 x 10^-19 C",
          "Like charges repel, unlike charges attract",
          "Charge is conserved in an isolated system",
          "Charge is additive in nature",
          "SI unit of charge is Coulomb (C)"
        ]
      },
      {
        title: "Coulomb's Law",
        content: "Coulomb's law states that the force between two stationary point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them. Mathematically: F = k|q1*q2|/r^2, where k = 1/(4*pi*epsilon_0) = 9 x 10^9 N.m^2/C^2 in vacuum. When a dielectric medium of dielectric constant K is introduced, the force becomes F' = F/K. Coulomb's law obeys the superposition principle.",
        keywords: ["Coulomb's constant", "permittivity", "superposition", "dielectric constant"],
        points: [
          "F = k|q1*q2|/r^2 where k = 9 x 10^9 N.m^2/C^2",
          "Force is mutual and obeys Newton's third law",
          "Superposition principle applies for multiple charges",
          "In medium: F' = F/K where K is dielectric constant",
          "Valid only for point charges at rest"
        ]
      },
      {
        title: "Electric Field and Electric Field Lines",
        content: "The electric field at a point is the force experienced by a unit positive test charge placed at that point. E = F/q0. It is a vector quantity with SI unit N/C or V/m. The electric field due to a point charge q at distance r is E = kq/r^2. Electric field lines are imaginary lines such that the tangent at any point gives the direction of the field. They originate from positive charges and terminate on negative charges. For a dipole, the electric field at an axial point (r >> dipole length) is E = 2kp/r^3, and at an equatorial point is E = kp/r^3, where p = qa is the dipole moment.",
        keywords: ["electric field intensity", "field lines", "dipole", "axial", "equatorial"],
        points: [
          "E = F/q0, vector quantity, unit: N/C or V/m",
          "Field lines: tangent gives direction, density gives magnitude",
          "Field lines start from +ve charge, end on -ve charge",
          "Dipole: axial E = 2kp/r^3, equatorial E = kp/r^3",
          "Dipole moment p = qa (C.m)"
        ]
      },
      {
        title: "Gauss's Theorem and Applications",
        content: "Gauss's theorem states that the total electric flux through a closed surface is equal to 1/epsilon_0 times the net charge enclosed. Phi_E = q_enclosed/epsilon_0. Applications: (1) Infinite line charge: E = lambda/(2*pi*epsilon_0*r). (2) Infinite plane sheet: E = sigma/(2*epsilon_0). (3) Uniformly charged spherical shell: Outside E = kQ/r^2, On surface E = kQ/R^2, Inside E = 0.",
        keywords: ["Gauss's theorem", "electric flux", "Gaussian surface", "line charge"],
        points: [
          "Phi_E = q_enclosed/epsilon_0 (Gauss's theorem)",
          "Electric flux: Phi = EA cos(theta)",
          "Infinite line charge: E = lambda/(2*pi*epsilon_0*r)",
          "Infinite plane sheet: E = sigma/(2*epsilon_0)",
          "Spherical shell: E = 0 inside, E = kQ/r^2 outside"
        ]
      },
      {
        title: "Electric Potential and Capacitance",
        content: "Electric potential at a point is the work done in bringing a unit positive charge from infinity to that point. V = W/q. It is a scalar quantity with unit Volt (V). Potential due to a point charge: V = kq/r. Capacitance is the ratio of charge to potential: C = Q/V. For a parallel plate capacitor: C = epsilon_0*A/d. With dielectric: C' = KC. Capacitors in series: 1/C_eq = 1/C1 + 1/C2; in parallel: C_eq = C1 + C2. Energy stored: U = (1/2)CV^2 = Q^2/(2C).",
        keywords: ["electric potential", "capacitance", "parallel plate capacitor", "energy stored"],
        points: [
          "V = W/q, scalar, unit: Volt",
          "Point charge: V = kq/r",
          "Parallel plate capacitor: C = epsilon_0*A/d",
          "With dielectric: C' = K*C0",
          "Energy: U = (1/2)CV^2 = Q^2/(2C)"
        ]
      }
    ],
    definitions: [
      { term: "Electric Charge", definition: "A fundamental property of matter that causes it to experience a force in an electric field. Measured in Coulombs (C)." },
      { term: "Coulomb", definition: "The SI unit of electric charge. 1 C is the charge flowing through a conductor carrying 1 A current in 1 s." },
      { term: "Electric Field Intensity", definition: "The force experienced per unit positive test charge at a point. E = F/q0, measured in N/C or V/m." },
      { term: "Electric Flux", definition: "The total number of electric field lines passing through a surface. Phi = EA cos(theta), measured in V.m." },
      { term: "Electric Potential", definition: "The work done in bringing a unit positive charge from infinity to a point. V = W/q, measured in Volts (V)." },
      { term: "Capacitance", definition: "The ability of a system to store charge. C = Q/V, measured in Farads (F)." },
      { term: "Dielectric Constant", definition: "The ratio of capacitance with dielectric to capacitance without it. K = C/C0, dimensionless and > 1." }
    ],
    formulas: [
      {
        name: "Coulomb's Law",
        formula: "F = k|q1*q2|/r^2",
        variables: { "F": "Electrostatic force (N)", "k": "9 x 10^9 N.m^2/C^2", "q1, q2": "Charges (C)", "r": "Distance (m)" },
        example: "Two charges +2 uC and -3 uC at 0.3 m: F = (9x10^9)(2x10^-6)(3x10^-6)/(0.3)^2 = 0.6 N",
        meaning: "Force proportional to product of charges, inversely proportional to square of distance."
      },
      {
        name: "Electric Field of Point Charge",
        formula: "E = kq/r^2",
        variables: { "E": "Electric field (N/C)", "k": "9 x 10^9", "q": "Charge (C)", "r": "Distance (m)" },
        example: "E at 0.2 m from 4 uC charge: E = (9x10^9)(4x10^-6)/(0.2)^2 = 9 x 10^5 N/C",
        meaning: "Field decreases as square of distance."
      },
      {
        name: "Electric Flux",
        formula: "Phi = EA cos(theta) = q_enclosed/epsilon_0",
        variables: { "Phi": "Electric flux (V.m)", "E": "Electric field (V/m)", "A": "Area (m^2)", "epsilon_0": "8.854 x 10^-12 C^2/(N.m^2)" },
        example: "5 uC inside cube: Phi = q/epsilon_0 = 5x10^-6/8.854x10^-12 = 5.65 x 10^5 V.m",
        meaning: "Total flux depends only on enclosed charge."
      },
      {
        name: "Parallel Plate Capacitor",
        formula: "C = epsilon_0*A/d",
        variables: { "C": "Capacitance (F)", "epsilon_0": "8.854 x 10^-12 F/m", "A": "Plate area (m^2)", "d": "Plate separation (m)" },
        example: "A = 0.02 m^2, d = 0.002 m: C = (8.854x10^-12)(0.02)/0.002 = 88.54 pF",
        meaning: "Capacitance increases with area, decreases with separation."
      },
      {
        name: "Energy Stored in Capacitor",
        formula: "U = (1/2)CV^2 = Q^2/(2C)",
        variables: { "U": "Energy (J)", "C": "Capacitance (F)", "V": "Voltage (V)", "Q": "Charge (C)" },
        example: "10 uF at 100 V: U = (1/2)(10x10^-6)(100)^2 = 0.05 J",
        meaning: "Energy stored in the electric field between plates."
      }
    ],
    derivations: [
      {
        title: "Electric Field of Uniformly Charged Spherical Shell (Gauss's Law)",
        steps: [
          "Consider a spherical shell of radius R with total charge Q uniformly distributed.",
          "By symmetry, E is radial and has same magnitude at equal distances from center.",
          "Case 1: r > R. Gaussian sphere of radius r: E(4*pi*r^2) = Q/epsilon_0, so E = kQ/r^2.",
          "Case 2: r = R. E = kQ/R^2.",
          "Case 3: r < R. Gaussian sphere encloses zero charge, so E = 0."
        ]
      },
      {
        title: "Capacitance of Parallel Plate Capacitor with Dielectric",
        steps: [
          "Consider parallel plate capacitor with area A, separation d, charge Q.",
          "Without dielectric: E0 = sigma/epsilon_0 = Q/(epsilon_0*A). V0 = E0*d = Qd/(epsilon_0*A).",
          "C0 = Q/V0 = epsilon_0*A/d.",
          "With dielectric slab (thickness t, constant K): field in dielectric E' = E0/K.",
          "Potential: V = E0*(d-t) + E'*t = E0*(d - t + t/K).",
          "If dielectric fills (t=d): V = V0/K, C = KC0 = K*epsilon_0*A/d."
        ]
      }
    ],
    examples: [
      {
        question: "Three charges +2 uC, -3 uC, +5 uC at vertices of equilateral triangle of side 0.2 m. Find net force on +5 uC charge.",
        solution: {
          formula: "F = k|q1*q2|/r^2, vector addition",
          steps: [
            { label: "Force from +2 uC", text: "Repulsive, along side", math: "F1 = (9x10^9)(2x10^-6)(5x10^-6)/(0.2)^2 = 2.25 N" },
            { label: "Force from -3 uC", text: "Attractive, along side", math: "F2 = (9x10^9)(3x10^-6)(5x10^-6)/(0.2)^2 = 3.375 N" },
            { label: "Resultant", text: "Angle between forces = 60 degrees", math: "F = sqrt(F1^2 + F2^2 + 2*F1*F2*cos60) = 4.90 N" }
          ],
          answer: "4.90 N",
          explanation: "Net force is vector sum of individual Coulomb forces."
        }
      },
      {
        question: "A parallel plate capacitor has A = 200 cm^2, d = 5 mm, connected to 100 V battery. Find capacitance, charge, energy, and electric field.",
        solution: {
          formula: "C = epsilon_0*A/d, Q = CV, U = (1/2)CV^2, E = V/d",
          steps: [
            { label: "Convert units", text: "A = 0.02 m^2, d = 0.005 m", math: "" },
            { label: "Capacitance", text: "C = epsilon_0*A/d", math: "C = (8.854x10^-12)(0.02)/(0.005) = 35.42 pF" },
            { label: "Charge", text: "Q = CV", math: "Q = (35.42x10^-12)(100) = 3.542 nC" },
            { label: "Energy", text: "U = (1/2)CV^2", math: "U = (1/2)(35.42x10^-12)(100)^2 = 0.177 uJ" },
            { label: "Electric field", text: "E = V/d", math: "E = 100/0.005 = 20,000 V/m" }
          ],
          answer: "C = 35.42 pF, Q = 3.542 nC, U = 0.177 uJ, E = 2 x 10^4 V/m",
          explanation: "All quantities follow from basic capacitor formulas."
        }
      },
      {
        question: "An oil drop of mass 3.2 x 10^-15 kg has 12 excess electrons. Find electric field to keep it stationary between plates 1 cm apart.",
        solution: {
          formula: "mg = qE",
          steps: [
            { label: "Charge on drop", text: "q = 12 x 1.6 x 10^-19 C", math: "q = 1.92 x 10^-18 C" },
            { label: "Equilibrium", text: "qE = mg", math: "E = mg/q" },
            { label: "Calculate E", text: "E = (3.2x10^-15)(9.8)/(1.92x10^-18)", math: "E = 16,333 V/m" }
          ],
          answer: "E = 1.63 x 10^4 V/m",
          explanation: "Electric force balances gravitational force for equilibrium."
        }
      }
    ],
    commonMistakes: [
      { title: "Confusing Electric Field and Potential", text: "E is a vector, V is a scalar. E = -dV/dx, so potential decreases in field direction." },
      { title: "Wrong Direction of Field Lines", text: "Field lines go from +ve to -ve charges, never cross, and are perpendicular to equipotential surfaces." },
      { title: "Unit Conversion Errors", text: "Always convert cm^2 to m^2, mm to m, uC to C before using in formulas." },
      { title: "Capacitor Combination Errors", text: "Series: 1/C_eq = 1/C1 + 1/C2 (inverse add). Parallel: C_eq = C1 + C2 (direct add). Opposite to resistors." }
    ],
    quickRevision: [
      { title: "Coulomb's Law", text: "F = k|q1*q2|/r^2, k = 9 x 10^9 N.m^2/C^2. Superposition applies." },
      { title: "Electric Field", text: "E = kq/r^2 (point charge). Vector, unit N/C or V/m." },
      { title: "Gauss's Theorem", text: "Phi = q_enclosed/epsilon_0. E = 0 inside shell, E = kQ/r^2 outside." },
      { title: "Electric Potential", text: "V = kq/r. Scalar, unit Volt. Equipotential surfaces perpendicular to field." },
      { title: "Capacitance", text: "C = Q/V. Parallel plate: C = epsilon_0*A/d. With dielectric: C = K*C0." }
    ],
    importantQuestions: [
      { question: "State and explain Coulomb's law with its vector form.", type: "Long Answer" },
      { question: "State Gauss's theorem. Derive E due to uniformly charged spherical shell.", type: "Derivation" },
      { question: "Derive capacitance of parallel plate capacitor. Show effect of dielectric.", type: "Derivation" },
      { question: "What are equipotential surfaces? Show E is perpendicular to them.", type: "Conceptual" },
      { question: "A capacitor charged and disconnected from battery. If plate separation doubled, what happens to C, Q, V, energy?", type: "Conceptual" }
    ],
    examTips: [
      "Draw clear diagrams showing charges, distances, and field directions before solving.",
      "When using Gauss's law, clearly specify the Gaussian surface and justify symmetry.",
      "In capacitor problems: battery connected means V constant; disconnected means Q constant.",
      "Practice vector addition of forces for different charge configurations.",
      "Always express final answers with proper units and significant figures."
    ]
  }
,
  {
    id: "current-electricity",
    title: "Current Electricity",
    description: "Study of electric current, resistance, Ohm's law, Kirchhoff's laws, and electrical circuits.",
    keywords: ["current", "resistance", "Ohm's law", "Kirchhoff's laws", "Wheatstone bridge", "potentiometer", "drift velocity"],
    concepts: [
      {
        title: "Electric Current and Drift Velocity",
        content: "Electric current is the rate of flow of charge through a cross-section: I = dq/dt. In a conductor, free electrons move randomly but acquire a small average velocity called drift velocity vd when an electric field is applied. The relationship is I = nA*vd*q, where n is electron density, A is cross-sectional area, and q is electron charge. Mobility mu = vd/E = e*tau/m, where tau is relaxation time. Current direction is opposite to electron flow (conventional current).",
        keywords: ["drift velocity", "relaxation time", "mobility", "electron density"],
        points: [
          "I = dq/dt, scalar quantity, unit: Ampere (A)",
          "I = nA*vd*q relates current to drift velocity",
          "Drift velocity vd = eE*tau/m = eV*tau/(mL)",
          "Mobility mu = vd/E = e*tau/m",
          "Current direction is opposite to electron flow"
        ]
      },
      {
        title: "Ohm's Law and Resistance",
        content: "Ohm's law states that current through a conductor is directly proportional to potential difference across it at constant temperature: V = IR. Resistance R = rho*L/A, where rho is resistivity, L is length, A is area. Conductance G = 1/R. Resistivity depends on temperature: rho = rho_0[1 + alpha*(T-T0)]. For metals alpha > 0, for semiconductors alpha < 0. Ohm's law is not universal and fails for non-ohmic devices like diodes and transistors.",
        keywords: ["Ohm's law", "resistance", "resistivity", "temperature coefficient"],
        points: [
          "V = IR (Ohm's law), valid for ohmic conductors at constant temperature",
          "R = rho*L/A, rho = resistivity (ohm.m)",
          "rho = rho_0[1 + alpha*(T-T0)]",
          "alpha > 0 for metals, alpha < 0 for semiconductors",
          "Ohm's law does not apply to non-ohmic devices"
        ]
      },
      {
        title: "Kirchhoff's Laws",
        content: "Kirchhoff's junction rule (KCL): The algebraic sum of currents meeting at a junction is zero (Sigma I = 0). Based on conservation of charge. Kirchhoff's loop rule (KVL): The algebraic sum of potential differences around any closed loop is zero (Sigma V = 0). Based on conservation of energy. Sign convention: going from - to + of battery = +E; from + to - = -E. For resistor in current direction = -IR; against current = +IR.",
        keywords: ["junction rule", "loop rule", "KCL", "KVL"],
        points: [
          "Junction rule: Sigma I = 0 (conservation of charge)",
          "Loop rule: Sigma V = 0 around closed loop (conservation of energy)",
          "Sign convention is crucial for correct application",
          "Used to find current in each branch of complex circuits",
          "Mesh analysis and nodal analysis based on these laws"
        ]
      },
      {
        title: "Wheatstone Bridge",
        content: "A Wheatstone bridge measures unknown resistance. Four resistors in diamond shape with galvanometer between two opposite junctions. At balance (null deflection): P/Q = R/S. Most sensitive when all resistances are approximately equal. Meter bridge is practical form using 1 m wire: l/(100-l) = R/S, where l is balance length.",
        keywords: ["Wheatstone bridge", "null deflection", "balance condition", "meter bridge"],
        points: [
          "Balance: P/Q = R/S (no current through galvanometer)",
          "Most sensitive when all resistances approximately equal",
          "Meter bridge: l/(100-l) = R/S",
          "Used to measure unknown resistance accurately",
          "Does not work well for very low or very high resistances"
        ]
      },
      {
        title: "Potentiometer",
        content: "A potentiometer measures emf, compares emfs, and measures internal resistance. It uses a long uniform wire with steady current. Potential gradient x = V/L. For comparing emfs: E1/E2 = l1/l2. For internal resistance: r = R[(l1/l2) - 1]. At null point, wire potential equals cell emf (no current drawn), giving accurate emf measurement.",
        keywords: ["potentiometer", "potential gradient", "balancing length", "internal resistance"],
        points: [
          "At null point: V_wire = E_cell",
          "Potential gradient: x = V/L (V/m)",
          "Compare emfs: E1/E2 = l1/l2",
          "Internal resistance: r = R[(l1/l2) - 1]",
          "More accurate than voltmeter for measuring emf"
        ]
      }
    ],
    definitions: [
      { term: "Electric Current", definition: "The rate of flow of electric charge through a cross-section. I = dq/dt, measured in Amperes (A)." },
      { term: "Drift Velocity", definition: "Average velocity acquired by free electrons in a conductor due to an applied electric field." },
      { term: "Resistance", definition: "Opposition offered by a conductor to current flow. R = V/I, measured in Ohms (ohm)." },
      { term: "Resistivity", definition: "Resistance of unit length and unit area. rho = R*A/L, measured in ohm.m." },
      { term: "EMF", definition: "Energy supplied by a source per unit charge. E = W/q, measured in Volts (V)." },
      { term: "Potential Gradient", definition: "Potential drop per unit length of potentiometer wire. x = V/L, measured in V/m." }
    ],
    formulas: [
      {
        name: "Ohm's Law",
        formula: "V = IR",
        variables: { "V": "Potential difference (V)", "I": "Current (A)", "R": "Resistance (ohm)" },
        example: "10 ohm resistor at 5 V: I = V/R = 5/10 = 0.5 A",
        meaning: "Current proportional to voltage for constant resistance."
      },
      {
        name: "Resistance",
        formula: "R = rho*L/A",
        variables: { "R": "Resistance (ohm)", "rho": "Resistivity (ohm.m)", "L": "Length (m)", "A": "Area (m^2)" },
        example: "Copper wire: rho = 1.7x10^-8 ohm.m, L = 2 m, A = 7.85x10^-7 m^2. R = 0.043 ohm",
        meaning: "Resistance increases with length, decreases with area."
      },
      {
        name: "Current and Drift Velocity",
        formula: "I = nA*vd*q",
        variables: { "I": "Current (A)", "n": "Electron density (m^-3)", "A": "Area (m^2)", "vd": "Drift velocity (m/s)", "q": "1.6x10^-19 C" },
        example: "Copper n = 8.5x10^28 m^-3, A = 1 mm^2, I = 1 A. vd = 7.35x10^-5 m/s",
        meaning: "Drift velocity is very small even for appreciable currents."
      },
      {
        name: "Power",
        formula: "P = VI = I^2*R = V^2/R",
        variables: { "P": "Power (W)", "V": "Voltage (V)", "I": "Current (A)", "R": "Resistance (ohm)" },
        example: "100 W bulb at 200 V: R = V^2/P = 400 ohm, I = P/V = 0.5 A",
        meaning: "Power expressed in three equivalent forms."
      },
      {
        name: "Wheatstone Bridge Balance",
        formula: "P/Q = R/S",
        variables: { "P, Q, R, S": "Four resistances in the bridge" },
        example: "P = 100, Q = 200, R = 150: S = QR/P = (200)(150)/100 = 300 ohm",
        meaning: "Ratio of adjacent arms equal at balance."
      },
      {
        name: "Potentiometer - Compare EMFs",
        formula: "E1/E2 = l1/l2",
        variables: { "E1, E2": "EMFs of two cells (V)", "l1, l2": "Balancing lengths (m)" },
        example: "l1 = 400 cm, l2 = 600 cm: E1/E2 = 400/600 = 2/3",
        meaning: "Ratio of emfs equals ratio of balancing lengths."
      }
    ],
    derivations: [
      {
        title: "Drift Velocity and its Relation with Current",
        steps: [
          "Consider conductor of length L, area A, free electron density n.",
          "Electric field E applied, force on electron F = eE.",
          "Acceleration a = F/m = eE/m.",
          "Drift velocity vd = a*tau = eE*tau/m.",
          "E = V/L, so vd = eV*tau/(mL).",
          "Current: I = charge passing per second = nA*vd*q.",
          "Substituting: I = nAe(eV*tau/(mL)) = ne^2*AV*tau/(mL).",
          "Since R = mL/(ne^2*A*tau) = rho*L/A, we get I = V/R (Ohm's law)."
        ]
      },
      {
        title: "Internal Resistance using Potentiometer",
        steps: [
          "Cell of emf E, internal resistance r, resistance box R in parallel.",
          "Step 1: R open, balancing length l1. E = x*l1 (x = potential gradient).",
          "Step 2: R connected, balancing length l2. V = x*l2.",
          "Step 3: Current drawn: I = V/R = x*l2/R.",
          "Step 4: E = V + Ir (emf equation).",
          "Step 5: x*l1 = x*l2 + (x*l2/R)*r.",
          "Step 6: l1 = l2(1 + r/R).",
          "Step 7: r = R[(l1/l2) - 1]."
        ]
      }
    ],
    examples: [
      {
        question: "A 12 V battery has internal resistance 0.5 ohm. If it delivers 2 A, find terminal voltage and power delivered.",
        solution: {
          formula: "V = E - Ir, P = VI",
          steps: [
            { label: "Terminal voltage", text: "V = E - Ir", math: "V = 12 - 2(0.5) = 11 V" },
            { label: "Power", text: "P = VI", math: "P = 11 x 2 = 22 W" },
            { label: "External resistance", text: "R = V/I", math: "R = 11/2 = 5.5 ohm" }
          ],
          answer: "V = 11 V, P = 22 W",
          explanation: "Voltage drop across internal resistance: Ir = 1 V."
        }
      },
      {
        question: "Wheatstone bridge: P = 200, Q = 400, S = 300 ohm. Find R for balance. If battery is 6 V, find currents.",
        solution: {
          formula: "P/Q = R/S",
          steps: [
            { label: "Balance condition", text: "P/Q = R/S", math: "200/400 = R/300" },
            { label: "Calculate R", text: "R = PS/Q", math: "R = (200 x 300)/400 = 150 ohm" },
            { label: "Current through PQ", text: "R_PQ = P + Q = 600 ohm", math: "I1 = 6/600 = 0.01 A = 10 mA" },
            { label: "Current through RS", text: "R_RS = R + S = 450 ohm", math: "I2 = 6/450 = 13.3 mA" }
          ],
          answer: "R = 150 ohm, I1 = 10 mA, I2 = 13.3 mA",
          explanation: "At balance, galvanometer current is zero, arms act as parallel branches."
        }
      },
      {
        question: "Two cells: E1 = 1.5 V, E2 = 2.0 V. Balance point for first is 30 cm. Find balance point for second.",
        solution: {
          formula: "E1/E2 = l1/l2",
          steps: [
            { label: "Given", text: "E1 = 1.5 V, E2 = 2.0 V, l1 = 30 cm", math: "" },
            { label: "Using ratio", text: "E1/E2 = l1/l2", math: "1.5/2.0 = 30/l2" },
            { label: "Calculate l2", text: "l2 = (2.0 x 30)/1.5", math: "l2 = 40 cm" }
          ],
          answer: "Balance point = 40 cm",
          explanation: "Higher emf requires longer balancing length."
        }
      }
    ],
    commonMistakes: [
      { title: "EMF vs Terminal Voltage", text: "EMF (E) is total energy per charge from source. Terminal voltage V = E - Ir. Equal only when no current flows." },
      { title: "KVL Sign Convention", text: "Going - to + of battery = +E (gain). + to - = -E (drop). Resistor in current direction = -IR. Against current = +IR." },
      { title: "Potentiometer vs Voltmeter", text: "Voltmeter draws current and measures terminal voltage. Potentiometer draws no current at null point, measures true emf." },
      { title: "Series vs Parallel Resistance", text: "Series: R_eq = R1 + R2 (direct add). Parallel: 1/R_eq = 1/R1 + 1/R2 (inverse add). Opposite to capacitors." }
    ],
    quickRevision: [
      { title: "Ohm's Law", text: "V = IR, valid for ohmic conductors. R = rho*L/A." },
      { title: "Drift Velocity", text: "vd = eE*tau/m. I = nA*vd*q. Very small even for large current." },
      { title: "Kirchhoff's Laws", text: "KCL: Sigma I = 0 at junction. KVL: Sigma V = 0 in loop." },
      { title: "Wheatstone Bridge", text: "Balance: P/Q = R/S. Null deflection through galvanometer." },
      { title: "Potentiometer", text: "E1/E2 = l1/l2. Measures true emf. r = R[(l1/l2) - 1]." }
    ],
    importantQuestions: [
      { question: "Derive relation between current and drift velocity. Hence obtain Ohm's law.", type: "Derivation" },
      { question: "State Kirchhoff's laws. Apply them to find current in each branch of a circuit.", type: "Long Answer" },
      { question: "Explain Wheatstone bridge. Derive balance condition.", type: "Long Answer" },
      { question: "How does potentiometer compare emfs of two cells? Derive expression.", type: "Derivation" },
      { question: "A battery of emf 10 V and internal resistance 1 ohm. For what external resistance is power maximum?", type: "Numerical" }
    ],
    examTips: [
      "Draw circuit diagrams when solving Kirchhoff's problems. Assign current directions.",
      "Be very careful with KVL sign convention. Practice with 3-4 loop problems.",
      "Wheatstone bridge: check if P/Q equals R/S. If balanced, galvanometer current is zero.",
      "Potentiometer: practice calculating balancing lengths and potential gradient.",
      "Maximum power transfer when external resistance equals internal resistance.",
      "Always check if internal resistance of battery needs to be considered."
    ]
  }
,
  {
    id: "magnetic-effects",
    title: "Magnetic Effects of Current",
    description: "Study of magnetic fields produced by currents, Biot-Savart law, Ampere's law, force on moving charges, and cyclotron.",
    keywords: ["magnetic field", "Biot-Savart law", "Ampere's law", "solenoid", "toroid", "cyclotron", "Lorentz force"],
    concepts: [
      {
        title: "Magnetic Field and Biot-Savart Law",
        content: "A moving charge or current produces a magnetic field. Biot-Savart law: dB = (mu_0/4*pi)*(Idl x r_hat)/r^2, where mu_0 = 4*pi*10^-7 T.m/A is permeability of free space. Magnitude: dB = (mu_0/4*pi)*(Idl*sin(theta))/r^2. Direction by right-hand thumb rule. For infinitely long wire: B = mu_0*I/(2*pi*d). For finite wire: B = (mu_0*I/4*pi*d)(sin theta_1 + sin theta_2).",
        keywords: ["Biot-Savart law", "magnetic field", "permeability", "right-hand rule"],
        points: [
          "dB = (mu_0/4*pi)*(Idl x r_hat)/r^2 (Biot-Savart law)",
          "mu_0 = 4*pi*10^-7 T.m/A",
          "Long wire: B = mu_0*I/(2*pi*d)",
          "Direction: right-hand thumb rule",
          "Magnetic field is vector; use superposition"
        ]
      },
      {
        title: "Ampere's Circuital Law",
        content: "Ampere's law: line integral of B around closed loop equals mu_0 times enclosed current. B*dl = mu_0*I_enclosed. Analogous to Gauss's law. Useful for symmetric cases. Applications: (1) Long wire: B = mu_0*I/(2*pi*r). (2) Solenoid: B = mu_0*n*I (inside, uniform), n = N/L. Outside B approx 0. (3) Toroid: B = mu_0*N*I/(2*pi*r) (inside windings), B = 0 outside.",
        keywords: ["Ampere's law", "solenoid", "toroid", "magnetic field inside"],
        points: [
          "B*dl = mu_0*I_enclosed (Ampere's circuital law)",
          "Useful for symmetric current distributions",
          "Solenoid: B = mu_0*n*I (uniform inside)",
          "Toroid: B = mu_0*N*I/(2*pi*r)",
          "Analog of Gauss's law for magnetic fields"
        ]
      },
      {
        title: "Force on Moving Charge in Magnetic Field",
        content: "Charge q moving with velocity v in field B experiences force: F = q(v x B). Magnitude: F = qvB*sin(theta). Direction by right-hand rule. Key cases: theta = 0 (parallel): F = 0. theta = 90 (perpendicular): F = qvB, circular motion with r = mv/(qB). General: helical path. Force is always perpendicular to v and B, does no work, only changes direction.",
        keywords: ["Lorentz force", "magnetic force", "circular motion", "helical path"],
        points: [
          "F = q(v x B), magnitude F = qvB*sin(theta)",
          "Force perpendicular to v and B, does no work",
          "Perpendicular: circular motion r = mv/(qB)",
          "Parallel: no force, no deflection",
          "Helical path when v makes angle theta with B"
        ]
      },
      {
        title: "Cyclotron",
        content: "Cyclotron accelerates charged particles to high energies using magnetic field for circular motion and electric field for acceleration in gaps between Dees. Time period T = 2*pi*m/(qB), independent of speed. Particle gains energy qV each gap crossing. After n revolutions: energy = nqV. Max kinetic energy: K_max = q^2*B^2*R^2/(2m), depends on B and R, not V. Cannot accelerate electrons due to relativistic effects.",
        keywords: ["cyclotron", "Dee", "acceleration", "kinetic energy"],
        points: [
          "Magnetic field: circular motion. Electric field: acceleration.",
          "T = 2*pi*m/(qB), independent of speed",
          "K_max = q^2*B^2*R^2/(2m), not dependent on V",
          "Cannot accelerate electrons (relativistic effects)",
          "Oscillator frequency = particle revolution frequency"
        ]
      },
      {
        title: "Magnetic Field of Circular Loop",
        content: "At center of circular loop: B = mu_0*I/(2R) for single turn. For N turns: B = mu_0*N*I/(2R). On axis at distance x: B = mu_0*I*R^2/[2*(R^2+x^2)^(3/2)]. At large distances: B approx mu_0*m/(2*pi*x^3) (dipole field). Magnetic moment m = N*I*A. Parallel currents attract; anti-parallel repel.",
        keywords: ["circular loop", "magnetic moment", "axial field"],
        points: [
          "Center: B = mu_0*N*I/(2R)",
          "Axis: B = mu_0*I*R^2/[2*(R^2+x^2)^(3/2)]",
          "Magnetic moment: m = N*I*A",
          "Dipole field at large distance",
          "Parallel currents attract, anti-parallel repel"
        ]
      }
    ],
    definitions: [
      { term: "Magnetic Field", definition: "Region around moving charge or current where magnetic force is experienced. Vector, unit Tesla (T). 1 T = 10^4 G." },
      { term: "Biot-Savart Law", definition: "Law giving magnetic field due to small current element. dB = (mu_0/4*pi)*(Idl x r_hat)/r^2." },
      { term: "Ampere's Law", definition: "Line integral of B around closed loop = mu_0 * enclosed current. B*dl = mu_0*I_enclosed." },
      { term: "Solenoid", definition: "Long coil producing uniform magnetic field inside: B = mu_0*n*I, where n = turns per unit length." },
      { term: "Cyclotron Frequency", definition: "Frequency of revolution in magnetic field. f = qB/(2*pi*m), independent of speed." },
      { term: "Magnetic Moment", definition: "Magnetic strength of current loop. m = N*I*A, unit A.m^2." }
    ],
    formulas: [
      {
        name: "Biot-Savart Law",
        formula: "dB = (mu_0/4*pi)*(Idl*sin(theta))/r^2",
        variables: { "dB": "Field due to element (T)", "mu_0": "4*pi*10^-7 T.m/A", "I": "Current (A)", "dl": "Element length (m)", "theta": "Angle between Idl and r", "r": "Distance (m)" },
        example: "Idl = 1*0.01 A.m, theta = 30 deg, r = 0.1 m: dB = 5*10^-8 T",
        meaning: "Field from current element falls as 1/r^2."
      },
      {
        name: "Long Straight Wire",
        formula: "B = mu_0*I/(2*pi*r)",
        variables: { "B": "Field (T)", "mu_0": "4*pi*10^-7 T.m/A", "I": "Current (A)", "r": "Distance (m)" },
        example: "I = 10 A, r = 0.05 m: B = (4*pi*10^-7)(10)/(2*pi*0.05) = 4*10^-5 T",
        meaning: "Field decreases linearly with distance."
      },
      {
        name: "Solenoid",
        formula: "B = mu_0*n*I",
        variables: { "B": "Field inside (T)", "n": "Turns per unit length (m^-1)", "I": "Current (A)" },
        example: "n = 1000 turns/m, I = 2 A: B = (4*pi*10^-7)(1000)(2) = 2.51*10^-3 T",
        meaning: "Uniform field inside, approximately zero outside."
      },
      {
        name: "Force on Moving Charge",
        formula: "F = qvB*sin(theta)",
        variables: { "F": "Magnetic force (N)", "q": "Charge (C)", "v": "Velocity (m/s)", "B": "Field (T)", "theta": "Angle between v and B" },
        example: "Electron at 10^6 m/s in 0.1 T at 90 deg: F = (1.6*10^-19)(10^6)(0.1) = 1.6*10^-14 N",
        meaning: "Maximum force when v perpendicular to B."
      },
      {
        name: "Radius of Circular Path",
        formula: "r = mv/(qB)",
        variables: { "r": "Radius (m)", "m": "Mass (kg)", "v": "Speed (m/s)", "q": "Charge (C)", "B": "Field (T)" },
        example: "Proton at 10^6 m/s in 0.1 T: r = (1.67*10^-27)(10^6)/((1.6*10^-19)(0.1)) = 0.104 m",
        meaning: "Larger mass/speed gives larger radius; larger field gives smaller radius."
      },
      {
        name: "Cyclotron Max Energy",
        formula: "K_max = q^2*B^2*R^2/(2m)",
        variables: { "K_max": "Max kinetic energy (J)", "q": "Charge (C)", "B": "Field (T)", "R": "Dee radius (m)", "m": "Mass (kg)" },
        example: "Proton, B = 1.5 T, R = 0.4 m: K_max = 21.6 MeV",
        meaning: "Depends on B and R, not accelerating voltage."
      }
    ],
    derivations: [
      {
        title: "Magnetic Field on Axis of Circular Loop",
        steps: [
          "Consider circular loop radius R, current I, in xy-plane at origin.",
          "Point P on z-axis at distance x.",
          "Current element Idl at top, distance to P: r = sqrt(R^2 + x^2).",
          "dB = (mu_0/4*pi)*(Idl)/r^2 (Idl perpendicular to r).",
          "Only z-component survives (horizontal cancel by symmetry).",
          "dB_z = dB*cos(alpha) = (mu_0/4*pi)*(Idl*R)/(R^2+x^2)^(3/2).",
          "Integrate: B = (mu_0*I*R^2)/[2*(R^2+x^2)^(3/2)]."
        ]
      },
      {
        title: "Magnetic Field of Solenoid using Ampere's Law",
        steps: [
          "Long solenoid, N turns, length L, current I.",
          "By symmetry, B inside uniform along axis, B outside approx 0.",
          "Rectangular Amperian loop ABCD with AB inside (length l), CD outside.",
          "Ampere's law: B*dl = mu_0*I_enclosed.",
          "AB: Bl. BC, DA: 0 (B perpendicular). CD: 0 (B approx 0).",
          "Bl = mu_0*(n*l)*I where n = N/L.",
          "B = mu_0*n*I."
        ]
      }
    ],
    examples: [
      {
        question: "Straight wire carries 15 A. Find B at 0.1 m distance.",
        solution: {
          formula: "B = mu_0*I/(2*pi*r)",
          steps: [
            { label: "Given", text: "I = 15 A, r = 0.1 m", math: "" },
            { label: "Calculate", text: "B = (4*pi*10^-7)(15)/(2*pi*0.1)", math: "B = 3*10^-5 T = 0.3 G" },
            { label: "Direction", text: "Concentric circles around wire (right-hand rule)", math: "" }
          ],
          answer: "B = 3*10^-5 T",
          explanation: "Field is circular around wire, magnitude decreases as 1/r."
        }
      },
      {
        question: "Proton enters B = 0.5 T at 2*10^6 m/s at 30 deg. Find force, radius, pitch.",
        solution: {
          formula: "F = qvB*sin(theta), r = mv/(qB*sin(theta)), pitch = v*cos(theta)*T",
          steps: [
            { label: "Force", text: "F = qvB*sin(30)", math: "F = (1.6*10^-19)(2*10^6)(0.5)(0.5) = 8*10^-14 N" },
            { label: "Radius", text: "r = mv/(qB*sin(theta))", math: "r = (1.67*10^-27)(2*10^6)/((1.6*10^-19)(0.5)(0.5)) = 0.0835 m" },
            { label: "Time period", text: "T = 2*pi*m/(qB)", math: "T = 2*pi*(1.67*10^-27)/((1.6*10^-19)(0.5)) = 1.31*10^-7 s" },
            { label: "Pitch", text: "pitch = v*cos(30)*T", math: "pitch = (2*10^6)(0.866)(1.31*10^-7) = 0.227 m" }
          ],
          answer: "F = 8*10^-14 N, r = 8.35 cm, pitch = 22.7 cm",
          explanation: "Perpendicular component causes circular motion; parallel causes translation."
        }
      },
      {
        question: "Solenoid: 500 turns, 0.5 m length, 4 A current. Find field inside, field on axis at 0.25 m, magnetic moment (R = 0.02 m).",
        solution: {
          formula: "B = mu_0*n*I, B_axis = mu_0*I*R^2/[2*(R^2+x^2)^(3/2)], m = NIA",
          steps: [
            { label: "Inside", text: "n = 500/0.5 = 1000 turns/m", math: "B = (4*pi*10^-7)(1000)(4) = 5.03*10^-3 T" },
            { label: "On axis", text: "x = 0.25 m, R = 0.02 m", math: "B = 6.4*10^-6 T" },
            { label: "Moment", text: "m = NIA", math: "m = 500*4*pi*(0.02)^2 = 2.51 A.m^2" }
          ],
          answer: "B_inside = 5 mT, B_axis = 6.4 uT, m = 2.51 A.m^2",
          explanation: "Field is strong and uniform inside solenoid, weak outside."
        }
      }
    ],
    commonMistakes: [
      { title: "Direction Errors", text: "Right-hand rule for straight wire: thumb along current, fingers curl in B direction. For loop: curl fingers along current, thumb points along B at center." },
      { title: "Biot-Savart vs Ampere's Law", text: "Biot-Savart: small elements, asymmetric cases. Ampere's law: only for symmetric cases (wire, solenoid, toroid)." },
      { title: "Solenoid Field Confusion", text: "Inside: B = mu_0*n*I (uniform). Outside: B approx 0. Do not use B = mu_0*I/(2*pi*r) for solenoid." },
      { title: "Cyclotron Energy", text: "K_max = q^2*B^2*R^2/(2m) does NOT depend on accelerating voltage V. Higher V means fewer revolutions, same final energy." }
    ],
    quickRevision: [
      { title: "Biot-Savart", text: "dB = (mu_0/4*pi)*(Idl x r_hat)/r^2. Right-hand rule for direction." },
      { title: "Ampere's Law", text: "B*dl = mu_0*I_enclosed. Use for symmetric cases." },
      { title: "Long Wire", text: "B = mu_0*I/(2*pi*r). Concentric circles (right-hand rule)." },
      { title: "Solenoid", text: "B = mu_0*n*I inside (uniform), B approx 0 outside." },
      { title: "Force on Charge", text: "F = q(v x B). No force if v parallel B. Circular: r = mv/(qB)." },
      { title: "Cyclotron", text: "T = 2*pi*m/(qB), K_max = q^2*B^2*R^2/(2m). Cannot accelerate electrons." }
    ],
    importantQuestions: [
      { question: "State Biot-Savart law. Derive field at center of circular current loop.", type: "Derivation" },
      { question: "State Ampere's law. Derive field inside solenoid.", type: "Derivation" },
      { question: "Explain cyclotron working with diagram. Derive max kinetic energy.", type: "Long Answer" },
      { question: "Electron enters magnetic field at angle. Describe path, derive radius and pitch.", type: "Long Answer" },
      { question: "Compare magnetic fields at center and on axis of circular loop.", type: "Conceptual" }
    ],
    examTips: [
      "Always specify direction of B using right-hand rule. Draw field lines.",
      "For Biot-Savart, set up integral carefully and identify angle correctly.",
      "Ampere's law: clearly state Amperian loop and justify why B is constant.",
      "Cyclotron: T independent of speed (non-relativistic only).",
      "Force on charged particles: check sign of charge for direction.",
      "Solenoid: B uniform inside, nearly zero outside. Use n = N/L carefully."
    ]
  }
,
  {
    id: "magnetism-matter",
    title: "Magnetism and Matter",
    description: "Study of magnetic properties of materials, bar magnets, Earth's magnetism, and classification of magnetic materials.",
    keywords: ["bar magnet", "magnetic dipole", "Earth's magnetism", "diamagnetic", "paramagnetic", "ferromagnetic", "hysteresis", "Curie temperature"],
    concepts: [
      {
        title: "Bar Magnet as Magnetic Dipole",
        content: "A bar magnet is a magnetic dipole with north (N) and south (S) poles separated by distance 2l. Magnetic moment m = M*2l, where M is pole strength. Axial field: B_axial = (mu_0/4*pi)*(2m/r^3). Equatorial: B_eq = -(mu_0/4*pi)*(m/r^3). Torque: tau = m x B = mB*sin(theta). Potential energy: U = -m.B = -mB*cos(theta). Work to rotate: W = mB(cos theta_1 - cos theta_2).",
        keywords: ["magnetic dipole moment", "axial field", "equatorial field", "torque"],
        points: [
          "Magnetic moment m = M * 2l",
          "Axial: B = (mu_0/4*pi)*(2m/r^3)",
          "Equatorial: B = -(mu_0/4*pi)*(m/r^3)",
          "Torque: tau = m x B",
          "Potential energy: U = -m.B"
        ]
      },
      {
        title: "Earth's Magnetism",
        content: "Earth behaves like a giant bar magnet. Three elements: (1) Magnetic declination (delta): angle between geographic and magnetic meridian. (2) Dip (I): angle of total field with horizontal. (3) Horizontal component B_H: horizontal component of Earth's field. Relations: B_H = B*cos(I), B_V = B*sin(I), B = sqrt(B_H^2 + B_V^2), tan(I) = B_V/B_H. At poles: dip = 90 deg, B_H = 0. At equator: dip = 0 deg, B_V = 0.",
        keywords: ["magnetic declination", "dip", "horizontal component", "magnetic equator"],
        points: [
          "Three elements: declination, dip, horizontal component",
          "B_H = B*cos(I), B_V = B*sin(I), tan(I) = B_V/B_H",
          "At poles: I = 90 deg, B_H = 0",
          "At equator: I = 0 deg, B_V = 0",
          "Earth's field varies with location and time"
        ]
      },
      {
        title: "Diamagnetic Materials",
        content: "Diamagnetic materials have small negative susceptibility (chi < 0). Weakly repelled by magnets. All electron shells complete, no permanent dipole moment. External field induces dipole opposite to field. Relative permeability mu_r < 1 (typically 0.99999 to 0.999999). Examples: bismuth, copper, water, gold, diamond. Diamagnetism is universal, very weak, independent of temperature.",
        keywords: ["diamagnetic", "negative susceptibility", "repelled"],
        points: [
          "chi < 0 (small, negative)",
          "mu_r < 1",
          "Weakly repelled by magnets",
          "Examples: Bi, Cu, H2O, Au, Ag",
          "Independent of temperature"
        ]
      },
      {
        title: "Paramagnetic Materials",
        content: "Paramagnetic materials have small positive susceptibility (chi > 0). Weakly attracted by magnets. Atoms have permanent dipoles (unpaired electrons) but randomly oriented. External field partially aligns them. mu_r > 1 (typically 1.00001 to 1.001). Curie's law: chi = C/T (decreases with temperature). Examples: aluminum, platinum, manganese, chromium, oxygen.",
        keywords: ["paramagnetic", "positive susceptibility", "Curie's law"],
        points: [
          "chi > 0 (small, positive)",
          "mu_r > 1",
          "Weakly attracted by magnets",
          "chi = C/T (Curie's law)",
          "Examples: Al, Pt, Mn, Cr, O2"
        ]
      },
      {
        title: "Ferromagnetic Materials",
        content: "Ferromagnetic materials have large positive susceptibility (chi >> 0). Strongly attracted, can retain magnetism. Have domains (regions with aligned dipoles). Unmagnetized: domains random. External field: aligned domains grow (domain wall movement). Above Curie temperature (T_C): becomes paramagnetic. Hysteresis: magnetization curve not reversible. Retentivity: residual B when H = 0. Coercivity: reverse H to demagnetize. Loop area = energy loss per cycle. Examples: iron, cobalt, nickel.",
        keywords: ["ferromagnetic", "domains", "Curie temperature", "hysteresis", "retentivity", "coercivity"],
        points: [
          "chi >> 0 (large, positive)",
          "mu_r >> 1 (can be thousands)",
          "Strongly attracted, permanently magnetizable",
          "Domain theory explains ferromagnetism",
          "Above T_C: paramagnetic behavior",
          "Hysteresis: retentivity, coercivity, energy loss"
        ]
      }
    ],
    definitions: [
      { term: "Magnetic Dipole Moment", definition: "Product of pole strength and magnetic length. m = M*2l. Vector from S to N. Unit: A.m^2." },
      { term: "Magnetic Declination", definition: "Angle between geographic meridian and magnetic meridian at a place." },
      { term: "Magnetic Dip", definition: "Angle that Earth's total magnetic field makes with horizontal at a place." },
      { term: "Diamagnetism", definition: "Weak, negative magnetic property. Susceptibility small and negative. Universal property." },
      { term: "Paramagnetism", definition: "Weak, positive magnetic property due to permanent dipoles. Follows Curie's law." },
      { term: "Ferromagnetism", definition: "Strong magnetic property due to domain structure. Exhibits hysteresis." },
      { term: "Curie Temperature", definition: "Temperature above which ferromagnetic material becomes paramagnetic." },
      { term: "Hysteresis", definition: "Phenomenon where magnetization lags behind magnetizing field. B-H loop area = energy loss." }
    ],
    formulas: [
      {
        name: "Bar Magnet Axial Field",
        formula: "B_axial = (mu_0/4*pi)*(2m/r^3)",
        variables: { "B_axial": "Field at axial point (T)", "m": "Magnetic moment (A.m^2)", "r": "Distance from center (m)" },
        example: "m = 10 A.m^2 at 0.2 m: B = (10^-7)(20)/(0.2)^3 = 0.025 T",
        meaning: "Field on axis twice that on equator."
      },
      {
        name: "Bar Magnet Equatorial Field",
        formula: "B_eq = (mu_0/4*pi)*(m/r^3)",
        variables: { "B_eq": "Field at equatorial point (T)", "m": "Magnetic moment (A.m^2)", "r": "Distance (m)" },
        example: "m = 10 A.m^2 at 0.2 m: B = (10^-7)(10)/(0.2)^3 = 0.0125 T",
        meaning: "Field at equator half that on axis, opposite direction."
      },
      {
        name: "Torque on Bar Magnet",
        formula: "tau = mB*sin(theta)",
        variables: { "tau": "Torque (N.m)", "m": "Magnetic moment (A.m^2)", "B": "Field (T)", "theta": "Angle between m and B" },
        example: "m = 5 A.m^2, B = 0.1 T, theta = 60 deg: tau = (5)(0.1)sin60 = 0.433 N.m",
        meaning: "Maximum torque when perpendicular to field."
      },
      {
        name: "Earth's Field Relations",
        formula: "B = sqrt(B_H^2 + B_V^2), tan(I) = B_V/B_H",
        variables: { "B": "Total field (T)", "B_H": "Horizontal component (T)", "B_V": "Vertical component (T)", "I": "Angle of dip" },
        example: "B_H = 30 uT, B_V = 40 uT: B = 50 uT, I = 53.1 deg",
        meaning: "Horizontal component aligns compass needle."
      },
      {
        name: "Curie's Law",
        formula: "chi = C/T",
        variables: { "chi": "Magnetic susceptibility", "C": "Curie constant (K)", "T": "Temperature (K)" },
        example: "C = 0.6 K, T = 300 K: chi = 0.002",
        meaning: "Susceptibility decreases as temperature increases."
      }
    ],
    derivations: [
      {
        title: "Potential Energy of Bar Magnet in Uniform Field",
        steps: [
          "Bar magnet with moment m at angle theta to field B.",
          "Torque: tau = mB*sin(theta) (restoring).",
          "Work for small rotation dtheta: dW = tau*dtheta = mB*sin(theta)*dtheta.",
          "Total work theta_1 to theta_2: W = mB(cos theta_1 - cos theta_2).",
          "Potential energy: U = -mB*cos(theta) = -m.B.",
          "At theta = 0 (stable): U = -mB (minimum).",
          "At theta = 180 (unstable): U = +mB (maximum)."
        ]
      },
      {
        title: "Earth's Magnetic Field Components",
        steps: [
          "Total field B at angle I (dip) to horizontal.",
          "Horizontal: B_H = B*cos(I).",
          "Vertical: B_V = B*sin(I).",
          "Divide: B_V/B_H = tan(I).",
          "Square and add: B = sqrt(B_H^2 + B_V^2).",
          "At poles: I = 90 deg, B_H = 0, B_V = B.",
          "At equator: I = 0 deg, B_V = 0, B_H = B."
        ]
      }
    ],
    examples: [
      {
        question: "Bar magnet m = 10 A.m^2 in B = 0.2 T at 60 deg. Find torque, PE, work to rotate to 90 deg.",
        solution: {
          formula: "tau = mB*sin(theta), U = -mB*cos(theta), W = mB(cos theta_1 - cos theta_2)",
          steps: [
            { label: "Torque", text: "tau = mB*sin(60)", math: "tau = (10)(0.2)(0.866) = 1.732 N.m" },
            { label: "PE", text: "U = -mB*cos(60)", math: "U = -(10)(0.2)(0.5) = -1.0 J" },
            { label: "Work", text: "W = mB(cos60 - cos90)", math: "W = (10)(0.2)(0.5 - 0) = 1.0 J" }
          ],
          answer: "tau = 1.73 N.m, U = -1.0 J, W = 1.0 J",
          explanation: "Magnet experiences torque to align with field. Work needed to rotate further."
        }
      },
      {
        question: "B_H = 36 uT, dip = 60 deg. Find total field, vertical component, field at pole.",
        solution: {
          formula: "B = B_H/cos(I), B_V = B*sin(I)",
          steps: [
            { label: "Total field", text: "B = B_H/cos(60)", math: "B = 36/0.5 = 72 uT" },
            { label: "Vertical", text: "B_V = B*sin(60)", math: "B_V = 72*0.866 = 62.4 uT" },
            { label: "At pole", text: "B_pole = B (total field)", math: "B_pole = 72 uT" }
          ],
          answer: "B = 72 uT, B_V = 62.4 uT",
          explanation: "At magnetic poles, dip is 90 deg so total field is vertical."
        }
      }
    ],
    commonMistakes: [
      { title: "Geographic vs Magnetic Poles", text: "Earth's magnetic north pole is actually a magnetic south pole (attracts compass north). Do not confuse geographic and magnetic poles." },
      { title: "Dip Angle Misconception", text: "Dip = 0 at equator (horizontal field), dip = 90 at poles (vertical field). Students often reverse this." },
      { title: "Hysteresis Loop", text: "Retentivity: residual B when H = 0. Coercivity: reverse H for B = 0. Area = energy dissipated per cycle." },
      { title: "Domain Theory", text: "Domains exist even in unmagnetized ferromagnets. Magnetization aligns domains, does not create them." }
    ],
    quickRevision: [
      { title: "Bar Magnet", text: "Axial: B = (mu_0/4*pi)*(2m/r^3). Equatorial: B = (mu_0/4*pi)*(m/r^3)." },
      { title: "Earth's Magnetism", text: "B = sqrt(B_H^2 + B_V^2). tan(I) = B_V/B_H. Dip = 90 at poles, 0 at equator." },
      { title: "Diamagnetic", text: "chi < 0, mu_r < 1, repelled. Universal, temp independent. Bi, Cu, H2O." },
      { title: "Paramagnetic", text: "chi > 0, mu_r > 1, attracted. chi = C/T. Al, Pt, O2." },
      { title: "Ferromagnetic", text: "chi >> 0, mu_r >> 1, strongly attracted. Domains, hysteresis. Fe, Co, Ni." }
    ],
    importantQuestions: [
      { question: "Derive axial and equatorial field of bar magnet.", type: "Derivation" },
      { question: "Explain Earth's magnetism. Define declination, dip, horizontal component.", type: "Long Answer" },
      { question: "Classify magnetic materials. Compare properties with examples.", type: "Long Answer" },
      { question: "Explain domain theory. What is hysteresis?", type: "Long Answer" },
      { question: "Why does ferromagnet become paramagnetic above Curie temperature?", type: "Conceptual" }
    ],
    examTips: [
      "Memorize axial and equatorial field formulas for bar magnet.",
      "For Earth's magnetism, draw right triangle with B, B_H, B_V, dip angle.",
      "Compare magnetic materials using table: susceptibility, permeability, examples.",
      "Hysteresis loop: label retentivity, coercivity, explain area meaning.",
      "Diamagnetism is universal but weak, overshadowed by paramagnetism/ferromagnetism."
    ]
  }
,
  {
    id: "electromagnetic-induction",
    title: "Electromagnetic Induction",
    description: "Study of EMF induced by changing magnetic flux, Faraday's laws, Lenz's law, self and mutual inductance, and eddy currents.",
    keywords: ["electromagnetic induction", "Faraday's law", "Lenz's law", "magnetic flux", "self inductance", "mutual inductance", "eddy currents"],
    concepts: [
      {
        title: "Magnetic Flux and Faraday's Laws",
        content: "Magnetic flux: number of field lines through surface. Phi = B.A = BA*cos(theta), where theta between B and area vector A. Unit: Weber (Wb). Faraday's laws: (1) Changing magnetic flux induces EMF. (2) EMF magnitude = rate of change of flux. epsilon = -dPhi/dt. For N turns: epsilon = -N*dPhi/dt. Induced current: I = epsilon/R. Direction given by Lenz's law.",
        keywords: ["magnetic flux", "Faraday's law", "induced EMF", "Weber"],
        points: [
          "Phi = BA*cos(theta), unit: Weber (Wb)",
          "epsilon = -dPhi/dt (Faraday's law)",
          "For N turns: epsilon = -N*dPhi/dt",
          "Induced current: I = epsilon/R",
          "EMF induced only when flux changes"
        ]
      },
      {
        title: "Lenz's Law and Conservation of Energy",
        content: "Lenz's law: induced current opposes the change causing it. Based on conservation of energy. When magnet moves toward coil, induced current repels it (north pole facing north pole). Requires mechanical work converted to electrical energy. If violated, magnet would accelerate indefinitely (energy created from nothing).",
        keywords: ["Lenz's law", "conservation of energy", "opposition"],
        points: [
          "Induced current opposes the change causing it",
          "Based on conservation of energy",
          "Determines direction of induced current",
          "Mechanical work converted to electrical energy",
          "Moving magnet toward coil: repulsion"
        ]
      },
      {
        title: "Self Inductance",
        content: "Self inductance: coil opposes change in current by inducing EMF in itself. epsilon = -L*(dI/dt), L = N*Phi/I. For solenoid: L = mu_0*n^2*A*l = mu_0*N^2*A/l. Unit: Henry (H). 1 H = 1 Wb/A = 1 V.s/A. Energy stored: U = (1/2)*L*I^2 (in magnetic field). Inductor passes DC freely, opposes changing current.",
        keywords: ["self inductance", "back EMF", "Henry", "energy stored"],
        points: [
          "epsilon = -L*(dI/dt), opposes change in current",
          "L = mu_0*N^2*A/l (solenoid)",
          "Unit: Henry (H) = Wb/A",
          "Energy: U = (1/2)*L*I^2",
          "Inductor: passes DC, opposes changing current"
        ]
      },
      {
        title: "Mutual Inductance",
        content: "Mutual inductance: change in one coil induces EMF in nearby coil. epsilon_2 = -M*(dI_1/dt). For coaxial solenoids: M = mu_0*n_1*n_2*A_2*l_2. Coupling coefficient: k = M/sqrt(L_1*L_2), 0 <= k <= 1. k = 1 for perfect coupling. Depends on geometry, orientation, core material. Transformer principle based on mutual inductance.",
        keywords: ["mutual inductance", "coupling coefficient", "transformer"],
        points: [
          "epsilon_2 = -M*(dI_1/dt)",
          "M = mu_0*n_1*n_2*A_2*l_2 (coaxial solenoids)",
          "k = M/sqrt(L_1*L_2), 0 <= k <= 1",
          "Depends on geometry, orientation, core material",
          "Transformer principle is mutual inductance"
        ]
      },
      {
        title: "Eddy Currents",
        content: "Circulating currents induced in conductors by changing magnetic field. Flow in closed loops within conductor. Disadvantages: energy loss as heat (I^2*R), heating, demagnetization. Advantages: magnetic braking, induction furnace, speedometer, energy meter. Reduced by laminated cores (insulated thin sheets increase resistance, reduce current paths).",
        keywords: ["eddy currents", "Foucault currents", "laminated core", "magnetic braking"],
        points: [
          "Circulating currents in conductors by changing flux",
          "Cause energy loss as heat (I^2*R loss)",
          "Reduced by laminating the core",
          "Used in: magnetic braking, induction furnace",
          "Energy meter disk rotates due to eddy currents"
        ]
      }
    ],
    definitions: [
      { term: "Magnetic Flux", definition: "Number of field lines through surface. Phi = BA*cos(theta), measured in Weber (Wb). 1 Wb = 1 T.m^2." },
      { term: "EMF", definition: "Work done per unit charge in complete circuit. Induced voltage from changing flux. epsilon = -dPhi/dt, unit: Volt (V)." },
      { term: "Self Inductance", definition: "Property opposing changes in current by inducing EMF in coil itself. L = N*Phi/I, unit: Henry (H)." },
      { term: "Mutual Inductance", definition: "Property by which change in one coil induces EMF in neighboring coil. M = Phi_2/I_1, unit: Henry (H)." },
      { term: "Eddy Currents", definition: "Circulating currents induced in bulk conductor by changing magnetic field." },
      { term: "Lenz's Law", definition: "Induced current opposes the change in flux that produced it. Based on conservation of energy." }
    ],
    formulas: [
      {
        name: "Faraday's Law",
        formula: "epsilon = -dPhi/dt",
        variables: { "epsilon": "Induced EMF (V)", "Phi": "Magnetic flux (Wb)", "t": "Time (s)" },
        example: "Flux changes 0.02 to 0.01 Wb in 0.1 s: epsilon = 0.1 V",
        meaning: "EMF induced only when flux changes with time."
      },
      {
        name: "Magnetic Flux",
        formula: "Phi = BA*cos(theta)",
        variables: { "Phi": "Flux (Wb)", "B": "Field (T)", "A": "Area (m^2)", "theta": "Angle between B and area vector" },
        example: "B = 0.5 T, A = 0.2 m^2, theta = 60 deg: Phi = 0.05 Wb",
        meaning: "Maximum flux when field perpendicular to surface."
      },
      {
        name: "Self Inductance of Solenoid",
        formula: "L = mu_0*N^2*A/l",
        variables: { "L": "Inductance (H)", "mu_0": "4*pi*10^-7 T.m/A", "N": "Turns", "A": "Area (m^2)", "l": "Length (m)" },
        example: "N = 1000, A = 10 cm^2, l = 0.5 m: L = 2.5 mH",
        meaning: "Inductance increases with N^2 and A, decreases with l."
      },
      {
        name: "Energy in Inductor",
        formula: "U = (1/2)*L*I^2",
        variables: { "U": "Energy (J)", "L": "Inductance (H)", "I": "Current (A)" },
        example: "L = 0.5 H, I = 4 A: U = (1/2)(0.5)(16) = 4 J",
        meaning: "Energy stored in magnetic field of inductor."
      },
      {
        name: "EMF in Rotating Coil",
        formula: "epsilon = NAB*omega*sin(omega*t)",
        variables: { "epsilon": "EMF (V)", "N": "Turns", "A": "Area (m^2)", "B": "Field (T)", "omega": "Angular velocity (rad/s)" },
        example: "N = 50, A = 0.1, B = 0.2, omega = 100: epsilon_max = 100 V",
        meaning: "Maximum when coil parallel to field."
      },
      {
        name: "Mutual Inductance",
        formula: "M = mu_0*n_1*n_2*A_2*l_2",
        variables: { "M": "Mutual inductance (H)", "n_1, n_2": "Turns/m of solenoids", "A_2": "Inner solenoid area", "l_2": "Inner solenoid length" },
        example: "n_1 = 1000, n_2 = 500, A_2 = 10^-3, l_2 = 0.2: M = 0.126 mH",
        meaning: "Depends on geometry of both coils."
      }
    ],
    derivations: [
      {
        title: "EMF in Rod Rotating in Magnetic Field",
        steps: [
          "Rod length L rotating about end in plane perpendicular to B.",
          "Element dx at distance x: velocity v = omega*x.",
          "EMF in element: d_epsilon = Bv*dx = B*omega*x*dx.",
          "Total: epsilon = integral(B*omega*x dx) from 0 to L.",
          "epsilon = B*omega*(L^2/2).",
          "Direction by Fleming's right-hand rule or Lenz's law."
        ]
      },
      {
        title: "Self Inductance of Toroid",
        steps: [
          "Toroid: N turns, area A, mean radius R, length l = 2*pi*R.",
          "Current I produces B = mu_0*N*I/l.",
          "Flux per turn: Phi = B*A = mu_0*N*I*A/l.",
          "Total flux: N*Phi = mu_0*N^2*I*A/l.",
          "L = N*Phi/I = mu_0*N^2*A/l."
        ]
      }
    ],
    examples: [
      {
        question: "50-turn coil, 10 cm radius, perpendicular to 0.5 T field. Field removed in 0.1 s. Find average EMF.",
        solution: {
          formula: "epsilon = -N*Delta(Phi)/Delta(t)",
          steps: [
            { label: "Initial flux", text: "Phi_1 = BA = 0.5*pi*(0.1)^2", math: "Phi_1 = 0.0157 Wb" },
            { label: "Final flux", text: "Phi_2 = 0", math: "" },
            { label: "Change", text: "Delta(Phi) = -0.0157 Wb", math: "" },
            { label: "EMF", text: "epsilon = -50*(-0.0157)/0.1", math: "epsilon = 7.85 V" }
          ],
          answer: "epsilon = 7.85 V",
          explanation: "Magnitude of average EMF is 7.85 V."
        }
      },
      {
        question: "Solenoid: 2000 turns, 0.5 m, 10 cm^2, dI/dt = 10 A/s. Find L and induced EMF.",
        solution: {
          formula: "L = mu_0*N^2*A/l, epsilon = -L*dI/dt",
          steps: [
            { label: "Inductance", text: "L = mu_0*N^2*A/l", math: "L = (4*pi*10^-7)(4*10^6)(10^-3)/0.5 = 20 mH" },
            { label: "EMF", text: "epsilon = -L*dI/dt", math: "epsilon = -(0.02)(10) = -0.2 V" }
          ],
          answer: "L = 20 mH, |epsilon| = 0.2 V",
          explanation: "Induced EMF opposes change in current."
        }
      },
      {
        question: "100-turn coil, 0.05 m^2, rotates at 300 rpm in 0.2 T. Find max EMF, EMF at 0.01 s, average over quarter cycle.",
        solution: {
          formula: "epsilon = NAB*omega*sin(omega*t)",
          steps: [
            { label: "Angular velocity", text: "f = 5 Hz, omega = 10*pi rad/s", math: "omega = 31.42 rad/s" },
            { label: "Max EMF", text: "epsilon_max = NAB*omega", math: "epsilon_max = 100*0.05*0.2*31.42 = 31.42 V" },
            { label: "At t = 0.01 s", text: "epsilon = epsilon_max*sin(omega*t)", math: "epsilon = 31.42*sin(0.3142) = 9.71 V" },
            { label: "Average", text: "epsilon_avg = (2/pi)*epsilon_max", math: "epsilon_avg = 20 V" }
          ],
          answer: "epsilon_max = 31.42 V, epsilon(0.01s) = 9.71 V, avg = 20 V",
          explanation: "EMF varies sinusoidally. Max when coil parallel to field."
        }
      }
    ],
    commonMistakes: [
      { title: "Sign in Faraday's Law", text: "Negative sign represents Lenz's law. For magnitude, drop sign; for direction, keep it." },
      { title: "Flux vs EMF Phase", text: "Max flux when coil perpendicular to field. Max EMF when coil parallel. They are 90 deg out of phase." },
      { title: "Self Inductance", text: "Inductor opposes CHANGE in current, not current itself. In steady DC, behaves like short circuit." },
      { title: "Eddy Current Direction", text: "Depends on whether flux is increasing or decreasing. Always opposes change (Lenz's law)." }
    ],
    quickRevision: [
      { title: "Faraday's Law", text: "epsilon = -dPhi/dt. EMF when flux changes. N turns: epsilon = -N*dPhi/dt." },
      { title: "Lenz's Law", text: "Induced current opposes the change. Conservation of energy." },
      { title: "Flux", text: "Phi = BA*cos(theta). Unit: Weber. Max when B perp to surface." },
      { title: "Self Inductance", text: "L = mu_0*N^2*A/l. epsilon = -L*dI/dt. U = (1/2)*L*I^2." },
      { title: "Mutual Inductance", text: "M = mu_0*n_1*n_2*A_2*l_2. epsilon_2 = -M*dI_1/dt." },
      { title: "Eddy Currents", text: "Circulating currents in conductors. Reduced by lamination." }
    ],
    importantQuestions: [
      { question: "State Faraday's laws. State and explain Lenz's law.", type: "Long Answer" },
      { question: "Derive self inductance of solenoid. Derive energy stored in inductor.", type: "Derivation" },
      { question: "Explain eddy currents. Advantages and disadvantages.", type: "Long Answer" },
      { question: "Rod rotates in magnetic field. Derive induced EMF.", type: "Derivation" },
      { question: "How does transformer work? Limitations?", type: "Long Answer" }
    ],
    examTips: [
      "Specify direction of induced current using Lenz's law before calculating magnitude.",
      "Convert units: cm^2 to m^2, rpm to rad/s.",
      "Rotating coil: epsilon_max = NAB*omega, avg over quarter = 2*epsilon_max/pi.",
      "Self inductance and resistance are different: inductor stores energy, resistor dissipates.",
      "Transformer: check if ideal (no losses) or practical (with efficiency)."
    ]
  }
,
  {
    id: "alternating-current",
    title: "Alternating Current",
    description: "Study of AC circuits, LCR series and parallel circuits, resonance, transformers, and power in AC circuits.",
    keywords: ["alternating current", "LCR circuit", "resonance", "transformer", "power factor", "impedance", "phase", "reactance"],
    concepts: [
      {
        title: "AC Voltage and Current",
        content: "AC current reverses direction periodically. Voltage: v = V0*sin(omega*t), V0 = peak voltage, omega = 2*pi*f. Current through resistor: i = I0*sin(omega*t). Average over full cycle = 0. Average over half cycle: V_avg = 2*V0/pi = 0.637*V0. RMS values: V_rms = V0/sqrt(2) = 0.707*V0, I_rms = I0/sqrt(2). RMS values are what meters read (e.g., 230V AC supply).",
        keywords: ["peak value", "RMS value", "average value", "angular frequency"],
        points: [
          "v = V0*sin(omega*t), i = I0*sin(omega*t)",
          "V_rms = V0/sqrt(2), I_rms = I0/sqrt(2)",
          "V_avg (half cycle) = 2*V0/pi",
          "AC meters read RMS values",
          "Power: P = V_rms*I_rms*cos(phi)"
        ]
      },
      {
        title: "Phasor Representation",
        content: "Phasors are rotating vectors for AC quantities. Length = peak value, projection = instantaneous value. Phase difference phi: angle between V and I phasors. Pure resistor: V and I in phase (phi = 0). Pure inductor: V leads I by 90 deg (phi = +90). Pure capacitor: I leads V by 90 deg (phi = -90). Memory aids: ELI (E leads I in L), ICE (I leads E in C).",
        keywords: ["phasor", "phase difference", "lead", "lag"],
        points: [
          "Phasor: rotating vector representing AC quantity",
          "Length = peak value, projection = instantaneous value",
          "Phase difference phi between V and I",
          "Voltage leads current in inductor (ELI)",
          "Current leads voltage in capacitor (ICE)"
        ]
      },
      {
        title: "AC through R, L, and C",
        content: "Resistor: v = V0*sin(omega*t), i = I0*sin(omega*t). In phase. Z = R. Inductor: v leads i by 90 deg. X_L = omega*L = 2*pi*f*L. Z = X_L. Capacitor: i leads v by 90 deg. X_C = 1/(omega*C) = 1/(2*pi*f*C). Z = X_C. Reactance depends on frequency; resistance does not.",
        keywords: ["inductive reactance", "capacitive reactance", "impedance"],
        points: [
          "Resistor: phi = 0, Z = R",
          "Inductor: phi = +90 (V leads), X_L = omega*L",
          "Capacitor: phi = -90 (I leads), X_C = 1/(omega*C)",
          "X_L increases with frequency",
          "X_C decreases with frequency"
        ]
      },
      {
        title: "Series LCR Circuit and Resonance",
        content: "Series LCR: Z = sqrt(R^2 + (X_L - X_C)^2). Phase: tan(phi) = (X_L - X_C)/R. Current: I = V/Z. Power factor: cos(phi) = R/Z. Resonance when X_L = X_C: omega_0 = 1/sqrt(LC), f_0 = 1/(2*pi*sqrt(LC)). At resonance: Z = R (min), I = V/R (max), cos(phi) = 1. Quality factor: Q = omega_0*L/R = (1/R)*sqrt(L/C). Bandwidth = f_0/Q.",
        keywords: ["impedance", "resonance", "resonant frequency", "quality factor", "power factor"],
        points: [
          "Z = sqrt(R^2 + (X_L - X_C)^2)",
          "Resonance: X_L = X_C, omega_0 = 1/sqrt(LC)",
          "At resonance: Z = R (min), I = V/R (max)",
          "Q = omega_0*L/R = (1/R)*sqrt(L/C)",
          "Power factor cos(phi) = R/Z"
        ]
      },
      {
        title: "Transformers",
        content: "Transformer changes AC voltage using mutual inductance. Primary (N1 turns), secondary (N2 turns) on iron core. Ideal: V1/V2 = N1/N2 = I2/I1. Step-up: N2 > N1, V2 > V1. Step-down: N2 < N1, V2 < V1. Efficiency: eta = P_out/P_in. Losses: copper (I^2*R), iron (eddy + hysteresis), flux leakage, winding resistance. Works only with AC, not DC (constant flux, no induced EMF).",
        keywords: ["transformer", "step-up", "step-down", "turns ratio", "efficiency"],
        points: [
          "V1/V2 = N1/N2 (turns ratio)",
          "Ideal: V1*I1 = V2*I2",
          "Step-up: N2 > N1; Step-down: N2 < N1",
          "Losses: copper, iron, flux leakage",
          "Works only with AC, not DC"
        ]
      },
      {
        title: "Power in AC Circuits",
        content: "Average power: P = V_rms*I_rms*cos(phi). Power factor: cos(phi) = R/Z. At resonance: cos(phi) = 1 (max power). Pure L or C: cos(phi) = 0 (wattless current). Current components: active (I*cos(phi), in phase with V) and reactive (I*sin(phi), 90 deg to V). Wattless current flows but dissipates no power (energy stored and returned each cycle).",
        keywords: ["power factor", "active component", "wattless current", "average power"],
        points: [
          "P = V_rms*I_rms*cos(phi)",
          "cos(phi) = R/Z (power factor)",
          "Max power at resonance (cos(phi) = 1)",
          "Wattless current: I*sin(phi)",
          "Pure L or C: power = 0"
        ]
      }
    ],
    definitions: [
      { term: "Alternating Current", definition: "Electric current that periodically reverses direction. Average value over complete cycle is zero." },
      { term: "RMS Value", definition: "Root mean square value = equivalent DC producing same heating. V_rms = V0/sqrt(2) = 0.707*V0." },
      { term: "Inductive Reactance", definition: "Opposition by inductor to AC. X_L = omega*L = 2*pi*f*L, unit: ohm." },
      { term: "Capacitive Reactance", definition: "Opposition by capacitor to AC. X_C = 1/(omega*C) = 1/(2*pi*f*C), unit: ohm." },
      { term: "Impedance", definition: "Total AC circuit opposition. Z = sqrt(R^2 + (X_L - X_C)^2), unit: ohm." },
      { term: "Power Factor", definition: "Ratio of resistance to impedance: cos(phi) = R/Z. Determines power dissipation fraction." },
      { term: "Resonance", definition: "Condition when X_L = X_C in LCR circuit, giving max current and unity power factor." },
      { term: "Quality Factor", definition: "Measure of resonance sharpness. Q = omega_0*L/R = (1/R)*sqrt(L/C)." }
    ],
    formulas: [
      {
        name: "RMS Value",
        formula: "V_rms = V0/sqrt(2) = 0.707*V0",
        variables: { "V_rms": "RMS voltage (V)", "V0": "Peak voltage (V)" },
        example: "Peak 311 V: V_rms = 311/sqrt(2) = 220 V",
        meaning: "220V AC means RMS = 220V, peak = 311V."
      },
      {
        name: "Inductive Reactance",
        formula: "X_L = omega*L = 2*pi*f*L",
        variables: { "X_L": "Reactance (ohm)", "omega": "Angular frequency (rad/s)", "L": "Inductance (H)", "f": "Frequency (Hz)" },
        example: "L = 0.1 H, f = 50 Hz: X_L = 2*pi*50*0.1 = 31.4 ohm",
        meaning: "Increases with frequency."
      },
      {
        name: "Capacitive Reactance",
        formula: "X_C = 1/(omega*C) = 1/(2*pi*f*C)",
        variables: { "X_C": "Reactance (ohm)", "C": "Capacitance (F)", "f": "Frequency (Hz)" },
        example: "C = 10 uF, f = 50 Hz: X_C = 1/(2*pi*50*10^-5) = 318 ohm",
        meaning: "Decreases with frequency."
      },
      {
        name: "LCR Impedance",
        formula: "Z = sqrt(R^2 + (X_L - X_C)^2)",
        variables: { "Z": "Impedance (ohm)", "R": "Resistance (ohm)", "X_L": "Inductive reactance", "X_C": "Capacitive reactance" },
        example: "R = 30, X_L = 50, X_C = 20: Z = sqrt(900 + 900) = 42.4 ohm",
        meaning: "Minimum at resonance when X_L = X_C."
      },
      {
        name: "Resonant Frequency",
        formula: "f_0 = 1/(2*pi*sqrt(LC))",
        variables: { "f_0": "Resonant frequency (Hz)", "L": "Inductance (H)", "C": "Capacitance (F)" },
        example: "L = 10 mH, C = 10 uF: f_0 = 503 Hz",
        meaning: "At this frequency, current is maximum."
      },
      {
        name: "Transformer Turns Ratio",
        formula: "V1/V2 = N1/N2",
        variables: { "V1": "Primary voltage (V)", "V2": "Secondary voltage (V)", "N1": "Primary turns", "N2": "Secondary turns" },
        example: "N1 = 1000, N2 = 100, V1 = 230 V: V2 = 23 V",
        meaning: "Voltage ratio equals turns ratio."
      }
    ],
    derivations: [
      {
        title: "Impedance of Series LCR Circuit",
        steps: [
          "Series LCR: R, L, C with v = V0*sin(omega*t).",
          "V_R = IR (in phase with I).",
          "V_L = I*X_L (leads I by 90).",
          "V_C = I*X_C (lags I by 90).",
          "Total: V^2 = V_R^2 + (V_L - V_C)^2.",
          "V^2 = I^2*(R^2 + (X_L - X_C)^2).",
          "Z^2 = R^2 + (X_L - X_C)^2.",
          "Z = sqrt(R^2 + (X_L - X_C)^2).",
          "tan(phi) = (X_L - X_C)/R."
        ]
      },
      {
        title: "Resonance in Series LCR",
        steps: [
          "At resonance, current max, impedance min.",
          "Z = sqrt(R^2 + (X_L - X_C)^2) min when X_L = X_C.",
          "omega*L = 1/(omega*C).",
          "omega^2 = 1/(LC), omega_0 = 1/sqrt(LC).",
          "f_0 = 1/(2*pi*sqrt(LC)).",
          "At resonance: Z = R, I = V/R.",
          "cos(phi) = 1 (unity power factor).",
          "Q = omega_0*L/R = (1/R)*sqrt(L/C)."
        ]
      }
    ],
    examples: [
      {
        question: "Series LCR: R = 10 ohm, L = 0.1 H, C = 100 uF, 200V, 50 Hz. Find Z, I, phi, power.",
        solution: {
          formula: "X_L = 2*pi*f*L, X_C = 1/(2*pi*f*C), Z = sqrt(R^2 + (X_L - X_C)^2)",
          steps: [
            { label: "X_L", text: "X_L = 2*pi*50*0.1 = 31.42 ohm", math: "" },
            { label: "X_C", text: "X_C = 1/(2*pi*50*100*10^-6) = 31.83 ohm", math: "" },
            { label: "Z", text: "Z = sqrt(10^2 + (31.42 - 31.83)^2) = 10.01 ohm", math: "" },
            { label: "I", text: "I = V/Z = 200/10.01 = 20 A", math: "" },
            { label: "phi", text: "tan(phi) = (31.42-31.83)/10 = -0.041, phi = -2.35 deg", math: "" },
            { label: "Power", text: "P = VI*cos(phi) = 200*20*cos(-2.35) = 3996 W", math: "" }
          ],
          answer: "Z = 10 ohm, I = 20 A, phi = -2.35 deg, P = 4 kW",
          explanation: "Near resonance since X_L approx X_C, nearly unity power factor."
        }
      },
      {
        question: "Transformer: N1 = 500, N2 = 5000, V1 = 220 V. Find V2, I1 if I2 = 0.5 A.",
        solution: {
          formula: "V1/V2 = N1/N2, V1*I1 = V2*I2",
          steps: [
            { label: "V2", text: "V2 = V1*(N2/N1) = 220*(5000/500)", math: "V2 = 2200 V" },
            { label: "I1", text: "I1 = V2*I2/V1", math: "I1 = (2200*0.5)/220 = 5 A" }
          ],
          answer: "V2 = 2200 V (step-up), I1 = 5 A",
          explanation: "Step-up transformer: secondary voltage 10x primary, primary current 10x secondary."
        }
      },
      {
        question: "Find resonant frequency: L = 25 mH, C = 10 uF. If R = 5 ohm, find Q and bandwidth.",
        solution: {
          formula: "f_0 = 1/(2*pi*sqrt(LC)), Q = omega_0*L/R, BW = f_0/Q",
          steps: [
            { label: "Resonant freq", text: "f_0 = 1/(2*pi*sqrt(25*10^-3 * 10^-5))", math: "f_0 = 318.3 Hz" },
            { label: "omega_0", text: "omega_0 = 2*pi*f_0 = 2000 rad/s", math: "" },
            { label: "Q", text: "Q = omega_0*L/R = (2000)(0.025)/5", math: "Q = 10" },
            { label: "Bandwidth", text: "BW = f_0/Q = 318.3/10", math: "BW = 31.83 Hz" }
          ],
          answer: "f_0 = 318.3 Hz, Q = 10, BW = 31.83 Hz",
          explanation: "Higher Q means sharper, more selective resonance."
        }
      }
    ],
    commonMistakes: [
      { title: "RMS vs Peak", text: "230V AC is RMS, not peak. Peak is 311 V. Meters read RMS values." },
      { title: "Phase Direction", text: "ELI: E (voltage) leads I (current) in L. ICE: I leads E in C. Do not reverse." },
      { title: "Resonance Frequency", text: "f_0 = 1/(2*pi*sqrt(LC)). Students often forget the 2*pi factor." },
      { title: "Transformer DC", text: "Transformers work only with AC. DC produces constant flux, no induced EMF in secondary." },
      { title: "Power Factor", text: "cos(phi) = R/Z, not V/I. Power is not simply V*I in AC circuits." }
    ],
    quickRevision: [
      { title: "RMS", text: "V_rms = V0/sqrt(2) = 0.707*V0. Meters read RMS." },
      { title: "Reactance", text: "X_L = omega*L (increases with f). X_C = 1/(omega*C) (decreases with f)." },
      { title: "Impedance", text: "Z = sqrt(R^2 + (X_L - X_C)^2). Min at resonance." },
      { title: "Resonance", text: "f_0 = 1/(2*pi*sqrt(LC)). Z = R, I = V/R, cos(phi) = 1." },
      { title: "Power", text: "P = V_rms*I_rms*cos(phi). cos(phi) = R/Z." },
      { title: "Transformer", text: "V1/V2 = N1/N2. Works only with AC." }
    ],
    importantQuestions: [
      { question: "Derive impedance of series LCR circuit. Draw phasor diagram.", type: "Derivation" },
      { question: "Explain resonance in series LCR. Derive resonant frequency and Q factor.", type: "Derivation" },
      { question: "Explain transformer working. Derive turns ratio. Discuss losses.", type: "Long Answer" },
      { question: "What is power factor? Explain wattless current.", type: "Conceptual" },
      { question: "Why transformer does not work on DC?", type: "Conceptual" }
    ],
    examTips: [
      "For LCR problems, always calculate X_L and X_C first, then Z, then I.",
      "Resonance: remember f_0 = 1/(2*pi*sqrt(LC)). Practice numericals.",
      "Transformer: check if ideal or real. Efficiency = P_out/P_in.",
      "Power factor tells you how much of apparent power is actually used.",
      "Wattless current: in pure L or C, energy oscillates but is not dissipated."
    ]
  }
,
  {
    id: "em-waves",
    title: "Electromagnetic Waves",
    description: "Study of electromagnetic spectrum, properties of EM waves, displacement current, and Maxwell's equations.",
    keywords: ["EM waves", "EM spectrum", "displacement current", "Maxwell's equations", "transverse waves", "speed of light"],
    concepts: [
      {
        title: "Displacement Current and Maxwell's Corrections",
        content: "Maxwell added displacement current to Ampere's law to make it consistent. Displacement current: I_d = epsilon_0*(dPhi_E/dt), where dPhi_E/dt is rate of change of electric flux. Modified Ampere's law: B*dl = mu_0*(I + I_d) = mu_0*(I + epsilon_0*dPhi_E/dt). This predicts electromagnetic waves. Between capacitor plates: conduction current stops but displacement current continues, maintaining continuity.",
        keywords: ["displacement current", "Maxwell's correction", "electric flux"],
        points: [
          "I_d = epsilon_0*(dPhi_E/dt)",
          "Modified Ampere's law: B*dl = mu_0*(I + I_d)",
          "Between capacitor: I_d maintains current continuity",
          "Predicted existence of EM waves",
          "Closes the gap in Ampere's law"
        ]
      },
      {
        title: "Electromagnetic Waves",
        content: "EM waves are transverse waves with oscillating electric and magnetic fields perpendicular to each other and to direction of propagation. E and B are in phase. Speed in vacuum: c = 1/sqrt(mu_0*epsilon_0) = 3*10^8 m/s. Energy is equally divided between E and B fields. EM waves carry energy and momentum. They can be reflected, refracted, diffracted, and polarized.",
        keywords: ["transverse waves", "speed of light", "E and B fields", "energy transport"],
        points: [
          "Transverse waves: E perpendicular to B perpendicular to propagation",
          "E and B are in phase",
          "Speed c = 3*10^8 m/s in vacuum",
          "Energy equally divided between E and B",
          "Can be reflected, refracted, polarized"
        ]
      },
      {
        title: "Electromagnetic Spectrum",
        content: "The arrangement of EM waves by frequency/wavelength: Radio waves > Micro waves > Infrared > Visible light (VIBGYOR) > Ultraviolet > X-rays > Gamma rays. All travel at speed c in vacuum. f*lambda = c. Higher frequency = shorter wavelength = more energy. Production: radio (LC circuits), IR (hot bodies), visible (mercury vapor), UV (electric arc), X-rays (metal target bombarded by electrons), gamma (nuclear transitions).",
        keywords: ["EM spectrum", "VIBGYOR", "radio waves", "X-rays", "gamma rays"],
        points: [
          "Order: radio > micro > IR > visible > UV > X-ray > gamma",
          "All travel at c = 3*10^8 m/s in vacuum",
          "f*lambda = c",
          "Higher frequency = shorter wavelength = more energy",
          "Different production mechanisms for different regions"
        ]
      },
      {
        title: "Maxwell's Equations",
        content: "Four equations summarizing all of electromagnetism: (1) Gauss's law for E: E*dA = q/epsilon_0. (2) Gauss's law for magnetism: B*dA = 0 (no magnetic monopoles). (3) Faraday's law: E*dl = -dPhi_B/dt. (4) Ampere-Maxwell law: B*dl = mu_0*I + mu_0*epsilon_0*dPhi_E/dt. These equations predict EM waves and establish that light is electromagnetic.",
        keywords: ["Maxwell's equations", "Gauss's law", "Faraday's law", "Ampere-Maxwell law"],
        points: [
          "Gauss's law for E: E*dA = q/epsilon_0",
          "Gauss's law for B: B*dA = 0",
          "Faraday's law: E*dl = -dPhi_B/dt",
          "Ampere-Maxwell: B*dl = mu_0*I + mu_0*epsilon_0*dPhi_E/dt",
          "Predict existence and properties of EM waves"
        ]
      },
      {
        title: "Energy and Momentum of EM Waves",
        content: "Energy density: u = (1/2)*epsilon_0*E^2 + (1/2)*B^2/mu_0. Since E = c*B, energy equally divided: u = epsilon_0*E^2 = B^2/mu_0. Energy flux (Poynting vector): S = (1/mu_0)*(E x B), magnitude S = EB/mu_0 = E^2/(mu_0*c). Momentum: p = U/c, where U is energy. Radiation pressure: p = I/c (for perfect absorption), p = 2*I/c (for perfect reflection). Intensity: I = (1/2)*epsilon_0*c*E_0^2.",
        keywords: ["energy density", "Poynting vector", "radiation pressure", "momentum"],
        points: [
          "Energy density: u = epsilon_0*E^2 = B^2/mu_0",
          "Poynting vector: S = (1/mu_0)*(E x B)",
          "Momentum: p = U/c",
          "Radiation pressure: I/c (absorption), 2I/c (reflection)",
          "Intensity: I = (1/2)*epsilon_0*c*E_0^2"
        ]
      }
    ],
    definitions: [
      { term: "Displacement Current", definition: "Current due to changing electric flux. I_d = epsilon_0*(dPhi_E/dt), has same dimensions as conduction current." },
      { term: "Electromagnetic Wave", definition: "Transverse wave with oscillating E and B fields perpendicular to each other and propagation direction." },
      { term: "Speed of Light", definition: "Speed of EM waves in vacuum. c = 1/sqrt(mu_0*epsilon_0) = 3*10^8 m/s." },
      { term: "Electromagnetic Spectrum", definition: "Arrangement of EM waves by frequency/wavelength: radio to gamma rays." },
      { term: "Poynting Vector", definition: "Energy flux of EM wave. S = (1/mu_0)*(E x B), direction of energy flow." },
      { term: "Radiation Pressure", definition: "Pressure exerted by EM wave on surface. p = I/c (absorption), p = 2I/c (reflection)." }
    ],
    formulas: [
      {
        name: "Speed of EM Waves",
        formula: "c = 1/sqrt(mu_0*epsilon_0)",
        variables: { "c": "Speed in vacuum (m/s)", "mu_0": "4*pi*10^-7 T.m/A", "epsilon_0": "8.854*10^-12 C^2/(N.m^2)" },
        example: "c = 1/sqrt(4*pi*10^-7 * 8.854*10^-12) = 3*10^8 m/s",
        meaning: "Fundamental constant, speed of light in vacuum."
      },
      {
        name: "Wavelength-Frequency Relation",
        formula: "c = f*lambda",
        variables: { "c": "Speed (m/s)", "f": "Frequency (Hz)", "lambda": "Wavelength (m)" },
        example: "Visible light f = 5*10^14 Hz: lambda = c/f = 600 nm",
        meaning: "Higher frequency means shorter wavelength."
      },
      {
        name: "Energy Density",
        formula: "u = epsilon_0*E^2 = B^2/mu_0",
        variables: { "u": "Energy density (J/m^3)", "epsilon_0": "8.854*10^-12", "E": "Electric field (V/m)", "B": "Magnetic field (T)" },
        example: "E = 100 V/m: u = 8.854*10^-12*(100)^2 = 8.854*10^-8 J/m^3",
        meaning: "Energy equally divided between E and B fields."
      },
      {
        name: "Poynting Vector",
        formula: "S = EB/mu_0 = E^2/(mu_0*c)",
        variables: { "S": "Energy flux (W/m^2)", "E": "Electric field (V/m)", "B": "Magnetic field (T)", "mu_0": "4*pi*10^-7" },
        example: "E = 100 V/m: S = (100)^2/(4*pi*10^-7 * 3*10^8) = 26.5 W/m^2",
        meaning: "Rate of energy transfer per unit area."
      },
      {
        name: "Displacement Current",
        formula: "I_d = epsilon_0*(dPhi_E/dt)",
        variables: { "I_d": "Displacement current (A)", "epsilon_0": "8.854*10^-12", "dPhi_E/dt": "Rate of change of electric flux (V.m/s)" },
        example: "dPhi_E/dt = 10^6 V.m/s: I_d = 8.854*10^-6 A = 8.854 uA",
        meaning: "Has same dimensions as conduction current."
      }
    ],
    derivations: [
      {
        title: "Speed of EM Waves from Maxwell's Equations",
        steps: [
          "From Faraday's law: curl(E) = -dB/dt.",
          "From Ampere-Maxwell: curl(B) = mu_0*epsilon_0*dE/dt (no conduction current in vacuum).",
          "Take curl of Faraday's: curl(curl(E)) = -d/dt(curl(B)).",
          "Using vector identity: grad(div(E)) - nabla^2*E = -mu_0*epsilon_0*d^2E/dt^2.",
          "In vacuum: div(E) = 0, so nabla^2*E = mu_0*epsilon_0*d^2E/dt^2.",
          "This is wave equation: d^2E/dx^2 = (1/v^2)*d^2E/dt^2.",
          "Comparing: v = 1/sqrt(mu_0*epsilon_0) = c."
        ]
      },
      {
        title: "Energy Relation Between E and B Fields",
        steps: [
          "For EM wave: E = c*B (E and B related by speed of light).",
          "Energy density in E field: u_E = (1/2)*epsilon_0*E^2.",
          "Energy density in B field: u_B = B^2/(2*mu_0).",
          "Substitute B = E/c: u_B = E^2/(2*mu_0*c^2).",
          "Since c^2 = 1/(mu_0*epsilon_0): u_B = (1/2)*epsilon_0*E^2 = u_E.",
          "Total energy density: u = u_E + u_B = epsilon_0*E^2 = B^2/mu_0."
        ]
      }
    ],
    examples: [
      {
        question: "Find wavelength of radio wave of frequency 1 MHz.",
        solution: {
          formula: "lambda = c/f",
          steps: [
            { label: "Given", text: "f = 1 MHz = 10^6 Hz, c = 3*10^8 m/s", math: "" },
            { label: "Calculate", text: "lambda = c/f", math: "lambda = 3*10^8/10^6 = 300 m" }
          ],
          answer: "lambda = 300 m",
          explanation: "Radio waves have long wavelengths (meters to kilometers)."
        }
      },
      {
        question: "E = 100 V/m in EM wave. Find B, energy density, Poynting vector.",
        solution: {
          formula: "B = E/c, u = epsilon_0*E^2, S = E^2/(mu_0*c)",
          steps: [
            { label: "B field", text: "B = E/c = 100/(3*10^8)", math: "B = 3.33*10^-7 T = 0.333 uT" },
            { label: "Energy density", text: "u = epsilon_0*E^2", math: "u = 8.854*10^-12*(100)^2 = 8.854*10^-8 J/m^3" },
            { label: "Poynting vector", text: "S = E^2/(mu_0*c)", math: "S = (100)^2/(4*pi*10^-7*3*10^8) = 26.5 W/m^2" }
          ],
          answer: "B = 0.333 uT, u = 8.85*10^-8 J/m^3, S = 26.5 W/m^2",
          explanation: "E and B are related by c = E/B in EM waves."
        }
      },
      {
        question: "EM wave has intensity 1 kW/m^2. Find average energy density and radiation pressure (absorption).",
        solution: {
          formula: "I = u*c, p = I/c",
          steps: [
            { label: "Energy density", text: "u = I/c", math: "u = 1000/(3*10^8) = 3.33*10^-6 J/m^3" },
            { label: "Radiation pressure", text: "p = I/c", math: "p = 1000/(3*10^8) = 3.33*10^-6 Pa" }
          ],
          answer: "u = 3.33*10^-6 J/m^3, p = 3.33*10^-6 Pa",
          explanation: "For absorption, radiation pressure equals energy density."
        }
      }
    ],
    commonMistakes: [
      { title: "Transverse Nature", text: "EM waves are transverse: E perpendicular to B perpendicular to propagation. Do not think E and B are along the direction of travel." },
      { title: "Speed Confusion", text: "c = 3*10^8 m/s in vacuum only. In medium: v = c/n, where n is refractive index." },
      { title: "Energy Division", text: "Energy is equally divided between E and B fields. u_E = u_B, not u_E > u_B or vice versa." },
      { title: "Displacement Current", text: "Not a real current (no charge flow). It's a term in Maxwell's equation accounting for changing electric flux." },
      { title: "Wavelength-Frequency", text: "c = f*lambda. Higher frequency = shorter wavelength. Do not confuse with sound waves where this is not applicable in same way." }
    ],
    quickRevision: [
      { title: "Speed", text: "c = 1/sqrt(mu_0*epsilon_0) = 3*10^8 m/s in vacuum." },
      { title: "Wave Equation", text: "c = f*lambda. f and lambda inversely proportional." },
      { title: "Energy", text: "u = epsilon_0*E^2 = B^2/mu_0. E = cB. Energy equally divided." },
      { title: "Poynting Vector", text: "S = (1/mu_0)*(E x B). Energy flux direction." },
      { title: "Displacement Current", text: "I_d = epsilon_0*(dPhi_E/dt). Closes Ampere's law." },
      { title: "Spectrum", text: "Radio > micro > IR > visible > UV > X-ray > gamma. All at c in vacuum." }
    ],
    importantQuestions: [
      { question: "What is displacement current? How did Maxwell modify Ampere's law?", type: "Long Answer" },
      { question: "Derive speed of EM waves from Maxwell's equations.", type: "Derivation" },
      { question: "Draw electromagnetic spectrum. Give production and detection of each region.", type: "Long Answer" },
      { question: "State Maxwell's four equations and explain their significance.", type: "Long Answer" },
      { question: "Show that energy in EM wave is equally divided between E and B fields.", type: "Derivation" }
    ],
    examTips: [
      "Remember: c = 3*10^8 m/s, mu_0 = 4*pi*10^-7, epsilon_0 = 8.854*10^-12.",
      "EM waves are transverse. E perpendicular to B perpendicular to propagation.",
      "For spectrum questions, list order, frequency range, production method, and detection.",
      "Maxwell's equations: know what each one describes physically.",
      "Energy density: u = epsilon_0*E^2 = B^2/mu_0. Poynting vector: S = EB/mu_0."
    ]
  }
,
  {
    id: "ray-optics",
    title: "Ray Optics",
    description: "Study of reflection, refraction, Snell's law, prism, total internal reflection, and optical instruments.",
    keywords: ["reflection", "refraction", "Snell's law", "prism", "total internal reflection", "optical instruments", "mirror", "lens"],
    concepts: [
      {
        title: "Reflection of Light",
        content: "Reflection: light bounces back when it strikes a reflecting surface. Laws: (1) Angle of incidence = angle of reflection (i = r). (2) Incident ray, reflected ray, and normal lie in same plane. Spherical mirrors: plane mirror forms virtual, erect, same-size image. Concave mirror: real/inverted or virtual/erect depending on object position. Convex mirror: always virtual, erect, diminished. Mirror formula: 1/v + 1/u = 1/f. Magnification: m = -v/u = h_i/h_o.",
        keywords: ["laws of reflection", "spherical mirror", "mirror formula", "magnification"],
        points: [
          "Angle of incidence = angle of reflection",
          "Incident, reflected ray, normal in same plane",
          "Mirror formula: 1/v + 1/u = 1/f",
          "Magnification: m = -v/u",
          "Concave: real or virtual image. Convex: always virtual."
        ]
      },
      {
        title: "Refraction of Light",
        content: "Refraction: bending of light when passing from one medium to another due to change in speed. Laws: (1) Incident ray, refracted ray, normal in same plane. (2) Snell's law: n1*sin(i) = n2*sin(r), where n = c/v is refractive index. n12 = n2/n1 = sin(i)/sin(r). Apparent depth: real depth/apparent depth = n2/n1. For viewing from rarer to denser: apparent depth < real depth. Total internal reflection: when light goes from denser to rarer medium at angle > critical angle: sin(C) = n2/n1 = 1/n.",
        keywords: ["Snell's law", "refractive index", "apparent depth", "critical angle", "TIR"],
        points: [
          "Snell's law: n1*sin(i) = n2*sin(r)",
          "n = c/v (refractive index)",
          "Apparent depth = real depth/n (looking from air to medium)",
          "TIR: sin(C) = 1/n (from denser to rarer)",
          "TIR applications: optical fibers, mirages, diamonds"
        ]
      },
      {
        title: "Total Internal Reflection",
        content: "When light travels from denser to rarer medium, it bends away from normal. At critical angle C: refracted ray grazes surface (r = 90 deg). For i > C: total internal reflection occurs. sin(C) = n_rarer/n_denser = 1/n (if rarer is vacuum/air). Critical angle for glass = 42 deg, water = 48.8 deg. Applications: (1) Optical fibers: light guides using repeated TIR. (2) Mirages: TIR in air layers of different density. (3) Diamonds: high n gives small C, light trapped inside. (4) Prism binoculars: right-angle prisms using TIR.",
        keywords: ["critical angle", "optical fiber", "mirage", "diamond"],
        points: [
          "Critical angle: sin(C) = 1/n",
          "For i > C: total internal reflection",
          "Glass: C = 42 deg, Water: C = 48.8 deg",
          "Optical fibers: repeated TIR guides light",
          "Diamond: high n, small C, brilliant sparkle"
        ]
      },
      {
        title: "Prism and Dispersion",
        content: "A prism deviates light by angle delta. For thin prism: delta = (n-1)*A, where A is refracting angle. For minimum deviation: n = sin((A+delta_m)/2)/sin(A/2). Dispersion: splitting of white light into colors (VIBGYOR) because n depends on wavelength. Violet (highest n, max deviation), Red (lowest n, min deviation). Angular dispersion = delta_v - delta_r. Dispersive power: omega = (delta_v - delta_r)/delta_y, where delta_y is deviation for yellow light.",
        keywords: ["prism", "dispersion", "minimum deviation", "dispersive power"],
        points: [
          "Thin prism: delta = (n-1)*A",
          "Minimum deviation: n = sin((A+delta_m)/2)/sin(A/2)",
          "Dispersion: violet deviates most, red least",
          "Angular dispersion = delta_v - delta_r",
          "Dispersive power: omega = (delta_v - delta_r)/delta_y"
        ]
      },
      {
        title: "Optical Instruments",
        content: "Simple microscope (magnifying glass): M = 1 + D/f (D = 25 cm, near point). Compound microscope: M = M_o * M_e = (L/f_o)*(1 + D/f_e), where L = tube length. Telescope: M = f_o/f_e (angular magnification). Resolving power: 1/d_min = 2*a*sin(alpha)/lambda, where a = aperture, alpha = half-angle. Numerical aperture: NA = n*sin(alpha). Fiber optics: NA = sqrt(n_1^2 - n_2^2), acceptance angle = arcsin(NA).",
        keywords: ["magnifying glass", "compound microscope", "telescope", "resolving power"],
        points: [
          "Simple microscope: M = 1 + D/f",
          "Compound microscope: M = (L/f_o)*(1 + D/f_e)",
          "Telescope: M = f_o/f_e",
          "Resolving power depends on wavelength and aperture",
          "Numerical aperture: NA = n*sin(alpha)"
        ]
      }
    ],
    definitions: [
      { term: "Reflection", definition: "Bouncing back of light when it strikes a reflecting surface. Angle of incidence equals angle of reflection." },
      { term: "Refraction", definition: "Bending of light when passing from one medium to another due to change in speed. Snell's law governs it." },
      { term: "Refractive Index", definition: "Ratio of speed of light in vacuum to speed in medium. n = c/v. Also n12 = sin(i)/sin(r)." },
      { term: "Critical Angle", definition: "Angle of incidence in denser medium for which angle of refraction in rarer medium is 90 degrees. sin(C) = 1/n." },
      { term: "Total Internal Reflection", definition: "Reflection of light back into denser medium when angle of incidence exceeds critical angle." },
      { term: "Dispersion", definition: "Splitting of white light into component colors because refractive index depends on wavelength." },
      { term: "Magnifying Power", definition: "Ratio of angle subtended by image at eye to angle subtended by object at eye." }
    ],
    formulas: [
      {
        name: "Mirror Formula",
        formula: "1/v + 1/u = 1/f",
        variables: { "v": "Image distance (m)", "u": "Object distance (m)", "f": "Focal length (m)" },
        example: "u = -30 cm, f = -10 cm (concave): 1/v = 1/(-10) - 1/(-30) = -2/30, v = -15 cm",
        meaning: "Relates object, image, and focal length for spherical mirrors."
      },
      {
        name: "Snell's Law",
        formula: "n1*sin(i) = n2*sin(r)",
        variables: { "n1": "Refractive index of medium 1", "n2": "Refractive index of medium 2", "i": "Angle of incidence", "r": "Angle of refraction" },
        example: "Glass (n=1.5) to air: sin(C) = 1/1.5 = 0.667, C = 41.8 deg",
        meaning: "Governs refraction at interface between two media."
      },
      {
        name: "Critical Angle",
        formula: "sin(C) = n2/n1 = 1/n (to air)",
        variables: { "C": "Critical angle", "n1": "Denser medium RI", "n2": "Rarer medium RI" },
        example: "Glass n = 1.5: sin(C) = 1/1.5 = 0.667, C = 41.8 deg",
        meaning: "Maximum angle for refraction; beyond this, TIR occurs."
      },
      {
        name: "Thin Prism Deviation",
        formula: "delta = (n-1)*A",
        variables: { "delta": "Angle of deviation", "n": "Refractive index", "A": "Refracting angle of prism" },
        example: "Thin prism A = 5 deg, n = 1.5: delta = (1.5-1)*5 = 2.5 deg",
        meaning: "Deviation proportional to prism angle and refractive index."
      },
      {
        name: "Minimum Deviation",
        formula: "n = sin((A+delta_m)/2)/sin(A/2)",
        variables: { "n": "Refractive index", "A": "Prism angle", "delta_m": "Minimum deviation angle" },
        example: "A = 60 deg, delta_m = 40 deg: n = sin(50)/sin(30) = 0.766/0.5 = 1.532",
        meaning: "At minimum deviation, light passes symmetrically through prism."
      },
      {
        name: "Magnification",
        formula: "m = -v/u = h_i/h_o",
        variables: { "m": "Magnification", "v": "Image distance", "u": "Object distance", "h_i": "Image height", "h_o": "Object height" },
        example: "u = -20 cm, v = -40 cm: m = -(-40)/(-20) = -2 (real, inverted, 2x)",
        meaning: "Negative m = real/inverted; positive m = virtual/erect."
      }
    ],
    derivations: [
      {
        title: "Refraction at Single Spherical Surface",
        steps: [
          "Light from denser medium (n1) to rarer medium (n2) at convex surface radius R.",
          "Object at u, image at v, small angles assumed.",
          "n1*theta_1 = n2*theta_2 (Snell's law for small angles).",
          "theta_1 = alpha + i, theta_2 = i - beta (geometry).",
          "For paraxial rays: alpha = h/u, beta = h/v, i = h/R.",
          "n1*(h/u + h/R) = n2*(h/R - h/v).",
          "n2/v - n1/u = (n2 - n1)/R."
        ]
      },
      {
        title: "Lens Maker's Formula",
        steps: [
          "Thin lens with radii R1, R2, refractive index n.",
          "Refraction at first surface: n1/v1 - n1/u = (n - n1)/R1.",
          "Refraction at second surface: n/v - n/v1 = (n1 - n)/R2.",
          "Add equations: n/v - n1/u = (n - n1)/R1 + (n1 - n)/R2.",
          "For thin lens in air (n1 = 1): 1/v - 1/u = (n-1)(1/R1 - 1/R2).",
          "Since 1/f = (n-1)(1/R1 - 1/R2): 1/v - 1/u = 1/f."
        ]
      }
    ],
    examples: [
      {
        question: "Object at 30 cm from concave mirror of focal length 10 cm. Find image position and magnification.",
        solution: {
          formula: "1/v + 1/u = 1/f, m = -v/u",
          steps: [
            { label: "Given", text: "u = -30 cm, f = -10 cm", math: "" },
            { label: "Image distance", text: "1/v = 1/f - 1/u = 1/(-10) - 1/(-30)", math: "1/v = -3/30 + 1/30 = -2/30, v = -15 cm" },
            { label: "Magnification", text: "m = -v/u = -(-15)/(-30)", math: "m = -0.5" }
          ],
          answer: "v = -15 cm, m = -0.5 (real, inverted, half size)",
          explanation: "Image is real, inverted, and diminished."
        }
      },
      {
        question: "Light goes from glass (n=1.5) to water (n=1.33). Find critical angle.",
        solution: {
          formula: "sin(C) = n2/n1",
          steps: [
            { label: "Given", text: "n1 = 1.5 (glass), n2 = 1.33 (water)", math: "" },
            { label: "Critical angle", text: "sin(C) = n2/n1 = 1.33/1.5", math: "sin(C) = 0.8867, C = 62.5 deg" }
          ],
          answer: "C = 62.5 deg",
          explanation: "For angles greater than 62.5 deg, total internal reflection occurs."
        }
      },
      {
        question: "Compound microscope: f_o = 1 cm, f_e = 5 cm, tube length 15 cm. Find magnifying power.",
        solution: {
          formula: "M = (L/f_o)*(1 + D/f_e)",
          steps: [
            { label: "Given", text: "f_o = 1 cm, f_e = 5 cm, L = 15 cm, D = 25 cm", math: "" },
            { label: "Magnification", text: "M = (15/1)*(1 + 25/5)", math: "M = 15 * 6 = 90" }
          ],
          answer: "M = 90x",
          explanation: "Compound microscope achieves high magnification using two lenses."
        }
      }
    ],
    commonMistakes: [
      { title: "Sign Convention", text: "Always use sign convention: distances measured from pole/center. Left = negative, right = positive (for mirror). Use Cartesian convention consistently." },
      { title: "TIR Direction", text: "TIR only occurs when light goes from denser to rarer medium. From rarer to denser, no TIR (only bending toward normal)." },
      { title: "Critical Angle Calculation", text: "sin(C) = n_rarer/n_denser. If going to air: sin(C) = 1/n. Do not use sin(C) = n." },
      { title: "Prism Deviation", text: "Thin prism: delta = (n-1)*A. For thick prism, must use exact formula with minimum deviation." },
      { title: "Magnification Sign", text: "m = -v/u. Negative m = real/inverted. Positive m = virtual/erect. Do not ignore the sign." }
    ],
    quickRevision: [
      { title: "Reflection", text: "i = r. Mirror: 1/v + 1/u = 1/f. m = -v/u." },
      { title: "Refraction", text: "Snell's law: n1*sin(i) = n2*sin(r). n = c/v." },
      { title: "TIR", text: "sin(C) = 1/n. For i > C, total reflection. Applications: optical fibers." },
      { title: "Prism", text: "Thin: delta = (n-1)*A. Min deviation: n = sin((A+delta_m)/2)/sin(A/2)." },
      { title: "Instruments", text: "Simple: M = 1+D/f. Compound: M = (L/f_o)*(1+D/f_e). Telescope: M = f_o/f_e." }
    ],
    importantQuestions: [
      { question: "State laws of reflection and refraction. State Snell's law.", type: "Long Answer" },
      { question: "What is total internal reflection? Derive critical angle. Give applications.", type: "Long Answer" },
      { question: "Derive lens maker's formula. What are its limitations?", type: "Derivation" },
      { question: "Explain dispersion of light through prism. What is dispersive power?", type: "Long Answer" },
      { question: "How does compound microscope work? Derive magnifying power.", type: "Derivation" }
    ],
    examTips: [
      "Sign convention is crucial. Draw diagrams and assign signs carefully.",
      "TIR: always check direction (denser to rarer) and angle > critical angle.",
      "Lens/mirror numericals: identify given quantities with signs before substituting.",
      "Prism: for thin prism use delta = (n-1)*A. For exact work, use minimum deviation formula.",
      "Optical instruments: know magnification formulas and how to maximize M.",
      "Always draw ray diagrams for qualitative questions."
    ]
  }
,
  {
    id: "wave-optics",
    title: "Wave Optics",
    description: "Study of wave nature of light, Huygens principle, interference, diffraction, and polarization.",
    keywords: ["Huygens principle", "interference", "diffraction", "polarization", "Young's double slit", "coherent sources", "fringe width"],
    concepts: [
      {
        title: "Huygens' Principle",
        content: "Huygens' principle: every point on a wavefront acts as a secondary source of wavelets. These wavelets travel with speed of light in that medium. The new wavefront is the tangent (envelope) to all secondary wavelets. It explains: (1) Rectilinear propagation: wavefront remains planar. (2) Reflection: angle of incidence = angle of reflection. (3) Refraction: Snell's law can be derived. Limitation: does not explain intensity distribution or polarization.",
        keywords: ["wavefront", "secondary wavelets", "envelope", "rectilinear propagation"],
        points: [
          "Every point on wavefront is secondary source",
          "Wavelets travel at speed of light",
          "New wavefront is tangent to wavelets",
          "Explains reflection and refraction",
          "Does not explain intensity or polarization"
        ]
      },
      {
        title: "Interference of Light",
        content: "Interference: superposition of two coherent waves producing alternate bright and dark fringes. Coherent sources: same frequency, constant phase difference. Young's double slit experiment: fringes on screen at distance D from slits separated by d. Path difference: delta = d*sin(theta). Constructive (bright): delta = n*lambda, position y_n = n*lambda*D/d. Destructive (dark): delta = (n+1/2)*lambda, position y_n = (2n+1)*lambda*D/(2d). Fringe width: beta = lambda*D/d. Intensity: I = 4*I_0*cos^2(phi/2). Ratio: I_max/I_min = (1+a)^2/(1-a)^2 where a = A2/A1.",
        keywords: ["coherent sources", "Young's double slit", "fringe width", "constructive", "destructive"],
        points: [
          "Path difference delta = d*sin(theta)",
          "Bright fringes: delta = n*lambda, y = n*lambda*D/d",
          "Dark fringes: delta = (n+1/2)*lambda, y = (2n+1)*lambda*D/(2d)",
          "Fringe width: beta = lambda*D/d",
          "Intensity: I = 4*I_0*cos^2(phi/2)"
        ]
      },
      {
        title: "Diffraction of Light",
        content: "Diffraction: bending of light around obstacles and spreading through apertures. Single slit diffraction: central maximum is brightest and widest. Width of central maximum = 2*lambda*D/d (d = slit width). Minima: d*sin(theta) = n*lambda (n = 1, 2, 3...). Maxima approximately at d*sin(theta) = (2n+1)*lambda/2. Intensity distribution: I = I_0*(sin(alpha)/alpha)^2 where alpha = pi*d*sin(theta)/lambda. Diffraction differs from interference: diffraction is from same wavefront, interference is from different wavefronts.",
        keywords: ["diffraction", "single slit", "central maximum", "minima"],
        points: [
          "Bending of light around obstacles/through apertures",
          "Central maximum: brightest and widest",
          "Width of central max = 2*lambda*D/d",
          "Minima: d*sin(theta) = n*lambda",
          "Diffraction from same wavefront; interference from different"
        ]
      },
      {
        title: "Polarization of Light",
        content: "Polarization: restricting light vibrations to a single plane. Unpolarized light has vibrations in all planes. Plane polarized: vibrations in one plane only. Malus's law: I = I_0*cos^2(theta), where theta is angle between polarizer and analyzer. Brewster's law: at polarizing angle i_p, reflected light is completely polarized. tan(i_p) = n2/n1. At Brewster's angle, reflected and refracted rays are perpendicular: i_p + r = 90 deg. Polarization proves transverse nature of light.",
        keywords: ["polarization", "Malus's law", "Brewster's law", "polarizing angle"],
        points: [
          "Polarization: vibrations restricted to one plane",
          "Malus's law: I = I_0*cos^2(theta)",
          "Brewster's law: tan(i_p) = n2/n1",
          "At i_p: reflected + refracted rays perpendicular",
          "Proves transverse nature of light"
        ]
      }
    ],
    definitions: [
      { term: "Wavefront", definition: "Locus of all points vibrating in same phase at any instant. Plane, spherical, or cylindrical." },
      { term: "Coherent Sources", definition: "Two sources with same frequency and constant phase difference. Produce stable interference pattern." },
      { term: "Fringe Width", definition: "Distance between two consecutive bright or dark fringes. beta = lambda*D/d for Young's experiment." },
      { term: "Diffraction", definition: "Bending of light around obstacles and spreading through apertures. More pronounced for smaller apertures." },
      { term: "Polarization", definition: "Restricting light vibrations to a single plane. Proves transverse nature of light." },
      { term: "Malus's Law", definition: "Intensity after polarizer: I = I_0*cos^2(theta), where theta is angle between polarizer axes." },
      { term: "Brewster's Angle", definition: "Angle of incidence where reflected light is completely polarized. tan(i_p) = n2/n1." }
    ],
    formulas: [
      {
        name: "Young's Double Slit",
        formula: "y_n = n*lambda*D/d (bright), beta = lambda*D/d",
        variables: { "y_n": "Position of nth bright fringe (m)", "n": "Order number", "lambda": "Wavelength (m)", "D": "Screen distance (m)", "d": "Slit separation (m)", "beta": "Fringe width (m)" },
        example: "d = 0.5 mm, D = 1 m, lambda = 600 nm: beta = 600*10^-9*1/0.5*10^-3 = 1.2 mm",
        meaning: "Fringe width proportional to wavelength and D, inversely to d."
      },
      {
        name: "Path Difference",
        formula: "delta = d*sin(theta) approx d*y/D",
        variables: { "delta": "Path difference (m)", "d": "Slit separation (m)", "theta": "Angle", "y": "Position on screen (m)", "D": "Screen distance (m)" },
        example: "d = 0.5 mm, y = 1.2 mm, D = 1 m: delta = 0.5*10^-3 * 1.2*10^-3/1 = 600 nm = lambda",
        meaning: "Path difference determines constructive or destructive interference."
      },
      {
        name: "Intensity in Interference",
        formula: "I = 4*I_0*cos^2(phi/2)",
        variables: { "I": "Resultant intensity", "I_0": "Individual wave intensity", "phi": "Phase difference" },
        example: "phi = 0: I = 4*I_0 (max). phi = pi: I = 0 (min).",
        meaning: "Intensity varies between 0 and 4*I_0."
      },
      {
        name: "Malus's Law",
        formula: "I = I_0*cos^2(theta)",
        variables: { "I": "Transmitted intensity", "I_0": "Incident polarized intensity", "theta": "Angle between polarizer axes" },
        example: "I_0 = 100 W/m^2, theta = 60 deg: I = 100*cos^2(60) = 25 W/m^2",
        meaning: "Maximum at theta = 0, zero at theta = 90 deg."
      },
      {
        name: "Brewster's Law",
        formula: "tan(i_p) = n2/n1",
        variables: { "i_p": "Polarizing angle", "n1": "Refractive index of medium 1", "n2": "Refractive index of medium 2" },
        example: "Air to glass (n=1.5): tan(i_p) = 1.5, i_p = 56.3 deg",
        meaning: "At this angle, reflected light is completely polarized."
      }
    ],
    derivations: [
      {
        title: "Fringe Width in Young's Double Slit Experiment",
        steps: [
          "Two slits S1, S2 separated by d, screen at distance D.",
          "Path difference for point P at distance y: delta = S2P - S1P.",
          "For small angles: S2P = sqrt(D^2 + (y+d/2)^2), S1P = sqrt(D^2 + (y-d/2)^2).",
          "Using approximation: delta = d*y/D.",
          "For bright fringe: delta = n*lambda, so y_n = n*lambda*D/d.",
          "Fringe width: beta = y_(n+1) - y_n = lambda*D/d.",
          "Fringe width independent of n (equally spaced fringes).",
          "Number of fringes visible depends on D and d."
        ]
      },
      {
        title: "Intensity Distribution in Interference",
        steps: [
          "Two waves: E1 = E0*sin(omega*t), E2 = E0*sin(omega*t + phi).",
          "Resultant: E = E1 + E2 = 2*E0*cos(phi/2)*sin(omega*t + phi/2).",
          "Amplitude: A = 2*E0*cos(phi/2).",
          "Intensity: I proportional to A^2.",
          "I = 4*I_0*cos^2(phi/2), where I_0 = (1/2)*epsilon_0*c*E0^2.",
          "Maximum: phi = 2*n*pi, I_max = 4*I_0.",
          "Minimum: phi = (2*n+1)*pi, I_min = 0.",
          "Ratio: I_max/I_min = infinity (for equal amplitudes)."
        ]
      }
    ],
    examples: [
      {
        question: "In Young's experiment, d = 0.2 mm, D = 1 m, lambda = 600 nm. Find fringe width and position of 3rd bright fringe.",
        solution: {
          formula: "beta = lambda*D/d, y_n = n*lambda*D/d",
          steps: [
            { label: "Fringe width", text: "beta = lambda*D/d", math: "beta = (600*10^-9)(1)/(0.2*10^-3) = 3*10^-3 m = 3 mm" },
            { label: "3rd bright fringe", text: "y_3 = 3*beta", math: "y_3 = 3*3 = 9 mm" }
          ],
          answer: "beta = 3 mm, y_3 = 9 mm",
          explanation: "Fringe width is constant, fringes are equally spaced."
        }
      },
      {
        question: "Polarized light of intensity 100 W/m^2 passes through analyzer at 45 degrees. Find transmitted intensity.",
        solution: {
          formula: "I = I_0*cos^2(theta)",
          steps: [
            { label: "Given", text: "I_0 = 100 W/m^2, theta = 45 deg", math: "" },
            { label: "Calculate", text: "I = 100*cos^2(45) = 100*(1/sqrt(2))^2", math: "I = 50 W/m^2" }
          ],
          answer: "I = 50 W/m^2",
          explanation: "At 45 degrees, half the intensity is transmitted."
        }
      },
      {
        question: "Light from air to glass (n=1.5). Find Brewster's angle and angle of refraction.",
        solution: {
          formula: "tan(i_p) = n, i_p + r = 90 deg",
          steps: [
            { label: "Brewster's angle", text: "tan(i_p) = 1.5", math: "i_p = arctan(1.5) = 56.3 deg" },
            { label: "Refraction angle", text: "r = 90 - i_p", math: "r = 90 - 56.3 = 33.7 deg" }
          ],
          answer: "i_p = 56.3 deg, r = 33.7 deg",
          explanation: "At Brewster's angle, reflected and refracted rays are perpendicular."
        }
      }
    ],
    commonMistakes: [
      { title: "Fringe Width Proportionality", text: "beta = lambda*D/d. Wider with larger lambda and D, narrower with larger d. Do not confuse d and D." },
      { title: "Central Maximum Width", text: "Width of central maximum in diffraction = 2*lambda*D/d, which is twice the fringe width in interference." },
      { title: "Malus's Law Angle", text: "theta is angle between polarizer and analyzer transmission axes, not angle with incident light." },
      { title: "Coherent vs Incoherent", text: "Interference requires coherent sources (constant phase difference). Two independent bulbs cannot produce stable fringes." },
      { title: "Polarization proves transverse", text: "Only transverse waves can be polarized. Longitudinal waves (sound) cannot be polarized." }
    ],
    quickRevision: [
      { title: "Huygens", text: "Every point on wavefront is secondary source. New wavefront is tangent to wavelets." },
      { title: "Young's Experiment", text: "beta = lambda*D/d. Bright: y = n*lambda*D/d. Dark: y = (2n+1)*lambda*D/(2d)." },
      { title: "Diffraction", text: "Central max width = 2*lambda*D/d. Minima: d*sin(theta) = n*lambda." },
      { title: "Malus", text: "I = I_0*cos^2(theta). Angle between polarizer axes." },
      { title: "Brewster", text: "tan(i_p) = n. Reflected light completely polarized. i_p + r = 90 deg." }
    ],
    importantQuestions: [
      { question: "State Huygens' principle. Derive laws of reflection using it.", type: "Derivation" },
      { question: "Explain Young's double slit experiment. Derive fringe width formula.", type: "Derivation" },
      { question: "What is diffraction? Explain single slit diffraction pattern.", type: "Long Answer" },
      { question: "State Malus's law and Brewster's law. Give applications.", type: "Long Answer" },
      { question: "How does polarization prove transverse nature of light?", type: "Conceptual" }
    ],
    examTips: [
      "Young's experiment: draw diagram, show path difference, derive fringe width.",
      "For interference, specify whether point is bright or dark based on path difference.",
      "Diffraction: central maximum is brightest and twice as wide as other maxima.",
      "Polarization: Malus's law for intensity, Brewster's law for angle.",
      "Fringe width increases with wavelength (violet < red fringe width)."
    ]
  }
,
  {
    id: "dual-nature",
    title: "Dual Nature of Radiation and Matter",
    description: "Study of photoelectric effect, particle nature of light, de Broglie hypothesis, and electron diffraction.",
    keywords: ["photoelectric effect", "de Broglie wavelength", "Davisson-Germer", "work function", "photon", "threshold frequency", "Einstein's equation"],
    concepts: [
      {
        title: "Photoelectric Effect",
        content: "Photoelectric effect: emission of electrons from metal surface when light of suitable frequency falls on it. Key observations: (1) There exists a threshold frequency f_0 below which no emission occurs, regardless of intensity. (2) Maximum kinetic energy of photoelectrons depends on frequency, not intensity. K_max = h*f - W_0 = h*(f - f_0). (3) Number of photoelectrons per second is proportional to intensity (for f > f_0). (4) Emission is instantaneous (no time lag). (5) Even at low intensity, if f > f_0, electrons are emitted. Einstein's equation: h*f = W_0 + K_max.",
        keywords: ["threshold frequency", "work function", "Einstein's equation", "K_max"],
        points: [
          "Threshold frequency: minimum f for emission",
          "K_max = h*f - W_0 (independent of intensity)",
          "Number of electrons proportional to intensity",
          "Emission is instantaneous",
          "Einstein's equation: h*f = W_0 + K_max"
        ]
      },
      {
        title: "Work Function and Stopping Potential",
        content: "Work function (W_0): minimum energy needed to remove electron from metal surface. W_0 = h*f_0. Different metals have different W_0 (cesium lowest: 1.9 eV). Stopping potential (V_0): minimum retarding potential to stop most energetic photoelectron. e*V_0 = K_max = h*f - W_0. V_0 = (h/e)*f - W_0/e. Graph of V_0 vs f: straight line with slope h/e and intercept -W_0/e. Threshold frequency: f_0 = W_0/h. Threshold wavelength: lambda_0 = c/f_0 = hc/W_0.",
        keywords: ["work function", "stopping potential", "threshold wavelength"],
        points: [
          "W_0 = h*f_0 (minimum energy to remove electron)",
          "e*V_0 = K_max (stopping potential)",
          "V_0 = (h/e)*f - W_0/e (linear relation)",
          "Threshold wavelength: lambda_0 = hc/W_0",
          "Cesium has lowest W_0 = 1.9 eV"
        ]
      },
      {
        title: "Particle Nature of Light - Photon",
        content: "Photon: quantum of light with energy E = h*f = h*c/lambda. Momentum: p = h/lambda = E/c. Mass: m = E/c^2 = h*f/c^2 (relativistic, no rest mass). Photons are electrically neutral, travel at c, and are not deflected by fields. In photoelectric effect, one photon interacts with one electron. Number of photons per second: n = P/(h*f), where P is power. Photon energy determines type of interaction (photoelectric, Compton, pair production at different energy levels).",
        keywords: ["photon", "energy", "momentum", "mass-energy"],
        points: [
          "E = h*f = h*c/lambda",
          "p = h/lambda = E/c",
          "Massless but has momentum",
          "One photon interacts with one electron",
          "Number of photons: n = P/(h*f)"
        ]
      },
      {
        title: "de Broglie Hypothesis",
        content: "de Broglie (1924): moving particle has wave-like properties. Wavelength: lambda = h/p = h/(m*v). For electron accelerated through V: lambda = h/sqrt(2*m*e*V) = 1.227/sqrt(V) nm. This wave is called matter wave or de Broglie wave. It is not electromagnetic wave. Higher the speed, shorter the wavelength. The wave-particle duality applies to all matter, but is significant only for subatomic particles (very small mass). Davisson-Germer experiment (1927) confirmed electron diffraction, validating de Broglie hypothesis.",
        keywords: ["de Broglie wavelength", "matter wave", "electron diffraction", "Davisson-Germer"],
        points: [
          "lambda = h/p = h/(m*v)",
          "For electron: lambda = 1.227/sqrt(V) nm",
          "Wave-particle duality for all matter",
          "Significant for subatomic particles",
          "Davisson-Germer confirmed electron diffraction"
        ]
      },
      {
        title: "Davisson-Germer Experiment",
        content: "Experiment that confirmed wave nature of electrons. A beam of electrons is fired at a nickel crystal. The scattered electrons show diffraction pattern similar to X-ray diffraction. Bragg's law: n*lambda = 2*d*sin(theta). Measured wavelength matches de Broglie prediction: lambda = h/sqrt(2*m*e*V). For V = 54 V: lambda = 1.227/sqrt(54) = 0.167 nm. This provided direct evidence of wave nature of matter.",
        keywords: ["Davisson-Germer", "electron diffraction", "nickel crystal", "Bragg's law"],
        points: [
          "Electrons fired at nickel crystal",
          "Diffraction pattern observed (wave nature)",
          "Bragg's law: n*lambda = 2*d*sin(theta)",
          "Matches de Broglie prediction",
          "Confirmed wave-particle duality"
        ]
      }
    ],
    definitions: [
      { term: "Photoelectric Effect", definition: "Emission of electrons from metal surface when light of suitable frequency falls on it." },
      { term: "Work Function", definition: "Minimum energy needed to remove electron from metal surface. W_0 = h*f_0, unit: eV or J." },
      { term: "Threshold Frequency", definition: "Minimum frequency of incident light for photoelectric emission. f_0 = W_0/h." },
      { term: "Stopping Potential", definition: "Minimum retarding potential to stop most energetic photoelectron. e*V_0 = K_max." },
      { term: "Photon", definition: "Quantum of light with energy E = h*f and momentum p = h/lambda. No rest mass." },
      { term: "de Broglie Wavelength", definition: "Wavelength associated with moving particle: lambda = h/p = h/(m*v). Shows wave nature of matter." }
    ],
    formulas: [
      {
        name: "Einstein's Photoelectric Equation",
        formula: "h*f = W_0 + K_max",
        variables: { "h": "Planck's constant = 6.63*10^-34 J.s", "f": "Frequency of incident light (Hz)", "W_0": "Work function (J)", "K_max": "Maximum kinetic energy of photoelectron (J)" },
        example: "f = 8*10^14 Hz, W_0 = 3.2*10^-19 J. K_max = (6.63*10^-34)(8*10^14) - 3.2*10^-19 = 2.1*10^-19 J = 1.31 eV",
        meaning: "Energy of photon = work function + kinetic energy of electron."
      },
      {
        name: "Stopping Potential",
        formula: "e*V_0 = K_max = h*f - W_0",
        variables: { "e": "1.6*10^-19 C", "V_0": "Stopping potential (V)", "K_max": "Max kinetic energy (J)", "f": "Frequency (Hz)", "W_0": "Work function (J)" },
        example: "f = 8*10^14 Hz, W_0 = 2.0 eV. V_0 = (h*f/e) - W_0/e = (6.63*10^-34*8*10^14/1.6*10^-19) - 2.0 = 1.31 V",
        meaning: "Stopping potential measures max kinetic energy."
      },
      {
        name: "de Broglie Wavelength",
        formula: "lambda = h/p = h/(m*v)",
        variables: { "lambda": "Wavelength (m)", "h": "6.63*10^-34 J.s", "p": "Momentum (kg.m/s)", "m": "Mass (kg)", "v": "Velocity (m/s)" },
        example: "Electron at 10^6 m/s: lambda = 6.63*10^-34/(9.1*10^-31*10^6) = 7.28*10^-10 m = 0.728 nm",
        meaning: "Moving particle has wavelength inversely proportional to momentum."
      },
      {
        name: "de Broglie for Accelerated Electron",
        formula: "lambda = 1.227/sqrt(V) nm",
        variables: { "lambda": "Wavelength (nm)", "V": "Accelerating potential (V)" },
        example: "V = 100 V: lambda = 1.227/sqrt(100) = 0.1227 nm",
        meaning: "Higher voltage gives shorter wavelength."
      },
      {
        name: "Number of Photons",
        formula: "n = P/(h*f) = E_total/(h*f)",
        variables: { "n": "Number of photons per second", "P": "Power (W)", "h": "Planck's constant", "f": "Frequency (Hz)" },
        example: "P = 1 W, f = 5*10^14 Hz: n = 1/(6.63*10^-34*5*10^14) = 3.02*10^18 photons/s",
        meaning: "Number of photons per second depends on power and frequency."
      }
    ],
    derivations: [
      {
        title: "Einstein's Photoelectric Equation",
        steps: [
          "Photon of energy h*f strikes metal surface.",
          "Electron absorbs all photon energy.",
          "Some energy used to escape metal (work function W_0).",
          "Remaining appears as kinetic energy: K_max = h*f - W_0.",
          "This is Einstein's photoelectric equation.",
          "For emission: h*f >= W_0, so f >= f_0 = W_0/h.",
          "Stopping potential: e*V_0 = K_max.",
          "V_0 = (h/e)*f - W_0/e (linear in f)."
        ]
      },
      {
        title: "de Broglie Wavelength for Accelerated Electron",
        steps: [
          "Electron accelerated through potential V gains energy: K = e*V.",
          "K = (1/2)*m*v^2, so v = sqrt(2*e*V/m).",
          "Momentum: p = m*v = m*sqrt(2*e*V/m) = sqrt(2*m*e*V).",
          "de Broglie wavelength: lambda = h/p = h/sqrt(2*m*e*V).",
          "Substituting values: lambda = 6.63*10^-34/sqrt(2*9.1*10^-31*1.6*10^-19*V).",
          "lambda = 1.227*10^-9/sqrt(V) m = 1.227/sqrt(V) nm."
        ]
      }
    ],
    examples: [
      {
        question: "Light of wavelength 400 nm falls on a metal with work function 2.0 eV. Find (a) energy of photon, (b) max kinetic energy, (c) stopping potential.",
        solution: {
          formula: "E = h*c/lambda, K_max = E - W_0, e*V_0 = K_max",
          steps: [
            { label: "Photon energy", text: "E = h*c/lambda", math: "E = (6.63*10^-34)(3*10^8)/(400*10^-9) = 4.97*10^-19 J = 3.11 eV" },
            { label: "K_max", text: "K_max = E - W_0", math: "K_max = 3.11 - 2.0 = 1.11 eV = 1.78*10^-19 J" },
            { label: "Stopping potential", text: "V_0 = K_max/e", math: "V_0 = 1.11 V" }
          ],
          answer: "E = 3.11 eV, K_max = 1.11 eV, V_0 = 1.11 V",
          explanation: "Only photons with E > W_0 can cause emission."
        }
      },
      {
        question: "Find de Broglie wavelength of (a) 1 kg ball at 10 m/s, (b) electron at 100 V.",
        solution: {
          formula: "lambda = h/p",
          steps: [
            { label: "Ball", text: "lambda = h/(m*v) = 6.63*10^-34/(1*10)", math: "lambda = 6.63*10^-35 m (negligible)" },
            { label: "Electron", text: "lambda = 1.227/sqrt(V)", math: "lambda = 1.227/sqrt(100) = 0.1227 nm" }
          ],
          answer: "Ball: 6.63*10^-35 m, Electron: 0.1227 nm",
          explanation: "Wave nature significant only for subatomic particles."
        }
      },
      {
        question: "Find threshold frequency and wavelength for cesium (W_0 = 1.9 eV).",
        solution: {
          formula: "f_0 = W_0/h, lambda_0 = c/f_0",
          steps: [
            { label: "Convert W_0", text: "W_0 = 1.9 eV = 1.9*1.6*10^-19 = 3.04*10^-19 J", math: "" },
            { label: "Threshold frequency", text: "f_0 = W_0/h", math: "f_0 = 3.04*10^-19/6.63*10^-34 = 4.58*10^14 Hz" },
            { label: "Threshold wavelength", text: "lambda_0 = c/f_0", math: "lambda_0 = 3*10^8/4.58*10^14 = 655 nm" }
          ],
          answer: "f_0 = 4.58*10^14 Hz, lambda_0 = 655 nm",
          explanation: "Light with wavelength less than 655 nm (or frequency greater than 4.58*10^14 Hz) can cause emission from cesium."
        }
      }
    ],
    commonMistakes: [
      { title: "Intensity vs Frequency", text: "Intensity affects NUMBER of photoelectrons, not their energy. Frequency determines energy. Even at high intensity, no emission below threshold frequency." },
      { title: "Work Function Units", text: "W_0 is usually given in eV. Convert to joules for calculations: 1 eV = 1.6*10^-19 J. Do not mix eV and J." },
      { title: "de Broglie Wavelength", text: "lambda = h/p. For non-relativistic particles: p = sqrt(2*m*E_k). Do not use p = m*c unless particle is massless." },
      { title: "Photon Momentum", text: "Photon has momentum p = h/lambda even though it has no mass. This is relativistic momentum." },
      { title: "Threshold Wavelength", text: "lambda_0 = hc/W_0. Longer wavelength = lower energy. Below lambda_0 (higher energy), emission occurs." }
    ],
    quickRevision: [
      { title: "Photoelectric", text: "h*f = W_0 + K_max. Threshold: f_0 = W_0/h. Stopping: e*V_0 = K_max." },
      { title: "Photon", text: "E = h*f, p = h/lambda. One photon interacts with one electron." },
      { title: "de Broglie", text: "lambda = h/p = h/(m*v). For electron: lambda = 1.227/sqrt(V) nm." },
      { title: "Work Function", text: "W_0 = h*f_0. Cesium: 1.9 eV (lowest). lambda_0 = hc/W_0." },
      { title: "Davisson-Germer", text: "Confirmed electron diffraction. Matches de Broglie prediction." }
    ],
    importantQuestions: [
      { question: "Explain photoelectric effect. State Einstein's equation and explain each term.", type: "Long Answer" },
      { question: "What is work function? How is stopping potential related to frequency?", type: "Long Answer" },
      { question: "State de Broglie hypothesis. Derive wavelength for electron accelerated through V.", type: "Derivation" },
      { question: "Describe Davisson-Germer experiment. What did it prove?", type: "Long Answer" },
      { question: "Why is wave nature not observed for macroscopic objects?", type: "Conceptual" }
    ],
    examTips: [
      "Photoelectric: always check if frequency > threshold frequency before calculating K_max.",
      "Work function: convert eV to J using 1 eV = 1.6*10^-19 J.",
      "de Broglie: for electron use lambda = 1.227/sqrt(V) nm directly.",
      "Stopping potential graph: slope = h/e, intercept = -W_0/e.",
      "Davisson-Germer: mention Bragg's law and nickel crystal."
    ]
  }
,
  {
    id: "atoms",
    title: "Atoms",
    description: "Study of atomic models, Rutherford's model, Bohr's model, hydrogen spectrum, and energy levels.",
    keywords: ["Rutherford model", "Bohr model", "hydrogen spectrum", "energy levels", "angular momentum", "Bohr radius", "spectral series"],
    concepts: [
      {
        title: "Rutherford's Nuclear Model",
        content: "Rutherford's alpha particle scattering experiment (1911): most alpha particles passed through gold foil, some deflected at large angles, few bounced back. Conclusions: (1) Most of atom is empty space. (2) Positive charge concentrated in small nucleus (radius ~10^-15 m). (3) Electrons orbit nucleus like planets around sun. (4) Centripetal force provided by electrostatic attraction. Problem: accelerating electron should radiate energy (classical EM theory), spiral into nucleus, atom unstable. Cannot explain line spectrum.",
        keywords: ["alpha scattering", "nuclear model", "empty space", "stability problem"],
        points: [
          "Most alpha particles pass through (empty space)",
          "Some deflected at large angles (positive nucleus)",
          "Few bounce back (heavy, compact nucleus)",
          "Problem: classical theory predicts unstable atom",
          "Cannot explain discrete spectral lines"
        ]
      },
      {
        title: "Bohr's Model of Hydrogen Atom",
        content: "Bohr (1913) postulates: (1) Electrons orbit nucleus in certain allowed orbits (stationary states) without radiating energy. (2) Angular momentum is quantized: m*v*r = n*h/(2*pi) = n*h_bar, where n = 1, 2, 3... (3) Energy is emitted/absorbed only when electron jumps between orbits: Delta(E) = h*f. Orbit radius: r_n = n^2*a_0, where a_0 = 0.529 Angstrom (Bohr radius). Energy: E_n = -13.6/n^2 eV (for hydrogen). Ground state (n=1): E_1 = -13.6 eV. Excited states: E_2 = -3.4 eV, E_3 = -1.51 eV, etc.",
        keywords: ["Bohr postulates", "quantized orbits", "Bohr radius", "energy levels"],
        points: [
          "Electrons in allowed orbits without radiation",
          "m*v*r = n*h/(2*pi) (angular momentum quantization)",
          "r_n = n^2*a_0, a_0 = 0.529 Angstrom",
          "E_n = -13.6/n^2 eV (hydrogen)",
          "Energy emitted/absorbed during transitions"
        ]
      },
      {
        title: "Hydrogen Spectrum",
        content: "When electron jumps from higher to lower orbit, photon emitted with energy: h*f = E_i - E_f. Frequency: f = (E_i - E_f)/h. Wavelength: 1/lambda = R*(1/n_f^2 - 1/n_i^2), where R = 1.097*10^7 m^-1 (Rydberg constant). Spectral series: (1) Lyman (n_f=1): UV region, 1/lambda = R*(1 - 1/n^2), n=2,3,4... (2) Balmer (n_f=2): visible, 1/lambda = R*(1/4 - 1/n^2), n=3,4,5... (3) Paschen (n_f=3): IR, n=4,5,6... (4) Brackett (n_f=4): IR. (5) Pfund (n_f=5): far IR.",
        keywords: ["spectral series", "Lyman", "Balmer", "Paschen", "Rydberg constant"],
        points: [
          "1/lambda = R*(1/n_f^2 - 1/n_i^2) (Rydberg formula)",
          "Lyman: n_f=1 (UV), Balmer: n_f=2 (visible)",
          "Paschen: n_f=3 (IR), Brackett: n_f=4 (IR)",
          "R = 1.097*10^7 m^-1",
          "Series converge at high n_i"
        ]
      },
      {
        title: "Energy Level Diagram and Transitions",
        content: "Energy levels: E_n = -13.6/n^2 eV. As n increases, energy increases (less negative) and levels converge. Ground state: n=1, E_1 = -13.6 eV. First excited: n=2, E_2 = -3.4 eV. Ionization energy: 13.6 eV (to remove electron from n=1). Number of spectral lines from n-th level: N = n*(n-1)/2. Energy emitted: h*f = E_i - E_f = 13.6*(1/n_f^2 - 1/n_i^2) eV. The more negative the energy, the more tightly bound the electron.",
        keywords: ["energy levels", "ionization energy", "spectral lines", "transitions"],
        points: [
          "E_n = -13.6/n^2 eV",
          "Ground state: -13.6 eV (n=1)",
          "Ionization energy: 13.6 eV",
          "Lines from n levels: N = n*(n-1)/2",
          "Energy released: h*f = E_i - E_f"
        ]
      }
    ],
    definitions: [
      { term: "Rutherford's Model", definition: "Nuclear model: small, dense, positively charged nucleus with electrons orbiting. Cannot explain stability or line spectrum." },
      { term: "Bohr's Model", definition: "Electrons in quantized orbits with m*v*r = n*h/(2*pi). Energy emitted only during transitions between orbits." },
      { term: "Bohr Radius", definition: "Radius of smallest orbit (n=1) in hydrogen: a_0 = 0.529 Angstrom = 5.29*10^-11 m." },
      { term: "Rydberg Constant", definition: "Constant in hydrogen spectrum formula: R = 1.097*10^7 m^-1. Related to fundamental constants." },
      { term: "Ionization Energy", definition: "Energy needed to remove electron from atom completely (n = infinity). For hydrogen: 13.6 eV." },
      { term: "Spectral Series", definition: "Groups of spectral lines from transitions to same lower level (Lyman, Balmer, Paschen, etc.)." }
    ],
    formulas: [
      {
        name: "Bohr Radius",
        formula: "r_n = n^2*a_0",
        variables: { "r_n": "Radius of nth orbit (m)", "n": "Quantum number", "a_0": "Bohr radius = 5.29*10^-11 m" },
        example: "n = 3: r_3 = 9*5.29*10^-11 = 4.76*10^-10 m = 4.76 Angstrom",
        meaning: "Radius increases with n^2."
      },
      {
        name: "Energy Levels",
        formula: "E_n = -13.6/n^2 eV",
        variables: { "E_n": "Energy of nth level (eV)", "n": "Quantum number" },
        example: "n = 2: E_2 = -13.6/4 = -3.4 eV. n = infinity: E = 0 (ionized)",
        meaning: "Energy increases (less negative) with n."
      },
      {
        name: "Rydberg Formula",
        formula: "1/lambda = R*(1/n_f^2 - 1/n_i^2)",
        variables: { "1/lambda": "Wave number (m^-1)", "R": "Rydberg constant = 1.097*10^7 m^-1", "n_f": "Final level", "n_i": "Initial level" },
        example: "Balmer (n_f=2, n_i=3): 1/lambda = R*(1/4 - 1/9) = R*5/36, lambda = 656 nm (red)",
        meaning: "Gives wavelength of spectral lines."
      },
      {
        name: "Energy of Photon",
        formula: "h*f = E_i - E_f = 13.6*(1/n_f^2 - 1/n_i^2) eV",
        variables: { "h*f": "Photon energy (eV)", "E_i": "Initial energy (eV)", "E_f": "Final energy (eV)" },
        example: "n=3 to n=2: h*f = 13.6*(1/4 - 1/9) = 1.89 eV, lambda = 656 nm",
        meaning: "Energy difference equals photon energy."
      },
      {
        name: "Angular Momentum Quantization",
        formula: "m*v*r = n*h/(2*pi) = n*h_bar",
        variables: { "m": "Electron mass (kg)", "v": "Orbital velocity (m/s)", "r": "Orbit radius (m)", "n": "Quantum number", "h": "Planck's constant" },
        example: "n=1: L = 1*6.63*10^-34/(2*pi) = 1.055*10^-34 J.s",
        meaning: "Angular momentum comes in discrete units."
      }
    ],
    derivations: [
      {
        title: "Energy Levels of Hydrogen Atom",
        steps: [
          "Electron in circular orbit: centripetal force = electrostatic force.",
          "m*v^2/r = (1/4*pi*epsilon_0)*e^2/r^2.",
          "Bohr quantization: m*v*r = n*h/(2*pi).",
          "From quantization: v = n*h/(2*pi*m*r).",
          "Substitute v in force equation: m*(n*h/(2*pi*m*r))^2/r = e^2/(4*pi*epsilon_0*r^2).",
          "Solve for r: r_n = (epsilon_0*n^2*h^2)/(pi*m*e^2) = n^2*a_0.",
          "a_0 = epsilon_0*h^2/(pi*m*e^2) = 5.29*10^-11 m.",
          "Energy: E = K + U = (1/2)*m*v^2 - e^2/(4*pi*epsilon_0*r).",
          "E_n = -m*e^4/(8*epsilon_0^2*h^2*n^2) = -13.6/n^2 eV."
        ]
      },
      {
        title: "Rydberg Formula from Energy Levels",
        steps: [
          "Energy of photon emitted: h*f = E_i - E_f.",
          "E_i = -13.6/n_i^2 eV, E_f = -13.6/n_f^2 eV.",
          "h*f = 13.6*(1/n_f^2 - 1/n_i^2) eV.",
          "f = c/lambda, so hc/lambda = 13.6*(1/n_f^2 - 1/n_i^2) eV.",
          "1/lambda = (13.6/(hc))*(1/n_f^2 - 1/n_i^2).",
          "13.6/(hc) = R (Rydberg constant) = 1.097*10^7 m^-1.",
          "1/lambda = R*(1/n_f^2 - 1/n_i^2)."
        ]
      }
    ],
    examples: [
      {
        question: "Find wavelength of photon emitted when electron jumps from n=3 to n=1 in hydrogen.",
        solution: {
          formula: "1/lambda = R*(1/n_f^2 - 1/n_i^2)",
          steps: [
            { label: "Given", text: "n_i = 3, n_f = 1, R = 1.097*10^7 m^-1", math: "" },
            { label: "Calculate", text: "1/lambda = R*(1/1 - 1/9) = R*(8/9)", math: "1/lambda = 9.75*10^6 m^-1" },
            { label: "Wavelength", text: "lambda = 1/9.75*10^6", math: "lambda = 102.6 nm (UV, Lyman series)" }
          ],
          answer: "lambda = 102.6 nm (Lyman series, UV)",
          explanation: "Transition to n=1 gives UV photon (Lyman series)."
        }
      },
      {
        question: "Find ionization energy of hydrogen atom in ground state.",
        solution: {
          formula: "E_ionization = 0 - E_1",
          steps: [
            { label: "Ground state energy", text: "E_1 = -13.6 eV", math: "" },
            { label: "Ionization", text: "Remove electron to n = infinity (E = 0)", math: "E_ionization = 0 - (-13.6) = 13.6 eV" }
          ],
          answer: "13.6 eV",
          explanation: "Energy needed to completely remove electron from ground state."
        }
      },
      {
        question: "Find number of spectral lines from hydrogen atom if electron is in n=4 level.",
        solution: {
          formula: "N = n*(n-1)/2",
          steps: [
            { label: "Given", text: "n = 4", math: "" },
            { label: "Calculate", text: "N = 4*3/2", math: "N = 6 spectral lines" }
          ],
          answer: "6 spectral lines",
          explanation: "Possible transitions: 4->3, 4->2, 4->1, 3->2, 3->1, 2->1."
        }
      }
    ],
    commonMistakes: [
      { title: "Energy Sign", text: "Energy levels are NEGATIVE (bound states). E = 0 at infinity (free electron). More negative = more tightly bound." },
      { title: "Wavelength vs Frequency", text: "Higher energy transition = higher frequency = shorter wavelength. Lyman (UV) has shorter lambda than Balmer (visible)." },
      { title: "Series Identification", text: "Lyman: n_f=1 (UV). Balmer: n_f=2 (visible). Paschen: n_f=3 (IR). Know the regions." },
      { title: "Bohr Model Limitations", text: "Works only for hydrogen-like atoms (one electron). Cannot explain fine structure, Zeeman effect, or multi-electron atoms." },
      { title: "Ionization Energy", text: "Ionization energy = -E_n. For ground state hydrogen: 13.6 eV. For excited states: less energy needed." }
    ],
    quickRevision: [
      { title: "Bohr Postulates", text: "Quantized orbits: mvr = nh/(2pi). Energy: E_n = -13.6/n^2 eV." },
      { title: "Bohr Radius", text: "a_0 = 5.29*10^-11 m. r_n = n^2*a_0." },
      { title: "Rydberg", text: "1/lambda = R*(1/n_f^2 - 1/n_i^2). R = 1.097*10^7 m^-1." },
      { title: "Spectral Series", text: "Lyman (n_f=1, UV), Balmer (n_f=2, visible), Paschen (n_f=3, IR)." },
      { title: "Ionization", text: "E_ionization = 13.6 eV for hydrogen ground state." }
    ],
    importantQuestions: [
      { question: "Describe Rutherford's experiment. What were its conclusions and limitations?", type: "Long Answer" },
      { question: "State Bohr's postulates. Derive expression for energy levels of hydrogen.", type: "Derivation" },
      { question: "Explain hydrogen spectrum. Derive Rydberg formula.", type: "Derivation" },
      { question: "Draw energy level diagram. Explain transitions and spectral series.", type: "Long Answer" },
      { question: "Why Bohr model fails for multi-electron atoms?", type: "Conceptual" }
    ],
    examTips: [
      "Rutherford: mention alpha scattering, empty space, nucleus, and stability problem.",
      "Bohr: state all three postulates clearly before deriving.",
      "Rydberg formula: identify n_f and n_i correctly. n_f is always smaller.",
      "Energy: E_n = -13.6/n^2 eV. More negative = more tightly bound.",
      "Spectral series: know which n_f corresponds to which series and region."
    ]
  }
,
  {
    id: "nuclei",
    title: "Nuclei",
    description: "Study of nuclear structure, radioactive decay, mass-energy equivalence, nuclear fission and fusion.",
    keywords: ["nucleus", "radioactive decay", "mass-energy", "fission", "fusion", "half-life", "binding energy", "nuclear forces"],
    concepts: [
      {
        title: "Nuclear Structure",
        content: "Nucleus contains protons (charge +e, mass ~1.67*10^-27 kg) and neutrons (no charge, similar mass). Number of nucleons: A = Z + N (mass number). Atomic number Z identifies element. Isotopes: same Z, different N (e.g., 1H, 2H, 3H). Isobars: same A, different Z. Isotones: same N, different Z. Nuclear density is approximately constant (~2.3*10^17 kg/m^3) and independent of A. Nuclear radius: R = R_0*A^(1/3), where R_0 = 1.2 fm = 1.2*10^-15 m. Nuclear forces are strong, short-range (~2 fm), attractive, and charge-independent.",
        keywords: ["protons", "neutrons", "mass number", "nuclear density", "nuclear radius"],
        points: [
          "Nucleus: Z protons + N neutrons, A = Z + N",
          "Nuclear radius: R = R_0*A^(1/3), R_0 = 1.2 fm",
          "Nuclear density constant (~2.3*10^17 kg/m^3)",
          "Nuclear force: strong, short-range, attractive",
          "Isotopes: same Z, different N"
        ]
      },
      {
        title: "Radioactive Decay",
        content: "Radioactivity: spontaneous emission of radiation from unstable nuclei. Three types: (1) Alpha decay: nucleus emits alpha particle (4He^2+). A decreases by 4, Z decreases by 2. (2) Beta minus decay: neutron converts to proton + electron + antineutrino. Z increases by 1, A unchanged. (3) Gamma decay: excited nucleus emits gamma photon (no change in A or Z). Decay law: N = N_0*e^(-lambda*t), where lambda is decay constant. Half-life: T_(1/2) = ln(2)/lambda = 0.693/lambda. Average life: tau = 1/lambda = T_(1/2)/0.693.",
        keywords: ["alpha decay", "beta decay", "gamma decay", "half-life", "decay constant"],
        points: [
          "Alpha: A decreases by 4, Z by 2",
          "Beta minus: Z increases by 1 (n -> p + e + antineutrino)",
          "Gamma: no change in A or Z (energy release only)",
          "N = N_0*e^(-lambda*t)",
          "T_(1/2) = 0.693/lambda"
        ]
      },
      {
        title: "Mass-Energy Equivalence",
        content: "Einstein's mass-energy relation: E = m*c^2. Mass defect: Delta(m) = [Z*m_p + N*m_n] - m_nucleus. Binding energy: BE = Delta(m)*c^2. Binding energy per nucleon: BE/A determines nuclear stability. Maximum BE/A at iron (A ~ 56). For lighter nuclei: fusion increases BE/A (releases energy). For heavier nuclei: fission increases BE/A (releases energy). 1 atomic mass unit (u) = 931.5 MeV/c^2. BE/A curve explains why fission of heavy and fusion of light nuclei release energy.",
        keywords: ["mass defect", "binding energy", "BE/A", "mass-energy equivalence"],
        points: [
          "E = m*c^2",
          "Mass defect: Delta(m) = [Z*m_p + N*m_n] - m_nucleus",
          "BE = Delta(m)*c^2",
          "BE/A max at iron (A ~ 56)",
          "1 u = 931.5 MeV/c^2"
        ]
      },
      {
        title: "Nuclear Fission",
        content: "Fission: heavy nucleus splits into two lighter nuclei (fragments) with release of energy and neutrons. Example: 235U + n -> 141Ba + 92Kr + 3n + 200 MeV. Chain reaction: neutrons from one fission cause more fissions. Critical mass: minimum mass needed to sustain chain reaction. Controlled chain reaction: nuclear reactor (control rods absorb excess neutrons). Uncontrolled: nuclear bomb. Nuclear reactor: fuel (uranium), moderator (slow neutrons: heavy water/graphite), control rods (cadmium/boron), coolant.",
        keywords: ["fission", "chain reaction", "critical mass", "nuclear reactor", "moderator"],
        points: [
          "Heavy nucleus splits into lighter fragments",
          "Releases energy and neutrons (~200 MeV per fission)",
          "Chain reaction: neutrons cause more fissions",
          "Controlled: reactor. Uncontrolled: bomb.",
          "Moderator slows neutrons, control rods absorb them"
        ]
      },
      {
        title: "Nuclear Fusion",
        content: "Fusion: two light nuclei combine to form heavier nucleus with release of energy. Example: 4 protons -> 4He + 2e+ + 2 neutrinos + 26.7 MeV (proton-proton chain in sun). Requires very high temperature (~10^7 K) to overcome Coulomb repulsion. Called thermonuclear reaction. Energy source of stars. Fusion releases more energy per unit mass than fission. Fusion reactors: magnetic confinement (tokamak), inertial confinement. Problem: sustaining high temperature and containing plasma.",
        keywords: ["fusion", "thermonuclear", "proton-proton chain", "tokamak"],
        points: [
          "Light nuclei combine to form heavier nucleus",
          "Requires very high temperature (~10^7 K)",
          "Energy source of stars (proton-proton chain)",
          "More energy per unit mass than fission",
          "Difficult to sustain (plasma containment)"
        ]
      }
    ],
    definitions: [
      { term: "Mass Number (A)", definition: "Total number of nucleons (protons + neutrons) in nucleus." },
      { term: "Atomic Number (Z)", definition: "Number of protons in nucleus. Identifies the element." },
      { term: "Radioactivity", definition: "Spontaneous emission of radiation (alpha, beta, gamma) from unstable nuclei." },
      { term: "Half-life", definition: "Time for half the radioactive nuclei to decay. T_(1/2) = 0.693/lambda." },
      { term: "Mass Defect", definition: "Difference between sum of individual nucleon masses and actual nuclear mass. Delta(m) = [Z*m_p + N*m_n] - M." },
      { term: "Binding Energy", definition: "Energy needed to separate nucleus into individual nucleons. BE = Delta(m)*c^2." },
      { term: "Fission", definition: "Splitting of heavy nucleus into two lighter fragments with release of energy and neutrons." },
      { term: "Fusion", definition: "Combination of two light nuclei to form heavier nucleus with energy release. Requires high temperature." }
    ],
    formulas: [
      {
        name: "Radioactive Decay Law",
        formula: "N = N_0*e^(-lambda*t)",
        variables: { "N": "Number of nuclei at time t", "N_0": "Initial number", "lambda": "Decay constant (s^-1)", "t": "Time (s)" },
        example: "N_0 = 10^6, lambda = 0.02 s^-1, t = 100 s: N = 10^6*e^(-2) = 1.35*10^5",
        meaning: "Number decreases exponentially with time."
      },
      {
        name: "Half-life",
        formula: "T_(1/2) = 0.693/lambda",
        variables: { "T_(1/2)": "Half-life (s)", "lambda": "Decay constant (s^-1)" },
        example: "lambda = 0.02 s^-1: T_(1/2) = 0.693/0.02 = 34.65 s",
        meaning: "Half-life and decay constant are inversely related."
      },
      {
        name: "Mass Defect",
        formula: "Delta(m) = [Z*m_p + N*m_n] - M",
        variables: { "Delta(m)": "Mass defect (u or kg)", "Z": "Number of protons", "m_p": "Proton mass", "N": "Number of neutrons", "m_n": "Neutron mass", "M": "Nuclear mass" },
        example: "4He: Z=2, N=2. Delta(m) = [2(1.00728) + 2(1.00866)] - 4.00260 = 0.03037 u",
        meaning: "Mass is converted to binding energy."
      },
      {
        name: "Binding Energy",
        formula: "BE = Delta(m)*c^2",
        variables: { "BE": "Binding energy (J or MeV)", "Delta(m)": "Mass defect (kg or u)", "c": "Speed of light" },
        example: "Delta(m) = 0.03037 u: BE = 0.03037*931.5 = 28.3 MeV",
        meaning: "Energy equivalent of mass defect."
      },
      {
        name: "Nuclear Radius",
        formula: "R = R_0*A^(1/3)",
        variables: { "R": "Nuclear radius (m)", "R_0": "1.2*10^-15 m", "A": "Mass number" },
        example: "A = 64 (copper): R = 1.2*10^-15*(64)^(1/3) = 4.8*10^-15 m",
        meaning: "Radius increases as cube root of mass number."
      }
    ],
    derivations: [
      {
        title: "Half-life from Decay Law",
        steps: [
          "Decay law: N = N_0*e^(-lambda*t).",
          "At t = T_(1/2), N = N_0/2.",
          "N_0/2 = N_0*e^(-lambda*T_(1/2)).",
          "1/2 = e^(-lambda*T_(1/2)).",
          "ln(1/2) = -lambda*T_(1/2).",
          "-0.693 = -lambda*T_(1/2).",
          "T_(1/2) = 0.693/lambda."
        ]
      },
      {
        title: "Mass-Energy and Binding Energy",
        steps: [
          "Consider nucleus with Z protons and N neutrons.",
          "Mass of individual nucleons: Z*m_p + N*m_n.",
          "Actual nuclear mass: M.",
          "Mass defect: Delta(m) = [Z*m_p + N*m_n] - M.",
          "By Einstein's relation, mass defect corresponds to energy.",
          "Binding energy: BE = Delta(m)*c^2.",
          "BE per nucleon: BE/A = Delta(m)*c^2/A.",
          "BE/A determines stability: higher = more stable."
        ]
      }
    ],
    examples: [
      {
        question: "Radioactive sample has decay constant 0.05 s^-1. Find half-life and time for 75% decay.",
        solution: {
          formula: "T_(1/2) = 0.693/lambda, N = N_0*e^(-lambda*t)",
          steps: [
            { label: "Half-life", text: "T_(1/2) = 0.693/lambda", math: "T_(1/2) = 0.693/0.05 = 13.86 s" },
            { label: "75% decay", text: "N = 0.25*N_0 (25% remaining)", math: "" },
            { label: "Time", text: "0.25 = e^(-0.05*t), ln(0.25) = -0.05*t", math: "t = -1.386/(-0.05) = 27.72 s = 2*T_(1/2)" }
          ],
          answer: "T_(1/2) = 13.86 s, t = 27.72 s",
          explanation: "75% decay means 2 half-lives have passed."
        }
      },
      {
        question: "Find binding energy per nucleon of 56Fe. Given: m_p = 1.00728 u, m_n = 1.00866 u, M(56Fe) = 55.93494 u.",
        solution: {
          formula: "Delta(m) = [Z*m_p + N*m_n] - M, BE = Delta(m)*931.5 MeV",
          steps: [
            { label: "Mass defect", text: "Z=26, N=30. Delta(m) = [26(1.00728) + 30(1.00866)] - 55.93494", math: "Delta(m) = 56.44988 - 55.93494 = 0.51494 u" },
            { label: "Binding energy", text: "BE = 0.51494*931.5", math: "BE = 479.6 MeV" },
            { label: "BE/A", text: "BE/A = 479.6/56", math: "BE/A = 8.56 MeV/nucleon" }
          ],
          answer: "BE/A = 8.56 MeV/nucleon",
          explanation: "Iron has maximum BE/A, making it most stable nucleus."
        }
      },
      {
        question: "Find nuclear radius of 238U (R_0 = 1.2 fm).",
        solution: {
          formula: "R = R_0*A^(1/3)",
          steps: [
            { label: "Given", text: "A = 238, R_0 = 1.2 fm", math: "" },
            { label: "Calculate", text: "R = 1.2*(238)^(1/3)", math: "R = 1.2*6.20 = 7.44 fm = 7.44*10^-15 m" }
          ],
          answer: "R = 7.44 fm",
          explanation: "Nuclear radius is about 10^-15 m, much smaller than atomic radius (~10^-10 m)."
        }
      }
    ],
    commonMistakes: [
      { title: "Alpha Decay Products", text: "Alpha decay: A decreases by 4, Z decreases by 2. The emitted particle is 4He^2+. Do not confuse with proton or neutron emission." },
      { title: "Beta Decay", text: "Beta minus: neutron -> proton + electron + antineutrino. Z increases by 1, A unchanged. Beta plus (not in syllabus): proton -> neutron + positron." },
      { title: "Mass Defect vs Mass", text: "Mass defect is the DIFFERENCE, not the actual mass. Actual mass is less than sum of individual nucleons because some mass is converted to binding energy." },
      { title: "Half-life Calculation", text: "75% decay = 2 half-lives (N = N_0/4). 87.5% decay = 3 half-lives. Do not use linear decay." },
      { title: "Fission vs Fusion", text: "Fission: heavy -> lighter (uranium). Fusion: lighter -> heavy (hydrogen). Both release energy, but fusion releases more per unit mass." }
    ],
    quickRevision: [
      { title: "Nucleus", text: "Z protons + N neutrons. R = R_0*A^(1/3). Density constant ~2.3*10^17 kg/m^3." },
      { title: "Radioactive Decay", text: "N = N_0*e^(-lambda*t). T_(1/2) = 0.693/lambda." },
      { title: "Alpha Decay", text: "A decreases by 4, Z by 2. Emission of 4He^2+." },
      { title: "Beta Decay", text: "Neutron -> proton + electron. Z increases by 1, A unchanged." },
      { title: "Mass-Energy", text: "E = mc^2. BE = Delta(m)*c^2. BE/A max at iron." },
      { title: "Fission/Fusion", text: "Fission: heavy splits. Fusion: light combines. Both release energy." }
    ],
    importantQuestions: [
      { question: "Explain Rutherford's alpha scattering experiment. What did it reveal about nucleus?", type: "Long Answer" },
      { question: "State laws of radioactive decay. Derive half-life expression.", type: "Derivation" },
      { question: "What is mass defect? Derive binding energy and explain BE/A curve.", type: "Derivation" },
      { question: "Explain nuclear fission with example. Describe nuclear reactor.", type: "Long Answer" },
      { question: "Compare fission and fusion. Why does fusion require high temperature?", type: "Conceptual" }
    ],
    examTips: [
      "Radioactive decay: use N = N_0*e^(-lambda*t) for any time. T_(1/2) = 0.693/lambda.",
      "For mass defect, carefully calculate [Z*m_p + N*m_n] - M. Watch units (u vs kg).",
      "BE/A curve: iron is most stable. Fusion for light, fission for heavy nuclei.",
      "Nuclear reactor: know components (fuel, moderator, control rods, coolant) and their functions.",
      "Fusion requires high T to overcome Coulomb repulsion between positively charged nuclei."
    ]
  }
,
  {
    id: "semiconductors",
    title: "Semiconductor Electronics",
    description: "Study of semiconductor materials, p-n junction, diode, transistor, logic gates, and rectifier circuits.",
    keywords: ["semiconductor", "p-n junction", "diode", "transistor", "logic gates", "rectifier", "forward bias", "reverse bias", "Zener diode"],
    concepts: [
      {
        title: "Semiconductor Materials",
        content: "Semiconductors: materials with conductivity between conductors and insulators. Examples: silicon (Si, Z=14), germanium (Ge, Z=32). At 0 K: behave as insulators. At room temperature: some electrons gain thermal energy and jump to conduction band, leaving holes in valence band. Intrinsic semiconductor: pure semiconductor. Extrinsic: doped with impurities. n-type: doped with pentavalent (P, As) - extra electrons. p-type: doped with trivalent (B, Ga) - extra holes. Carrier concentration: n_i (intrinsic) ~ 1.5*10^10 cm^-3 for Si at 300 K.",
        keywords: ["intrinsic", "extrinsic", "n-type", "p-type", "doping", "carrier concentration"],
        points: [
          "Conductivity between conductors and insulators",
          "At room temperature: electrons jump to conduction band",
          "n-type: pentavalent dopant (extra electrons)",
          "p-type: trivalent dopant (extra holes)",
          "Intrinsic: pure. Extrinsic: doped."
        ]
      },
      {
        title: "p-n Junction",
        content: "p-n junction: junction between p-type and n-type semiconductor. At junction: electrons from n-side diffuse to p-side, holes from p-side to n-side. This creates depletion region (space charge region) with built-in potential (barrier potential ~0.7 V for Si, 0.3 V for Ge). Forward bias: p-side to +, n-side to -. Depletion width decreases, current flows easily. Reverse bias: p-side to -, n-side to +. Depletion width increases, very small reverse current (leakage). Current-voltage characteristics: I = I_0*(e^(V/V_T) - 1), where V_T = kT/e = 26 mV at room temperature.",
        keywords: ["depletion region", "barrier potential", "forward bias", "reverse bias", "V-I characteristics"],
        points: [
          "Depletion region: charge-free region at junction",
          "Barrier potential: ~0.7 V (Si), ~0.3 V (Ge)",
          "Forward bias: low resistance, current flows",
          "Reverse bias: high resistance, small leakage",
          "I = I_0*(e^(V/V_T) - 1)"
        ]
      },
      {
        title: "Diode as Rectifier",
        content: "Rectifier: converts AC to DC. Half-wave rectifier: single diode, conducts during one half-cycle. Output: pulsating DC with frequency equal to input frequency. Efficiency: 40.6%. Full-wave rectifier: two diodes with center-tapped transformer, conducts during both half-cycles. Output: pulsating DC with frequency 2*input frequency. Efficiency: 81.2%. Bridge rectifier: four diodes, no center tap needed. Same efficiency as full-wave. Filter: capacitor across output smooths pulsations.",
        keywords: ["half-wave", "full-wave", "bridge rectifier", "efficiency", "filter"],
        points: [
          "Half-wave: 1 diode, efficiency 40.6%, freq = f",
          "Full-wave: 2 diodes + center tap, efficiency 81.2%, freq = 2f",
          "Bridge: 4 diodes, no center tap, efficiency 81.2%",
          "Filter capacitor smooths output",
          "Ripple factor measures smoothness"
        ]
      },
      {
        title: "Zener Diode and Voltage Regulator",
        content: "Zener diode: special diode designed to operate in reverse breakdown. In reverse bias: at Zener voltage (V_Z), current increases sharply while voltage remains nearly constant. Used as voltage regulator: maintains constant output voltage despite input voltage or load variations. Circuit: Zener diode in parallel with load, series resistor R_s. Output voltage = V_Z (constant). Load regulation: change in V_L for change in I_L. Line regulation: change in V_L for change in V_in.",
        keywords: ["Zener diode", "voltage regulator", "breakdown", "regulation"],
        points: [
          "Operates in reverse breakdown region",
          "Voltage remains constant at V_Z",
          "Used as voltage regulator",
          "Output voltage = V_Z (constant)",
          "Series resistor protects Zener"
        ]
      },
      {
        title: "Transistor (BJT)",
        content: "Bipolar Junction Transistor (BJT): three-layer device (NPN or PNP). Three terminals: Emitter (E), Base (B), Collector (C). Transistor action: small base current controls large collector current. Current relations: I_E = I_B + I_C. Current gain: beta (common emitter) = I_C/I_B (typically 50-300). Alpha (common base) = I_C/I_E. Transistor as switch: cut-off (both junctions reverse biased) and saturation (both forward biased). Transistor as amplifier: active region (BE forward, BC reverse biased). Common emitter amplifier: voltage gain A_v = -beta*R_C/R_B.",
        keywords: ["NPN", "PNP", "current gain", "amplifier", "switch", "active region"],
        points: [
          "Three terminals: E, B, C",
          "I_E = I_B + I_C",
          "beta = I_C/I_B (current gain)",
          "Switch: cut-off and saturation",
          "Amplifier: active region (BE forward, BC reverse)"
        ]
      },
      {
        title: "Logic Gates",
        content: "Logic gates: electronic circuits implementing Boolean algebra. Basic gates: (1) AND: Y = A*B. Output 1 only when all inputs 1. (2) OR: Y = A+B. Output 1 when any input 1. (3) NOT: Y = A'. Output is complement of input. Universal gates: NAND (NOT-AND) and NOR (NOT-OR). Any logic circuit can be built using only NAND or only NOR gates. Truth tables show output for all input combinations. Boolean algebra: De Morgan's laws: (A+B)' = A'*B', (AB)' = A'+B'.",
        keywords: ["AND", "OR", "NOT", "NAND", "NOR", "truth table", "Boolean algebra"],
        points: [
          "AND: Y = A*B (both 1 gives 1)",
          "OR: Y = A+B (any 1 gives 1)",
          "NOT: Y = A' (complement)",
          "NAND and NOR are universal gates",
          "Truth table shows all input-output combinations"
        ]
      }
    ],
    definitions: [
      { term: "Semiconductor", definition: "Material with conductivity between conductor and insulator. Silicon, germanium at room temperature." },
      { term: "Intrinsic Semiconductor", definition: "Pure semiconductor with equal number of electrons and holes. n_e = n_h = n_i." },
      { term: "Extrinsic Semiconductor", definition: "Semiconductor doped with impurity atoms to increase conductivity. n-type or p-type." },
      { term: "Doping", definition: "Adding controlled amount of impurity atoms to semiconductor to change its electrical properties." },
      { term: "Depletion Region", definition: "Region near p-n junction devoid of free charge carriers. Contains fixed ionized atoms." },
      { term: "Forward Bias", definition: "p-side connected to positive terminal, n-side to negative. Low resistance, current flows easily." },
      { term: "Reverse Bias", text: "p-side to negative, n-side to positive. High resistance, small leakage current." },
      { term: "Transistor", definition: "Three-layer semiconductor device (NPN or PNP) used for switching and amplification." },
      { term: "Logic Gate", definition: "Electronic circuit implementing Boolean function. Basic: AND, OR, NOT. Universal: NAND, NOR." }
    ],
    formulas: [
      {
        name: "Diode Current",
        formula: "I = I_0*(e^(V/V_T) - 1)",
        variables: { "I": "Diode current (A)", "I_0": "Reverse saturation current (A)", "V": "Applied voltage (V)", "V_T": "Thermal voltage = kT/e = 26 mV at 300 K" },
        example: "I_0 = 10^-12 A, V = 0.6 V, V_T = 0.026 V: I = 10^-12*(e^(0.6/0.026) - 1) = 10^-12*1.6*10^10 = 0.016 A = 16 mA",
        meaning: "Current increases exponentially with forward voltage."
      },
      {
        name: "Transistor Current Relations",
        formula: "I_E = I_B + I_C, beta = I_C/I_B",
        variables: { "I_E": "Emitter current (A)", "I_B": "Base current (A)", "I_C": "Collector current (A)", "beta": "Current gain" },
        example: "I_B = 20 uA, beta = 100: I_C = 100*20 = 2 mA, I_E = 2.02 mA",
        meaning: "Small base current controls large collector current."
      },
      {
        name: "Common Emitter Voltage Gain",
        formula: "A_v = -beta*R_C/R_B",
        variables: { "A_v": "Voltage gain", "beta": "Current gain", "R_C": "Collector resistance (ohm)", "R_B": "Base resistance (ohm)" },
        example: "beta = 100, R_C = 5 kohm, R_B = 1 kohm: A_v = -100*5/1 = -500",
        meaning: "Negative sign indicates 180 deg phase inversion."
      },
      {
        name: "Rectifier Efficiency",
        formula: "eta = P_DC/P_AC = (2*V_m/pi)^2 / (V_m*R_L/(2*R_f + R_L))",
        variables: { "eta": "Efficiency", "V_m": "Peak voltage", "R_L": "Load resistance", "R_f": "Diode forward resistance" },
        example: "Ideal diode (R_f = 0): half-wave eta = 40.6%, full-wave eta = 81.2%",
        meaning: "Full-wave is twice as efficient as half-wave."
      },
      {
        name: "NAND Gate Output",
        formula: "Y = (A*B)'",
        variables: { "Y": "Output", "A, B": "Inputs" },
        example: "A = 1, B = 1: Y = (1*1)' = 0. A = 0, B = 1: Y = (0*1)' = 1",
        meaning: "Output is 0 only when all inputs are 1."
      }
    ],
    derivations: [
      {
        title: "Transistor as Common Emitter Amplifier",
        steps: [
          "Transistor in active region: BE forward, BC reverse biased.",
          "Input signal applied to base, output taken from collector.",
          "Input current: I_B + i_b (DC + small signal).",
          "Collector current: I_C + i_c = beta*(I_B + i_b).",
          "Small signal: i_c = beta*i_b.",
          "Input voltage: v_in = i_b*R_B.",
          "Output voltage: v_out = -i_c*R_C = -beta*i_b*R_C.",
          "Voltage gain: A_v = v_out/v_in = -beta*R_C/R_B.",
          "Negative sign indicates 180 deg phase shift."
        ]
      },
      {
        title: "Half-Wave Rectifier Analysis",
        steps: [
          "AC input: v = V_m*sin(omega*t).",
          "During positive half-cycle: diode forward biased, conducts.",
          "Output: v_out = V_m*sin(omega*t) (for ideal diode).",
          "During negative half-cycle: diode reverse biased, blocks.",
          "Output: v_out = 0.",
          "Average (DC) output: V_DC = V_m/pi = 0.318*V_m.",
          "RMS output: V_rms = V_m/2.",
          "DC power: P_DC = V_DC^2/R_L = V_m^2/(pi^2*R_L).",
          "AC power input: P_AC = V_rms^2/R_L = V_m^2/(4*R_L).",
          "Efficiency: eta = P_DC/P_AC = 4/pi^2 = 40.6%."
        ]
      }
    ],
    examples: [
      {
        question: "Silicon diode has I_0 = 1 nA. Find forward current at 0.5 V (room temperature).",
        solution: {
          formula: "I = I_0*(e^(V/V_T) - 1)",
          steps: [
            { label: "Given", text: "I_0 = 10^-9 A, V = 0.5 V, V_T = 0.026 V", math: "" },
            { label: "Calculate", text: "I = 10^-9*(e^(0.5/0.026) - 1)", math: "I = 10^-9*(e^19.23 - 1) = 10^-9*2.2*10^8 = 0.22 A = 220 mA" }
          ],
          answer: "I = 220 mA",
          explanation: "Forward current increases exponentially with voltage."
        }
      },
      {
        question: "NPN transistor: I_B = 50 uA, I_C = 5 mA. Find beta, alpha, I_E.",
        solution: {
          formula: "beta = I_C/I_B, I_E = I_B + I_C, alpha = I_C/I_E",
          steps: [
            { label: "beta", text: "beta = I_C/I_B = 5*10^-3/50*10^-6", math: "beta = 100" },
            { label: "I_E", text: "I_E = I_B + I_C", math: "I_E = 50*10^-6 + 5*10^-3 = 5.05 mA" },
            { label: "alpha", text: "alpha = I_C/I_E = 5/5.05", math: "alpha = 0.99" }
          ],
          answer: "beta = 100, alpha = 0.99, I_E = 5.05 mA",
          explanation: "beta >> 1, alpha slightly less than 1."
        }
      },
      {
        question: "Draw truth table for NAND gate. Implement AND using NAND gates.",
        solution: {
          formula: "NAND: Y = (A*B)'",
          steps: [
            { label: "Truth table", text: "A=0,B=0: Y=1; A=0,B=1: Y=1; A=1,B=0: Y=1; A=1,B=1: Y=0", math: "" },
            { label: "AND using NAND", text: "AND = NAND followed by NOT. NOT = NAND with inputs tied.", math: "Y = ((A*B)')' = A*B" }
          ],
          answer: "NAND truth table as above. AND = NAND + NOT (NAND with tied inputs).",
          explanation: "NAND is universal: any logic function can be implemented using only NAND gates."
        }
      }
    ],
    commonMistakes: [
      { title: "n-type vs p-type", text: "n-type: majority carriers are electrons (extra from pentavalent dopant). p-type: majority carriers are holes (from trivalent dopant). Do not confuse majority and minority carriers." },
      { title: "Bias Direction", text: "Forward bias: p to +, n to -. Reverse bias: p to -, n to +. Remember: Forward = same (p to +), Reverse = opposite." },
      { title: "Transistor Current", text: "I_E = I_B + I_C always. Base current is very small compared to collector. beta = I_C/I_B is large (50-300)." },
      { title: "Logic Gate Outputs", text: "AND: both 1 gives 1. OR: any 1 gives 1. NAND: opposite of AND. NOR: opposite of OR. Draw truth tables to avoid confusion." },
      { title: "Rectifier Output", text: "Half-wave: output frequency = input frequency. Full-wave/bridge: output frequency = 2*input frequency." }
    ],
    quickRevision: [
      { title: "Semiconductors", text: "Intrinsic: pure. n-type: pentavalent dopant. p-type: trivalent dopant." },
      { title: "p-n Junction", text: "Depletion region, barrier potential (0.7 V Si). Forward: low R. Reverse: high R." },
      { title: "Rectifier", text: "Half-wave: 40.6% efficiency. Full-wave: 81.2%. Bridge: 4 diodes, no center tap." },
      { title: "Transistor", text: "I_E = I_B + I_C. beta = I_C/I_B. Switch or amplifier." },
      { title: "Logic Gates", text: "AND, OR, NOT. NAND, NOR (universal). Truth tables for all." }
    ],
    importantQuestions: [
      { question: "Explain p-n junction formation. Draw V-I characteristics.", type: "Long Answer" },
      { question: "What is rectification? Compare half-wave and full-wave rectifiers.", type: "Long Answer" },
      { question: "Explain Zener diode as voltage regulator with circuit diagram.", type: "Long Answer" },
      { question: "Explain transistor action. Derive common emitter voltage gain.", type: "Derivation" },
      { question: "Draw truth tables for AND, OR, NOT, NAND, NOR gates. Show NAND is universal.", type: "Long Answer" }
    ],
    examTips: [
      "p-n junction: clearly explain depletion region formation and barrier potential.",
      "Rectifier: draw circuit diagrams and compare efficiency. Filter capacitor smooths output.",
      "Transistor: know current relations (I_E = I_B + I_C) and bias conditions for each region.",
      "Logic gates: memorize truth tables. NAND and NOR are universal.",
      "Zener diode: operates in reverse breakdown. Used as voltage regulator.",
      "For numericals: use I = I_0*(e^(V/V_T) - 1) for diodes, beta = I_C/I_B for transistors."
    ]
  }
]
