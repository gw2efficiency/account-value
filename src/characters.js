import _get from 'lodash.get'
import {subFees} from 'gw2e-tradingpost-fees'
import calculateSummary from './helpers/calculateSummary'
import getItemIds from './helpers/getItemIds'

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
  const equipment = partialValue(equipmentItems(character, values.items), values)
  const inventory = partialValue(inventoryItems(character, values.items), values)
  const summary = calculateSummary({equipment, inventory})

  return {
    name: character.name,
    ...summary,
    equipment,
    inventory
  }
}

export function partialValue (items, values) {
  return {
    value: sumItems(items, values.items, 'value', true),
    liquidBuy: subFees(sumItems(items, values.items, 'buy.price')),
    liquidSell: subFees(sumItems(items, values.items, 'sell.price'))
  }
}

export function sumItems (items, itemValues, valueKey, includeBound = false) {
  return items
    .filter(item => includeBound || item.binding === undefined) // Bound items
    .map(item => item.count * _get(itemValues[item.id], valueKey, 0)) // Sum for stack
    .reduce((a, b) => a + b, 0) // Total sum
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
