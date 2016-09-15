import _get from 'lodash.get'
import {subFees} from 'gw2e-tradingpost-fees'
import getItemIds from './helpers/getItemIds'

export function sharedInventoryValue (accountData, values) {
  if (!accountData.shared) {
    return null
  }

  return {
    value: sumItems(accountData.shared, values.items, 'value', true),
    liquidBuy: subFees(sumItems(accountData.shared, values.items, 'buy.price')),
    liquidSell: subFees(sumItems(accountData.shared, values.items, 'sell.price'))
  }
}

export function sumItems (items, itemValues, valueKey, includeBound = false) {
  return items
    .filter(item => item) // Ignore possible empty slots
    .map(getItemIds) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
    .filter(item => includeBound || item.binding === undefined) // Bound items
    .map(item => item.count * _get(itemValues[item.id], valueKey, 0)) // Sum for stack
    .reduce((a, b) => a + b, 0) // Total sum
}

export function sharedInventoryItems (accountData) {
  if (!accountData.shared) {
    return []
  }

  return accountData.shared
    .filter(item => item) // Ignore possible empty slots
    .map(getItemIds) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
}
