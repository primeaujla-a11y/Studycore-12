window.NumericalsDB = [
  // ==================== PHYSICS NUMERICALS ====================
  // --- Electrostatics ---
  {
    id: 1,
    subject: "physics",
    topic: "Electrostatics",
    difficulty: "easy",
    question: "Two point charges q₁ = 2 μC and q₂ = −3 μC are placed 0.3 m apart in vacuum. Find the force between them.",
    given: "q₁ = 2 μC = 2 × 10⁻⁶ C, q₂ = −3 μC = −3 × 10⁻⁶ C, r = 0.3 m, k = 9 × 10⁹ N·m²/C²",
    find: "Electrostatic force F between the charges",
    hint: "Use Coulomb's Law. The negative sign in q₂ indicates the force is attractive.",
    solution: {
      formula: "F = k|q₁||q₂| / r²",
      formulaExplain: "Coulomb's Law gives the magnitude of force between two point charges.",
      steps: [
        { label: "Step 1", text: "Substitute the values into Coulomb's Law", math: "F = (9 × 10⁹) × (2 × 10⁻⁶) × (3 × 10⁻⁶) / (0.3)²" },
        { label: "Step 2", text: "Calculate the numerator", math: "F = (9 × 10⁹) × (6 × 10⁻¹²) / 0.09" },
        { label: "Step 3", text: "Simplify", math: "F = (54 × 10⁻³) / 0.09 = 0.6 N" }
      ],
      answer: "F = 0.6 N (attractive, since charges are opposite)",
      explanation: "The force is 0.6 N and attractive because the charges have opposite signs. The negative charge is pulled toward the positive charge."
    }
  },
  {
    id: 2,
    subject: "physics",
    topic: "Electrostatics",
    difficulty: "medium",
    question: "Calculate the electric field intensity at a distance of 20 cm from a point charge of 4 μC.",
    given: "q = 4 μC = 4 × 10⁻⁶ C, r = 20 cm = 0.2 m, k = 9 × 10⁹ N·m²/C²",
    find: "Electric field E at the given point",
    hint: "Electric field is the force experienced per unit positive test charge placed at that point.",
    solution: {
      formula: "E = kq / r²",
      formulaExplain: "Electric field due to a point charge is directly proportional to the charge and inversely proportional to the square of the distance.",
      steps: [
        { label: "Step 1", text: "Substitute values into the formula", math: "E = (9 × 10⁹) × (4 × 10⁻⁶) / (0.2)²" },
        { label: "Step 2", text: "Calculate the numerator and denominator", math: "E = (36 × 10³) / 0.04" },
        { label: "Step 3", text: "Simplify", math: "E = 9 × 10⁵ N/C" }
      ],
      answer: "E = 9 × 10⁵ N/C",
      explanation: "The electric field at 20 cm from a 4 μC charge is 9 × 10⁵ N/C, directed radially outward from the positive charge."
    }
  },
  {
    id: 3,
    subject: "physics",
    topic: "Electrostatics",
    difficulty: "hard",
    question: "Three point charges are placed along a straight line: q₁ = 1 μC at the origin, q₂ = −2 μC at x = 0.1 m, and q₃ = 3 μC at x = 0.3 m. Find the total electrostatic potential energy of the system.",
    given: "q₁ = 1 μC at x = 0, q₂ = −2 μC at x = 0.1 m, q₃ = 3 μC at x = 0.3 m, k = 9 × 10⁹ N·m²/C²",
    find: "Total potential energy U of the system",
    hint: "The total PE is the sum of PE of all pairs: U = U₁₂ + U₁₃ + U₂₃.",
    solution: {
      formula: "U = kq₁q₂/r₁₂ + kq₁q₃/r₁₃ + kq₂q₃/r₂₃",
      formulaExplain: "Potential energy of a system of charges is the work done in assembling them from infinity.",
      steps: [
        { label: "Step 1", text: "Calculate U₁₂ (between q₁ and q₂, r₁₂ = 0.1 m)", math: "U₁₂ = (9×10⁹)(1×10⁻⁶)(−2×10⁻⁶)/0.1 = −18×10⁻³/0.1 = −0.18 J" },
        { label: "Step 2", text: "Calculate U₁₃ (between q₁ and q₃, r₁₃ = 0.3 m)", math: "U₁₃ = (9×10⁹)(1×10⁻⁶)(3×10⁻⁶)/0.3 = 27×10⁻³/0.3 = 0.09 J" },
        { label: "Step 3", text: "Calculate U₂₃ (between q₂ and q₃, r₂₃ = 0.2 m)", math: "U₂₃ = (9×10⁹)(−2×10⁻⁶)(3×10⁻⁶)/0.2 = −54×10⁻³/0.2 = −0.27 J" },
        { label: "Step 4", text: "Sum all pairs to find total PE", math: "U = −0.18 + 0.09 + (−0.27) = −0.36 J" }
      ],
      answer: "U = −0.36 J",
      explanation: "The total potential energy is negative, meaning the system is bound. Work would need to be done to separate these charges to infinity."
    }
  },
  {
    id: 4,
    subject: "physics",
    topic: "Electrostatics",
    difficulty: "easy",
    question: "A parallel plate capacitor has plate area 0.02 m² and plate separation 2 mm. Calculate its capacitance. (ε₀ = 8.85 × 10⁻¹² F/m)",
    given: "A = 0.02 m², d = 2 mm = 0.002 m, ε₀ = 8.85 × 10⁻¹² F/m",
    find: "Capacitance C",
    hint: "For a parallel plate capacitor with air/vacuum between plates, C = ε₀A/d.",
    solution: {
      formula: "C = ε₀A / d",
      formulaExplain: "Capacitance of a parallel plate capacitor depends on plate area, separation, and the permittivity of the medium between plates.",
      steps: [
        { label: "Step 1", text: "Substitute values into the formula", math: "C = (8.85 × 10⁻¹²) × 0.02 / 0.002" },
        { label: "Step 2", text: "Simplify the fraction", math: "C = (8.85 × 10⁻¹²) × 10" },
        { label: "Step 3", text: "Final calculation", math: "C = 8.85 × 10⁻¹¹ F = 88.5 pF" }
      ],
      answer: "C = 88.5 pF",
      explanation: "The capacitance is 88.5 picofarads. Increasing the plate area or decreasing the separation would increase capacitance."
    }
  },
  {
    id: 5,
    subject: "physics",
    topic: "Electrostatics",
    difficulty: "medium",
    question: "A capacitor of capacitance 10 μF is charged to a potential difference of 100 V. Find the energy stored in the capacitor.",
    given: "C = 10 μF = 10 × 10⁻⁶ F, V = 100 V",
    find: "Energy stored U",
    hint: "Energy stored in a capacitor can be calculated using U = ½CV².",
    solution: {
      formula: "U = ½CV²",
      formulaExplain: "The energy stored in a charged capacitor appears as electrostatic potential energy in the electric field between the plates.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "U = ½ × (10 × 10⁻⁶) × (100)²" },
        { label: "Step 2", text: "Calculate V²", math: "U = ½ × 10⁻⁵ × 10⁴" },
        { label: "Step 3", text: "Simplify", math: "U = ½ × 0.1 = 0.05 J" }
      ],
      answer: "U = 0.05 J",
      explanation: "The capacitor stores 0.05 J (50 mJ) of energy. This energy can be released when the capacitor discharges through a circuit."
    }
  },
  {
    id: 6,
    subject: "physics",
    topic: "Electrostatics",
    difficulty: "hard",
    question: "A parallel plate capacitor has capacitance 10 pF, is charged to 100 V, and has plate separation 1 mm. Calculate the force of attraction between the plates.",
    given: "C = 10 pF = 10⁻¹¹ F, V = 100 V, d = 1 mm = 0.001 m",
    find: "Force of attraction F between plates",
    hint: "The force between capacitor plates can be found using F = CV²/(2d).",
    solution: {
      formula: "F = CV² / (2d)",
      formulaExplain: "The attractive force between capacitor plates arises from the electric field. This formula is derived from energy considerations.",
      steps: [
        { label: "Step 1", text: "Substitute values into the formula", math: "F = (10⁻¹¹) × (100)² / (2 × 0.001)" },
        { label: "Step 2", text: "Calculate V² and simplify", math: "F = (10⁻¹¹ × 10⁴) / 0.002" },
        { label: "Step 3", text: "Final calculation", math: "F = 10⁻⁷ / 0.002 = 5 × 10⁻⁵ N" }
      ],
      answer: "F = 5 × 10⁻⁵ N",
      explanation: "The force of 5 × 10⁻⁵ N (50 μN) is small but significant at the microscopic scale of capacitor plates."
    }
  },
  // --- Current Electricity ---
  {
    id: 7,
    subject: "physics",
    topic: "Current Electricity",
    difficulty: "easy",
    question: "A 12 V battery is connected across a resistor of 4 Ω. Find the current flowing through the resistor.",
    given: "V = 12 V, R = 4 Ω",
    find: "Current I",
    hint: "Use Ohm's Law: V = IR.",
    solution: {
      formula: "I = V / R",
      formulaExplain: "Ohm's Law states that current through a conductor is directly proportional to the potential difference across it, at constant temperature.",
      steps: [
        { label: "Step 1", text: "Rearrange Ohm's Law to solve for I", math: "I = V / R" },
        { label: "Step 2", text: "Substitute values", math: "I = 12 / 4" },
        { label: "Step 3", text: "Calculate", math: "I = 3 A" }
      ],
      answer: "I = 3 A",
      explanation: "A current of 3 A flows through the 4 Ω resistor when connected to a 12 V source."
    }
  },
  {
    id: 8,
    subject: "physics",
    topic: "Current Electricity",
    difficulty: "medium",
    question: "A copper wire has length 10 m and diameter 1 mm. Find its resistance. (Resistivity of copper = 1.7 × 10⁻⁸ Ω·m)",
    given: "L = 10 m, d = 1 mm → r = 0.5 mm = 5 × 10⁻⁴ m, ρ = 1.7 × 10⁻⁸ Ω·m",
    find: "Resistance R",
    hint: "First find cross-sectional area A = πr², then use R = ρL/A.",
    solution: {
      formula: "R = ρL / A, where A = πr²",
      formulaExplain: "Resistance depends on the material's resistivity, length, and cross-sectional area.",
      steps: [
        { label: "Step 1", text: "Calculate cross-sectional area", math: "A = πr² = π × (5 × 10⁻⁴)² = π × 25 × 10⁻⁸ = 7.854 × 10⁻⁷ m²" },
        { label: "Step 2", text: "Substitute into resistance formula", math: "R = (1.7 × 10⁻⁸) × 10 / (7.854 × 10⁻⁷)" },
        { label: "Step 3", text: "Calculate", math: "R = 1.7 × 10⁻⁷ / 7.854 × 10⁻⁷ = 0.216 Ω" }
      ],
      answer: "R ≈ 0.22 Ω",
      explanation: "The copper wire has very low resistance (0.22 Ω) due to copper's excellent conductivity and the wire's relatively short length and large cross-section."
    }
  },
  {
    id: 9,
    subject: "physics",
    topic: "Current Electricity",
    difficulty: "easy",
    question: "Two resistors of 4 Ω and 6 Ω are connected in (a) series and (b) parallel. Find the equivalent resistance in each case.",
    given: "R₁ = 4 Ω, R₂ = 6 Ω",
    find: "Equivalent resistance for series and parallel combinations",
    hint: "Series: Rs = R₁ + R₂. Parallel: 1/Rp = 1/R₁ + 1/R₂, or Rp = R₁R₂/(R₁ + R₂).",
    solution: {
      formula: "Series: Rs = R₁ + R₂; Parallel: Rp = R₁R₂/(R₁ + R₂)",
      formulaExplain: "In series, resistances add up. In parallel, the reciprocal of equivalent resistance equals the sum of reciprocals.",
      steps: [
        { label: "Step 1", text: "Series combination", math: "Rs = 4 + 6 = 10 Ω" },
        { label: "Step 2", text: "Parallel combination", math: "Rp = (4 × 6)/(4 + 6) = 24/10 = 2.4 Ω" }
      ],
      answer: "Series: Rs = 10 Ω; Parallel: Rp = 2.4 Ω",
      explanation: "Series resistance is always larger than individual resistances, while parallel resistance is always smaller than the smallest individual resistance."
    }
  },
  {
    id: 10,
    subject: "physics",
    topic: "Current Electricity",
    difficulty: "medium",
    question: "A current of 2 A flows through a resistor of 5 Ω. Calculate the power dissipated as heat.",
    given: "I = 2 A, R = 5 Ω",
    find: "Power dissipated P",
    hint: "Use P = I²R. You can also verify with P = V²/R or P = VI.",
    solution: {
      formula: "P = I²R",
      formulaExplain: "Electrical power dissipated in a resistor is converted to heat. It can be expressed in multiple equivalent forms using Ohm's Law.",
      steps: [
        { label: "Step 1", text: "Substitute values into the power formula", math: "P = (2)² × 5" },
        { label: "Step 2", text: "Calculate", math: "P = 4 × 5 = 20 W" }
      ],
      answer: "P = 20 W",
      explanation: "The resistor dissipates 20 W of power as heat. This can also be verified: V = IR = 10 V, so P = VI = 10 × 2 = 20 W."
    }
  },
  {
    id: 11,
    subject: "physics",
    topic: "Current Electricity",
    difficulty: "hard",
    question: "A cell has EMF 10 V and internal resistance 1 Ω. It is connected to an external resistance of 4 Ω. Find (a) the current, (b) terminal voltage, and (c) power delivered to the external resistor.",
    given: "E = 10 V, r = 1 Ω, R = 4 Ω",
    find: "Current I, terminal voltage V, and power P",
    hint: "Use I = E/(R + r). Terminal voltage V = E − Ir = IR.",
    solution: {
      formula: "I = E/(R + r), V = IR",
      formulaExplain: "A real cell has internal resistance, so the terminal voltage is less than EMF when current flows.",
      steps: [
        { label: "Step 1", text: "Find current", math: "I = E/(R + r) = 10/(4 + 1) = 10/5 = 2 A" },
        { label: "Step 2", text: "Find terminal voltage", math: "V = IR = 2 × 4 = 8 V" },
        { label: "Step 3", text: "Verify: V = E − Ir", math: "V = 10 − 2(1) = 10 − 2 = 8 V ✓" },
        { label: "Step 4", text: "Find power delivered to external resistor", math: "P = I²R = (2)² × 4 = 16 W" }
      ],
      answer: "I = 2 A, V = 8 V, P = 16 W",
      explanation: "The terminal voltage (8 V) is less than EMF (10 V) due to 2 V drop across internal resistance. The remaining 2 V × 2 A = 4 W is lost as heat inside the cell."
    }
  },
  {
    id: 12,
    subject: "physics",
    topic: "Current Electricity",
    difficulty: "medium",
    question: "In a Wheatstone bridge, the resistances are: P = 2 Ω, Q = 4 Ω, R = 3 Ω. Find the value of S for the bridge to be balanced.",
    given: "P = 2 Ω, Q = 4 Ω, R = 3 Ω",
    find: "Resistance S for balanced bridge",
    hint: "For a balanced Wheatstone bridge: P/Q = R/S.",
    solution: {
      formula: "P/Q = R/S → S = QR/P",
      formulaExplain: "When a Wheatstone bridge is balanced, no current flows through the galvanometer, and the ratio of resistances in adjacent arms is equal.",
      steps: [
        { label: "Step 1", text: "Write the balance condition", math: "P/Q = R/S" },
        { label: "Step 2", text: "Rearrange to solve for S", math: "S = QR/P" },
        { label: "Step 3", text: "Substitute values", math: "S = (4 × 3)/2 = 12/2 = 6 Ω" }
      ],
      answer: "S = 6 Ω",
      explanation: "With S = 6 Ω, the ratio P/Q = 2/4 = 0.5 equals R/S = 3/6 = 0.5, confirming the bridge is balanced."
    }
  },
  // --- Magnetic Effects ---
  {
    id: 13,
    subject: "physics",
    topic: "Magnetic Effects",
    difficulty: "easy",
    question: "A charge of 2 μC moves with a velocity of 5 × 10⁴ m/s at an angle of 30° to a uniform magnetic field of 0.5 T. Find the magnetic force on the charge.",
    given: "q = 2 μC = 2 × 10⁻⁶ C, v = 5 × 10⁴ m/s, B = 0.5 T, θ = 30°",
    find: "Magnetic force F",
    hint: "Use F = qvB sinθ. The force is maximum when θ = 90° and zero when θ = 0°.",
    solution: {
      formula: "F = qvB sinθ",
      formulaExplain: "A charged particle moving in a magnetic field experiences a force perpendicular to both velocity and field.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "F = (2 × 10⁻⁶)(5 × 10⁴)(0.5) sin 30°" },
        { label: "Step 2", text: "Use sin 30° = 0.5", math: "F = (2 × 10⁻⁶)(5 × 10⁴)(0.5)(0.5)" },
        { label: "Step 3", text: "Calculate", math: "F = 2 × 10⁻⁶ × 1.25 × 10⁴ = 0.025 N" }
      ],
      answer: "F = 0.025 N = 2.5 × 10⁻² N",
      explanation: "The force is 0.025 N, directed perpendicular to both v and B (given by Fleming's Left Hand Rule or right-hand rule)."
    }
  },
  {
    id: 14,
    subject: "physics",
    topic: "Magnetic Effects",
    difficulty: "medium",
    question: "A circular coil has 50 turns and radius 10 cm. Find the magnetic field at its centre when a current of 2 A flows through it.",
    given: "N = 50, R = 10 cm = 0.1 m, I = 2 A, μ₀ = 4π × 10⁻⁷ T·m/A",
    find: "Magnetic field B at the centre",
    hint: "For a circular coil, B = μ₀NI/(2R) at the centre.",
    solution: {
      formula: "B = μ₀NI / (2R)",
      formulaExplain: "Each turn of the coil contributes to the magnetic field at the centre. For N turns, the field is N times that of a single loop.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "B = (4π × 10⁻⁷)(50)(2) / (2 × 0.1)" },
        { label: "Step 2", text: "Simplify numerator", math: "B = (4π × 10⁻⁷)(100) / 0.2" },
        { label: "Step 3", text: "Calculate", math: "B = 4π × 10⁻⁷ × 500 = 2π × 10⁻⁴ T" },
        { label: "Step 4", text: "Numerical value", math: "B ≈ 6.28 × 10⁻⁴ T" }
      ],
      answer: "B = 6.28 × 10⁻⁴ T ≈ 0.63 mT",
      explanation: "The magnetic field at the centre is 0.63 mT. Increasing the number of turns or current would increase this field."
    }
  },
  {
    id: 15,
    subject: "physics",
    topic: "Magnetic Effects",
    difficulty: "medium",
    question: "Two long parallel conductors carry currents of 5 A and 3 A respectively. They are separated by a distance of 5 cm. Find the force per unit length between them.",
    given: "I₁ = 5 A, I₂ = 3 A, d = 5 cm = 0.05 m, μ₀ = 4π × 10⁻⁷ T·m/A",
    find: "Force per unit length F/L",
    hint: "For two parallel conductors, F/L = μ₀I₁I₂/(2πd).",
    solution: {
      formula: "F/L = μ₀I₁I₂ / (2πd)",
      formulaExplain: "Parallel currents attract and anti-parallel currents repel. The force per unit length depends on both currents and their separation.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "F/L = (4π × 10⁻⁷)(5)(3) / (2π × 0.05)" },
        { label: "Step 2", text: "Cancel π and simplify", math: "F/L = (4 × 15 × 10⁻⁷) / (2 × 0.05)" },
        { label: "Step 3", text: "Calculate", math: "F/L = (60 × 10⁻⁷) / 0.1 = 6 × 10⁻⁵ N/m" }
      ],
      answer: "F/L = 6 × 10⁻⁵ N/m",
      explanation: "The force is attractive (since currents are in the same direction) with magnitude 6 × 10⁻⁵ N per metre of conductor length."
    }
  },
  {
    id: 16,
    subject: "physics",
    topic: "Magnetic Effects",
    difficulty: "hard",
    question: "A rectangular coil of 100 turns, area 0.05 m², carrying a current of 3 A is placed in a uniform magnetic field of 0.2 T. Find the torque on the coil when the plane of the coil is parallel to the magnetic field.",
    given: "N = 100, A = 0.05 m², I = 3 A, B = 0.2 T, θ = 90° (plane parallel to B means normal perpendicular to B)",
    find: "Torque τ on the coil",
    hint: "τ = NIAB sinθ where θ is the angle between the normal to the coil and the magnetic field.",
    solution: {
      formula: "τ = NIAB sinθ",
      formulaExplain: "A current-carrying loop in a magnetic field experiences a torque that tends to align the magnetic moment with the field.",
      steps: [
        { label: "Step 1", text: "Identify the angle: plane parallel to B means normal is perpendicular to B", math: "θ = 90° (angle between area vector and B)" },
        { label: "Step 2", text: "Substitute values", math: "τ = (100)(3)(0.05)(0.2) sin 90°" },
        { label: "Step 3", text: "Calculate", math: "τ = 100 × 3 × 0.05 × 0.2 × 1 = 0.3 N·m" }
      ],
      answer: "τ = 0.3 N·m",
      explanation: "The torque is maximum (0.3 N·m) when the plane of the coil is parallel to the field. It would be zero when the plane is perpendicular to the field."
    }
  },
  // --- EMI and AC ---
  {
    id: 17,
    subject: "physics",
    topic: "EMI and AC",
    difficulty: "easy",
    question: "A conductor of length 0.5 m moves with a velocity of 4 m/s perpendicular to a magnetic field of 0.5 T. Find the EMF induced across its ends.",
    given: "l = 0.5 m, v = 4 m/s, B = 0.5 T (all mutually perpendicular)",
    find: "Induced EMF ε",
    hint: "Use ε = Blv for a conductor moving perpendicular to a magnetic field.",
    solution: {
      formula: "ε = Blv",
      formulaExplain: "When a conductor cuts magnetic field lines, an EMF is induced across its ends proportional to the field, length, and velocity.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "ε = 0.5 × 0.5 × 4" },
        { label: "Step 2", text: "Calculate", math: "ε = 1.0 V" }
      ],
      answer: "ε = 1.0 V",
      explanation: "An EMF of 1.0 V is induced. This is the principle behind electric generators and dynamos."
    }
  },
  {
    id: 18,
    subject: "physics",
    topic: "EMI and AC",
    difficulty: "medium",
    question: "A solenoid has 500 turns, length 0.5 m, and cross-sectional area 0.02 m². Calculate its self-inductance.",
    given: "N = 500, l = 0.5 m, A = 0.02 m², μ₀ = 4π × 10⁻⁷ T·m/A",
    find: "Self-inductance L",
    hint: "For a solenoid, L = μ₀N²A/l.",
    solution: {
      formula: "L = μ₀N²A / l",
      formulaExplain: "Self-inductance depends on the geometry of the coil and the number of turns squared.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "L = (4π × 10⁻⁷)(500)²(0.02) / 0.5" },
        { label: "Step 2", text: "Calculate N² and simplify", math: "L = (4π × 10⁻⁷)(250000)(0.02) / 0.5" },
        { label: "Step 3", text: "Numerator calculation", math: "L = (4π × 10⁻⁷)(5000) / 0.5" },
        { label: "Step 4", text: "Final calculation", math: "L = 4π × 10⁻³ H ≈ 12.57 mH" }
      ],
      answer: "L ≈ 12.57 mH",
      explanation: "The self-inductance is approximately 12.6 mH. This means a current change of 1 A/s would induce 12.57 mV across the solenoid."
    }
  },
  {
    id: 19,
    subject: "physics",
    topic: "EMI and AC",
    difficulty: "medium",
    question: "In a series LCR circuit, R = 100 Ω, XL = 150 Ω, and XC = 50 Ω. Find the impedance of the circuit.",
    given: "R = 100 Ω, XL = 150 Ω, XC = 50 Ω",
    find: "Impedance Z",
    hint: "Z = √(R² + (XL − XC)²). The net reactance is XL − XC.",
    solution: {
      formula: "Z = √(R² + (XL − XC)²)",
      formulaExplain: "Impedance is the total opposition to current in an AC circuit, combining resistance and reactance.",
      steps: [
        { label: "Step 1", text: "Find net reactance", math: "XL − XC = 150 − 50 = 100 Ω" },
        { label: "Step 2", text: "Substitute into impedance formula", math: "Z = √(100² + 100²)" },
        { label: "Step 3", text: "Calculate", math: "Z = √(10000 + 10000) = √20000 = 141.4 Ω" }
      ],
      answer: "Z = 141.4 Ω",
      explanation: "The impedance is 141.4 Ω. Since XL > XC, the circuit is inductive and the current lags behind the voltage."
    }
  },
  {
    id: 20,
    subject: "physics",
    topic: "EMI and AC",
    difficulty: "hard",
    question: "An LCR series circuit has inductance L = 0.1 H and capacitance C = 10 μF. Find the resonance frequency of the circuit.",
    given: "L = 0.1 H, C = 10 μF = 10⁻⁵ F",
    find: "Resonance frequency f₀",
    hint: "At resonance, XL = XC, which gives f₀ = 1/(2π√(LC)).",
    solution: {
      formula: "f₀ = 1 / (2π√(LC))",
      formulaExplain: "At resonance, the inductive and capacitive reactances cancel, and the impedance is minimum (equal to R).",
      steps: [
        { label: "Step 1", text: "Calculate LC", math: "LC = 0.1 × 10⁻⁵ = 10⁻⁶" },
        { label: "Step 2", text: "Take square root", math: "√(LC) = √(10⁻⁶) = 10⁻³" },
        { label: "Step 3", text: "Calculate frequency", math: "f₀ = 1/(2π × 10⁻³) = 1000/(2π)" },
        { label: "Step 4", text: "Final value", math: "f₀ ≈ 159.2 Hz" }
      ],
      answer: "f₀ ≈ 159.2 Hz",
      explanation: "At 159.2 Hz, the circuit resonates with maximum current. This is the principle behind radio tuning circuits."
    }
  },
  {
    id: 21,
    subject: "physics",
    topic: "EMI and AC",
    difficulty: "easy",
    question: "A transformer has 1000 turns in the primary coil and 200 turns in the secondary coil. If the primary voltage is 220 V, find the secondary voltage.",
    given: "Np = 1000, Ns = 200, Vp = 220 V",
    find: "Secondary voltage Vs",
    hint: "For an ideal transformer: Vs/Vp = Ns/Np.",
    solution: {
      formula: "Vs/Vp = Ns/Np",
      formulaExplain: "A transformer changes voltage based on the turns ratio. Fewer secondary turns means step-down.",
      steps: [
        { label: "Step 1", text: "Write the transformer equation", math: "Vs = Vp × (Ns/Np)" },
        { label: "Step 2", text: "Substitute values", math: "Vs = 220 × (200/1000)" },
        { label: "Step 3", text: "Calculate", math: "Vs = 220 × 0.2 = 44 V" }
      ],
      answer: "Vs = 44 V",
      explanation: "This is a step-down transformer. The voltage is reduced from 220 V to 44 V. The output power equals input power (ideal case)."
    }
  },
  // --- Optics ---
  {
    id: 22,
    subject: "physics",
    topic: "Optics",
    difficulty: "easy",
    question: "An object is placed 30 cm from a concave mirror. The image is formed at 60 cm from the mirror on the same side as the object. Find the focal length and magnification.",
    given: "u = −30 cm, v = −60 cm (both on the same side, so negative by sign convention)",
    find: "Focal length f and magnification m",
    hint: "Use mirror formula: 1/f = 1/v + 1/u. Magnification m = −v/u.",
    solution: {
      formula: "1/f = 1/v + 1/u, m = −v/u",
      formulaExplain: "The mirror formula relates object distance, image distance, and focal length. Magnification gives image size relative to object.",
      steps: [
        { label: "Step 1", text: "Apply mirror formula", math: "1/f = 1/(−60) + 1/(−30)" },
        { label: "Step 2", text: "Find common denominator", math: "1/f = −1/60 − 2/60 = −3/60 = −1/20" },
        { label: "Step 3", text: "Find f", math: "f = −20 cm (concave mirror)" },
        { label: "Step 4", text: "Calculate magnification", math: "m = −v/u = −(−60)/(−30) = −2" }
      ],
      answer: "f = −20 cm, m = −2 (real, inverted, magnified)",
      explanation: "The negative focal length confirms it's a concave mirror. m = −2 means the image is real, inverted, and twice the size of the object."
    }
  },
  {
    id: 23,
    subject: "physics",
    topic: "Optics",
    difficulty: "medium",
    question: "A biconvex lens has radii of curvature 20 cm and 30 cm. If the refractive index of glass is 1.5, find its focal length using the lens maker's equation.",
    given: "R₁ = +20 cm (convex surface), R₂ = −30 cm (convex on other side), μ = 1.5",
    find: "Focal length f",
    hint: "Lens maker's equation: 1/f = (μ − 1)(1/R₁ − 1/R₂).",
    solution: {
      formula: "1/f = (μ − 1)(1/R₁ − 1/R₂)",
      formulaExplain: "The lens maker's equation relates focal length to refractive index and radii of curvature of the two surfaces.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "1/f = (1.5 − 1)(1/20 − 1/(−30))" },
        { label: "Step 2", text: "Simplify the bracket", math: "1/f = 0.5 × (1/20 + 1/30)" },
        { label: "Step 3", text: "Find common denominator", math: "1/f = 0.5 × (3/60 + 2/60) = 0.5 × 5/60" },
        { label: "Step 4", text: "Calculate", math: "1/f = 2.5/60 = 1/24" },
        { label: "Step 5", text: "Find f", math: "f = +24 cm" }
      ],
      answer: "f = +24 cm (converging lens)",
      explanation: "The positive focal length confirms it's a converging (convex) lens. Parallel rays will converge at 24 cm from the lens."
    }
  },
  {
    id: 24,
    subject: "physics",
    topic: "Optics",
    difficulty: "easy",
    question: "A thin prism has an angle of 6° and refractive index 1.5. Find the angle of deviation.",
    given: "A = 6°, μ = 1.5",
    find: "Angle of deviation δ",
    hint: "For a thin prism, δ = (μ − 1)A.",
    solution: {
      formula: "δ = (μ − 1)A",
      formulaExplain: "For thin prisms (small apex angle), the deviation is approximately proportional to the apex angle.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "δ = (1.5 − 1) × 6°" },
        { label: "Step 2", text: "Calculate", math: "δ = 0.5 × 6° = 3°" }
      ],
      answer: "δ = 3°",
      explanation: "The light ray deviates by 3° after passing through the thin prism. This small deviation is characteristic of thin prisms."
    }
  },
  {
    id: 25,
    subject: "physics",
    topic: "Optics",
    difficulty: "hard",
    question: "In Young's double slit experiment, the slit separation is 0.5 mm, the screen is at a distance of 1.5 m from the slits, and the wavelength of light used is 600 nm. Find the fringe width.",
    given: "d = 0.5 mm = 5 × 10⁻⁴ m, D = 1.5 m, λ = 600 nm = 6 × 10⁻⁷ m",
    find: "Fringe width β",
    hint: "Fringe width β = λD/d.",
    solution: {
      formula: "β = λD / d",
      formulaExplain: "Fringe width is the distance between two consecutive bright (or dark) fringes in the interference pattern.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "β = (6 × 10⁻⁷)(1.5) / (5 × 10⁻⁴)" },
        { label: "Step 2", text: "Calculate numerator", math: "β = 9 × 10⁻⁷ / 5 × 10⁻⁴" },
        { label: "Step 3", text: "Calculate", math: "β = 1.8 × 10⁻³ m = 1.8 mm" }
      ],
      answer: "β = 1.8 mm",
      explanation: "The fringe width is 1.8 mm. Narrower slit separation or longer screen distance would increase the fringe spacing."
    }
  },
  // --- Modern Physics ---
  {
    id: 26,
    subject: "physics",
    topic: "Modern Physics",
    difficulty: "easy",
    question: "Light of wavelength 4000 Å falls on a metal surface with work function 2.2 eV. Find the maximum kinetic energy of the emitted photoelectrons. (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)",
    given: "λ = 4000 Å = 4 × 10⁻⁷ m, φ = 2.2 eV, h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s",
    find: "Maximum kinetic energy KEmax",
    hint: "Use Einstein's photoelectric equation: KEmax = hf − φ = hc/λ − φ.",
    solution: {
      formula: "KEmax = hc/λ − φ",
      formulaExplain: "Einstein's photoelectric equation: the maximum KE of photoelectrons equals the photon energy minus the work function.",
      steps: [
        { label: "Step 1", text: "Calculate photon energy in joules", math: "E = hc/λ = (6.63 × 10⁻³⁴)(3 × 10⁸)/(4 × 10⁻⁷) = 4.97 × 10⁻¹⁹ J" },
        { label: "Step 2", text: "Convert to eV", math: "E = 4.97 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 3.11 eV" },
        { label: "Step 3", text: "Apply photoelectric equation", math: "KEmax = 3.11 − 2.2 = 0.91 eV" }
      ],
      answer: "KEmax = 0.91 eV",
      explanation: "The photon energy (3.11 eV) exceeds the work function (2.2 eV), so photoelectrons are emitted with maximum KE of 0.91 eV."
    }
  },
  {
    id: 27,
    subject: "physics",
    topic: "Modern Physics",
    difficulty: "easy",
    question: "Find the de Broglie wavelength of an electron moving with a velocity of 10⁶ m/s. (Mass of electron = 9.1 × 10⁻³¹ kg)",
    given: "v = 10⁶ m/s, m = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J·s",
    find: "de Broglie wavelength λ",
    hint: "λ = h/mv. This wavelength is associated with the wave nature of matter.",
    solution: {
      formula: "λ = h / (mv)",
      formulaExplain: "Every moving particle has an associated wavelength inversely proportional to its momentum.",
      steps: [
        { label: "Step 1", text: "Calculate momentum", math: "p = mv = (9.1 × 10⁻³¹)(10⁶) = 9.1 × 10⁻²⁵ kg·m/s" },
        { label: "Step 2", text: "Calculate wavelength", math: "λ = (6.63 × 10⁻³⁴) / (9.1 × 10⁻²⁵)" },
        { label: "Step 3", text: "Final value", math: "λ = 7.29 × 10⁻¹⁰ m = 7.29 Å = 0.729 nm" }
      ],
      answer: "λ = 7.29 Å (0.729 nm)",
      explanation: "The de Broglie wavelength is comparable to atomic spacing, which is why electron diffraction can be observed through crystals."
    }
  },
  {
    id: 28,
    subject: "physics",
    topic: "Modern Physics",
    difficulty: "medium",
    question: "For a hydrogen atom, find (a) the radius of the third Bohr orbit, and (b) the energy of the electron in the third orbit. (r₁ = 0.529 Å, E₁ = −13.6 eV)",
    given: "n = 3, Z = 1 (hydrogen), r₁ = 0.529 Å, E₁ = −13.6 eV",
    find: "Radius r₃ and energy E₃",
    hint: "rn = n²r₁/Z and En = E₁Z²/n².",
    solution: {
      formula: "rn = n²r₁/Z, En = E₁Z²/n²",
      formulaExplain: "In Bohr's model, orbit radius increases as n² and energy decreases (becomes less negative) as 1/n².",
      steps: [
        { label: "Step 1", text: "Calculate radius of n = 3 orbit", math: "r₃ = 3² × 0.529/1 = 9 × 0.529 = 4.761 Å" },
        { label: "Step 2", text: "Calculate energy of n = 3 orbit", math: "E₃ = −13.6 × 1²/3² = −13.6/9 = −1.51 eV" }
      ],
      answer: "r₃ = 4.76 Å, E₃ = −1.51 eV",
      explanation: "The third orbit is about 9 times the radius of the first orbit, and the electron has much less binding energy (−1.51 eV vs −13.6 eV)."
    }
  },
  {
    id: 29,
    subject: "physics",
    topic: "Modern Physics",
    difficulty: "hard",
    question: "A radioactive substance has a half-life of 10 days. If the initial activity is 1000 disintegrations per second, find (a) the activity after 30 days, and (b) the time when the activity drops to 125 disintegrations per second.",
    given: "t₁/₂ = 10 days, A₀ = 1000 dps",
    find: "Activity after 30 days and time for activity to reach 125 dps",
    hint: "After n half-lives, A = A₀/2ⁿ. Or use A = A₀e^(−λt) where λ = 0.693/t₁/₂.",
    solution: {
      formula: "A = A₀(1/2)^(t/t₁/₂) or A = A₀e^(−λt)",
      formulaExplain: "Radioactive decay follows first-order kinetics. The activity halves after each half-life.",
      steps: [
        { label: "Step 1", text: "Part (a): Number of half-lives in 30 days", math: "n = 30/10 = 3 half-lives" },
        { label: "Step 2", text: "Calculate remaining activity", math: "A = 1000 × (1/2)³ = 1000/8 = 125 dps" },
        { label: "Step 3", text: "Part (b): Activity drops to 125 dps", math: "125 = 1000 × (1/2)^(t/10)" },
        { label: "Step 4", text: "Solve for t", math: "1/8 = (1/2)^(t/10) → 3 = t/10 → t = 30 days" }
      ],
      answer: "(a) A = 125 dps after 30 days; (b) t = 30 days for activity to drop to 125 dps",
      explanation: "Both parts give the same result: after 3 half-lives (30 days), activity drops to 1/8 of the original value."
    }
  },
  {
    id: 30,
    subject: "physics",
    topic: "Modern Physics",
    difficulty: "medium",
    question: "In a photoelectric experiment, the stopping potential is found to be 0.91 V when light of wavelength 4000 Å is used. Find (a) the maximum kinetic energy of photoelectrons and (b) the work function of the metal.",
    given: "V₀ = 0.91 V, λ = 4000 Å = 4 × 10⁻⁷ m, h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s",
    find: "Maximum KE and work function φ",
    hint: "KEmax = eV₀. Use hc/λ = KEmax + φ.",
    solution: {
      formula: "KEmax = eV₀, φ = hc/λ − KEmax",
      formulaExplain: "The stopping potential gives the maximum KE directly. The work function is the minimum energy needed to remove an electron.",
      steps: [
        { label: "Step 1", text: "Find maximum KE from stopping potential", math: "KEmax = eV₀ = 1.6 × 10⁻¹⁹ × 0.91 = 1.456 × 10⁻¹⁹ J = 0.91 eV" },
        { label: "Step 2", text: "Calculate photon energy", math: "E = hc/λ = (6.63 × 10⁻³⁴)(3 × 10⁸)/(4 × 10⁻⁷) = 4.97 × 10⁻¹⁹ J = 3.11 eV" },
        { label: "Step 3", text: "Find work function", math: "φ = E − KEmax = 3.11 − 0.91 = 2.20 eV" }
      ],
      answer: "KEmax = 0.91 eV, φ = 2.20 eV",
      explanation: "The work function of the metal is 2.20 eV. Photons with energy above this threshold can eject electrons."
    }
  },

  // ==================== CHEMISTRY NUMERICALS ====================
  // --- Solutions ---
  {
    id: 31,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "easy",
    question: "Calculate the molarity of a solution prepared by dissolving 40 g of NaOH in enough water to make 500 mL of solution. (Molar mass of NaOH = 40 g/mol)",
    given: "Mass = 40 g, Molar mass = 40 g/mol, Volume = 500 mL = 0.5 L",
    find: "Molarity (M)",
    hint: "Molarity = moles of solute / volume of solution in litres.",
    solution: {
      formula: "M = n / V(L)",
      formulaExplain: "Molarity is the number of moles of solute per litre of solution.",
      steps: [
        { label: "Step 1", text: "Calculate moles of NaOH", math: "n = mass/molar mass = 40/40 = 1 mol" },
        { label: "Step 2", text: "Calculate molarity", math: "M = 1/0.5 = 2 M" }
      ],
      answer: "M = 2 mol/L (2 M)",
      explanation: "The solution has a concentration of 2 M, meaning 2 moles of NaOH are present per litre of solution."
    }
  },
  {
    id: 32,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "medium",
    question: "A 1 M H₂SO₄ solution has a density of 1.06 g/mL. Convert this to molality. (Molar mass of H₂SO₄ = 98 g/mol)",
    given: "M = 1 mol/L, density = 1.06 g/mL, Molar mass = 98 g/mol",
    find: "Molality (m)",
    hint: "Molality = moles of solute / mass of solvent in kg. First find mass of solution, then mass of solvent.",
    solution: {
      formula: "m = n(solute) / mass(solvent in kg)",
      formulaExplain: "Molality differs from molarity in that it uses mass of solvent instead of volume of solution.",
      steps: [
        { label: "Step 1", text: "Assume 1 L of solution", math: "Moles of H₂SO₄ = 1 mol" },
        { label: "Step 2", text: "Mass of solution", math: "Mass = density × volume = 1.06 × 1000 = 1060 g" },
        { label: "Step 3", text: "Mass of H₂SO₄", math: "Mass = 1 × 98 = 98 g" },
        { label: "Step 4", text: "Mass of water (solvent)", math: "Mass = 1060 − 98 = 962 g = 0.962 kg" },
        { label: "Step 5", text: "Calculate molality", math: "m = 1/0.962 = 1.04 mol/kg" }
      ],
      answer: "m = 1.04 mol/kg",
      explanation: "The molality (1.04 m) is slightly higher than molarity (1 M) because the solution is denser than pure water."
    }
  },
  {
    id: 33,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "medium",
    question: "Calculate the osmotic pressure of a 0.1 M glucose solution at 300 K. (R = 0.0821 L·atm/(mol·K))",
    given: "C = 0.1 M, T = 300 K, R = 0.0821 L·atm/(mol·K)",
    find: "Osmotic pressure π",
    hint: "Use π = CRT. Glucose is a non-electrolyte (i = 1).",
    solution: {
      formula: "π = CRT",
      formulaExplain: "Osmotic pressure is the pressure needed to stop osmosis. It depends on concentration and temperature.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "π = 0.1 × 0.0821 × 300" },
        { label: "Step 2", text: "Calculate", math: "π = 0.1 × 24.63 = 2.463 atm" }
      ],
      answer: "π = 2.46 atm",
      explanation: "An osmotic pressure of 2.46 atm would need to be applied to prevent pure water from flowing into this glucose solution."
    }
  },
  {
    id: 34,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "easy",
    question: "Find the boiling point elevation when 1.5 mol of glucose is dissolved in 1 kg of water. (Kb for water = 0.52 K·kg/mol)",
    given: "m = 1.5 mol/kg, Kb = 0.52 K·kg/mol, i = 1 (glucose is non-electrolyte)",
    find: "Boiling point elevation ΔTb and new boiling point",
    hint: "ΔTb = i × Kb × m. Boiling point of pure water = 100°C.",
    solution: {
      formula: "ΔTb = i × Kb × m",
      formulaExplain: "Adding a non-volatile solute raises the boiling point. The elevation depends on the molal concentration.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "ΔTb = 1 × 0.52 × 1.5" },
        { label: "Step 2", text: "Calculate elevation", math: "ΔTb = 0.78 K = 0.78°C" },
        { label: "Step 3", text: "New boiling point", math: "Tb = 100 + 0.78 = 100.78°C" }
      ],
      answer: "ΔTb = 0.78°C, Boiling point = 100.78°C",
      explanation: "The boiling point is elevated by 0.78°C. This colligative property depends only on the number of solute particles, not their identity."
    }
  },
  {
    id: 35,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "easy",
    question: "Calculate the freezing point depression when 2.0 mol of urea is dissolved in 1 kg of water. (Kf for water = 1.86 K·kg/mol)",
    given: "m = 2.0 mol/kg, Kf = 1.86 K·kg/mol, i = 1 (urea is non-electrolyte)",
    find: "Freezing point depression ΔTf and new freezing point",
    hint: "ΔTf = i × Kf × m. Freezing point of pure water = 0°C.",
    solution: {
      formula: "ΔTf = i × Kf × m",
      formulaExplain: "Adding a non-volatile solute lowers the freezing point. The depression depends on the molal concentration.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "ΔTf = 1 × 1.86 × 2.0" },
        { label: "Step 2", text: "Calculate depression", math: "ΔTf = 3.72 K = 3.72°C" },
        { label: "Step 3", text: "New freezing point", math: "Tf = 0 − 3.72 = −3.72°C" }
      ],
      answer: "ΔTf = 3.72°C, Freezing point = −3.72°C",
      explanation: "The freezing point drops to −3.72°C. This is why salt is spread on icy roads — it lowers the freezing point of water."
    }
  },
  {
    id: 36,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "easy",
    question: "How many millilitres of 6 M HCl are needed to prepare 600 mL of 1 M HCl?",
    given: "M₁ = 6 M, M₂ = 1 M, V₂ = 600 mL",
    find: "Volume of concentrated solution V₁",
    hint: "Use dilution formula: M₁V₁ = M₂V₂.",
    solution: {
      formula: "M₁V₁ = M₂V₂",
      formulaExplain: "In dilution, the number of moles of solute remains constant. Only the volume changes.",
      steps: [
        { label: "Step 1", text: "Rearrange to solve for V₁", math: "V₁ = M₂V₂/M₁" },
        { label: "Step 2", text: "Substitute values", math: "V₁ = (1 × 600)/6" },
        { label: "Step 3", text: "Calculate", math: "V₁ = 100 mL" }
      ],
      answer: "V₁ = 100 mL",
      explanation: "100 mL of 6 M HCl diluted to 600 mL gives 1 M HCl. The number of moles (0.6 mol) remains the same."
    }
  },
  // --- Electrochemistry ---
  {
    id: 37,
    subject: "chemistry",
    topic: "Electrochemistry",
    difficulty: "hard",
    question: "For the Daniell cell Zn|Zn²⁺(0.1 M)||Cu²⁺(1 M)|Cu, calculate the cell EMF using the Nernst equation. (E°cell = 1.10 V)",
    given: "E°cell = 1.10 V, [Zn²⁺] = 0.1 M, [Cu²⁺] = 1 M, n = 2, T = 298 K",
    find: "Cell EMF E",
    hint: "E = E° − (0.0592/n)logQ, where Q = [Zn²⁺]/[Cu²⁺].",
    solution: {
      formula: "E = E° − (0.0592/n)logQ",
      formulaExplain: "The Nernst equation accounts for non-standard concentrations. At 25°C, the factor simplifies to 0.0592/n.",
      steps: [
        { label: "Step 1", text: "Write the cell reaction", math: "Zn + Cu²⁺ → Zn²⁺ + Cu" },
        { label: "Step 2", text: "Write the reaction quotient", math: "Q = [Zn²⁺]/[Cu²⁺] = 0.1/1 = 0.1" },
        { label: "Step 3", text: "Apply Nernst equation", math: "E = 1.10 − (0.0592/2)log(0.1)" },
        { label: "Step 4", text: "Calculate log term", math: "E = 1.10 − 0.0296 × (−1)" },
        { label: "Step 5", text: "Final calculation", math: "E = 1.10 + 0.0296 = 1.13 V" }
      ],
      answer: "E = 1.13 V",
      explanation: "The cell EMF (1.13 V) is slightly higher than the standard value (1.10 V) because the low [Zn²⁺] shifts the equilibrium forward."
    }
  },
  {
    id: 38,
    subject: "chemistry",
    topic: "Electrochemistry",
    difficulty: "medium",
    question: "A current of 2 A is passed through a CuSO₄ solution for 30 minutes. Calculate the mass of copper deposited at the cathode. (Molar mass of Cu = 63.5 g/mol, F = 96500 C/mol)",
    given: "I = 2 A, t = 30 min = 1800 s, M = 63.5 g/mol, n = 2 (Cu²⁺ + 2e⁻ → Cu), F = 96500 C/mol",
    find: "Mass of copper deposited",
    hint: "Use Faraday's first law: m = MIt/(nF).",
    solution: {
      formula: "m = MIt / (nF)",
      formulaExplain: "Faraday's law relates the mass deposited to the charge passed through the electrolyte.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "m = (63.5 × 2 × 1800)/(2 × 96500)" },
        { label: "Step 2", text: "Calculate numerator and denominator", math: "m = 228600/193000" },
        { label: "Step 3", text: "Final calculation", math: "m = 1.185 g" }
      ],
      answer: "m = 1.19 g",
      explanation: "1.19 g of copper is deposited. This corresponds to 0.037 mol of Cu, requiring 0.074 mol of electrons."
    }
  },
  {
    id: 39,
    subject: "chemistry",
    topic: "Electrochemistry",
    difficulty: "easy",
    question: "Calculate the standard EMF of a Daniell cell. (E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = −0.76 V)",
    given: "E°cathode = +0.34 V, E°anode = −0.76 V",
    find: "Standard cell EMF E°cell",
    hint: "E°cell = E°cathode − E°anode (reduction potentials).",
    solution: {
      formula: "E°cell = E°cathode − E°anode",
      formulaExplain: "The standard cell EMF is the difference between standard reduction potentials of cathode and anode.",
      steps: [
        { label: "Step 1", text: "Identify cathode and anode", math: "Cu²⁺/Cu is cathode (higher E°), Zn²⁺/Zn is anode (lower E°)" },
        { label: "Step 2", text: "Calculate E°cell", math: "E°cell = 0.34 − (−0.76) = 0.34 + 0.76 = 1.10 V" }
      ],
      answer: "E°cell = 1.10 V",
      explanation: "The Daniell cell has a standard EMF of 1.10 V. Zinc is oxidized (anode) and copper is reduced (cathode)."
    }
  },
  {
    id: 40,
    subject: "chemistry",
    topic: "Electrochemistry",
    difficulty: "medium",
    question: "A conductivity cell has a resistance of 50 Ω when filled with 0.1 M KCl solution. If the cell constant is 0.5 cm⁻¹, find the conductivity of the solution.",
    given: "R = 50 Ω, Cell constant (l/A) = 0.5 cm⁻¹",
    find: "Conductivity κ",
    hint: "κ = (Cell constant) / R.",
    solution: {
      formula: "κ = (l/A) / R",
      formulaExplain: "Conductivity is the reciprocal of resistivity. It is calculated from the cell constant and measured resistance.",
      steps: [
        { label: "Step 1", text: "Apply the formula", math: "κ = 0.5/50" },
        { label: "Step 2", text: "Calculate", math: "κ = 0.01 S/cm" },
        { label: "Step 3", text: "Convert to SI units", math: "κ = 0.01 × 100 = 1 S/m" }
      ],
      answer: "κ = 0.01 S/cm = 1 S/m",
      explanation: "The conductivity of 0.1 M KCl is 1 S/m. KCl is commonly used as a calibration standard for conductivity measurements."
    }
  },
  {
    id: 41,
    subject: "chemistry",
    topic: "Electrochemistry",
    difficulty: "hard",
    question: "The conductivity of a 0.1 mol/L NaCl solution is 0.004 S/cm. Calculate its molar conductivity.",
    given: "κ = 0.004 S/cm, C = 0.1 mol/L",
    find: "Molar conductivity Λm",
    hint: "Λm = (κ × 1000)/C, where κ is in S/cm and C is in mol/L.",
    solution: {
      formula: "Λm = (κ × 1000) / C",
      formulaExplain: "Molar conductivity is the conductivity per unit concentration. It increases with dilution for strong electrolytes.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "Λm = (0.004 × 1000)/0.1" },
        { label: "Step 2", text: "Calculate", math: "Λm = 4/0.1 = 40 S·cm²/mol" }
      ],
      answer: "Λm = 40 S·cm²/mol",
      explanation: "The molar conductivity of 0.1 M NaCl is 40 S·cm²/mol. This value would increase at lower concentrations due to decreased interionic interactions."
    }
  },
  {
    id: 42,
    subject: "chemistry",
    topic: "Electrochemistry",
    difficulty: "medium",
    question: "How long does it take to deposit 4 g of silver from an AgNO₃ solution using a current of 3 A? (Molar mass of Ag = 108 g/mol, F = 96500 C/mol)",
    given: "m = 4 g, I = 3 A, M = 108 g/mol, n = 1 (Ag⁺ + e⁻ → Ag), F = 96500 C/mol",
    find: "Time t",
    hint: "Rearrange Faraday's law: t = mF/(MI).",
    solution: {
      formula: "t = mF / (MI)",
      formulaExplain: "From Faraday's first law m = MIt/(nF), we can solve for time.",
      steps: [
        { label: "Step 1", text: "Rearrange Faraday's law", math: "t = mF/(MI)" },
        { label: "Step 2", text: "Substitute values", math: "t = (4 × 96500)/(108 × 3)" },
        { label: "Step 3", text: "Calculate", math: "t = 386000/324 = 1191.4 s" },
        { label: "Step 4", text: "Convert to minutes", math: "t ≈ 19.86 min ≈ 20 min" }
      ],
      answer: "t ≈ 1191 s ≈ 20 minutes",
      explanation: "It takes approximately 20 minutes to deposit 4 g of silver at 3 A current."
    }
  },
  // --- Chemical Kinetics ---
  {
    id: 43,
    subject: "chemistry",
    topic: "Chemical Kinetics",
    difficulty: "easy",
    question: "The half-life of a first-order reaction is 10 minutes. Calculate the rate constant.",
    given: "t₁/₂ = 10 min",
    find: "Rate constant k",
    hint: "For first-order reactions: k = 0.693/t₁/₂.",
    solution: {
      formula: "k = 0.693 / t₁/₂",
      formulaExplain: "For first-order reactions, the half-life is inversely proportional to the rate constant.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "k = 0.693/10" },
        { label: "Step 2", text: "Calculate", math: "k = 0.0693 min⁻¹" }
      ],
      answer: "k = 0.0693 min⁻¹ = 6.93 × 10⁻² min⁻¹",
      explanation: "The rate constant is 0.0693 per minute. Note that for first-order reactions, the unit of k is time⁻¹."
    }
  },
  {
    id: 44,
    subject: "chemistry",
    topic: "Chemical Kinetics",
    difficulty: "easy",
    question: "A first-order reaction has a rate constant of 2 × 10⁻³ s⁻¹. Calculate its half-life.",
    given: "k = 2 × 10⁻³ s⁻¹",
    find: "Half-life t₁/₂",
    hint: "t₁/₂ = 0.693/k for first-order reactions.",
    solution: {
      formula: "t₁/₂ = 0.693 / k",
      formulaExplain: "The half-life of a first-order reaction is constant and independent of initial concentration.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "t₁/₂ = 0.693/(2 × 10⁻³)" },
        { label: "Step 2", text: "Calculate", math: "t₁/₂ = 346.5 s" },
        { label: "Step 3", text: "Convert to minutes", math: "t₁/₂ ≈ 5.78 min" }
      ],
      answer: "t₁/₂ = 346.5 s ≈ 5.78 min",
      explanation: "The half-life is 346.5 seconds. After each half-life, the concentration of reactant decreases by half."
    }
  },
  {
    id: 45,
    subject: "chemistry",
    topic: "Chemical Kinetics",
    difficulty: "hard",
    question: "The rate constant of a reaction is 1.5 × 10⁻³ s⁻¹ at 300 K. If the activation energy is 50 kJ/mol, find the rate constant at 310 K. (R = 8.314 J/(mol·K))",
    given: "k₁ = 1.5 × 10⁻³ s⁻¹ at T₁ = 300 K, Ea = 50 kJ/mol = 50000 J/mol, T₂ = 310 K",
    find: "Rate constant k₂ at 310 K",
    hint: "Use the two-temperature form of the Arrhenius equation: ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂).",
    solution: {
      formula: "ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂)",
      formulaExplain: "The Arrhenius equation shows how rate constant increases with temperature. Higher temperature means more molecules have energy ≥ Ea.",
      steps: [
        { label: "Step 1", text: "Calculate temperature term", math: "1/T₁ − 1/T₂ = 1/300 − 1/310 = 0.003333 − 0.003226 = 1.075 × 10⁻⁴ K⁻¹" },
        { label: "Step 2", text: "Calculate Ea/R", math: "Ea/R = 50000/8.314 = 6015.2" },
        { label: "Step 3", text: "Calculate ln(k₂/k₁)", math: "ln(k₂/k₁) = 6015.2 × 1.075 × 10⁻⁴ = 0.647" },
        { label: "Step 4", text: "Find k₂/k₁", math: "k₂/k₁ = e^0.647 = 1.91" },
        { label: "Step 5", text: "Calculate k₂", math: "k₂ = 1.91 × 1.5 × 10⁻³ = 2.87 × 10⁻³ s⁻¹" }
      ],
      answer: "k₂ = 2.87 × 10⁻³ s⁻¹",
      explanation: "A 10 K increase nearly doubles the rate constant (1.91 times). This demonstrates the strong temperature dependence of reaction rates."
    }
  },
  {
    id: 46,
    subject: "chemistry",
    topic: "Chemical Kinetics",
    difficulty: "medium",
    question: "For a reaction A → Products, the following initial rate data were obtained:\n[A] = 0.1 M → Rate = 0.02 M/s\n[A] = 0.2 M → Rate = 0.08 M/s\nDetermine the order of reaction and the rate constant.",
    given: "Experimental data as shown",
    find: "Order n and rate constant k",
    hint: "Compare rates when concentration doubles. If rate quadruples, order is 2.",
    solution: {
      formula: "Rate = k[A]ⁿ",
      formulaExplain: "The order of reaction determines how rate depends on concentration. We find it by comparing experiments.",
      steps: [
        { label: "Step 1", text: "Set up ratio of rates", math: "Rate₂/Rate₁ = (k[A]₂ⁿ)/(k[A]₁ⁿ) = ([A]₂/[A]₁)ⁿ" },
        { label: "Step 2", text: "Substitute values", math: "0.08/0.02 = (0.2/0.1)ⁿ → 4 = 2ⁿ" },
        { label: "Step 3", text: "Solve for n", math: "n = 2 (second order)" },
        { label: "Step 4", text: "Calculate rate constant", math: "k = Rate/[A]² = 0.02/(0.1)² = 0.02/0.01 = 2 M⁻¹s⁻¹" }
      ],
      answer: "Order = 2, k = 2 M⁻¹s⁻¹",
      explanation: "The reaction is second order. When concentration doubles, rate quadruples (2² = 4). The rate constant is 2 M⁻¹s⁻¹."
    }
  },
  {
    id: 47,
    subject: "chemistry",
    topic: "Chemical Kinetics",
    difficulty: "medium",
    question: "For the reaction 2A + B → C, the rate law is found to be Rate = k[A]²[B]. If [A] = 0.1 M and [B] = 0.2 M give a rate of 4 × 10⁻³ M/s, find the rate constant and its units.",
    given: "[A] = 0.1 M, [B] = 0.2 M, Rate = 4 × 10⁻³ M/s, Rate law: Rate = k[A]²[B]",
    find: "Rate constant k with units",
    hint: "Rearrange: k = Rate/([A]²[B]).",
    solution: {
      formula: "k = Rate / ([A]²[B])",
      formulaExplain: "The rate constant is determined by substituting known values of rate and concentrations into the rate law.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "k = 4 × 10⁻³ / ((0.1)² × 0.2)" },
        { label: "Step 2", text: "Calculate denominator", math: "k = 4 × 10⁻³ / (0.01 × 0.2) = 4 × 10⁻³ / 0.002" },
        { label: "Step 3", text: "Calculate k", math: "k = 2 M⁻²s⁻¹" }
      ],
      answer: "k = 2 M⁻²s⁻¹",
      explanation: "The rate constant is 2 M⁻²s⁻¹. The unit M⁻²s⁻¹ confirms the overall order is 3 (2 + 1 = 3)."
    }
  },
  {
    id: 48,
    subject: "chemistry",
    topic: "Chemical Kinetics",
    difficulty: "medium",
    question: "For a first-order reaction with rate constant 0.01 s⁻¹, find the concentration of reactant after 100 s if the initial concentration is 1 M.",
    given: "k = 0.01 s⁻¹, t = 100 s, [A]₀ = 1 M",
    find: "Concentration [A] at time t",
    hint: "Use integrated rate law: ln[A] = ln[A]₀ − kt, or [A] = [A]₀e^(−kt).",
    solution: {
      formula: "[A] = [A]₀ × e^(−kt)",
      formulaExplain: "The integrated rate law for first-order reactions gives concentration as an exponential function of time.",
      steps: [
        { label: "Step 1", text: "Calculate kt", math: "kt = 0.01 × 100 = 1" },
        { label: "Step 2", text: "Calculate e^(−kt)", math: "e^(−1) = 0.368" },
        { label: "Step 3", text: "Find [A]", math: "[A] = 1 × 0.368 = 0.368 M" }
      ],
      answer: "[A] = 0.368 M",
      explanation: "After 100 seconds (100 half-lives worth of kt = 1), about 36.8% of the original reactant remains. This is the definition of 1/e."
    }
  },
  // --- Equilibrium and Gas Laws ---
  {
    id: 49,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "easy",
    question: "Calculate the pH of a 0.01 M HCl solution.",
    given: "[H⁺] = 0.01 M (strong acid, fully dissociated)",
    find: "pH",
    hint: "pH = −log[H⁺]. HCl is a strong acid, so [H⁺] equals the concentration of HCl.",
    solution: {
      formula: "pH = −log[H⁺]",
      formulaExplain: "pH is the negative logarithm (base 10) of hydrogen ion concentration.",
      steps: [
        { label: "Step 1", text: "Write the dissociation", math: "HCl → H⁺ + Cl⁻; [H⁺] = 0.01 M" },
        { label: "Step 2", text: "Calculate pH", math: "pH = −log(0.01) = −log(10⁻²) = 2" }
      ],
      answer: "pH = 2",
      explanation: "A 0.01 M strong acid solution has pH = 2. Each tenfold increase in [H⁺] decreases pH by 1 unit."
    }
  },
  {
    id: 50,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "medium",
    question: "Calculate the pH of a 0.1 M acetic acid solution. (Ka = 1.8 × 10⁻⁵)",
    given: "C = 0.1 M, Ka = 1.8 × 10⁻⁵",
    find: "pH",
    hint: "For weak acid: [H⁺] = √(Ka × C). Then pH = −log[H⁺].",
    solution: {
      formula: "[H⁺] = √(Ka × C)",
      formulaExplain: "For a weak acid, only partially dissociated. The equilibrium expression gives [H⁺] = √(Ka × C) when C >> Ka.",
      steps: [
        { label: "Step 1", text: "Calculate [H⁺]", math: "[H⁺] = √(1.8 × 10⁻⁵ × 0.1) = √(1.8 × 10⁻⁶)" },
        { label: "Step 2", text: "Take square root", math: "[H⁺] = 1.34 × 10⁻³ M" },
        { label: "Step 3", text: "Calculate pH", math: "pH = −log(1.34 × 10⁻³) = 3 − 0.127 = 2.87" }
      ],
      answer: "pH = 2.87",
      explanation: "The pH is 2.87, which is higher than a strong acid of the same concentration because acetic acid only partially dissociates."
    }
  },
  {
    id: 51,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "medium",
    question: "A buffer solution contains 0.1 M CH₃COOH and 0.2 M CH₃COONa. Calculate its pH. (pKa of acetic acid = 4.76)",
    given: "[HA] = 0.1 M, [A⁻] = 0.2 M, pKa = 4.76",
    find: "pH of buffer",
    hint: "Use Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]).",
    solution: {
      formula: "pH = pKa + log([A⁻]/[HA])",
      formulaExplain: "The Henderson-Hasselbalch equation relates buffer pH to the pKa and the ratio of conjugate base to acid.",
      steps: [
        { label: "Step 1", text: "Calculate the ratio", math: "[A⁻]/[HA] = 0.2/0.1 = 2" },
        { label: "Step 2", text: "Calculate log of ratio", math: "log(2) = 0.301" },
        { label: "Step 3", text: "Calculate pH", math: "pH = 4.76 + 0.301 = 5.06" }
      ],
      answer: "pH = 5.06",
      explanation: "The buffer pH (5.06) is above the pKa because the conjugate base concentration is higher than the acid concentration."
    }
  },
  {
    id: 52,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "easy",
    question: "Calculate the volume occupied by 1 mole of an ideal gas at 300 K and 2 atm pressure. (R = 0.0821 L·atm/(mol·K))",
    given: "n = 1 mol, T = 300 K, P = 2 atm, R = 0.0821 L·atm/(mol·K)",
    find: "Volume V",
    hint: "Use ideal gas equation: PV = nRT.",
    solution: {
      formula: "PV = nRT → V = nRT/P",
      formulaExplain: "The ideal gas equation relates pressure, volume, temperature, and amount of gas.",
      steps: [
        { label: "Step 1", text: "Rearrange for V", math: "V = nRT/P" },
        { label: "Step 2", text: "Substitute values", math: "V = (1)(0.0821)(300)/2" },
        { label: "Step 3", text: "Calculate", math: "V = 24.63/2 = 12.3 L" }
      ],
      answer: "V = 12.3 L",
      explanation: "At 2 atm and 300 K, 1 mole of ideal gas occupies 12.3 L. At STP (1 atm, 273 K), it would be 22.4 L."
    }
  },
  {
    id: 53,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "easy",
    question: "A gas mixture contains N₂ and O₂ with mole fractions 0.6 and 0.4 respectively. If the total pressure is 1 atm, find the partial pressure of each gas.",
    given: "x(N₂) = 0.6, x(O₂) = 0.4, Ptotal = 1 atm",
    find: "Partial pressures P(N₂) and P(O₂)",
    hint: "Dalton's Law: Pᵢ = xᵢ × Ptotal.",
    solution: {
      formula: "Pᵢ = xᵢ × Ptotal",
      formulaExplain: "Dalton's Law of Partial Pressures states that each gas exerts pressure independently, proportional to its mole fraction.",
      steps: [
        { label: "Step 1", text: "Calculate partial pressure of N₂", math: "P(N₂) = 0.6 × 1 = 0.6 atm" },
        { label: "Step 2", text: "Calculate partial pressure of O₂", math: "P(O₂) = 0.4 × 1 = 0.4 atm" },
        { label: "Step 3", text: "Verify: sum should equal total pressure", math: "0.6 + 0.4 = 1.0 atm ✓" }
      ],
      answer: "P(N₂) = 0.6 atm, P(O₂) = 0.4 atm",
      explanation: "Each gas contributes to total pressure proportional to its mole fraction. The partial pressures add up to the total pressure."
    }
  },
  {
    id: 54,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "medium",
    question: "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), Kc = 900 at 500 K. Calculate Kp. (R = 0.0821 L·atm/(mol·K))",
    given: "Kc = 900, T = 500 K, Δn = 2 − (2 + 1) = −1",
    find: "Kp",
    hint: "Kp = Kc(RT)^Δn.",
    solution: {
      formula: "Kp = Kc(RT)^Δn",
      formulaExplain: "Kp and Kc are related through the change in number of moles of gas (Δn) and temperature.",
      steps: [
        { label: "Step 1", text: "Calculate Δn", math: "Δn = 2 − 3 = −1" },
        { label: "Step 2", text: "Calculate RT", math: "RT = 0.0821 × 500 = 41.05" },
        { label: "Step 3", text: "Apply formula", math: "Kp = 900 × (41.05)⁻¹ = 900/41.05" },
        { label: "Step 4", text: "Calculate", math: "Kp = 21.9" }
      ],
      answer: "Kp = 21.9",
      explanation: "Since Δn is negative (fewer moles of product), Kp < Kc. The equilibrium favours product formation at this temperature."
    }
  },
  {
    id: 55,
    subject: "chemistry",
    topic: "Thermochemistry",
    difficulty: "easy",
    question: "Calculate the enthalpy change when 2 moles of hydrogen gas are combusted. (ΔHcombustion of H₂ = −286 kJ/mol)",
    given: "n = 2 mol, ΔH = −286 kJ/mol, Reaction: H₂(g) + ½O₂(g) → H₂O(l)",
    find: "Enthalpy change ΔH",
    hint: "Multiply the molar enthalpy by the number of moles.",
    solution: {
      formula: "ΔH = n × ΔHcombustion",
      formulaExplain: "Enthalpy change is an extensive property, proportional to the amount of substance.",
      steps: [
        { label: "Step 1", text: "Substitute values", math: "ΔH = 2 × (−286)" },
        { label: "Step 2", text: "Calculate", math: "ΔH = −572 kJ" }
      ],
      answer: "ΔH = −572 kJ",
      explanation: "Combusting 2 mol of H₂ releases 572 kJ of energy. The negative sign indicates an exothermic reaction."
    }
  },
  {
    id: 56,
    subject: "chemistry",
    topic: "Thermochemistry",
    difficulty: "medium",
    question: "Using the following data, calculate the enthalpy of formation of CO:\n(i) C(s) + O₂(g) → CO₂(g), ΔH₁ = −393.5 kJ\n(ii) CO(g) + ½O₂(g) → CO₂(g), ΔH₂ = −283.0 kJ",
    given: "ΔH₁ = −393.5 kJ, ΔH₂ = −283.0 kJ",
    find: "ΔHf of CO: C(s) + ½O₂(g) → CO(g)",
    hint: "Apply Hess's Law: reverse equation (ii) and add to equation (i).",
    solution: {
      formula: "ΔHreaction = ΣΔHproducts − ΣΔHreactants (or use Hess's cycle)",
      formulaExplain: "Hess's Law: the total enthalpy change is the same regardless of the path taken.",
      steps: [
        { label: "Step 1", text: "Write the target equation", math: "C(s) + ½O₂(g) → CO(g)" },
        { label: "Step 2", text: "Reverse equation (ii)", math: "CO₂(g) → CO(g) + ½O₂(g), ΔH = +283.0 kJ" },
        { label: "Step 3", text: "Add to equation (i)", math: "C(s) + O₂(g) + CO₂(g) → CO₂(g) + CO(g) + ½O₂(g)" },
        { label: "Step 4", text: "Simplify", math: "C(s) + ½O₂(g) → CO(g)" },
        { label: "Step 5", text: "Calculate ΔH", math: "ΔH = −393.5 + 283.0 = −110.5 kJ" }
      ],
      answer: "ΔHf(CO) = −110.5 kJ/mol",
      explanation: "The formation of CO from its elements is exothermic (−110.5 kJ/mol). This is less exothermic than complete combustion to CO₂."
    }
  },
  {
    id: 57,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "medium",
    question: "A solution is prepared by mixing benzene and toluene. The mole fraction of benzene is 0.4. If the vapour pressures of pure benzene and toluene are 120 mmHg and 40 mmHg respectively, find the total vapour pressure and the mole fraction of benzene in the vapour phase.",
    given: "x(benzene) = 0.4, P°(benzene) = 120 mmHg, P°(toluene) = 40 mmHg",
    find: "Total vapour pressure Ptotal and mole fraction of benzene in vapour y(benzene)",
    hint: "Use Raoult's Law: Pi = xi × P°i. Total pressure = sum of partial pressures.",
    solution: {
      formula: "Pi = xi × P°i, Ptotal = P(benzene) + P(toluene)",
      formulaExplain: "Raoult's Law states that the partial vapour pressure of each component equals its mole fraction times its pure vapour pressure.",
      steps: [
        { label: "Step 1", text: "Calculate partial pressure of benzene", math: "P(benzene) = 0.4 × 120 = 48 mmHg" },
        { label: "Step 2", text: "Calculate partial pressure of toluene", math: "P(toluene) = 0.6 × 40 = 24 mmHg" },
        { label: "Step 3", text: "Calculate total pressure", math: "Ptotal = 48 + 24 = 72 mmHg" },
        { label: "Step 4", text: "Calculate mole fraction in vapour", math: "y(benzene) = P(benzene)/Ptotal = 48/72 = 0.667" }
      ],
      answer: "Ptotal = 72 mmHg, y(benzene) = 0.67",
      explanation: "The vapour is richer in benzene (0.67) than the liquid (0.4) because benzene is more volatile. This is the basis of distillation."
    }
  },
  {
    id: 58,
    subject: "chemistry",
    topic: "Solutions",
    difficulty: "medium",
    question: "Calculate the vapour pressure lowering when 18 g of glucose is dissolved in 1000 g of water at 25°C. (Vapour pressure of pure water at 25°C = 23.8 mmHg, Molar mass of glucose = 180 g/mol)",
    given: "mass(glucose) = 18 g, mass(water) = 1000 g, P° = 23.8 mmHg, M(glucose) = 180 g/mol, M(water) = 18 g/mol",
    find: "Vapour pressure lowering ΔP",
    hint: "ΔP = x(solute) × P°. First find mole fraction of glucose.",
    solution: {
      formula: "ΔP = x₂ × P°₁",
      formulaExplain: "The relative lowering of vapour pressure equals the mole fraction of the non-volatile solute.",
      steps: [
        { label: "Step 1", text: "Calculate moles of glucose", math: "n(glucose) = 18/180 = 0.1 mol" },
        { label: "Step 2", text: "Calculate moles of water", math: "n(water) = 1000/18 = 55.56 mol" },
        { label: "Step 3", text: "Calculate mole fraction of glucose", math: "x(glucose) = 0.1/(0.1 + 55.56) = 0.1/55.66 = 1.80 × 10⁻³" },
        { label: "Step 4", text: "Calculate vapour pressure lowering", math: "ΔP = 1.80 × 10⁻³ × 23.8 = 0.0428 mmHg" }
      ],
      answer: "ΔP = 0.0428 mmHg",
      explanation: "The vapour pressure is lowered by only 0.043 mmHg — a small effect because the solute concentration is very low relative to water."
    }
  },
  {
    id: 59,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "medium",
    question: "Calculate the solubility of AgCl in 0.1 M NaCl solution. (Ksp of AgCl = 1.8 × 10⁻¹⁰)",
    given: "[NaCl] = 0.1 M, Ksp = 1.8 × 10⁻¹⁰",
    find: "Solubility of AgCl (s)",
    hint: "This is the common ion effect. [Cl⁻] ≈ 0.1 M (from NaCl). Then Ksp = [Ag⁺][Cl⁻].",
    solution: {
      formula: "Ksp = [Ag⁺][Cl⁻]",
      formulaExplain: "The common ion effect reduces solubility. Cl⁻ from NaCl shifts the equilibrium: AgCl ⇌ Ag⁺ + Cl⁻.",
      steps: [
        { label: "Step 1", text: "Write solubility equilibrium", math: "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)" },
        { label: "Step 2", text: "Express concentrations", math: "[Ag⁺] = s, [Cl⁻] = s + 0.1 ≈ 0.1 (since s << 0.1)" },
        { label: "Step 3", text: "Substitute into Ksp", math: "Ksp = s × 0.1 = 1.8 × 10⁻¹⁰" },
        { label: "Step 4", text: "Solve for s", math: "s = 1.8 × 10⁻⁹ M" }
      ],
      answer: "s = 1.8 × 10⁻⁹ M",
      explanation: "The solubility is much lower in 0.1 M NaCl (1.8 × 10⁻⁹ M) compared to pure water (1.34 × 10⁻⁵ M) due to the common ion effect."
    }
  },
  {
    id: 60,
    subject: "chemistry",
    topic: "Equilibrium and Gas Laws",
    difficulty: "hard",
    question: "Calculate the solubility of CaF₂ in water. (Ksp of CaF₂ = 3.9 × 10⁻¹¹)",
    given: "Ksp = 3.9 × 10⁻¹¹, CaF₂ ⇌ Ca²⁺ + 2F⁻",
    find: "Molar solubility s",
    hint: "If s is the solubility: [Ca²⁺] = s, [F⁻] = 2s. Then Ksp = s(2s)² = 4s³.",
    solution: {
      formula: "Ksp = [Ca²⁺][F⁻]² = s(2s)² = 4s³",
      formulaExplain: "The Ksp expression must account for the stoichiometry: 2 fluoride ions per formula unit dissolved.",
      steps: [
        { label: "Step 1", text: "Write the dissolution equation", math: "CaF₂(s) ⇌ Ca²⁺(aq) + 2F⁻(aq)" },
        { label: "Step 2", text: "Express in terms of solubility s", math: "[Ca²⁺] = s, [F⁻] = 2s" },
        { label: "Step 3", text: "Substitute into Ksp", math: "Ksp = s × (2s)² = 4s³" },
        { label: "Step 4", text: "Solve for s³", math: "4s³ = 3.9 × 10⁻¹¹ → s³ = 9.75 × 10⁻¹²" },
        { label: "Step 5", text: "Take cube root", math: "s = (9.75 × 10⁻¹²)^(1/3) = 2.14 × 10⁻⁴ M" }
      ],
      answer: "s = 2.14 × 10⁻⁴ M",
      explanation: "The molar solubility of CaF₂ is 2.14 × 10⁻⁴ M. Fluoride concentration is twice this (4.28 × 10⁻⁴ M) due to the 1:2 stoichiometry."
    }
  }
];
