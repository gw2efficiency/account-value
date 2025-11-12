const LEGENDARY_ITEM_IDS = [
  19628, // Unicorn Statue
  19633, // Vial of Quicksilver
  19634, // Vial of Liquid Flame
  19640, // Wolf Statue
  19641, // Shark Statue
  19642, // Eel Statue
  19675, // Mystic Clover
  19676, // Icy Runestone
  19678, // Gift of Battle
  19925, // Obsidian Shard
  19977, // Pact Victory Token
  20797, // Bloodstone Shard
  20852, // Eldritch Scroll
  21046, // Tome of Influence
  21045, // Chalice of Glory
  30684, // Frostfang
  30685, // Kudzu
  30686, // The Dreamer
  30687, // Incinerator
  30688, // The Minstrel
  30689, // Eternity
  30690, // The Juggernaut
  30691, // Kamohoali'i Kotaki
  30692, // The Moot
  30694, // The Predator
  30693, // Quip
  30695, // Meteorlogicus
  30696, // The Flameseeker Prophecies
  30697, // Frenzy
  30698, // The Bifrost
  30700, // Rodgort
  30699, // Bolt
  30701, // Kraitkin
  30702, // Howler
  30703, // Sunrise
  30704, // Twilight
  35739, // Perfect Mystic Jewel
  36508, // Tome of Influence
  45017, // Quip
  45179, // Essence of Luck
  49454, // Letter of Influence
  49501, // Tarrktun Personal Delivery Portal
  65222, // Chalice of Glory
  69644, // Portal to the Heart of Maguuma
  69648, // Portal to the Heart of Maguuma
  71383, // Nevermore
  71563, // Salvaged Brilliance
  71597, // Lessons in Metallurgy
  72659, // Salvaged Dignity
  72713, // HOPE
  72757, // Lessons in Arbology
  72946, // Salvaged Excellence
  73116, // Salvaged Greatness
  73257, // Salvaged Puissance
  74155, // Ad Infinitum
  74844, // Salvaged Grandeur
  76158, // Astralaria
  77302, // Legendary Insight
  77474, // The Ascension
  77681, // Primordial Legend
  78556, // Chuka and Champawat
  79418, // Mystic Runestone
  79562, // Eureka
  79540, // Indomitable Legend
  79802, // Shooshadoo
  79950, // Immortal Legend
  79960, // Relentless Legend
  79966, // Unyielding Legend
  79990, // Merciless Legend
  79991, // God of PvP
  80054, // Ruthless Legend
  80009, // Legendary Demigod
  80488, // The HMS Divinity
  80111, // Perfected Envoy Gloves
  80131, // Perfected Envoy Mantle
  80145, // Perfected Envoy Shoulderpads
  80161, // Perfected Envoy Vambraces
  80190, // Perfected Envoy Vestments
  80205, // Perfected Envoy Gauntlets
  80252, // Perfected Envoy Leggings
  80254, // Perfected Envoy Breastplate
  80248, // Perfected Envoy Cowl
  80277, // Perfected Envoy Tassets
  80296, // Perfected Envoy Mask
  80281, // Perfected Envoy Boots
  80435, // Perfected Envoy Pauldrons
  80356, // Perfected Envoy Pants
  80384, // Perfected Envoy Helmet
  80399, // Perfected Envoy Shoes
  80557, // Perfected Envoy Greaves
  80578, // Perfected Envoy Jerkin
  81206, // Flames of War
  81296, // Legendary Spike
  81462, // Warbringer
  81552, // Tournament Title Scroll: Flavor of the Month
  81604, // Champion's Crown
  81839, // Sharur
  81957, // The Shining Blade
  81908, // Aurora
  82670, // Ardent Glorious Brigandine
  83323, // Ardent Glorious Legplates
  83348, // Ardent Glorious Breastplate
  83584, // Legendary War Insight
  84546, // Ardent Glorious Leggings
  82465, // Ardent Glorious Gauntlets
  82512, // Ardent Glorious Legguards
  82902, // Triumphant Hero's Masque
  83036, // Triumphant Hero's Raiment
  83113, // Ardent Glorious Raiment
  83394, // Triumphant Hero's Breastplate
  83921, // Ardent Glorious Plate Helm
  84176, // Triumphant Hero's Warhelm
  84633, // Ardent Glorious Crown
  84643, // Ardent Glorious Cap
  82196, // Triumphant Hero's Legplates
  82214, // Ardent Glorious Shinplates
  82801, // Triumphant Hero's Wargreaves
  83127, // Ardent Glorious Pauldrons
  83413, // Tournament Title Scroll: Best of the Best
  84578, // Triumphant Hero's Brigandine
  83729, // Glorious Hero's Raiment
  83162, // Ardent Glorious Armguards
  83497, // Triumphant Hero's Leggings
  83929, // Ardent Glorious Shoulderguards
  84481, // Sublime Mistforged Triumphant Hero's Breastplate
  84629, // Triumphant Hero's Armguards
  82963, // Triumphant Hero's Pauldrons
  84508, // Sublime Mistforged Triumphant Hero's Raiment
  82245, // Ardent Glorious Wristplates
  82903, // Triumphant Hero's Legguards
  83595, // Ardent Glorious Epaulets
  82102, // Sublime Mistforged Triumphant Hero's Brigandine
  82456, // Triumphant Hero's Gauntlets
  84655, // Ardent Glorious Wargreaves
  82093, // Triumphant Hero's Shinplates
  84110, // Triumphant Hero's Wristplates
  82109, // Mistforged Triumphant Hero's Armguards
  82268, // Glorious Hero's Shoulderguards
  82272, // Glorious Hero's Shinplates
  82401, // Glorious Hero's Cap
  82437, // Triumphant Hero's Faceguard
  82519, // Ardent Glorious Footgear
  82994, // Triumphant Hero's Shoulderguards
  83289, // Triumphant Hero's Footgear
  83676, // Glorious Hero's Wristplates
  82348, // Mistforged Triumphant Hero's Gauntlets
  83094, // Mistforged Triumphant Hero's Wargreaves
  82447, // Champion's Sun
  82173, // Triumphant Hero's Epaulets
  83699, // Mistforged Triumphant Hero's Shinplates
  83862, // Mistforged Triumphant Hero's Legguards
  82502, // Mistforged Triumphant Hero's Leggings
  82925, // Mistforged Triumphant Hero's Masque
  83482, // Mistforged Triumphant Hero's Footgear
  84181, // Mistforged Triumphant Hero's Pauldrons
  84723, // Glorious Hero's Epaulets
  82552, // Mistforged Triumphant Hero's Wristplates
  82098, // Glorious Hero's Brigandine
  83240, // Glorious Hero's Legguards
  83308, // Mistforged Triumphant Hero's Epaulets
  83702, // Mistforged Triumphant Hero's Legplates
  84440, // Collector's Edition Sandstorm
  84260, // Champion's Moon
  83087, // Mistforged Triumphant Hero's Shoulderguards
  82180, // Mistforged Triumphant Hero's Shoulderguards
  84301, // Mistforged Triumphant Hero's Warhelm
  85504, // Champion's Mad King
  84341, // Glorious Hero's Leggings
  85434, // Champion's Laurels
  85681, // Spirit of the Springer
  85707, // Spirit of the Raptor
  86098, // The Binding of Ipos
  86115, // Spirit of the Skimmer
  86177, // Spirit of the Jackal
  84561, // Glorious Hero's Pauldrons
  84748, // Glorious Hero's Legplates
  86560, // Champion's Winter Crown
  86759, // Champion's Burning Swords
  86918, // Champion's Dragon
  82334, // Glorious Hero's Breastplate
  82698, // Glorious Hero's Plate Helm
  87109, // Claw of the Khan-Ur
  87130, // Champion's Storm
  84427, // Glorious Hero's Footgear
  87464, // Champion's Comet
  87541, // Champion's Chalice
  87568, // Champion's Skull
  87687, // Verdarach
  88485, // Legendary Divination
  88576, // Xiuquatl
  82423, // Glorious Hero's Crown
  89260, // Mistforged Glorious Hero's Crown
  89183, // Mistforged Glorious Hero's Brigandine
  89152, // Mistforged Glorious Hero's Breastplate
  89174, // Mistforged Glorious Hero's Raiment
  89245, // Mistforged Glorious Hero's Footgear
  89167, // Mistforged Glorious Hero's Armguards
  89209, // Mistforged Glorious Hero's Pauldrons
  89093, // Mistforged Glorious Hero's Gauntlets
  89117, // Mistforged Glorious Hero's Plate Helm
  89252, // Mistforged Glorious Hero's Wargreaves
  89266, // Mistforged Glorious Hero's Legplates
  89158, // Mistforged Glorious Hero's Epaulets
  89101, // Mistforged Glorious Hero's Leggings
  89134, // Mistforged Glorious Hero's Wristplates
  89126, // Mistforged Glorious Hero's Cap
  89234, // Mistforged Glorious Hero's Shoulderguards
  89235, // Mistforged Glorious Hero's Shinplates
  89094, // Mistforged Glorious Hero's Legguards
  83041, // Tournament Title Scroll: Duo of Destiny
  89854, // Pharus
  90019, // Legendary Choice Box
  45016, // Quip
  90353, // Champion's Moon
  90368, // Champion's Chalice
  90788, // Champion's Mad King
  90551, // Exordium
  90656, // Champion's Winter Crown
  90747, // Champion's Crown
  90716, // Champion's Burning Swords
  90732, // Champion's Laurels
  90850, // Champion's Skull
  90609, // Champion's Comet
  90880, // Champion's Storm
  90643, // Champion's Dragon
  90872, // Champion's Sun
  91048, // Vision
  91112, // Gift of Ephemeral Magic
  91234, // Coalescence
  91245, // Title: Knight and Dame of the Arena
  91261, // Title: Baron and Baroness of the Arena
  91209, // Title: Duke and Duchess of the Arena
  91536, // Legendary Rune
  91595, // Superior Rune of the Scholar
  91505, // Legendary Sigil
  91162, // Title: Prince and Princess of the Arena
  91165, // Title: Demigod and Demigoddess of the Arena
  91194, // Title: God and Goddess of the Arena
  91212, // Title: King and Queen of the Arena
  88567, // The Bifrost
  92514, // Tournament Title Scroll: Tournament Test Subject
  92909, // Title: 2v2 Contender
  93128, // Slumbering Conflux
  93105, // Conflux
  92991, // Transcendence
  93140, // Slumbering Transcendence
  92842, // Title: 2v2 Elite
  84461, // Glorious Hero's Armguards
  93612, // Title: 3v3 Contender
  93411, // Title: 3v3 Elite
  91382, // Superior Sigil of Benevolence
  91384, // Superior Sigil of the Stars
  91388, // Superior Sigil of Demons
  91390, // Superior Sigil of Battle
  91405, // Superior Sigil of Impact
  91406, // Superior Sigil of Hydromancy
  91393, // Superior Sigil of Luck
  91389, // Superior Sigil of the Night
  91400, // Superior Sigil of Renewal
  91413, // Superior Sigil of Karka Slaying
  91403, // Superior Sigil of Agility
  91398, // Superior Sigil of Paralyzation
  91409, // Superior Sigil of Speed
  91412, // Superior Sigil of Torment
  91407, // Superior Sigil of Vision
  91416, // Superior Sigil of Bursting
  91415, // Superior Sigil of Restoration
  91420, // Superior Sigil of Rage
  91426, // Superior Sigil of Perception
  91431, // Superior Sigil of Demon Slaying
  91429, // Superior Sigil of Ruthlessness
  91436, // Superior Sigil of Grawl Slaying
  91438, // Superior Sigil of Hologram Slaying
  91441, // Superior Sigil of Energy
  91448, // Superior Sigil of Transference
  91455, // Superior Sigil of Ghost Slaying
  91456, // Superior Sigil of Serpent Slaying
  91463, // Superior Sigil of Incapacitation
  91439, // Superior Sigil of Force
  91443, // Superior Sigil of Frailty
  91473, // Superior Sigil of Concentration
  91480, // Superior Sigil of Doom
  91470, // Superior Sigil of Stamina
  91474, // Superior Sigil of Nullification
  91452, // Superior Sigil of Dreams
  91488, // Superior Sigil of Smoldering
  91499, // Superior Sigil of Severance
  91506, // Superior Sigil of Ogre Slaying
  91453, // Superior Sigil of Mad Scientists
  91490, // Superior Sigil of Icebrood Slaying
  91476, // Superior Sigil of Bloodlust
  91461, // Superior Sigil of Frenzy
  91500, // Superior Sigil of Peril
  91509, // Superior Sigil of Purity
  91492, // Superior Sigil of Bounty
  91478, // Superior Sigil of Malice
  91502, // Superior Sigil of Life
  91486, // Superior Sigil of Rending
  91496, // Superior Sigil of Corruption
  91511, // Superior Sigil of Hobbling
  91519, // Superior Sigil of Centaur Slaying
  91520, // Superior Sigil of Air
  91527, // Superior Sigil of Wrath
  91521, // Superior Sigil of Momentum
  91526, // Superior Sigil of Sorrow
  91524, // Superior Sigil of Undead Slaying
  91531, // Superior Sigil of Earth
  91532, // Superior Sigil of Venom
  91535, // Superior Sigil of Ice
  91534, // Superior Sigil of Agony
  91537, // Superior Sigil of Elemental Slaying
  91539, // Superior Sigil of Destroyer Slaying
  91543, // Superior Sigil of Mischief
  91542, // Superior Sigil of Blight
  91544, // Superior Sigil of Draining
  91546, // Superior Sigil of Celerity
  91548, // Superior Sigil of Cleansing
  91552, // Superior Sigil of Geomancy
  91558, // Superior Sigil of Generosity
  91559, // Superior Sigil of Fire
  91561, // Superior Sigil of Strength
  91575, // Superior Sigil of Debility
  91577, // Superior Sigil of Leeching
  91584, // Superior Sigil of Chilling
  91589, // Superior Sigil of Absorption
  91594, // Superior Sigil of Water
  91600, // Superior Sigil of Justice
  91603, // Superior Sigil of Cruelty
  91609, // Superior Sigil of Smothering
  91607, // Superior Sigil of Accuracy
  91604, // Superior Sigil of Blood
  91381, // Superior Rune of Thorns
  91391, // Superior Rune of the Golemancer
  91387, // Superior Rune of the Mesmer
  91392, // Superior Rune of Evasion
  91397, // Superior Rune of the Berserker
  91396, // Superior Rune of the Cavalier
  91399, // Superior Rune of Orr
  91401, // Superior Rune of Speed
  91404, // Superior Rune of the Defender
  91408, // Superior Rune of the Flock
  91411, // Superior Rune of Resistance
  91417, // Superior Rune of Exuberance
  91419, // Superior Rune of the Forgeman
  91425, // Superior Rune of the Brawler
  91428, // Superior Rune of Divinity
  91423, // Superior Rune of Strength
  91410, // Superior Rune of the Nightmare
  91430, // Superior Rune of the Druid
  91433, // Superior Rune of the Eagle
  91432, // Superior Rune of the Dragonhunter
  91435, // Superior Rune of the Krait
  91444, // Superior Rune of Durability
  91445, // Superior Rune of the Undead
  91447, // Superior Rune of the Revenant
  91451, // Superior Rune of the Weaver
  91457, // Superior Rune of the Daredevil
  91459, // Superior Rune of the Dolyak
  91460, // Superior Rune of the Afflicted
  91464, // Superior Rune of the Scourge
  91465, // Superior Rune of the Elementalist
  91468, // Superior Rune of Grenth
  91475, // Superior Rune of the Grove
  91471, // Superior Rune of Lyssa
  91477, // Superior Rune of the Baelfire
  91483, // Superior Rune of the Deadeye
  91485, // Superior Rune of the Traveler
  91482, // Superior Rune of Fireworks
  91494, // Superior Rune of Svanir
  91489, // Superior Rune of the Fire
  91497, // Superior Rune of the Ogre
  91493, // Superior Rune of the Earth
  91503, // Superior Rune of Rage
  91501, // Superior Rune of the Monk
  91507, // Superior Rune of the Flame Legion
  91508, // Superior Rune of the Trapper
  91510, // Superior Rune of the Soulbeast
  91512, // Superior Rune of Snowfall
  91513, // Superior Rune of Balthazar
  91515, // Superior Rune of the Sunless
  91518, // Superior Rune of the Water
  91516, // Superior Rune of Tormenting
  91522, // Superior Rune of the Engineer
  91523, // Superior Rune of the Warrior
  91529, // Superior Rune of Dwayna
  91525, // Superior Rune of the Zephyrite
  91530, // Superior Rune of Leadership
  91533, // Superior Rune of the Lich
  91538, // Superior Rune of the Firebrand
  91541, // Superior Rune of the Ranger
  91545, // Superior Rune of Vampirism
  91547, // Superior Rune of the Air
  91550, // Superior Rune of Perplexity
  91551, // Superior Rune of the Trooper
  91553, // Superior Rune of Scavenging
  91557, // Superior Rune of the Privateer
  91560, // Superior Rune of the Holosmith
  91556, // Superior Rune of Mercy
  91564, // Superior Rune of Hoelbrak
  91565, // Superior Rune of the Chronomancer
  91566, // Superior Rune of Melandru
  91567, // Superior Rune of the Necromancer
  91568, // Superior Rune of the Mirage
  91570, // Superior Rune of the Guardian
  91573, // Superior Rune of the Renegade
  91572, // Superior Rune of Rata Sum
  91578, // Superior Rune of the Reaper
  91576, // Superior Rune of the Adventurer
  91579, // Superior Rune of the Thief
  91582, // Superior Rune of the Scrapper
  91583, // Superior Rune of the Tempest
  91580, // Superior Rune of the Ice
  91581, // Superior Rune of the Mad King
  91587, // Superior Rune of Radiance
  91585, // Superior Rune of the Herald
  91588, // Superior Rune of the Citadel
  91593, // Superior Rune of the Wurm
  91590, // Superior Rune of the Spellbreaker
  91592, // Superior Rune of the Pack
  91591, // Superior Rune of Surging
  91599, // Superior Rune of the Centaur
  91602, // Superior Rune of the Aristocracy
  91605, // Superior Rune of Sanctuary
  91608, // Superior Rune of Infiltration
  91627, // Superior Rune of the Rebirth
  91638, // Superior Rune of Altruism
  91639, // Superior Rune of Nature's Bounty
  91641, // Superior Rune of Antitoxin
  91673, // Superior Rune of the Stars
  93460, // Tournament Title Scroll: Community Conqueror
  82410, // Glorious Hero's Gauntlets
  93933, // Title: God of WvW
  83957, // Glorious Hero's Wargreaves
  95001, // Title Scroll: Community Hero
  101527, // Relic of the Flock
  101649, // Relic of Isgarren
  101630, // Relic of the Monk
  101608, // Relic of the Ice
  101500, // Relic of Cerus
  101590, // Relic of the Dragonhunter
  101545, // Relic of the Warrior
  101643, // Relic of Mabon
  101442, // Relic of Speed
  101489, // Relic of the Fractal
  101581, // Relic of the Mirage
  101611, // Relic of Peitha
  101526, // Relic of the Weaver
  101509, // Relic of the Herald
  101640, // Relic of the Krait
  101644, // Relic of the Daredevil
  101634, // Relic of the Scourge
  101607, // Relic of the Centaur
  101619, // Relic of the Astral Ward
  101541, // Relic of the Sunless
  101554, // Relic of the Trooper
  101573, // Relic of Akeem
  101439, // Relic of Mercy
  101514, // Relic of Dwayna
  101647, // Relic of the Citadel
  101549, // Relic of the Chronomancer
  101452, // Relic of the Firebrand
  101504, // Relic of Durability
  101605, // Relic of Lyhr
  101600, // Relic of the Brawler
  101511, // Relic of the Adventurer
  101453, // Relic of the Nightmare
  101534, // Relic of the Cavalier
  101586, // Relic of the Wizard's Tower
  101441, // Relic of Evasion
  101461, // Relic of Leadership
  101474, // Relic of the Water
  101493, // Relic of the Afflicted
  101571, // Relic of the Unseen Invasion
  101447, // Relic of the Pack
  101472, // Relic of the Reaper
  101492, // Relic of Vass
  101466, // Relic of Resistance
  101539, // Relic of the Aristocracy
  101618, // Relic of the Zephyrite
  101580, // Relic of the Thief
  101513, // Relic of the Defender
  101637, // Relic of the Deadeye
  101491, // Relic of Dagda
  101564, // Relic of Fireworks
  101487, // Relic of Antitoxin
  101465, // Relic of the Necromancer
  101441, // Relic of Evasion
  101504, // Relic of Durability
  101527, // Relic of the Flock
  101647, // Relic of the Citadel
  101545, // Relic of the Warrior
  101621, // Relic of the Midnight King
  101563, // Relic of Febe
  101467, // Relic of the Demon Queen
  101627, // Relic of Nayos
  101503, // Relic of Nourys
  101546, // Relic of Karakosa
  101776, // Relic of the Founding
  101731, // Relic of the Twin Generals
  101860, // Relic of Mosyn
  101908, // Relic of the Sorcerer
  101917, // Relic of the Wayfinder
  101944, // Relic of Zakiros
  102896, // Relic of the Blightbringer
  102787, // Relic of Atrocity
  103262, // Relic of the Stormsinger
  102442, // Relic of Rivers
  103507, // Relic of Sorrow
  102877, // Relic of the Claw
  103829, // Relic of Geysers
  103923, // Relic of the Beehive
  103924, // Relic of Reunification
  103811, // Relic of the Steamshrieker
  104035, // Relic of Mount Balrior
  103941, // Relic of the Mists Tide
  104274, // Relic of Surging
  104277, // Relic of the Lich
  104334, // Relic of the Ogre
  104416, // Relic of the Golemancer
  104383, // Relic of the Earth
  104311, // Relic of the Privateer
  104249, // Relic of Vampirism
  104390, // Relic of the Holosmith
  104413, // Relic of the Eagle
  104296, // Relic of Thorns
  104308, // Relic of Fire
  104491, // Relic of Altruism
  106178, // Selachimorpha (heavy)
  106658, // Selachimorpha (medium)
  105921, // Selachimorpha (light)
  106273, // Ancora Bellum
  105653, // Ancora Pax
  106081, // Relic of the First Revenant
  105877, // Relic of Castora
  105420, // Relic of the Mist Stranger
  106637, // Relic of the Pirate Queen
  106650, // Relic of the Scoundrel
  106098 // Relic of the Biomancer
]

export default LEGENDARY_ITEM_IDS
