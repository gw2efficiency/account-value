const data = [
  // ------------------------------------------------------------
  // WEAPONS (GENERATION 1)
  // ------------------------------------------------------------

  [
    4683, // The Bifrost
    6231, // The Legend
    4890, // Perfected Staff
    6157 // The Legend Experiment
  ],

  [
    4684, // Bolt
    6286, // Zap
    4804, // Perfected Sword
    6400 // Zap Experiment
  ],

  [
    4669, // The Dreamer
    6427, // The Lover
    4756, // Perfected Short Bow
    6238 // The Lover Experiment
  ],

  [
    4675, // The Flameseeker Prophecies
    6481, // The Chosen
    4824, // Perfected Shield
    6223 // The Chosen Experiment
  ],

  [
    4664, // Frenzy
    6233, // Rage
    4735, // Perfected Harpoon Gun
    6480 // Rage Experiment
  ],

  [
    4674, // Frostfang
    6509, // Tooth of Frostfang
    3930, // Perfected Axe
    6525 // Tooth of Frostfang Experiment
  ],

  [
    4667, // Howler
    6363, // Howl
    4724, // Perfected Warhorn
    6310 // Howl Experiment
  ],

  [
    4682, // Incinerator
    6259, // Spark
    4751, // Perfected Dagger
    6182 // Spark Experiment
  ],

  [
    4681, // The Juggernaut
    6284, // The Colossus
    4838, // Perfected Hammer
    6483 // The Colossus Experiment
  ],

  [
    4676, // Kudzu
    6421, // Leaf of Kudzu
    5072, // Perfected Longbow
    6324 // Kudzu Experiment
  ],

  [
    4666, // Kraitkin
    6505, // Venom
    4277, // Perfected Trident
    6327 // Venom Experiment
  ],

  [
    4671, // Kamohoali'i Kotaki
    6230, // Carcharias
    4770, // Perfected Spear
    6282 // Carcharias Experiment
  ],

  [
    4673, // Meteorlogicus
    6269, // Storm
    4822, // Perfected Scepter
    6278 // Storm Experiment
  ],

  [
    4672, // The Minstrel
    6199, // The Bard
    4799, // Perfected Focus
    6245 // The Bard Experiment
  ],

  [
    4670, // The Moot
    6265, // The Energizer
    4311, // Perfected Mace
    6314 // The Energizer Experiment
  ],

  [
    4677, // The Predator
    6514, // The Hunter
    4693, // Perfected Rifle
    6494 // The Hunter Experiment
  ],

  [
    4668, // Quip
    6240, // Chaos Gun
    4695, // Perfected Pistol
    6490 // Chaos Gun Experiment
  ],

  [
    4665, // Rodgort
    6451, // Rodgort's Flame
    4737, // Perfected Torch
    6432 // Rodgort's Flame Experiment
  ],

  [
    4678, // Eternity
    4679, // Sunrise
    6211, // Dawn
    4850, // Perfected Daysword
    6311 // Dawn Experiment
  ],

  [
    4678, // Eternity
    4680, // Twilight
    6424, // Dusk
    4853, // Perfected Nightsword
    6473 // Dusk Experiment
  ],

  // ------------------------------------------------------------
  // WEAPONS (GENERATION 2)
  // ------------------------------------------------------------

  [
    6506, // Astralaria
    6331, // The Mechanism
    6285, // The Apparatus
    6184 // The Device
  ],

  [
    6717, // Chuka and Champawat
    6712, // Tigris
    6737, // The Ambush
    6702 // The Hunt
  ],

  [
    6966, // Eureka
    6958, // Endeavor
    6959, // Hypothesis
    6971 // For Science
  ],

  [
    7078, // The HMS Divinity
    7080, // Man o' War
    7117, // Frigate
    7086 // Schooner
  ],

  [
    6276, // HOPE
    6333, // Prototype
    6213, // Development
    6237 // Research
  ],

  [
    6466, // Nevermore
    6224, // The Raven Staff
    6422, // Ravenswood Staff
    6330 // Ravenswood Branch
  ],

  [
    7024, // Shooshadoo
    7035, // Friendship
    7026, // Loyalty
    7022 // Trust
  ],

  [
    7206, // Flames of War
    7219, // Liturgy
    7215, // Neophyte's Beacon
    7207 // Forgotten Brilliance
  ],

  [
    7337, // Sharur
    7312, // Might of Arah
    7298, // Reclamation
    7318 // Vizier's Folly
  ],

  [
    7300, // The Shining Blade
    7306, // Save the Queen
    7315, // Vengeance
    7335 // Exemplar's Edge
  ],

  [
    7907, // The Binding of Ipos
    7850, // Ars Goetia
    7860, // The True Name
    7857 // Mark of the Unnamed
  ],

  // ------------------------------------------------------------
  // BACKPIECES
  // ------------------------------------------------------------

  [
    6344, // Ad Infinitum
    6234, // Unbound
    2379, // Fractal Capacitor (Infused)
    2378, // Beta Fractal Capacitor (Infused)
    2377 // Prototype Fractal Capacitor
  ],

  [
    6561, // The Ascension
    6556 // Wings of Ascension
  ],

  [
    7272, // Warbringer
    7248 // Warcry
  ],

  // ------------------------------------------------------------
  // SPECIALS
  // ------------------------------------------------------------

  [
    6161, // Nightfury
    6252 // Nightfury
  ],

  [
    6161, // Nightfury
    6306 // Nightfury
  ]
]

// Build a map where the key is the skin we want to look up ("input") and the value
// is the skin that includes the input in it's unlock inheritance ("output")
// e.g. "Dawn": "Sunrise"
const unlockMap = data.reduce((obj, row) => {
  for (let i = 0; i !== row.length; i++) {
    const input = row[i + 1]
    const output = row[i]

    if (input) {
      obj[input] = output
    }
  }

  return obj
}, {})

export default unlockMap
