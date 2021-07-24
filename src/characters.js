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

// Which items does the character have in his equipment
const LEGENDARY_ITEM_IDS = [83162, 93105, 80111, 72713, 83036, 89094, 84546, 80384, 30698, 77474, 30686, 87687, 83921, 82670, 80254, 84748, 82180, 81839, 91505, 91048, 80252, 30702, 82994, 83482, 89101, 79802, 83497, 83595, 82268, 89158, 91536, 82903, 83087, 81462, 82410, 84643, 89134, 81206, 83729, 30684, 82401, 80161, 89245, 83308, 30697, 90551, 83113, 84181, 84561, 80248, 89167, 82437, 83862, 83394, 82552, 83323, 84341, 30701, 84176, 84110, 89234, 89854, 30690, 83676, 30700, 83094, 82272, 30692, 84427, 30694, 89266, 83702, 89126, 82465, 80557, 82902, 82456, 84629, 83957, 89209, 91234, 84578, 80131, 83348, 30693, 80281, 86098, 82093, 83289, 80435, 30687, 30704, 89093, 89260, 84508, 30689, 82925, 80145, 82963, 80296, 82245, 89235, 82173, 84461, 82348, 30696, 89174, 84633, 84301, 84481, 82109, 82423, 89183, 30688, 71383, 82102, 83929, 80488, 83240, 82801, 80190, 84723, 81957, 78556, 89252, 30685, 83127, 82334, 82214, 84655, 30691, 82519, 76158, 83699, 82698, 30703, 89117, 81908, 82098, 80277, 82512, 30699, 88576, 80205, 80578, 82196, 80356, 89152, 30695, 79562, 92991, 80399, 87109, 82502, 74155]
export function equipmentItems (character, itemValues = {}) {
  const loggedInAfterArmouryRelease = new Date(character.last_modified) > new Date('2021-07-13T12:00:00.000Z')

  return character.equipment
    .map(item => ({...item, count: 1, isEquipment: true}))
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
    .map(item => ({
      ...item,
      ignoreForValue: loggedInAfterArmouryRelease && LEGENDARY_ITEM_IDS.includes(item.id)
    }))
}

// Which items does the character have in his inventory & which bags
export function inventoryItems (character, itemValues = {}) {
  if (!character.bags) {
    return []
  }

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

  return [].concat(bagItems, inventoryItems)
}
