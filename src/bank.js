import _get from 'lodash.get'
import {subFees} from 'gw2e-tradingpost-fees'
import getItemIds from './helpers/getItemIds'

export function bankValue (accountData, values) {
  if (!accountData.bank) {
    return null
  }

  return {
    value: sumItems(accountData.bank, values.items, 'value', true),
    liquidBuy: subFees(sumItems(accountData.bank, values.items, 'buy.price')),
    liquidSell: subFees(sumItems(accountData.bank, values.items, 'sell.price'))
  }
}

export function sumItems (items, itemValues, valueKey, includeBound = false) {
  return items
    .filter(item => item) // Ignore possible empty slots
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
    .filter(item => includeBound || item.binding === undefined) // Bound items
    .map(item => item.count * _get(itemValues[item.id], valueKey, 0)) // Sum for stack
    .reduce((a, b) => a + b, 0) // Total sum
}

export function bankItems (accountData, itemValues = {}) {
  if (!accountData.bank) {
    return []
  }

  return accountData.bank
    .filter(item => item) // Ignore possible empty slots
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), [])
}
