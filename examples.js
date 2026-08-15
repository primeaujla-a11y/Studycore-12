window.ExamplesDB = [
  // Physics Examples
  {
    id: 1,
    subject: "physics",
    chapter: "Electrostatics",
    difficulty: "easy",
    question: "Two point charges of +3 μC and -4 μC are separated by 0.5 m. Calculate the force between them using Coulomb's law. (Take k = 9 × 10⁹ N·m²/C²)",
    solution: {
      formula: "F = k|q₁q₂|/r²",
      steps: [
        { label: "Step 1", text: "Identify the given values", math: "q₁ = 3 μC = 3 × 10⁻⁶ C, q₂ = 4 μC = 4 × 10⁻⁶ C, r = 0.5 m" },
        { label: "Step 2", text: "Substitute values into Coulomb's law formula", math: "F = (9 × 10⁹) × (3 × 10⁻⁶) × (4 × 10⁻⁶) / (0.5)²" },
        { label: "Step 3", text: "Calculate numerator and denominator", math: "F = (9 × 10⁹) × (12 × 10⁻¹²) / 0.25 = 0.108 / 0.25" },
        { label: "Step 4", text: "Final calculation", math: "F = 0.432 N" }
      ],
      answer: "0.432 N (attractive force)",
      explanation: "The force is attractive because charges are opposite. Coulomb's law follows inverse square relationship, so doubling the distance would reduce force by factor of 4."
    }
  },
  {
    id: 2,
    subject: "physics",
    chapter: "Electrostatics",
    difficulty: "medium",
    question: "Two point charges +8 μC and -2 μC are placed at (0, 0) and (3, 0) meters respectively. Find the net electric field at point (1, 0) meters. (Take k = 9 × 10⁹ N·m²/C²)",
    solution: {
      formula: "E = kq/r²",
      steps: [
        { label: "Step 1", text: "Electric field due to +8 μC charge at origin to point (1,0)", math: "E₁ = kq₁/r₁² = (9 × 10⁹)(8 × 10⁻⁶)/(1)² = 72,000 N/C (away from positive charge, so along +x)" },
        { label: "Step 2", text: "Electric field due to -2 μC charge at (3,0) to point (1,0)", math: "r₂ = 3 - 1 = 2 m, E₂ = k|q₂|/r₂² = (9 × 10⁹)(2 × 10⁻⁶)/(2)² = 4,500 N/C (towards negative charge, so along +x)" },
        { label: "Step 3", text: "Net electric field (both fields are in same direction)", math: "E_net = E₁ + E₂ = 72,000 + 4,500" },
        { label: "Step 4", text: "Final result", math: "E_net = 76,500 N/C along +x direction" }
      ],
      answer: "76,500 N/C along +x direction",
      explanation: "Both charges contribute to electric field in the same direction at point (1,0). The positive charge pushes away, the negative charge pulls towards it."
    }
  },
  {
    id: 3,
    subject: "physics",
    chapter: "Capacitance",
    difficulty: "medium",
    question: "Three capacitors of capacitance 2 μF, 3 μF, and 6 μF are connected first in series and then in parallel. Find the equivalent capacitance in both cases.",
    solution: {
      formula: "Series: 1/C_eq = 1/C₁ + 1/C₂ + 1/C₃, Parallel: C_eq = C₁ + C₂ + C₃",
      steps: [
        { label: "Step 1", text: "For series combination", math: "1/C_eq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1" },
        { label: "Step 2", text: "Series equivalent capacitance", math: "C_eq (series) = 1 μF" },
        { label: "Step 3", text: "For parallel combination", math: "C_eq = 2 + 3 + 6" },
        { label: "Step 4", text: "Parallel equivalent capacitance", math: "C_eq (parallel) = 11 μF" }
      ],
      answer: "Series: 1 μF, Parallel: 11 μF",
      explanation: "In series, equivalent capacitance is always less than the smallest individual capacitance. In parallel, capacitances simply add up, giving larger equivalent capacitance."
    }
  },
  {
    id: 4,
    subject: "physics",
    chapter: "Current Electricity",
    difficulty: "medium",
    question: "A battery with EMF 12 V and internal resistance 1 Ω is connected to an external resistor. If the terminal voltage is 10 V, find the current in the circuit and external resistance.",
    solution: {
      formula: "V = E - Ir, V = IR",
      steps: [
        { label: "Step 1", text: "Use terminal voltage equation to find current", math: "V = E - Ir → 10 = 12 - I(1)" },
        { label: "Step 2", text: "Solve for current", math: "I = 12 - 10 = 2 A" },
        { label: "Step 3", text: "Use Ohm's law for external resistance", math: "V = IR → 10 = 2 × R" },
        { label: "Step 4", text: "Calculate external resistance", math: "R = 10/2 = 5 Ω" }
      ],
      answer: "Current = 2 A, External resistance = 5 Ω",
      explanation: "Terminal voltage is less than EMF due to voltage drop across internal resistance. The internal resistance causes power loss inside the battery."
    }
  },
  {
    id: 5,
    subject: "physics",
    chapter: "Current Electricity",
    difficulty: "medium",
    question: "A copper wire has resistance 10 Ω at 20°C. If the temperature coefficient of resistance for copper is 0.004/°C, find its resistance at 70°C.",
    solution: {
      formula: "R = R₀[1 + α(T - T₀)]",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "R₀ = 10 Ω, T₀ = 20°C, T = 70°C, α = 0.004/°C" },
        { label: "Step 2", text: "Calculate temperature difference", math: "ΔT = 70 - 20 = 50°C" },
        { label: "Step 3", text: "Apply the temperature variation formula", math: "R = 10[1 + 0.004 × 50] = 10[1 + 0.2]" },
        { label: "Step 4", text: "Final resistance", math: "R = 10 × 1.2 = 12 Ω" }
      ],
      answer: "12 Ω",
      explanation: "Resistance increases with temperature for metals due to increased lattice vibrations. The relationship is approximately linear for moderate temperature ranges."
    }
  },
  {
    id: 6,
    subject: "physics",
    chapter: "Magnetic Effects of Current",
    difficulty: "easy",
    question: "Find the magnetic field at the center of a circular loop of radius 0.1 m carrying a current of 5 A. (Take μ₀ = 4π × 10⁻⁷ T·m/A)",
    solution: {
      formula: "B = μ₀I/(2R)",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "I = 5 A, R = 0.1 m, μ₀ = 4π × 10⁻⁷ T·m/A" },
        { label: "Step 2", text: "Substitute into formula", math: "B = (4π × 10⁻⁷ × 5)/(2 × 0.1)" },
        { label: "Step 3", text: "Simplify", math: "B = (20π × 10⁻⁷)/0.2 = 100π × 10⁻⁷" },
        { label: "Step 4", text: "Calculate numerical value", math: "B = π × 10⁻⁵ T ≈ 3.14 × 10⁻⁵ T" }
      ],
      answer: "3.14 × 10⁻⁵ T or π × 10⁻⁵ T",
      explanation: "Magnetic field at the center of a circular loop is twice that at the center of a straight wire of same length. Direction is perpendicular to the plane of loop (right-hand rule)."
    }
  },
  {
    id: 7,
    subject: "physics",
    chapter: "Magnetic Effects of Current",
    difficulty: "easy",
    question: "A wire of length 0.5 m carrying a current of 4 A is placed perpendicular to a uniform magnetic field of 0.2 T. Calculate the force on the wire.",
    solution: {
      formula: "F = BIL sinθ",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "B = 0.2 T, I = 4 A, L = 0.5 m, θ = 90° (perpendicular)" },
        { label: "Step 2", text: "Since wire is perpendicular, sin90° = 1", math: "F = BIL = 0.2 × 4 × 0.5" },
        { label: "Step 3", text: "Calculate force", math: "F = 0.4 N" }
      ],
      answer: "0.4 N",
      explanation: "Maximum force occurs when wire is perpendicular to magnetic field. If wire were parallel to field, force would be zero. Direction given by Fleming's left-hand rule."
    }
  },
  {
    id: 8,
    subject: "physics",
    chapter: "Electromagnetic Induction",
    difficulty: "hard",
    question: "A rectangular coil of 50 turns and area 0.02 m² is rotated at 300 rpm in a uniform magnetic field of 0.5 T. Find the maximum EMF induced and the equation for instantaneous EMF.",
    solution: {
      formula: "EMF = NBAω sin(ωt), EMF_max = NBAω",
      steps: [
        { label: "Step 1", text: "Convert angular velocity to rad/s", math: "ω = 300 rpm = 300 × 2π/60 = 10π rad/s" },
        { label: "Step 2", text: "Calculate maximum EMF", math: "EMF_max = NBAω = 50 × 0.5 × 0.02 × 10π" },
        { label: "Step 3", text: "Simplify", math: "EMF_max = 5π V ≈ 15.7 V" },
        { label: "Step 4", text: "Write instantaneous EMF equation", math: "EMF = 5π sin(10πt) V" }
      ],
      answer: "Maximum EMF = 15.7 V, EMF = 5π sin(10πt) V",
      explanation: "The EMF is maximum when coil plane is parallel to magnetic field (flux change is maximum). EMF is zero when coil plane is perpendicular to field (flux change is zero)."
    }
  },
  {
    id: 9,
    subject: "physics",
    chapter: "Alternating Current",
    difficulty: "medium",
    question: "An LCR circuit has L = 0.1 H, C = 10 μF, and R = 20 Ω. Find the resonant frequency and impedance at resonance.",
    solution: {
      formula: "f₀ = 1/(2π√(LC)), Z = R at resonance",
      steps: [
        { label: "Step 1", text: "Calculate resonant frequency", math: "f₀ = 1/(2π√(LC)) = 1/(2π√(0.1 × 10 × 10⁻⁶))" },
        { label: "Step 2", text: "Simplify under square root", math: "LC = 0.1 × 10⁻⁵ = 10⁻⁶, √(LC) = 10⁻³" },
        { label: "Step 3", text: "Calculate frequency", math: "f₀ = 1/(2π × 10⁻³) = 1000/(2π) ≈ 159.2 Hz" },
        { label: "Step 4", text: "At resonance, impedance equals resistance", math: "Z = R = 20 Ω" }
      ],
      answer: "Resonant frequency = 159.2 Hz, Impedance at resonance = 20 Ω",
      explanation: "At resonance, inductive reactance equals capacitive reactance (X_L = X_C), so they cancel each other. Current is maximum at resonance, and circuit behaves purely resistive."
    }
  },
  {
    id: 10,
    subject: "physics",
    chapter: "Electromagnetic Waves",
    difficulty: "medium",
    question: "A transformer has 500 turns in primary and 10,000 turns in secondary. If primary voltage is 220 V and input power is 2.2 kW, find secondary voltage and efficiency if output power is 2.0 kW.",
    solution: {
      formula: "V_s/V_p = N_s/N_p, Efficiency = (P_out/P_in) × 100%",
      steps: [
        { label: "Step 1", text: "Find secondary voltage using turns ratio", math: "V_s = V_p × (N_s/N_p) = 220 × (10,000/500)" },
        { label: "Step 2", text: "Calculate secondary voltage", math: "V_s = 220 × 20 = 4,400 V" },
        { label: "Step 3", text: "Calculate efficiency", math: "η = (P_out/P_in) × 100% = (2.0/2.2) × 100%" },
        { label: "Step 4", text: "Final efficiency", math: "η ≈ 90.9%" }
      ],
      answer: "Secondary voltage = 4,400 V, Efficiency = 90.9%",
      explanation: "This is a step-up transformer (secondary turns > primary turns). Power loss in transformer is due to copper loss (I²R), iron loss (eddy currents + hysteresis), and flux leakage."
    }
  },
  {
    id: 11,
    subject: "physics",
    chapter: "Ray Optics",
    difficulty: "easy",
    question: "An object is placed 30 cm in front of a concave mirror of focal length 15 cm. Find the image distance and magnification.",
    solution: {
      formula: "1/f = 1/v + 1/u, m = -v/u",
      steps: [
        { label: "Step 1", text: "Apply mirror formula (u = -30 cm, f = -15 cm for concave mirror)", math: "1/v = 1/f - 1/u = 1/(-15) - 1/(-30)" },
        { label: "Step 2", text: "Simplify", math: "1/v = -1/15 + 1/30 = -2/30 + 1/30 = -1/30" },
        { label: "Step 3", text: "Find image distance", math: "v = -30 cm" },
        { label: "Step 4", text: "Calculate magnification", math: "m = -v/u = -(-30)/(-30) = -1" }
      ],
      answer: "Image distance = -30 cm, Magnification = -1 (same size, inverted, real image)",
      explanation: "When object is at 2F of concave mirror, image is formed at 2F on same side, real, inverted, and same size. This is a special case in mirror optics."
    }
  },
  {
    id: 12,
    subject: "physics",
    chapter: "Ray Optics",
    difficulty: "medium",
    question: "A convex lens of focal length 20 cm is combined with a concave lens of focal length 30 cm. Find the equivalent focal length and power of the combination.",
    solution: {
      formula: "1/F = 1/f₁ + 1/f₂, P = 1/F (in meters)",
      steps: [
        { label: "Step 1", text: "Assign signs (convex lens: f₁ = +20 cm, concave lens: f₂ = -30 cm)", math: "1/F = 1/20 + 1/(-30) = 1/20 - 1/30" },
        { label: "Step 2", text: "Find common denominator", math: "1/F = 3/60 - 2/60 = 1/60" },
        { label: "Step 3", text: "Calculate equivalent focal length", math: "F = 60 cm = 0.6 m" },
        { label: "Step 4", text: "Calculate power", math: "P = 1/F = 1/0.6 ≈ 1.67 D" }
      ],
      answer: "Equivalent focal length = 60 cm, Power = 1.67 diopters",
      explanation: "The combination behaves as a converging lens since equivalent focal length is positive. Power is positive, indicating net converging effect."
    }
  },
  {
    id: 13,
    subject: "physics",
    chapter: "Wave Optics",
    difficulty: "hard",
    question: "A glass prism has refractive index 1.5 and angle of prism 60°. Find the angle of minimum deviation and speed of light in the prism. (Take c = 3 × 10⁸ m/s)",
    solution: {
      formula: "μ = sin[(A + δₘ)/2] / sin(A/2), v = c/μ",
      steps: [
        { label: "Step 1", text: "Use prism formula for minimum deviation", math: "1.5 = sin[(60° + δₘ)/2] / sin(30°)" },
        { label: "Step 2", text: "Simplify", math: "1.5 = sin[(60° + δₘ)/2] / 0.5" },
        { label: "Step 3", text: "Solve for angle", math: "sin[(60° + δₘ)/2] = 0.75, (60° + δₘ)/2 = sin⁻¹(0.75) ≈ 48.6°" },
        { label: "Step 4", text: "Calculate minimum deviation", math: "60° + δₘ = 97.2°, δₘ = 37.2°" },
        { label: "Step 5", text: "Calculate speed of light in prism", math: "v = c/μ = (3 × 10⁸)/1.5 = 2 × 10⁸ m/s" }
      ],
      answer: "Minimum deviation = 37.2°, Speed in prism = 2 × 10⁸ m/s",
      explanation: "At minimum deviation, angle of incidence equals angle of emergence, and ray passes symmetrically through prism. Speed of light reduces in denser medium."
    }
  },
  {
    id: 14,
    subject: "physics",
    chapter: "Wave Optics",
    difficulty: "medium",
    question: "In Young's double slit experiment, the distance between slits is 0.5 mm and screen is 1 m away. If wavelength of light used is 600 nm, find the fringe width and distance of 5th bright fringe from central maximum.",
    solution: {
      formula: "β = λD/d, y_n = nβ",
      steps: [
        { label: "Step 1", text: "Convert units to meters", math: "d = 0.5 mm = 0.5 × 10⁻³ m, D = 1 m, λ = 600 nm = 600 × 10⁻⁹ m" },
        { label: "Step 2", text: "Calculate fringe width", math: "β = λD/d = (600 × 10⁻⁹ × 1)/(0.5 × 10⁻³)" },
        { label: "Step 3", text: "Simplify", math: "β = 600 × 10⁻⁶ / 0.5 = 1200 × 10⁻⁶ m = 1.2 mm" },
        { label: "Step 4", text: "Find distance of 5th bright fringe", math: "y₅ = 5 × β = 5 × 1.2 = 6.0 mm" }
      ],
      answer: "Fringe width = 1.2 mm, Distance of 5th bright fringe = 6.0 mm",
      explanation: "Fringe width is independent of slit separation and wavelength. For constructive interference, path difference must be integral multiple of wavelength."
    }
  },
  {
    id: 15,
    subject: "physics",
    chapter: "Modern Physics",
    difficulty: "medium",
    question: "Light of wavelength 4000 Å falls on a metal surface with work function 2.0 eV. Find the maximum kinetic energy of photoelectrons. (Take hc = 12400 eV·Å)",
    solution: {
      formula: "KE_max = hc/λ - φ",
      steps: [
        { label: "Step 1", text: "Calculate energy of incident photon", math: "E = hc/λ = 12400/4000 = 3.1 eV" },
        { label: "Step 2", text: "Apply Einstein's photoelectric equation", math: "KE_max = E - φ = 3.1 - 2.0" },
        { label: "Step 3", text: "Calculate maximum kinetic energy", math: "KE_max = 1.1 eV" }
      ],
      answer: "Maximum kinetic energy = 1.1 eV",
      explanation: "Photoelectric effect depends only on frequency of light, not intensity. If wavelength were greater than threshold wavelength (hc/φ = 6200 Å), no photoelectrons would be emitted."
    }
  },
  {
    id: 16,
    subject: "physics",
    chapter: "Modern Physics",
    difficulty: "easy",
    question: "Find the de Broglie wavelength of an electron moving with velocity 10⁶ m/s. (Mass of electron = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J·s)",
    solution: {
      formula: "λ = h/(mv)",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "m = 9.1 × 10⁻³¹ kg, v = 10⁶ m/s, h = 6.63 × 10⁻³⁴ J·s" },
        { label: "Step 2", text: "Substitute into de Broglie equation", math: "λ = (6.63 × 10⁻³⁴)/(9.1 × 10⁻³¹ × 10⁶)" },
        { label: "Step 3", text: "Calculate", math: "λ = (6.63 × 10⁻³⁴)/(9.1 × 10⁻²⁵) = 0.729 × 10⁻⁹ m" },
        { label: "Step 4", text: "Convert to convenient units", math: "λ ≈ 0.73 nm or 7.3 Å" }
      ],
      answer: "0.73 nm or 7.3 Å",
      explanation: "De Broglie wavelength is significant for microscopic particles. This wavelength is comparable to X-ray wavelengths, showing wave nature of electrons."
    }
  },
  {
    id: 17,
    subject: "physics",
    chapter: "Modern Physics",
    difficulty: "medium",
    question: "Using Bohr's model, find the radius and energy of the second orbit of hydrogen atom. (Take a₀ = 0.53 Å, E₁ = -13.6 eV)",
    solution: {
      formula: "r_n = n²a₀, E_n = E₁/n²",
      steps: [
        { label: "Step 1", text: "For second orbit, n = 2", math: "r₂ = 2² × a₀ = 4 × 0.53 Å" },
        { label: "Step 2", text: "Calculate radius", math: "r₂ = 2.12 Å" },
        { label: "Step 3", text: "Calculate energy", math: "E₂ = E₁/n² = -13.6/4 = -3.4 eV" },
        { label: "Step 4", text: "Verify using energy formula", math: "E₂ = -13.6/2² = -3.4 eV" }
      ],
      answer: "Radius = 2.12 Å, Energy = -3.4 eV",
      explanation: "Radius increases as n² and energy becomes less negative (higher energy) as n increases. Electrons in higher orbits are less tightly bound to nucleus."
    }
  },
  {
    id: 18,
    subject: "physics",
    chapter: "Nuclear Physics",
    difficulty: "medium",
    question: "A radioactive sample has activity 800 Bq initially and after 3 hours, activity becomes 100 Bq. Find the half-life of the sample.",
    solution: {
      formula: "A = A₀(1/2)^(t/T½)",
      steps: [
        { label: "Step 1", text: "Set up the equation", math: "100 = 800 × (1/2)^(3/T½)" },
        { label: "Step 2", text: "Simplify", math: "1/8 = (1/2)^(3/T½)" },
        { label: "Step 3", text: "Write 1/8 as power of 1/2", math: "(1/2)³ = (1/2)^(3/T½)" },
        { label: "Step 4", text: "Equate exponents", math: "3 = 3/T½, so T½ = 1 hour" }
      ],
      answer: "Half-life = 1 hour",
      explanation: "In 3 hours, activity reduced to 1/8 of initial value, which means 3 half-lives have passed (2³ = 8). So half-life = 3/3 = 1 hour."
    }
  },
  {
    id: 19,
    subject: "physics",
    chapter: "Nuclear Physics",
    difficulty: "medium",
    question: "A sample contains 2.0 g of a radioactive substance with half-life 5 days. Find the activity of the sample. (Take Avogadro's number = 6 × 10²³, atomic mass ≈ 200 g/mol)",
    solution: {
      formula: "A = λN, λ = 0.693/T½, N = (m/M) × Nₐ",
      steps: [
        { label: "Step 1", text: "Calculate number of nuclei", math: "N = (2.0/200) × 6 × 10²³ = 6 × 10²¹ nuclei" },
        { label: "Step 2", text: "Calculate decay constant (convert days to seconds)", math: "T½ = 5 days = 5 × 24 × 3600 = 432,000 s" },
        { label: "Step 3", text: "Calculate λ", math: "λ = 0.693/432,000 = 1.604 × 10⁻⁶ s⁻¹" },
        { label: "Step 4", text: "Calculate activity", math: "A = λN = 1.604 × 10⁻⁶ × 6 × 10²¹ = 9.62 × 10¹⁵ Bq" }
      ],
      answer: "Activity = 9.62 × 10¹⁵ Bq or 9.62 × 10¹⁵ disintegrations/second",
      explanation: "Activity is proportional to number of radioactive nuclei. Large activity indicates rapid decay. In practice, activity is often measured in Curie (1 Ci = 3.7 × 10¹⁰ Bq)."
    }
  },
  {
    id: 20,
    subject: "physics",
    chapter: "Modern Physics",
    difficulty: "easy",
    question: "Find the energy difference between the first and third energy levels of hydrogen atom. (Take E₁ = -13.6 eV)",
    solution: {
      formula: "E_n = E₁/n², ΔE = E₃ - E₁",
      steps: [
        { label: "Step 1", text: "Calculate energy of first level", math: "E₁ = -13.6 eV" },
        { label: "Step 2", text: "Calculate energy of third level", math: "E₃ = -13.6/3² = -13.6/9 = -1.51 eV" },
        { label: "Step 3", text: "Find energy difference", math: "ΔE = E₃ - E₁ = -1.51 - (-13.6) = 12.09 eV" },
        { label: "Step 4", text: "Verify using formula", math: "ΔE = 13.6(1/1² - 1/3²) = 13.6(1 - 1/9) = 13.6 × 8/9 = 12.09 eV" }
      ],
      answer: "Energy difference = 12.09 eV",
      explanation: "This energy difference corresponds to photon emitted in Lyman series (ultraviolet region) when electron jumps from n=3 to n=1. Higher energy difference means higher frequency photon."
    }
  },
  // Chemistry Examples
  {
    id: 21,
    subject: "chemistry",
    chapter: "Solutions",
    difficulty: "easy",
    question: "Calculate the molarity of a solution prepared by dissolving 5.85 g of NaCl in 500 mL of water. (Atomic masses: Na = 23, Cl = 35.5)",
    solution: {
      formula: "Molarity (M) = moles of solute / volume of solution (L)",
      steps: [
        { label: "Step 1", text: "Calculate molar mass of NaCl", math: "M(NaCl) = 23 + 35.5 = 58.5 g/mol" },
        { label: "Step 2", text: "Calculate moles of NaCl", math: "n = mass/molar mass = 5.85/58.5 = 0.1 mol" },
        { label: "Step 3", text: "Convert volume to liters", math: "V = 500 mL = 0.5 L" },
        { label: "Step 4", text: "Calculate molarity", math: "M = 0.1/0.5 = 0.2 mol/L" }
      ],
      answer: "0.2 M (mol/L)",
      explanation: "Molarity is defined as moles of solute per liter of solution. For NaCl, which dissociates completely, the concentration of ions would be 0.4 M (0.2 M Na⁺ + 0.2 M Cl⁻)."
    }
  },
  {
    id: 22,
    subject: "chemistry",
    chapter: "Solutions",
    difficulty: "easy",
    question: "Find the molality of a solution containing 40 g of NaOH (molar mass = 40 g/mol) dissolved in 500 g of water.",
    solution: {
      formula: "Molality (m) = moles of solute / mass of solvent (kg)",
      steps: [
        { label: "Step 1", text: "Calculate moles of NaOH", math: "n = 40/40 = 1 mol" },
        { label: "Step 2", text: "Convert mass of water to kg", math: "mass of solvent = 500 g = 0.5 kg" },
        { label: "Step 3", text: "Calculate molality", math: "m = 1/0.5 = 2 mol/kg" },
        { label: "Step 4", text: "Express with units", math: "m = 2 m (molal)" }
      ],
      answer: "2 mol/kg or 2 molal",
      explanation: "Molality is independent of temperature since it uses mass of solvent. For dilute aqueous solutions, molality is approximately equal to molarity."
    }
  },
  {
    id: 23,
    subject: "chemistry",
    chapter: "Solutions",
    difficulty: "easy",
    question: "If 100 mL of 0.1 M HCl is diluted to 500 mL, what is the molarity of the diluted solution?",
    solution: {
      formula: "M₁V₁ = M₂V₂",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "M₁ = 0.1 M, V₁ = 100 mL, V₂ = 500 mL" },
        { label: "Step 2", text: "Apply dilution formula", math: "0.1 × 100 = M₂ × 500" },
        { label: "Step 3", text: "Solve for M₂", math: "M₂ = (0.1 × 100)/500 = 10/500 = 0.02 M" }
      ],
      answer: "0.02 M",
      explanation: "During dilution, moles of solute remain constant. Only solvent is added, so concentration decreases. This is important in preparing solutions of desired concentration."
    }
  },
  {
    id: 24,
    subject: "chemistry",
    chapter: "Solutions",
    difficulty: "medium",
    question: "Calculate the molality of a 0.5 M H₂SO₄ solution (density = 1.03 g/mL). (Molar mass of H₂SO₄ = 98 g/mol)",
    solution: {
      formula: "Molality = (M × 1000) / (d × 1000 - M × molar mass)",
      steps: [
        { label: "Step 1", text: "Understand the relationship between molarity and molality", math: "For 1 L solution: mass of solution = 1000 × 1.03 = 1030 g" },
        { label: "Step 2", text: "Calculate mass of solute", math: "mass of H₂SO₄ = 0.5 × 98 = 49 g" },
        { label: "Step 3", text: "Calculate mass of solvent", math: "mass of water = 1030 - 49 = 981 g = 0.981 kg" },
        { label: "Step 4", text: "Calculate molality", math: "m = 0.5/0.981 = 0.51 mol/kg" }
      ],
      answer: "0.51 mol/kg",
      explanation: "Molality is slightly different from molarity because molarity uses volume of solution while molality uses mass of solvent. For dilute aqueous solutions, difference is minimal."
    }
  },
  {
    id: 25,
    subject: "chemistry",
    chapter: "Solutions",
    difficulty: "medium",
    question: "Calculate the osmotic pressure of a 0.1 M glucose solution at 27°C. (Take R = 0.082 L·atm/mol·K)",
    solution: {
      formula: "π = CRT",
      steps: [
        { label: "Step 1", text: "Convert temperature to Kelvin", math: "T = 27 + 273 = 300 K" },
        { label: "Step 2", text: "Identify values", math: "C = 0.1 mol/L, R = 0.082 L·atm/mol·K" },
        { label: "Step 3", text: "Apply osmotic pressure formula", math: "π = 0.1 × 0.082 × 300" },
        { label: "Step 4", text: "Calculate", math: "π = 2.46 atm" }
      ],
      answer: "2.46 atm",
      explanation: "Osmotic pressure is a colligative property and depends only on number of solute particles. For ionic solutes, van't Hoff factor (i) must be included: π = iCRT."
    }
  },
  {
    id: 26,
    subject: "chemistry",
    chapter: "Solutions",
    difficulty: "medium",
    question: "Calculate the boiling point elevation when 18 g of glucose (molar mass = 180 g/mol) is dissolved in 1 kg of water. (Kb for water = 0.52 K·kg/mol)",
    solution: {
      formula: "ΔTb = Kb × m",
      steps: [
        { label: "Step 1", text: "Calculate moles of glucose", math: "n = 18/180 = 0.1 mol" },
        { label: "Step 2", text: "Calculate molality", math: "m = 0.1/1 = 0.1 mol/kg" },
        { label: "Step 3", text: "Apply boiling point elevation formula", math: "ΔTb = 0.52 × 0.1 = 0.052 K" },
        { label: "Step 4", text: "Calculate new boiling point", math: "Tb = 100 + 0.052 = 100.052°C" }
      ],
      answer: "Boiling point elevation = 0.052 K, New boiling point = 100.052°C",
      explanation: "Boiling point elevation is proportional to molality of solution. Non-volatile solutes raise boiling point because they lower vapor pressure of solvent."
    }
  },
  {
    id: 27,
    subject: "chemistry",
    chapter: "Solutions",
    difficulty: "medium",
    question: "Calculate the freezing point depression when 34.2 g of sucrose (molar mass = 342 g/mol) is dissolved in 500 g of water. (Kf for water = 1.86 K·kg/mol)",
    solution: {
      formula: "ΔTf = Kf × m",
      steps: [
        { label: "Step 1", text: "Calculate moles of sucrose", math: "n = 34.2/342 = 0.1 mol" },
        { label: "Step 2", text: "Calculate molality", math: "m = 0.1/0.5 = 0.2 mol/kg" },
        { label: "Step 3", text: "Apply freezing point depression formula", math: "ΔTf = 1.86 × 0.2 = 0.372 K" },
        { label: "Step 4", text: "Calculate new freezing point", math: "Tf = 0 - 0.372 = -0.372°C" }
      ],
      answer: "Freezing point depression = 0.372 K, New freezing point = -0.372°C",
      explanation: "Freezing point depression is also a colligative property. This is why salt is spread on icy roads - it lowers the freezing point of water, causing ice to melt."
    }
  },
  {
    id: 28,
    subject: "chemistry",
    chapter: "Electrochemistry",
    difficulty: "medium",
    question: "Calculate the EMF of the cell: Zn(s)|Zn²⁺(0.01 M)||Cu²⁺(1.0 M)|Cu(s) at 25°C. (E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = +0.34 V)",
    solution: {
      formula: "E = E° - (0.0591/n) log([products]/[reactants])",
      steps: [
        { label: "Step 1", text: "Calculate standard cell EMF", math: "E°cell = E°cathode - E°anode = 0.34 - (-0.76) = 1.10 V" },
        { label: "Step 2", text: "Write cell reaction and identify n", math: "Zn + Cu²⁺ → Zn²⁺ + Cu, n = 2" },
        { label: "Step 3", text: "Apply Nernst equation", math: "E = 1.10 - (0.0591/2) log(0.01/1.0)" },
        { label: "Step 4", text: "Calculate", math: "E = 1.10 - (0.02955) × (-2) = 1.10 + 0.0591" },
        { label: "Step 5", text: "Final EMF", math: "E = 1.159 V" }
      ],
      answer: "1.159 V",
      explanation: "The cell EMF increases when product concentration (Zn²⁺) is low and reactant concentration (Cu²⁺) is high, as predicted by Le Chatelier's principle."
    }
  },
  {
    id: 29,
    subject: "chemistry",
    chapter: "Electrochemistry",
    difficulty: "medium",
    question: "How much copper will be deposited when a current of 2 A is passed through CuSO₄ solution for 1 hour? (Molar mass of Cu = 64 g/mol, F = 96500 C/mol)",
    solution: {
      formula: "m = (M × I × t) / (n × F)",
      steps: [
        { label: "Step 1", text: "Calculate total charge passed", math: "Q = I × t = 2 × 3600 = 7200 C" },
        { label: "Step 2", text: "Identify values (Cu²⁺ + 2e⁻ → Cu, n = 2)", math: "M = 64 g/mol, n = 2, F = 96500 C/mol" },
        { label: "Step 3", text: "Apply Faraday's law", math: "m = (64 × 7200)/(2 × 96500)" },
        { label: "Step 4", text: "Calculate", math: "m = 460800/193000 = 2.387 g" }
      ],
      answer: "2.39 g of copper deposited",
      explanation: "Faraday's first law states that mass deposited is proportional to charge passed. More current or longer time means more deposition, useful in electroplating."
    }
  },
  {
    id: 30,
    subject: "chemistry",
    chapter: "Electrochemistry",
    difficulty: "easy",
    question: "Calculate the standard EMF of a galvanic cell made from Zn/Zn²⁺ and Fe/Fe²⁺ half-cells. (E°(Zn²⁺/Zn) = -0.76 V, E°(Fe²⁺/Fe) = -0.44 V)",
    solution: {
      formula: "E°cell = E°cathode - E°anode",
      steps: [
        { label: "Step 1", text: "Identify cathode and anode (higher E° is cathode)", math: "Fe²⁺/Fe has higher E° (-0.44 V > -0.76 V), so Fe is cathode" },
        { label: "Step 2", text: "Apply cell EMF formula", math: "E°cell = E°cathode - E°anode = -0.44 - (-0.76)" },
        { label: "Step 3", text: "Calculate", math: "E°cell = -0.44 + 0.76 = 0.32 V" }
      ],
      answer: "0.32 V",
      explanation: "Positive E°cell indicates spontaneous reaction. Zinc will oxidize (anode) and iron will reduce (cathode). The cell notation would be: Zn(s)|Zn²⁺(aq)||Fe²⁺(aq)|Fe(s)."
    }
  },
  {
    id: 31,
    subject: "chemistry",
    chapter: "Chemical Kinetics",
    difficulty: "easy",
    question: "The concentration of a reactant changes from 1.0 M to 0.25 M in 30 minutes. If the reaction is first order, find the rate constant.",
    solution: {
      formula: "k = (1/t) ln([A]₀/[A])",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "[A]₀ = 1.0 M, [A] = 0.25 M, t = 30 min" },
        { label: "Step 2", text: "Apply first order integrated rate law", math: "k = (1/30) ln(1.0/0.25)" },
        { label: "Step 3", text: "Calculate logarithm", math: "ln(4) = 1.386" },
        { label: "Step 4", text: "Calculate rate constant", math: "k = 1.386/30 = 0.0462 min⁻¹" }
      ],
      answer: "0.0462 min⁻¹ or 4.62 × 10⁻² min⁻¹",
      explanation: "For first order reaction, rate constant has units of time⁻¹. The concentration decreased to 1/4 of initial, which is 2 half-lives, so t½ = 15 min, k = 0.693/15 = 0.0462 min⁻¹."
    }
  },
  {
    id: 32,
    subject: "chemistry",
    chapter: "Chemical Kinetics",
    difficulty: "easy",
    question: "The half-life of a first order reaction is 20 minutes. Find the time required for the concentration to decrease to 12.5% of its initial value.",
    solution: {
      formula: "t = n × t½, where n is number of half-lives",
      steps: [
        { label: "Step 1", text: "Determine number of half-lives needed", math: "12.5% = 1/8 = (1/2)³, so n = 3 half-lives" },
        { label: "Step 2", text: "Calculate total time", math: "t = 3 × t½ = 3 × 20 = 60 minutes" },
        { label: "Step 3", text: "Verify using integrated rate law", math: "k = 0.693/20 = 0.03465 min⁻¹" },
        { label: "Step 4", text: "Verify", math: "t = (1/0.03465) ln(100/12.5) = (1/0.03465) × 2.079 = 60 min" }
      ],
      answer: "60 minutes",
      explanation: "After each half-life, concentration halves. After 3 half-lives: 100% → 50% → 25% → 12.5%. This exponential decay is characteristic of first order reactions."
    }
  },
  {
    id: 33,
    subject: "chemistry",
    chapter: "Chemical Kinetics",
    difficulty: "hard",
    question: "The rate constant of a reaction is 2.5 × 10⁻³ s⁻¹ at 27°C and 5.0 × 10⁻³ s⁻¹ at 37°C. Calculate the activation energy. (Take R = 8.314 J/mol·K)",
    solution: {
      formula: "log(k₂/k₁) = (Ea/2.303R) × (1/T₁ - 1/T₂)",
      steps: [
        { label: "Step 1", text: "Convert temperatures to Kelvin", math: "T₁ = 27 + 273 = 300 K, T₂ = 37 + 273 = 310 K" },
        { label: "Step 2", text: "Calculate log(k₂/k₁)", math: "log(5.0 × 10⁻³/2.5 × 10⁻³) = log(2) = 0.301" },
        { label: "Step 3", text: "Calculate temperature term", math: "1/T₁ - 1/T₂ = 1/300 - 1/310 = (310-300)/(300×310) = 10/93000 = 1.075 × 10⁻⁴" },
        { label: "Step 4", text: "Solve for activation energy", math: "Ea = (0.301 × 2.303 × 8.314)/(1.075 × 10⁻⁴) = 5.77/1.075 × 10⁻⁴" },
        { label: "Step 5", text: "Final calculation", math: "Ea = 53,674 J/mol ≈ 53.7 kJ/mol" }
      ],
      answer: "53.7 kJ/mol",
      explanation: "Activation energy is the minimum energy required for reaction. Higher Ea means more temperature sensitivity. The 10°C rise doubled the rate, which is typical for many reactions."
    }
  },
  {
    id: 34,
    subject: "chemistry",
    chapter: "Ionic Equilibrium",
    difficulty: "easy",
    question: "Calculate the pH of a 0.01 M HCl solution. (HCl is a strong acid)",
    solution: {
      formula: "pH = -log[H⁺]",
      steps: [
        { label: "Step 1", text: "HCl dissociates completely", math: "[H⁺] = 0.01 M = 10⁻² M" },
        { label: "Step 2", text: "Calculate pH", math: "pH = -log(10⁻²) = 2" },
        { label: "Step 3", text: "Verify", math: "pH = -log(0.01) = -(-2) = 2" }
      ],
      answer: "pH = 2",
      explanation: "Strong acids dissociate completely, so [H⁺] equals concentration of acid. pH scale is logarithmic - each unit change represents 10-fold change in [H⁺]."
    }
  },
  {
    id: 35,
    subject: "chemistry",
    chapter: "Ionic Equilibrium",
    difficulty: "medium",
    question: "Calculate the pH of a buffer solution containing 0.1 M CH₃COOH and 0.2 M CH₃COONa. (Ka for acetic acid = 1.8 × 10⁻⁵)",
    solution: {
      formula: "pH = pKa + log([salt]/[acid])",
      steps: [
        { label: "Step 1", text: "Calculate pKa", math: "pKa = -log(1.8 × 10⁻⁵) = 4.74" },
        { label: "Step 2", text: "Apply Henderson-Hasselbalch equation", math: "pH = 4.74 + log(0.2/0.1)" },
        { label: "Step 3", text: "Calculate log term", math: "log(2) = 0.301" },
        { label: "Step 4", text: "Calculate pH", math: "pH = 4.74 + 0.301 = 5.04" }
      ],
      answer: "pH = 5.04",
      explanation: "Buffer solutions resist pH changes. When [salt]/[acid] = 1, pH = pKa. Here salt concentration is twice acid concentration, making solution slightly basic than pKa."
    }
  },
  {
    id: 36,
    subject: "chemistry",
    chapter: "States of Matter",
    difficulty: "easy",
    question: "Calculate the volume occupied by 2 moles of an ideal gas at STP. (Take R = 0.0821 L·atm/mol·K, T = 273 K, P = 1 atm)",
    solution: {
      formula: "PV = nRT",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "n = 2 mol, T = 273 K, P = 1 atm, R = 0.0821 L·atm/mol·K" },
        { label: "Step 2", text: "Rearrange ideal gas equation", math: "V = nRT/P" },
        { label: "Step 3", text: "Substitute values", math: "V = (2 × 0.0821 × 273)/1" },
        { label: "Step 4", text: "Calculate", math: "V = 44.83 L" }
      ],
      answer: "44.83 L (approximately 22.4 L/mol at STP)",
      explanation: "At STP, 1 mole of any ideal gas occupies 22.4 L. So 2 moles occupy 44.8 L. This molar volume is useful for quick calculations in stoichiometry."
    }
  },
  {
    id: 37,
    subject: "chemistry",
    chapter: "States of Matter",
    difficulty: "easy",
    question: "A gas mixture contains N₂ and O₂ with partial pressures 0.6 atm and 0.4 atm respectively. Find the total pressure and mole fraction of each gas.",
    solution: {
      formula: "P_total = P₁ + P₂ + ..., χ₁ = P₁/P_total",
      steps: [
        { label: "Step 1", text: "Apply Dalton's law of partial pressures", math: "P_total = P_N₂ + P_O₂ = 0.6 + 0.4 = 1.0 atm" },
        { label: "Step 2", text: "Calculate mole fraction of N₂", math: "χ_N₂ = P_N₂/P_total = 0.6/1.0 = 0.6" },
        { label: "Step 3", text: "Calculate mole fraction of O₂", math: "χ_O₂ = P_O₂/P_total = 0.4/1.0 = 0.4" },
        { label: "Step 4", text: "Verify", math: "χ_N₂ + χ_O₂ = 0.6 + 0.4 = 1.0 ✓" }
      ],
      answer: "Total pressure = 1.0 atm, Mole fraction N₂ = 0.6, Mole fraction O₂ = 0.4",
      explanation: "Dalton's law states total pressure equals sum of partial pressures. Mole fraction equals ratio of partial pressure to total pressure for ideal gases."
    }
  },
  {
    id: 38,
    subject: "chemistry",
    chapter: "States of Matter",
    difficulty: "medium",
    question: "A gas at 2 atm pressure and 300 K occupies 5 L. If temperature is increased to 400 K at constant volume, find the new pressure.",
    solution: {
      formula: "P₁/T₁ = P₂/T₂ (Charles's law at constant volume)",
      steps: [
        { label: "Step 1", text: "Identify given values", math: "P₁ = 2 atm, T₁ = 300 K, T₂ = 400 K, V = constant" },
        { label: "Step 2", text: "Apply Gay-Lussac's law", math: "P₂ = P₁ × T₂/T₁" },
        { label: "Step 3", text: "Substitute values", math: "P₂ = 2 × 400/300" },
        { label: "Step 4", text: "Calculate", math: "P₂ = 800/300 = 2.67 atm" }
      ],
      answer: "2.67 atm",
      explanation: "At constant volume, pressure is directly proportional to temperature (Gay-Lussac's law). Temperature must always be in Kelvin for gas law calculations."
    }
  },
  {
    id: 39,
    subject: "chemistry",
    chapter: "Stoichiometry",
    difficulty: "medium",
    question: "In a titration, 25 mL of 0.1 M NaOH completely neutralizes 20 mL of HCl. Find the concentration of HCl solution.",
    solution: {
      formula: "M₁V₁ = M₂V₂ (for 1:1 reaction)",
      steps: [
        { label: "Step 1", text: "Write neutralization reaction", math: "NaOH + HCl → NaCl + H₂O (1:1 ratio)" },
        { label: "Step 2", text: "Apply law of equivalence", math: "moles of NaOH = moles of HCl" },
        { label: "Step 3", text: "Set up equation", math: "0.1 × 25 = M₂ × 20" },
        { label: "Step 4", text: "Solve for M₂", math: "M₂ = (0.1 × 25)/20 = 2.5/20 = 0.125 M" }
      ],
      answer: "0.125 M HCl",
      explanation: "At equivalence point, moles of acid equals moles of base. For reactions with different stoichiometry, we use: n₁M₁V₁ = n₂M₂V₂ where n is the number of H⁺ or OH⁻ ions."
    }
  },
  {
    id: 40,
    subject: "chemistry",
    chapter: "Electrochemistry",
    difficulty: "medium",
    question: "The conductivity of 0.02 M KCl solution is 0.00248 S/cm. Calculate the molar conductivity. (Molar mass of KCl = 74.5 g/mol)",
    solution: {
      formula: "Λm = κ/c (where c is in mol/m³)",
      steps: [
        { label: "Step 1", text: "Convert concentration to mol/m³", math: "c = 0.02 mol/L = 0.02 × 1000 = 20 mol/m³" },
        { label: "Step 2", text: "Convert conductivity to S/m", math: "κ = 0.00248 S/cm = 0.00248 × 100 = 0.248 S/m" },
        { label: "Step 3", text: "Calculate molar conductivity", math: "Λm = 0.248/20 = 0.0124 S·m²/mol" },
        { label: "Step 4", text: "Convert to S·cm²/mol", math: "Λm = 0.0124 × 10⁴ = 124 S·cm²/mol" }
      ],
      answer: "124 S·cm²/mol or 0.0124 S·m²/mol",
      explanation: "Molar conductivity increases with dilution as ions move more freely. At infinite dilution, molar conductivity is sum of individual ionic conductivities (Kohlrausch's law)."
    }
  }
];