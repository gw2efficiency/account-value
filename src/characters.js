import calculateSummary from './helpers/calculateSummary'
import getItemIds from './helpers/getItemIds'
import valueItems from './helpers/valueItems'

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
    unlocks: valueItems(unlockItems(character, values.items), values)
  }

  const summary = calculateSummary(details)

  return {
    name: character.name,
    ...summary,
    ...details
  }
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
    equipmentItems(character, itemValues),
    unlockItems(character, itemValues)
  )
}

// Which items does the character have in his equipment
export function equipmentItems (character, itemValues = {}) {
  return character.equipment
    .map(x => ({
      ...x,
      count: 1,
      binding: 'Character',
      bound_to: character.name
    }))
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
}

// Which items does the character have in his inventory & which bags
export function inventoryItems (character, itemValues = {}) {
  // The bag items themselves
  const bagItems = character.bags
    .filter(x => x)
    .map(x => ({id: x.id, count: 1}))

  // The items in the bags
  const inventoryItems = character.bags
    .filter(x => x)
    .reduce((a, b) => a.concat(b.inventory), [])
    .filter(x => x)
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])

  return [].concat(bagItems, inventoryItems)
}

// Which "items" does the character have unlocked
export function unlockItems (character, itemValues = {}) {
  let unlocks = []

  // Character bound bag slots
  const bagSlots = character.bags.length - 5
  if (bagSlots > 0) {
    unlocks.push({id: 19993, count: bagSlots, binding: 'Character'})
  }

  return unlocks
}
