import _get from 'lodash.get'
import {subFees} from 'gw2e-tradingpost-fees'
import calculateSummary from './helpers/calculateSummary'
import getItemIds from './helpers/getItemIds'

export function charactersValue (accountData, values) {
  if (!accountData.characters) {
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
  const items = characterItems(character)

  return {
    name: character.name,
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

export function charactersItems (accountData) {
  if (!accountData.characters) {
    return []
  }

  // Check if the "inventories" permission is set
  if (typeof accountData.characters[0].bags === 'undefined') {
    return []
  }

  return accountData.characters
    .map(characterItems)
    .reduce((a, b) => a.concat(b), [])
}

export function characterItems (character) {
  // The items in the bags
  const bagItems = character.bags
    .filter(x => x)
    .reduce((a, b) => a.concat(b.inventory), [])
    .filter(x => x)
    .map(getItemIds) // Get all item ids
    .reduce((a, b) => a.concat(b), [])

  // The equipped items
  const equipmentItems = character.equipment
    .map(x => ({
      ...x,
      count: 1,
      binding: 'Character',
      bound_to: character.name
    }))
    .map(getItemIds) // Get all item ids
    .reduce((a, b) => a.concat(b), [])

  return [].concat(bagItems, equipmentItems)
}
