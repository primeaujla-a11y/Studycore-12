window.FormulasDB = [
  {
    "id": 1,
    "name": "Coulomb's Law",
    "formula": "F = kq1q2/r²",
    "subject": "physics",
    "chapter": "Electrostatics",
    "meaning": "The force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them",
    "variables": {
      "F": "Force (N)",
      "k": "Coulomb constant (9×10⁹ N·m²/C²)",
      "q₁": "Charge 1 (C)",
      "q₂": "Charge 2 (C)",
      "r": "Distance between charges (m)"
    },
    "example": "Two charges of 2 μС and 3 μС are 0.5 m apart. F = 9×10⁹ × (2×10⁻⁶) × (3×10⁻⁶) / (0.5)² = 0.216 N"
  },
  {
    "id": 2,
    "name": "Electric Field",
    "formula": "E = F/q",
    "subject": "physics",
    "chapter": "Electrostatics",
    "meaning": "The electric field strength at a point is the force experienced per unit positive charge placed at that point",
    "variables": {
      "E": "Electric field (N/C)",
      "F": "Force (N)",
      "q": "Test charge (C)"
    },
    "example": "A charge of 2 μС experiences a force of 4×10⁻³ N. E = 4×10⁻³ / (2×10⁻⁶) = 2000 N/C"
  },
  {
    "id": 3,
    "name": "Electric Potential",
    "formula": "V = W/q",
    "subject": "physics",
    "chapter": "Electrostatics",
    "meaning": "Electric potential at a point is the work done in bringing a unit positive charge from infinity to that point",
    "variables": {
      "V": "Electric potential (V)",
      "W": "Work done (J)",
      "q": "Charge (C)"
    },
    "example": "Work done to bring 5 μС charge to a point is 0.02 J. V = 0.02 / (5×10⁻⁶) = 4000 V"
  },
  {
    "id": 4,
    "name": "Capacitance",
    "formula": "C = Q/V",
    "subject": "physics",
    "chapter": "Capacitance",
    "meaning": "Capacitance is the ratio of charge stored on either conductor to the potential difference between them",
    "variables": {
      "C": "Capacitance (F)",
      "Q": "Charge (C)",
      "V": "Potential difference (V)"
    },
    "example": "A capacitor stores 10 μС at 5 V. C = 10×10⁻⁶ / 5 = 2 μF"
  },
  {
    "id": 5,
    "name": "Parallel Plate Capacitor",
    "formula": "C = ε₀A/d",
    "subject": "physics",
    "chapter": "Capacitance",
    "meaning": "The capacitance of a parallel plate capacitor depends on the area of plates, separation between them, and the permittivity of free space",
    "variables": {
      "C": "Capacitance (F)",
      "ε₀": "Permittivity of free space (8.85×10⁻¹² F/m)",
      "A": "Area of each plate (m²)",
      "d": "Distance between plates (m)"
    },
    "example": "Plates of area 0.02 m² separated by 1 mm. C = 8.85×10⁻¹² × 0.02 / 0.001 = 1.77×10⁻¹² F = 177 pF"
  },
  {
    "id": 6,
    "name": "Current",
    "formula": "I = Q/t",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "Electric current is the rate of flow of charge through a cross-section of a conductor",
    "variables": {
      "I": "Current (A)",
      "Q": "Charge (C)",
      "t": "Time (s)"
    },
    "example": "50 C of charge flows in 10 s. I = 50/10 = 5 A"
  },
  {
    "id": 7,
    "name": "Ohm's Law",
    "formula": "V = IR",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "The potential difference across a conductor is directly proportional to the current through it, provided physical conditions remain constant",
    "variables": {
      "V": "Potential difference (V)",
      "I": "Current (A)",
      "R": "Resistance (Ω)"
    },
    "example": "Current of 3 A flows through 4 Ω resistor. V = 3 × 4 = 12 V"
  },
  {
    "id": 8,
    "name": "Resistance",
    "formula": "R = ρl/A",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "Resistance of a conductor depends on its resistivity, length, and cross-sectional area",
    "variables": {
      "R": "Resistance (Ω)",
      "ρ": "Resistivity (Ω·m)",
      "l": "Length (m)",
      "A": "Cross-sectional area (m²)"
    },
    "example": "Copper wire (ρ = 1.7×10⁻⁸ Ω·m), length 2 m, area 1 mm². R = 1.7×10⁻⁸ × 2 / 10⁻⁶ = 0.034 Ω"
  },
  {
    "id": 9,
    "name": "Electrical Power",
    "formula": "P = VI = I²R = V²/R",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "Electrical power is the rate at which electrical energy is transferred by an electric circuit",
    "variables": {
      "P": "Power (W)",
      "V": "Voltage (V)",
      "I": "Current (A)",
      "R": "Resistance (Ω)"
    },
    "example": "12 V across 4 Ω resistor. P = V²/R = 144/4 = 36 W"
  },
  {
    "id": 10,
    "name": "Series Resistance",
    "formula": "R = R₁ + R₂ + R₃ + ...",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "In a series combination of resistors, the equivalent resistance is the sum of individual resistances",
    "variables": {
      "R": "Equivalent resistance (Ω)",
      "R₁": "Resistance 1 (Ω)",
      "R₂": "Resistance 2 (Ω)"
    },
    "example": "R₁ = 2 Ω, R₂ = 3 Ω, R₃ = 5 Ω in series. R = 2 + 3 + 5 = 10 Ω"
  },
  {
    "id": 11,
    "name": "Parallel Resistance",
    "formula": "1/R = 1/R₁ + 1/R₂ + 1/R₃ + ...",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "In a parallel combination of resistors, the reciprocal of equivalent resistance equals the sum of reciprocals of individual resistances",
    "variables": {
      "R": "Equivalent resistance (Ω)",
      "R₁": "Resistance 1 (Ω)",
      "R₂": "Resistance 2 (Ω)"
    },
    "example": "R₁ = 6 Ω, R₂ = 3 Ω in parallel. 1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω"
  },
  {
    "id": 12,
    "name": "Kirchhoff's Voltage Law",
    "formula": "ΣV = 0 (around a closed loop)",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "The algebraic sum of all potential differences around any closed loop in a circuit is zero (conservation of energy)",
    "variables": {
      "V": "Potential difference (V)"
    },
    "example": "In a loop with 12V battery and two resistors of 4V and 8V: 12 - 4 - 8 = 0"
  },
  {
    "id": 13,
    "name": "Kirchhoff's Current Law",
    "formula": "ΣI(in) = ΣI(out)",
    "subject": "physics",
    "chapter": "Current Electricity",
    "meaning": "The sum of currents entering a junction equals the sum of currents leaving it (conservation of charge)",
    "variables": {
      "I": "Current (A)"
    },
    "example": "At a junction, I₁ = 3A and I₂ = 2A enter. I₃ leaving = 3 + 2 = 5A"
  },
  {
    "id": 14,
    "name": "Biot-Savart Law",
    "formula": "dB = (μ₀/4π)(Idl sinθ/r²)",
    "subject": "physics",
    "chapter": "Magnetism",
    "meaning": "The magnetic field dB due to a current element Idl at a distance r makes an angle θ with the current element",
    "variables": {
      "dB": "Magnetic field due to element (T)",
      "μ₀": "Permeability of free space (4π×10⁻⁷ T·m/A)",
      "I": "Current (A)",
      "dl": "Length of current element (m)",
      "θ": "Angle between dl and r",
      "r": "Distance from element (m)"
    },
    "example": "I = 5A, dl = 0.01m, θ = 90°, r = 0.1m. dB = 10⁻⁷ × 5 × 0.01 × 1 / (0.1)² = 5×10⁻⁷ T"
  },
  {
    "id": 15,
    "name": "Ampere's Circuital Law",
    "formula": "∯B·dl = μ₀I",
    "subject": "physics",
    "chapter": "Magnetism",
    "meaning": "The line integral of magnetic field around a closed path equals μ₀ times the net current enclosed by the path",
    "variables": {
      "B": "Magnetic field (T)",
      "dl": "Infinitesimal length element (m)",
      "μ₀": "Permeability of free space (4π×10⁻⁷ T·m/A)",
      "I": "Enclosed current (A)"
    },
    "example": "For a long straight wire carrying 10A at r = 0.05m: B = μ₀I/(2πr) = 4×10⁻⁵ T"
  },
  {
    "id": 16,
    "name": "Force on Moving Charge in Magnetic Field",
    "formula": "F = qvB sinθ",
    "subject": "physics",
    "chapter": "Magnetism",
    "meaning": "A charged particle moving in a magnetic field experiences a force perpendicular to both velocity and field",
    "variables": {
      "F": "Magnetic force (N)",
      "q": "Charge (C)",
      "v": "Velocity (m/s)",
      "B": "Magnetic field (T)",
      "θ": "Angle between v and B"
    },
    "example": "Proton (q = 1.6×10⁻¹⁹ C) moves at 10⁶ m/s at 30° to 0.5 T field. F = 1.6×10⁻¹⁹ × 10⁶ × 0.5 × 0.5 = 4×10⁻¹⁴ N"
  },
  {
    "id": 17,
    "name": "Magnetic Moment",
    "formula": "M = NIA",
    "subject": "physics",
    "chapter": "Magnetism",
    "meaning": "The magnetic moment of a current-carrying coil is the product of number of turns, current, and area of the coil",
    "variables": {
      "M": "Magnetic moment (A·m²)",
      "N": "Number of turns",
      "I": "Current (A)",
      "A": "Area of coil (m²)"
    },
    "example": "Coil with 50 turns, area 0.01 m², carrying 2 A. M = 50 × 2 × 0.01 = 1 A·m²"
  },
  {
    "id": 18,
    "name": "Faraday's Law of Electromagnetic Induction",
    "formula": "ε = -dΦ/dt",
    "subject": "physics",
    "chapter": "Electromagnetic Induction",
    "meaning": "The induced EMF in a circuit is equal to the negative rate of change of magnetic flux through the circuit",
    "variables": {
      "ε": "Induced EMF (V)",
      "Φ": "Magnetic flux (Wb)",
      "t": "Time (s)"
    },
    "example": "Flux changes from 0.02 Wb to 0.008 Wb in 0.5 s. ε = -(0.008-0.02)/0.5 = 0.024 V"
  },
  {
    "id": 19,
    "name": "Self Inductance",
    "formula": "ε = -L(dI/dt)",
    "subject": "physics",
    "chapter": "Electromagnetic Induction",
    "meaning": "The induced EMF in a coil is proportional to the rate of change of current through it, with the constant of proportionality being self-inductance",
    "variables": {
      "ε": "Induced EMF (V)",
      "L": "Self-inductance (H)",
      "I": "Current (A)",
      "t": "Time (s)"
    },
    "example": "Current changes from 2A to 5A in 0.1s in a 0.5H inductor. ε = -0.5 × (5-2)/0.1 = -15 V"
  },
  {
    "id": 20,
    "name": "Mutual Inductance",
    "formula": "ε₂ = -M(dI₁/dt)",
    "subject": "physics",
    "chapter": "Electromagnetic Induction",
    "meaning": "The EMF induced in one coil due to changing current in a neighboring coil is proportional to the rate of change of current",
    "variables": {
      "ε₂": "Induced EMF in coil 2 (V)",
      "M": "Mutual inductance (H)",
      "I₁": "Current in coil 1 (A)",
      "t": "Time (s)"
    },
    "example": "Current in coil 1 changes at 100 A/s, M = 0.02 H. ε₂ = -0.02 × 100 = -2 V"
  },
  {
    "id": 21,
    "name": "AC Voltage",
    "formula": "V = V₀ sin(ωt)",
    "subject": "physics",
    "chapter": "Alternating Current",
    "meaning": "An alternating voltage varies sinusoidally with time, where V₀ is the peak voltage and ω is the angular frequency",
    "variables": {
      "V": "Instantaneous voltage (V)",
      "V₀": "Peak voltage (V)",
      "ω": "Angular frequency (rad/s)",
      "t": "Time (s)"
    },
    "example": "V₀ = 311 V, f = 50 Hz, at t = 0.005s: V = 311 × sin(2π × 50 × 0.005) = 311 × sin(1.57) = 311 V"
  },
  {
    "id": 22,
    "name": "RMS Values",
    "formula": "Vrms = V₀/√2, Irms = I₀/√2",
    "subject": "physics",
    "chapter": "Alternating Current",
    "meaning": "The RMS (root mean square) values represent the effective values of AC voltage and current that produce the same heating effect as DC",
    "variables": {
      "Vrms": "RMS voltage (V)",
      "V₀": "Peak voltage (V)",
      "Irms": "RMS current (A)",
      "I₀": "Peak current (A)"
    },
    "example": "Peak voltage 170 V. Vrms = 170/√2 = 120 V (standard household AC)"
  },
  {
    "id": 23,
    "name": "Inductive Reactance",
    "formula": "XL = ωL = 2πfL",
    "subject": "physics",
    "chapter": "Alternating Current",
    "meaning": "Inductive reactance is the opposition offered by an inductor to the flow of alternating current",
    "variables": {
      "XL": "Inductive reactance (Ω)",
      "L": "Inductance (H)",
      "f": "Frequency (Hz)",
      "ω": "Angular frequency (rad/s)"
    },
    "example": "L = 0.1 H, f = 50 Hz. XL = 2π × 50 × 0.1 = 31.4 Ω"
  },
  {
    "id": 24,
    "name": "Capacitive Reactance",
    "formula": "XC = 1/(ωC) = 1/(2πfC)",
    "subject": "physics",
    "chapter": "Alternating Current",
    "meaning": "Capacitive reactance is the opposition offered by a capacitor to the flow of alternating current",
    "variables": {
      "XC": "Capacitive reactance (Ω)",
      "C": "Capacitance (F)",
      "f": "Frequency (Hz)",
      "ω": "Angular frequency (rad/s)"
    },
    "example": "C = 10 μF, f = 50 Hz. XC = 1/(2π × 50 × 10×10⁻⁶) = 318 Ω"
  },
  {
    "id": 25,
    "name": "LCR Circuit Impedance",
    "formula": "Z = √(R² + (XL - XC)²)",
    "subject": "physics",
    "chapter": "Alternating Current",
    "meaning": "The impedance of a series LCR circuit is the total opposition to current flow, combining resistance, inductive and capacitive reactances",
    "variables": {
      "Z": "Impedance (Ω)",
      "R": "Resistance (Ω)",
      "XL": "Inductive reactance (Ω)",
      "XC": "Capacitive reactance (Ω)"
    },
    "example": "R = 30 Ω, XL = 50 Ω, XC = 20 Ω. Z = √(900 + 900) = √1800 = 42.4 Ω"
  },
  {
    "id": 26,
    "name": "Resonance Frequency",
    "formula": "f = 1/(2π√(LC))",
    "subject": "physics",
    "chapter": "Alternating Current",
    "meaning": "At resonance, the inductive and capacitive reactances are equal, and the circuit impedance is minimum (equal to R)",
    "variables": {
      "f": "Resonance frequency (Hz)",
      "L": "Inductance (H)",
      "C": "Capacitance (F)"
    },
    "example": "L = 0.1 H, C = 10 μF. f = 1/(2π√(0.1 × 10⁻⁵)) = 159 Hz"
  },
  {
    "id": 27,
    "name": "Transformer Equation",
    "formula": "Vs/Vp = Ns/Np",
    "subject": "physics",
    "chapter": "Alternating Current",
    "meaning": "The ratio of secondary to primary voltage equals the ratio of number of turns in secondary to primary coil",
    "variables": {
      "Vs": "Secondary voltage (V)",
      "Vp": "Primary voltage (V)",
      "Ns": "Number of turns in secondary",
      "Np": "Number of turns in primary"
    },
    "example": "Np = 1000, Ns = 200, Vp = 220 V. Vs = 220 × 200/1000 = 44 V"
  },
  {
    "id": 28,
    "name": "Snell's Law",
    "formula": "n₁ sinθ₁ = n₂ sinθ₂",
    "subject": "physics",
    "chapter": "Optics",
    "meaning": "When light passes from one medium to another, the ratio of sine of angle of incidence to sine of angle of refraction is constant",
    "variables": {
      "n₁": "Refractive index of medium 1",
      "θ₁": "Angle of incidence",
      "n₂": "Refractive index of medium 2",
      "θ₂": "Angle of refraction"
    },
    "example": "Air (n₁ = 1) to glass (n₂ = 1.5), θ₁ = 30°. sinθ₂ = sin30°/1.5 = 0.333, θ₂ = 19.5°"
  },
  {
    "id": 29,
    "name": "Mirror Formula",
    "formula": "1/v + 1/u = 1/f",
    "subject": "physics",
    "chapter": "Optics",
    "meaning": "The relationship between object distance, image distance, and focal length for a spherical mirror",
    "variables": {
      "v": "Image distance (m)",
      "u": "Object distance (m)",
      "f": "Focal length (m)"
    },
    "example": "Object at 30 cm, f = 10 cm (concave). 1/v = 1/10 - 1/(-30) = 4/30, v = 7.5 cm"
  },
  {
    "id": 30,
    "name": "Lens Formula",
    "formula": "1/v - 1/u = 1/f",
    "subject": "physics",
    "chapter": "Optics",
    "meaning": "The relationship between object distance, image distance, and focal length for a thin lens",
    "variables": {
      "v": "Image distance (m)",
      "u": "Object distance (m)",
      "f": "Focal length (m)"
    },
    "example": "Object at 20 cm, f = 15 cm (convex). 1/v = 1/15 + 1/(-20) = 1/60, v = 60 cm"
  },
  {
    "id": 31,
    "name": "Magnification",
    "formula": "m = h'/h = v/u",
    "subject": "physics",
    "chapter": "Optics",
    "meaning": "Magnification is the ratio of image height to object height, or image distance to object distance",
    "variables": {
      "m": "Magnification",
      "h'": "Image height (m)",
      "h": "Object height (m)",
      "v": "Image distance (m)",
      "u": "Object distance (m)"
    },
    "example": "v = -60 cm, u = -20 cm. m = (-60)/(-20) = 3 (image is 3 times larger)"
  },
  {
    "id": 32,
    "name": "Prism Formula",
    "formula": "n = sin((A+δm)/2)/sin(A/2)",
    "subject": "physics",
    "chapter": "Optics",
    "meaning": "The refractive index of prism material in terms of angle of prism A and minimum deviation δm",
    "variables": {
      "n": "Refractive index",
      "A": "Angle of prism (degrees)",
      "δm": "Minimum deviation (degrees)"
    },
    "example": "A = 60°, δm = 40°. n = sin((60+40)/2)/sin(60/2) = sin50°/sin30° = 0.766/0.5 = 1.532"
  },
  {
    "id": 33,
    "name": "Young's Double Slit Fringe Width",
    "formula": "β = λD/d",
    "subject": "physics",
    "chapter": "Wave Optics",
    "meaning": "The fringe width in Young's double slit experiment depends on wavelength, screen distance, and slit separation",
    "variables": {
      "β": "Fringe width (m)",
      "λ": "Wavelength of light (m)",
      "D": "Distance of screen from slits (m)",
      "d": "Distance between slits (m)"
    },
    "example": "λ = 600 nm, D = 1 m, d = 0.5 mm. β = 600×10⁻⁹ × 1 / (0.5×10⁻³) = 1.2 mm"
  },
  {
    "id": 34,
    "name": "de Broglie Wavelength",
    "formula": "λ = h/p = h/mv",
    "subject": "physics",
    "chapter": "Modern Physics",
    "meaning": "Every moving particle has an associated wavelength inversely proportional to its momentum",
    "variables": {
      "λ": "de Broglie wavelength (m)",
      "h": "Planck's constant (6.63×10⁻³⁴ J·s)",
      "p": "Momentum (kg·m/s)",
      "m": "Mass (kg)",
      "v": "Velocity (m/s)"
    },
    "example": "Electron (m = 9.1×10⁻³¹ kg) at 10⁷ m/s. λ = 6.63×10⁻³⁴ / (9.1×10⁻³¹ × 10⁷) = 7.3×10⁻¹¹ m = 0.073 nm"
  },
  {
    "id": 35,
    "name": "Photoelectric Equation",
    "formula": "hf = φ + KEmax",
    "subject": "physics",
    "chapter": "Modern Physics",
    "meaning": "The energy of incident photon equals the work function plus the maximum kinetic energy of emitted photoelectron",
    "variables": {
      "h": "Planck's constant (6.63×10⁻³⁴ J·s)",
      "f": "Frequency of incident light (Hz)",
      "φ": "Work function (J)",
      "KEmax": "Maximum kinetic energy (J)"
    },
    "example": "UV light (f = 10⁻⁵ Hz) on metal (φ = 3×10⁻¹⁹ J). KEmax = 6.63×10⁻³⁴ × 10⁻⁵ - 3×10⁻¹⁹ = 3.63×10⁻¹⁹ J"
  },
  {
    "id": 36,
    "name": "Bohr Radius",
    "formula": "r = n²a₀/Z",
    "subject": "physics",
    "chapter": "Atomic Physics",
    "meaning": "The radius of nth orbit in hydrogen-like atom is proportional to n² and inversely proportional to atomic number",
    "variables": {
      "r": "Radius of orbit (m)",
      "n": "Principal quantum number",
      "a₀": "Bohr radius (5.29×10⁻¹¹ m)",
      "Z": "Atomic number"
    },
    "example": "Hydrogen (Z=1), n=2. r = 4 × 5.29×10⁻¹¹ / 1 = 2.12×10⁻¹² m"
  },
  {
    "id": 37,
    "name": "Bohr Energy Levels",
    "formula": "E = -13.6Z²/n² eV",
    "subject": "physics",
    "chapter": "Atomic Physics",
    "meaning": "The energy of an electron in nth orbit of a hydrogen-like atom is inversely proportional to n²",
    "variables": {
      "E": "Energy (eV)",
      "Z": "Atomic number",
      "n": "Principal quantum number"
    },
    "example": "Hydrogen (Z=1), n=3. E = -13.6 × 1 / 9 = -1.51 eV"
  },
  {
    "id": 38,
    "name": "Radioactive Decay Law",
    "formula": "N = N₀e^(-λt)",
    "subject": "physics",
    "chapter": "Nuclear Physics",
    "meaning": "The number of undecayed nuclei decreases exponentially with time",
    "variables": {
      "N": "Number of nuclei at time t",
      "N₀": "Initial number of nuclei",
      "λ": "Decay constant (s⁻¹)",
      "t": "Time (s)"
    },
    "example": "N₀ = 1000, λ = 0.05 s⁻¹, t = 20 s. N = 1000 × e^(-1) = 368 nuclei"
  },
  {
    "id": 39,
    "name": "Half-Life (Nuclear)",
    "formula": "t½ = 0.693/λ",
    "subject": "physics",
    "chapter": "Nuclear Physics",
    "meaning": "The half-life of a radioactive substance is the time required for half of the nuclei to decay",
    "variables": {
      "t½": "Half-life (s)",
      "λ": "Decay constant (s⁻¹)"
    },
    "example": "λ = 0.035 s⁻¹. t½ = 0.693/0.035 = 19.8 s"
  },
  {
    "id": 40,
    "name": "Mass-Energy Equivalence",
    "formula": "E = mc²",
    "subject": "physics",
    "chapter": "Nuclear Physics",
    "meaning": "Mass and energy are equivalent; a small amount of mass can be converted into a large amount of energy",
    "variables": {
      "E": "Energy (J)",
      "m": "Mass (kg)",
      "c": "Speed of light (3×10⁸ m/s)"
    },
    "example": "Mass defect of 0.003 amu (5×10⁻³⁰ kg). E = 5×10⁻³⁰ × (3×10⁸)² = 4.5×10⁻¹³ J = 2.8 MeV"
  },
  {
    "id": 41,
    "name": "Activity",
    "formula": "A = λN",
    "subject": "physics",
    "chapter": "Nuclear Physics",
    "meaning": "The activity of a radioactive substance is the number of decays per unit time",
    "variables": {
      "A": "Activity (Bq)",
      "λ": "Decay constant (s⁻¹)",
      "N": "Number of undecayed nuclei"
    },
    "example": "λ = 0.02 s⁻¹, N = 5×10⁶ nuclei. A = 0.02 × 5×10⁶ = 10⁵ Bq = 100 kBq"
  },
  {
    "id": 42,
    "name": "Gravitational Force",
    "formula": "F = Gm₁m₂/r²",
    "subject": "physics",
    "chapter": "Gravitation",
    "meaning": "Every particle attracts every other particle with a force proportional to the product of masses and inversely proportional to the square of distance",
    "variables": {
      "F": "Gravitational force (N)",
      "G": "Gravitational constant (6.67×10⁻¹¹ N·m²/kg²)",
      "m₁": "Mass 1 (kg)",
      "m₂": "Mass 2 (kg)",
      "r": "Distance between masses (m)"
    },
    "example": "Two 60 kg people 2 m apart. F = 6.67×10⁻¹¹ × 60 × 60 / 4 = 6×10⁻⁸ N"
  },
  {
    "id": 43,
    "name": "Escape Velocity",
    "formula": "ve = √(2gR)",
    "subject": "physics",
    "chapter": "Gravitation",
    "meaning": "The minimum velocity with which a body must be projected upward from the surface of Earth to escape gravitational influence",
    "variables": {
      "ve": "Escape velocity (m/s)",
      "g": "Acceleration due to gravity (9.8 m/s²)",
      "R": "Radius of Earth (6.4×10⁶ m)"
    },
    "example": "ve = √(2 × 9.8 × 6.4×10⁶) = 11.2×10³ m/s = 11.2 km/s"
  },
  {
    "id": 44,
    "name": "Centripetal Force",
    "formula": "F = mv²/r",
    "subject": "physics",
    "chapter": "Circular Motion",
    "meaning": "The force required to keep a body moving in a circular path, directed towards the center",
    "variables": {
      "F": "Centripetal force (N)",
      "m": "Mass (kg)",
      "v": "Velocity (m/s)",
      "r": "Radius of circle (m)"
    },
    "example": "m = 2 kg, v = 3 m/s, r = 1.5 m. F = 2 × 9 / 1.5 = 12 N"
  },
  {
    "id": 45,
    "name": "Kinetic Energy",
    "formula": "KE = ½mv²",
    "subject": "physics",
    "chapter": "Work, Energy and Power",
    "meaning": "The energy possessed by a body due to its motion",
    "variables": {
      "KE": "Kinetic energy (J)",
      "m": "Mass (kg)",
      "v": "Velocity (m/s)"
    },
    "example": "m = 5 kg, v = 4 m/s. KE = 0.5 × 5 × 16 = 40 J"
  },
  {
    "id": 46,
    "name": "Work Done by Force",
    "formula": "W = Fs cosθ",
    "subject": "physics",
    "chapter": "Work, Energy and Power",
    "meaning": "Work done by a force is the product of force, displacement, and cosine of angle between them",
    "variables": {
      "W": "Work done (J)",
      "F": "Force (N)",
      "s": "Displacement (m)",
      "θ": "Angle between F and s"
    },
    "example": "F = 10 N, s = 5 m, θ = 60°. W = 10 × 5 × cos60° = 25 J"
  },
  {
    "id": 47,
    "name": "Simple Harmonic Motion Displacement",
    "formula": "x = A sin(ωt + φ)",
    "subject": "physics",
    "chapter": "Oscillations",
    "meaning": "The displacement of a particle in SHM varies sinusoidally with time",
    "variables": {
      "x": "Displacement (m)",
      "A": "Amplitude (m)",
      "ω": "Angular frequency (rad/s)",
      "t": "Time (s)",
      "φ": "Phase constant (rad)"
    },
    "example": "A = 0.1 m, ω = 10 rad/s, φ = 0, at t = 0.1s: x = 0.1 × sin(1) = 0.084 m"
  },
  {
    "id": 48,
    "name": "Time Period of Spring",
    "formula": "T = 2π√(m/k)",
    "subject": "physics",
    "chapter": "Oscillations",
    "meaning": "The time period of a mass-spring system depends on mass and spring constant",
    "variables": {
      "T": "Time period (s)",
      "m": "Mass (kg)",
      "k": "Spring constant (N/m)"
    },
    "example": "m = 0.5 kg, k = 200 N/m. T = 2π√(0.5/200) = 2π × 0.05 = 0.314 s"
  },
  {
    "id": 49,
    "name": "Energy Stored in Capacitor",
    "formula": "U = ½CV² = Q²/(2C)",
    "subject": "physics",
    "chapter": "Capacitance",
    "meaning": "The energy stored in a capacitor is proportional to the square of voltage or charge",
    "variables": {
      "U": "Energy stored (J)",
      "C": "Capacitance (F)",
      "V": "Voltage (V)",
      "Q": "Charge (C)"
    },
    "example": "C = 10 μF, V = 100 V. U = 0.5 × 10⁻⁵ × 10000 = 0.05 J"
  },
  {
    "id": 50,
    "name": "Magnetic Flux",
    "formula": "Φ = BA cosθ",
    "subject": "physics",
    "chapter": "Electromagnetic Induction",
    "meaning": "Magnetic flux through a surface is the product of magnetic field, area, and cosine of angle between them",
    "variables": {
      "Φ": "Magnetic flux (Wb)",
      "B": "Magnetic field (T)",
      "A": "Area (m²)",
      "θ": "Angle between B and normal to surface"
    },
    "example": "B = 0.5 T, A = 0.2 m², θ = 0°. Φ = 0.5 × 0.2 × 1 = 0.1 Wb"
  },
  {
    "id": 51,
    "name": "Molarity",
    "formula": "M = moles of solute / Volume of solution (L)",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "Molarity is the number of moles of solute per liter of solution",
    "variables": {
      "M": "Molarity (mol/L)",
      "moles": "Amount of solute (mol)",
      "Volume": "Volume of solution (L)"
    },
    "example": "58.5 g NaCl (1 mol) in 500 mL solution. M = 1 / 0.5 = 2 mol/L"
  },
  {
    "id": 52,
    "name": "Molality",
    "formula": "m = moles of solute / Mass of solvent (kg)",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "Molality is the number of moles of solute per kilogram of solvent",
    "variables": {
      "m": "Molality (mol/kg)",
      "moles": "Amount of solute (mol)",
      "Mass": "Mass of solvent (kg)"
    },
    "example": "1 mol glucose (180 g) in 500 g water. m = 1 / 0.5 = 2 mol/kg"
  },
  {
    "id": 53,
    "name": "Mole Fraction",
    "formula": "χ₁ = n₁/(n₁ + n₂)",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "Mole fraction is the ratio of moles of one component to the total moles of all components",
    "variables": {
      "χ₁": "Mole fraction of component 1",
      "n₁": "Moles of component 1",
      "n₂": "Moles of component 2"
    },
    "example": "2 mol water + 3 mol ethanol. χwater = 2/(2+3) = 0.4"
  },
  {
    "id": 54,
    "name": "Normality",
    "formula": "N = equivalents of solute / Volume of solution (L)",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "Normality is the number of gram equivalents of solute per liter of solution",
    "variables": {
      "N": "Normality (eq/L)",
      "equivalents": "Gram equivalents of solute",
      "Volume": "Volume of solution (L)"
    },
    "example": "49 g H₂SO₄ (0.5 mol, 2 eq) in 500 mL. N = 2 / 0.5 = 4 N"
  },
  {
    "id": 55,
    "name": "Dilution Formula",
    "formula": "M₁V₁ = M₂V₂",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "The product of molarity and volume remains constant when a solution is diluted",
    "variables": {
      "M₁": "Initial molarity (mol/L)",
      "V₁": "Initial volume (L)",
      "M₂": "Final molarity (mol/L)",
      "V₂": "Final volume (L)"
    },
    "example": "10 mL of 6 M HCl diluted to 60 mL. M₂ = (6 × 10) / 60 = 1 M"
  },
  {
    "id": 56,
    "name": "Osmotic Pressure",
    "formula": "π = iCRT",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "Osmotic pressure is directly proportional to molarity, temperature, and van't Hoff factor",
    "variables": {
      "π": "Osmotic pressure (atm)",
      "i": "van't Hoff factor",
      "C": "Molarity (mol/L)",
      "R": "Gas constant (0.0821 L·atm/mol·K)",
      "T": "Temperature (K)"
    },
    "example": "0.1 M glucose at 300 K. π = 1 × 0.1 × 0.0821 × 300 = 2.46 atm"
  },
  {
    "id": 57,
    "name": "Boiling Point Elevation",
    "formula": "ΔTb = iKbm",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "The boiling point of a solution is elevated when a non-volatile solute is added",
    "variables": {
      "ΔTb": "Elevation in boiling point (°C)",
      "i": "van't Hoff factor",
      "Kb": "Molal elevation constant (°C·kg/mol)",
      "m": "Molality (mol/kg)"
    },
    "example": "0.5 m NaCl in water (Kb = 0.52 °C/m). ΔTb = 2 × 0.52 × 0.5 = 0.52 °C"
  },
  {
    "id": 58,
    "name": "Freezing Point Depression",
    "formula": "ΔTf = iKfm",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "The freezing point of a solution is depressed when a non-volatile solute is added",
    "variables": {
      "ΔTf": "Depression in freezing point (°C)",
      "i": "van't Hoff factor",
      "Kf": "Molal depression constant (°C·kg/mol)",
      "m": "Molality (mol/kg)"
    },
    "example": "1 m CaCl₂ in water (Kf = 1.86 °C/m). ΔTf = 3 × 1.86 × 1 = 5.58 °C"
  },
  {
    "id": 59,
    "name": "Raoult's Law",
    "formula": "P = P°χsolvent",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "The vapor pressure of a solvent over a solution equals the vapor pressure of pure solvent multiplied by its mole fraction",
    "variables": {
      "P": "Vapor pressure of solution (mmHg)",
      "P°": "Vapor pressure of pure solvent (mmHg)",
      "χsolvent": "Mole fraction of solvent"
    },
    "example": "Pure water P° = 24 mmHg, χwater = 0.9. P = 24 × 0.9 = 21.6 mmHg"
  },
  {
    "id": 60,
    "name": "Nernst Equation",
    "formula": "E = E° - (RT/nF)lnQ",
    "subject": "chemistry",
    "chapter": "Electrochemistry",
    "meaning": "The electrode potential under non-standard conditions depends on the reaction quotient",
    "variables": {
      "E": "Cell potential (V)",
      "E°": "Standard cell potential (V)",
      "R": "Gas constant (8.314 J/mol·K)",
      "T": "Temperature (K)",
      "n": "Number of electrons transferred",
      "F": "Faraday constant (96485 C/mol)",
      "Q": "Reaction quotient"
    },
    "example": "Zn-Cu cell, E° = 1.10 V, n = 2, Q = 100, at 298K. E = 1.10 - (0.0257/2)ln100 = 1.10 - 0.059 = 1.041 V"
  },
  {
    "id": 61,
    "name": "Faraday's First Law of Electrolysis",
    "formula": "w = ZIt = (M/nF)It",
    "subject": "chemistry",
    "chapter": "Electrochemistry",
    "meaning": "The mass deposited during electrolysis is proportional to the quantity of electricity passed",
    "variables": {
      "w": "Mass deposited (g)",
      "Z": "Electrochemical equivalent (g/C)",
      "I": "Current (A)",
      "t": "Time (s)",
      "M": "Molar mass (g/mol)",
      "n": "Electrons transferred",
      "F": "Faraday constant (96485 C/mol)"
    },
    "example": "2A current for 10 min deposits Cu (M=64, n=2). w = (64/(2×96485)) × 2 × 600 = 0.398 g"
  },
  {
    "id": 62,
    "name": "Conductivity",
    "formula": "κ = 1/ρ",
    "subject": "chemistry",
    "chapter": "Electrochemistry",
    "meaning": "Conductivity is the reciprocal of resistivity, measuring how well a solution conducts electricity",
    "variables": {
      "κ": "Conductivity (S/m)",
      "ρ": "Resistivity (Ω·m)"
    },
    "example": "Resistivity of NaCl solution = 10 Ω·m. κ = 1/10 = 0.1 S/m"
  },
  {
    "id": 63,
    "name": "Molar Conductivity",
    "formula": "Λm = κ/c",
    "subject": "chemistry",
    "chapter": "Electrochemistry",
    "meaning": "Molar conductivity is conductivity per unit concentration of electrolyte",
    "variables": {
      "Λm": "Molar conductivity (S·m²/mol)",
      "κ": "Conductivity (S/m)",
      "c": "Concentration (mol/m³)"
    },
    "example": "κ = 0.012 S/m, c = 0.1 mol/L = 100 mol/m³. Λm = 0.012/100 = 1.2×10⁻⁴ S·m²/mol"
  },
  {
    "id": 64,
    "name": "Arrhenius Equation",
    "formula": "k = Ae^(-Ea/RT)",
    "subject": "chemistry",
    "chapter": "Chemical Kinetics",
    "meaning": "The rate constant of a reaction depends exponentially on activation energy and temperature",
    "variables": {
      "k": "Rate constant",
      "A": "Arrhenius factor (pre-exponential)",
      "Ea": "Activation energy (J/mol)",
      "R": "Gas constant (8.314 J/mol·K)",
      "T": "Temperature (K)"
    },
    "example": "A = 10¹³ s⁻¹, Ea = 100 kJ/mol, T = 300 K. k = 10¹³ × e^(-100000/(8.314×300)) = 2.2×10⁻⁵ s⁻¹"
  },
  {
    "id": 65,
    "name": "Rate Law",
    "formula": "r = k[A]ᵃ[B]ᵄ",
    "subject": "chemistry",
    "chapter": "Chemical Kinetics",
    "meaning": "The rate of a chemical reaction is proportional to the product of concentrations raised to their respective orders",
    "variables": {
      "r": "Rate of reaction (mol/L·s)",
      "k": "Rate constant",
      "A": "Concentration of reactant A (mol/L)",
      "m": "Order with respect to A",
      "B": "Concentration of reactant B (mol/L)",
      "n": "Order with respect to B"
    },
    "example": "k = 0.01, [A] = 2 M, [B] = 3 M, m = 1, n = 2. r = 0.01 × 2 × 9 = 0.18 mol/L·s"
  },
  {
    "id": 66,
    "name": "First Order Rate Equation",
    "formula": "k = (2.303/t)log(a/(a-x))",
    "subject": "chemistry",
    "chapter": "Chemical Kinetics",
    "meaning": "For a first order reaction, the rate constant can be determined from initial and remaining concentrations",
    "variables": {
      "k": "Rate constant (s⁻¹)",
      "t": "Time (s)",
      "a": "Initial concentration",
      "a-x": "Concentration at time t"
    },
    "example": "a = 1 M, a-x = 0.5 M at t = 100 s. k = (2.303/100)log(1/0.5) = 0.00693 s⁻¹"
  },
  {
    "id": 67,
    "name": "First Order Half-Life",
    "formula": "t½ = 0.693/k",
    "subject": "chemistry",
    "chapter": "Chemical Kinetics",
    "meaning": "The half-life of a first order reaction is constant and independent of initial concentration",
    "variables": {
      "t½": "Half-life (s)",
      "k": "Rate constant (s⁻¹)"
    },
    "example": "k = 0.02 s⁻¹. t½ = 0.693/0.02 = 34.65 s"
  },
  {
    "id": 68,
    "name": "pH",
    "formula": "pH = -log[H⁺]",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "pH is a measure of acidity, defined as the negative logarithm of hydrogen ion concentration",
    "variables": {
      "pH": "pH value",
      "[H⁺]": "Hydrogen ion concentration (mol/L)"
    },
    "example": "[H⁺] = 10⁻³ M. pH = -log(10⁻³) = 3"
  },
  {
    "id": 69,
    "name": "pH + pOH Relation",
    "formula": "pH + pOH = 14",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "At 25°C, the sum of pH and pOH of any aqueous solution is always 14",
    "variables": {
      "pH": "pH value",
      "pOH": "pOH value"
    },
    "example": "pOH = 4. pH = 14 - 4 = 10"
  },
  {
    "id": 70,
    "name": "Henderson-Hasselbalch Equation",
    "formula": "pH = pKa + log([A⁻]/[HA])",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "The pH of a buffer solution depends on the pKa and the ratio of conjugate base to weak acid",
    "variables": {
      "pH": "pH of buffer",
      "pKa": "Negative log of acid dissociation constant",
      "[A⁻]": "Conjugate base concentration (mol/L)",
      "[HA]": "Weak acid concentration (mol/L)"
    },
    "example": "Acetic acid buffer, pKa = 4.76, [CH₃COO⁻] = 0.1 M, [CH₃COOH] = 0.01 M. pH = 4.76 + log(10) = 5.76"
  },
  {
    "id": 71,
    "name": "Titration Formula",
    "formula": "M₁V₁/n₁ = M₂V₂/n₂",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "At equivalence point, the moles of acid and base are stoichiometrically equivalent",
    "variables": {
      "M₁": "Molarity of acid (mol/L)",
      "V₁": "Volume of acid (L)",
      "n₁": "Number of H⁺ from acid",
      "M₂": "Molarity of base (mol/L)",
      "V₂": "Volume of base (L)",
      "n₂": "Number of OH⁻ from base"
    },
    "example": "H₂SO₄ (n=2), V₁=20 mL, M₂=0.1 M NaOH (n=1), V₂=50 mL. M₁ = (0.1 × 50 × 2)/(20 × 1) = 0.5 M"
  },
  {
    "id": 72,
    "name": "Ideal Gas Law",
    "formula": "PV = nRT",
    "subject": "chemistry",
    "chapter": "States of Matter",
    "meaning": "The pressure, volume, and temperature of an ideal gas are related by this equation",
    "variables": {
      "P": "Pressure (atm)",
      "V": "Volume (L)",
      "n": "Number of moles",
      "R": "Gas constant (0.0821 L·atm/mol·K)",
      "T": "Temperature (K)"
    },
    "example": "n = 2 mol, T = 300 K, V = 10 L. P = (2 × 0.0821 × 300) / 10 = 4.93 atm"
  },
  {
    "id": 73,
    "name": "Combined Gas Law",
    "formula": "P₁V₁/T₁ = P₂V₂/T₂",
    "subject": "chemistry",
    "chapter": "States of Matter",
    "meaning": "For a fixed amount of gas, the product of pressure and volume divided by temperature is constant",
    "variables": {
      "P₁": "Initial pressure (atm)",
      "V₁": "Initial volume (L)",
      "T₁": "Initial temperature (K)",
      "P₂": "Final pressure (atm)",
      "V₂": "Final volume (L)",
      "T₂": "Final temperature (K)"
    },
    "example": "P₁=2 atm, V₁=5 L, T₁=300 K, T₂=600 K. V₂ = (2 × 5 × 600)/(300 × 1) = 20 L"
  },
  {
    "id": 74,
    "name": "Dalton's Law of Partial Pressures",
    "formula": "Ptotal = P₁ + P₂ + P₃ + ...",
    "subject": "chemistry",
    "chapter": "States of Matter",
    "meaning": "The total pressure of a gas mixture equals the sum of partial pressures of individual gases",
    "variables": {
      "Ptotal": "Total pressure (atm)",
      "P₁": "Partial pressure of gas 1 (atm)",
      "P₂": "Partial pressure of gas 2 (atm)"
    },
    "example": "O₂ at 0.5 atm + N₂ at 1.5 atm. Ptotal = 0.5 + 1.5 = 2 atm"
  },
  {
    "id": 75,
    "name": "Henry's Law",
    "formula": "p = KH·x",
    "subject": "chemistry",
    "chapter": "States of Matter",
    "meaning": "The solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid",
    "variables": {
      "p": "Partial pressure of gas (atm)",
      "KH": "Henry's constant (atm)",
      "x": "Mole fraction of dissolved gas"
    },
    "example": "CO₂ at 3 atm in water (KH = 1600 atm). x = 3/1600 = 0.001875"
  },
  {
    "id": 76,
    "name": "Van't Hoff Factor",
    "formula": "i = 1 + (n-1)α",
    "subject": "chemistry",
    "chapter": "Solutions",
    "meaning": "The van't Hoff factor accounts for association or dissociation of solute particles in solution",
    "variables": {
      "i": "van't Hoff factor",
      "n": "Number of particles after dissociation",
      "α": "Degree of dissociation"
    },
    "example": "NaCl (n=2) with α=0.9. i = 1 + (2-1)×0.9 = 1.9"
  },
  {
    "id": 77,
    "name": "Equilibrium Constant (Kc)",
    "formula": "Kc = [Products]^n / [Reactants]^m",
    "subject": "chemistry",
    "chapter": "Chemical Equilibrium",
    "meaning": "At equilibrium, the ratio of product concentrations to reactant concentrations (each raised to stoichiometric coefficients) is constant",
    "variables": {
      "Kc": "Equilibrium constant",
      "[Products]": "Concentration of products (mol/L)",
      "[Reactants]": "Concentration of reactants (mol/L)"
    },
    "example": "For N₂ + 3H₂ ⇌ 2NH₃, [N₂]=0.5, [H₂]=1.5, [NH₃]=0.3. Kc = (0.3)²/((0.5)(1.5)³) = 0.053"
  },
  {
    "id": 78,
    "name": "Relation between Kp and Kc",
    "formula": "Kp = Kc(RT)Δn",
    "subject": "chemistry",
    "chapter": "Chemical Equilibrium",
    "meaning": "The relationship between pressure-based and concentration-based equilibrium constants",
    "variables": {
      "Kp": "Equilibrium constant (pressure)",
      "Kc": "Equilibrium constant (concentration)",
      "R": "Gas constant (0.0821 L·atm/mol·K)",
      "T": "Temperature (K)",
      "Δn": "Change in moles of gas"
    },
    "example": "Kc = 10, Δn = -1, T = 300 K. Kp = 10 × (0.0821 × 300)^(-1) = 10/24.63 = 0.406"
  },
  {
    "id": 79,
    "name": "Gibbs Free Energy",
    "formula": "ΔG = ΔH - TΔS",
    "subject": "chemistry",
    "chapter": "Thermodynamics",
    "meaning": "The spontaneity of a process depends on enthalpy, entropy, and temperature",
    "variables": {
      "ΔG": "Gibbs free energy change (J/mol)",
      "ΔH": "Enthalpy change (J/mol)",
      "T": "Temperature (K)",
      "ΔS": "Entropy change (J/mol·K)"
    },
    "example": "ΔH = -100 kJ/mol, ΔS = -200 J/mol·K, T = 300 K. ΔG = -100000 - 300(-200) = -40000 J = -40 kJ"
  },
  {
    "id": 80,
    "name": "Gibbs Free Energy and Equilibrium",
    "formula": "ΔG° = -RT ln K",
    "subject": "chemistry",
    "chapter": "Thermodynamics",
    "meaning": "The standard Gibbs free energy change is related to the equilibrium constant",
    "variables": {
      "ΔG°": "Standard Gibbs free energy (J/mol)",
      "R": "Gas constant (8.314 J/mol·K)",
      "T": "Temperature (K)",
      "K": "Equilibrium constant"
    },
    "example": "K = 100, T = 298 K. ΔG° = -8.314 × 298 × ln(100) = -11400 J = -11.4 kJ"
  },
  {
    "id": 81,
    "name": "pH of Strong Acid",
    "formula": "pH = -log[H⁺]",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "For a strong monoprotic acid, pH equals negative log of acid concentration",
    "variables": {
      "pH": "pH value",
      "[H⁺]": "Acid concentration (mol/L)"
    },
    "example": "0.001 M HCl. pH = -log(0.001) = 3"
  },
  {
    "id": 82,
    "name": "pH of Strong Base",
    "formula": "pOH = -log[OH⁻], pH = 14 - pOH",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "For a strong base, first calculate pOH then find pH",
    "variables": {
      "pOH": "pOH value",
      "[OH⁻]": "Hydroxide concentration (mol/L)",
      "pH": "pH value"
    },
    "example": "0.01 M NaOH. pOH = -log(0.01) = 2, pH = 14 - 2 = 12"
  },
  {
    "id": 83,
    "name": "Basic Buffer pH",
    "formula": "pOH = pKb + log([BH⁺]/[B])",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "For a basic buffer, pOH depends on pKb and the ratio of conjugate acid to weak base",
    "variables": {
      "pOH": "pOH value",
      "pKb": "Negative log of base dissociation constant",
      "[BH⁺]": "Conjugate acid concentration (mol/L)",
      "[B]": "Weak base concentration (mol/L)"
    },
    "example": "NH₃/NH₄Cl buffer, pKb = 4.75, [NH₄⁺] = 0.5 M, [NH₃] = 0.1 M. pOH = 4.75 + log(5) = 5.45, pH = 8.55"
  },
  {
    "id": 84,
    "name": "Electrochemical Cell EMF",
    "formula": "E°cell = E°cathode - E°anode",
    "subject": "chemistry",
    "chapter": "Electrochemistry",
    "meaning": "The standard EMF of a cell equals the difference between standard reduction potentials of cathode and anode",
    "variables": {
      "E°cell": "Standard cell EMF (V)",
      "E°cathode": "Standard reduction potential of cathode (V)",
      "E°anode": "Standard reduction potential of anode (V)"
    },
    "example": "Cu cathode (E°=0.34V), Zn anode (E°=-0.76V). E°cell = 0.34 - (-0.76) = 1.10 V"
  },
  {
    "id": 85,
    "name": "Second Order Rate Law",
    "formula": "k = (1/t)(1/[A] - 1/[A]₀)",
    "subject": "chemistry",
    "chapter": "Chemical Kinetics",
    "meaning": "For a second order reaction with one reactant, the integrated rate law relates concentration and time",
    "variables": {
      "k": "Rate constant (L/mol·s)",
      "t": "Time (s)",
      "[A]": "Concentration at time t (mol/L)",
      "[A]₀": "Initial concentration (mol/L)"
    },
    "example": "[A]₀ = 1 M, [A] = 0.5 M at t = 100 s. k = (1/100)(1/0.5 - 1/1) = 0.01 L/mol·s"
  },
  {
    "id": 86,
    "name": "Entropy Change (Isothermal)",
    "formula": "ΔS = Qrev/T",
    "subject": "chemistry",
    "chapter": "Thermodynamics",
    "meaning": "The entropy change of a reversible process equals the heat transferred divided by temperature",
    "variables": {
      "ΔS": "Entropy change (J/K)",
      "Qrev": "Reversible heat transfer (J)",
      "T": "Temperature (K)"
    },
    "example": "500 J heat absorbed reversibly at 500 K. ΔS = 500/500 = 1 J/K"
  },
  {
    "id": 87,
    "name": "Ostwald Dilution Law",
    "formula": "Ka = cα²/(1-α)",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "For weak electrolytes, the degree of dissociation is related to concentration and dissociation constant",
    "variables": {
      "Ka": "Acid dissociation constant",
      "c": "Concentration (mol/L)",
      "α": "Degree of dissociation"
    },
    "example": "Acetic acid, Ka = 1.8×10⁻⁵, c = 0.1 M. α = √(Ka/c) = √(1.8×10⁻⁴) = 0.0134"
  },
  {
    "id": 88,
    "name": "Second Order Half-Life",
    "formula": "t½ = 1/(k[A]₀)",
    "subject": "chemistry",
    "chapter": "Chemical Kinetics",
    "meaning": "For a second order reaction, the half-life is inversely proportional to initial concentration",
    "variables": {
      "t½": "Half-life (s)",
      "k": "Rate constant (L/mol·s)",
      "[A]₀": "Initial concentration (mol/L)"
    },
    "example": "k = 0.01 L/mol·s, [A]₀ = 2 M. t½ = 1/(0.01 × 2) = 50 s"
  },
  {
    "id": 89,
    "name": "Heat of Reaction (Hess's Law)",
    "formula": "ΔHrxn = Σ(ΔHf products) - Σ(ΔHf reactants)",
    "subject": "chemistry",
    "chapter": "Thermodynamics",
    "meaning": "The enthalpy change of a reaction equals the sum of enthalpies of formation of products minus that of reactants",
    "variables": {
      "ΔHrxn": "Enthalpy of reaction (kJ/mol)",
      "ΔHf": "Standard enthalpy of formation (kJ/mol)"
    },
    "example": "For H₂ + ½O₂ → H₂O: ΔH = -286 - (0 + 0) = -286 kJ/mol"
  },
  {
    "id": 90,
    "name": "pOH",
    "formula": "pOH = -log[OH⁻]",
    "subject": "chemistry",
    "chapter": "Ionic Equilibrium",
    "meaning": "pOH is a measure of basicity, defined as the negative logarithm of hydroxide ion concentration",
    "variables": {
      "pOH": "pOH value",
      "[OH⁻]": "Hydroxide ion concentration (mol/L)"
    },
    "example": "[OH⁻] = 0.001 M. pOH = -log(0.001) = 3"
  }
];
