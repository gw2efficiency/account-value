import calculateSummary from './helpers/calculateSummary'
import getItemIds from './helpers/getItemIds'
import valueItems from './helpers/valueItems'
import _sum from 'sum-by'

export function charactersValue (accountData, values) {
  if (!accountData.characters || accountData.characters.length === 0) {
    return null
  }

  // Check if the "inventories" permission is set
  if (typeof accountData.characters[0].bags === 'undefined') {
    return null
  }

  const details = accountData.characters.map(c => characterValue(c, values))
  const summary = calculateSummary(details)
  return {...summary, details}
}

function characterValue (character, values) {
  const details = {
    equipment: valueItems(equipmentItems(character, values.items), values),
    inventory: valueItems(inventoryItems(character, values.items), values),
    crafting: craftingValue(character, values)
  }

  const summary = calculateSummary(details)

  return {
    name: character.name,
    ...summary,
    ...details
  }
}

function craftingValue (character, values) {
  const professions = character.crafting.map(profession => {
    // Get the profession values by name
    let name = profession.discipline.toLowerCase()
    let professionValue = values.craftingProfessions[name]

    // New / unknown crafting profession
    if (!professionValue) {
      return 0
    }

    // Get the highest rating that the user unlocked
    let ratings = Object.keys(professionValue).filter(x => x <= profession.rating)
    let maxRating = Math.max.apply(null, ratings)

    // The rating is too low to have a value
    if (ratings.length === 0) {
      return 0
    }

    // Get the highest rating and return value of that
    return professionValue[maxRating]
  })

  return {value: _sum(professions)}
}

export function charactersItems (accountData, itemValues) {
  if (!accountData.characters || accountData.characters.length === 0) {
    return []
  }

  // Check if the "inventories" permission is set
  if (typeof accountData.characters[0].bags === 'undefined') {
    return []
  }

  return accountData.characters
    .map(character => characterItems(character, itemValues))
    .reduce((a, b) => a.concat(b), [])
}

export function characterItems (character, itemValues = {}) {
  return [].concat(
    inventoryItems(character, itemValues),
    equipmentItems(character, itemValues)
  )
}

// The items we ignore for the value calculation when they are equipped. Note that this
// is NOT the list of IDs from the /v2/legendaryarmory endpoint, because it does not include
// the item ids that legendary sigils/runes turn into when they are equipped
const LEGENDARY_ITEM_IDS = [19628, 19633, 19634, 19640, 19641, 19642, 19675, 19676, 19678, 19925, 19977, 20797, 20852, 21046, 21045, 30684, 30685, 30686, 30687, 30688, 30689, 30690, 30691, 30692, 30694, 30693, 30695, 30696, 30697, 30698, 30700, 30699, 30701, 30702, 30703, 30704, 35739, 36508, 45017, 45179, 49454, 49501, 65222, 69644, 69648, 71383, 71563, 71597, 71820, 72659, 72713, 72757, 72946, 73116, 73257, 74155, 74844, 76158, 77302, 77474, 77681, 78556, 79418, 79562, 79540, 79802, 79950, 79960, 79966, 79990, 79991, 80054, 80009, 80488, 80111, 80131, 80145, 80161, 80190, 80205, 80252, 80254, 80248, 80277, 80296, 80281, 80435, 80356, 80384, 80399, 80557, 80578, 81206, 81296, 81462, 81552, 81604, 81839, 81957, 81908, 82670, 83323, 83348, 83584, 84546, 82465, 82512, 82902, 83036, 83113, 83394, 83921, 84176, 84633, 84643, 82196, 82214, 82801, 83127, 83413, 84578, 83729, 83162, 83497, 83929, 84481, 84629, 82963, 84508, 82245, 82903, 83595, 82102, 82456, 84655, 82093, 84110, 82109, 82268, 82272, 82401, 82437, 82519, 82994, 83289, 83676, 82348, 83094, 82447, 82173, 83699, 83862, 82502, 82925, 83482, 84181, 84723, 82552, 82098, 83240, 83308, 83702, 84440, 84260, 83087, 82180, 84301, 85504, 84341, 85434, 85681, 85707, 86098, 86115, 86177, 84561, 84748, 86560, 86759, 86918, 82334, 82698, 87109, 87130, 84427, 87464, 87541, 87568, 87687, 88485, 88576, 82423, 89260, 89183, 89152, 89174, 89245, 89167, 89209, 89093, 89117, 89252, 89266, 89158, 89101, 89134, 89126, 89234, 89235, 89094, 83041, 89854, 90019, 45016, 90353, 90368, 90788, 90551, 90656, 90747, 90716, 90732, 90850, 90609, 90880, 90643, 90872, 91048, 91112, 91234, 91245, 91261, 91209, 91536, 91595, 91505, 91162, 91165, 91194, 91212, 88567, 92514, 92909, 93128, 93105, 92991, 93140, 92842, 84461, 93612, 93411, 91382, 91384, 91388, 91390, 91405, 91406, 91393, 91389, 91400, 91413, 91403, 91398, 91409, 91412, 91407, 91416, 91415, 91420, 91426, 91431, 91429, 91436, 91438, 91441, 91448, 91455, 91456, 91463, 91439, 91443, 91473, 91480, 91470, 91474, 91452, 91488, 91499, 91506, 91453, 91490, 91476, 91461, 91500, 91509, 91492, 91478, 91502, 91486, 91496, 91511, 91519, 91520, 91527, 91521, 91526, 91524, 91531, 91532, 91535, 91534, 91537, 91539, 91543, 91542, 91544, 91546, 91548, 91552, 91558, 91559, 91561, 91575, 91577, 91584, 91589, 91594, 91600, 91603, 91609, 91607, 91604, 91381, 91391, 91387, 91392, 91397, 91396, 91399, 91401, 91404, 91408, 91411, 91417, 91419, 91425, 91428, 91423, 91410, 91430, 91433, 91432, 91435, 91444, 91445, 91447, 91451, 91457, 91459, 91460, 91464, 91465, 91468, 91475, 91471, 91477, 91483, 91485, 91482, 91494, 91489, 91497, 91493, 91503, 91501, 91507, 91508, 91510, 91512, 91513, 91515, 91518, 91516, 91522, 91523, 91529, 91525, 91530, 91533, 91538, 91541, 91545, 91547, 91550, 91551, 91553, 91557, 91560, 91556, 91564, 91565, 91566, 91567, 91568, 91570, 91573, 91572, 91578, 91576, 91579, 91582, 91583, 91580, 91581, 91587, 91585, 91588, 91593, 91590, 91592, 91591, 91599, 91602, 91605, 91608, 91627, 91638, 91639, 91641, 91673, 93460, 82410, 93933, 83957, 95001]

// Which items does the character have in his equipment
export function equipmentItems (character, itemValues = {}) {
  const loggedInAfterArmouryRelease = new Date(character.last_modified) > new Date('2021-07-13T12:00:00.000Z')

  return character.equipment
    .map(item => ({...item, count: 1, isEquipment: true}))
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
    .map(item => ({
      ...item,
      ignoreForValue:
        ['LegendaryArmory', 'EquippedFromLegendaryArmory'].includes(item.location) ||
        (loggedInAfterArmouryRelease && LEGENDARY_ITEM_IDS.includes(item.id))
    }))
}

// Which items does the character have in his inventory & which bags
export function inventoryItems (character, itemValues = {}) {
  // istanbul ignore next
  if (!character.bags) {
    return []
  }

  const loggedInAfterArmouryRelease = new Date(character.last_modified) > new Date('2021-07-13T12:00:00.000Z')

  // The bag items themselves
  const bagItems = character.bags
    .filter(x => x)
    .map(x => ({id: x.id, count: 1, isBag: true}))

  // The items in the bags
  const inventoryItems = character.bags
    .filter(x => x)
    .reduce((a, b) => a.concat(b.inventory), [])
    .filter(x => x)
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
    .map(item => ({
      ...item,
      // Some legendaries did not get sucked into the legendary armory and remain as account bound items.
      // The players however received replacements for them, so they should not count for the value.
      ignoreForValue: loggedInAfterArmouryRelease && LEGENDARY_ITEM_IDS.includes(item.id) && item.binding === 'Account'
    }))

  return [].concat(bagItems, inventoryItems)
}
