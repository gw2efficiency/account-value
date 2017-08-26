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
export function equipmentItems (character, itemValues = {}) {
  return character.equipment
    .map(x => ({...x, count: 1, isEquipment: true}))
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
}

// Which items does the character have in his inventory & which bags
export function inventoryItems (character, itemValues = {}) {
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
