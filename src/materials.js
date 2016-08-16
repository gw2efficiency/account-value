import _get from 'lodash.get'
import {subFees} from 'gw2e-tradingpost-fees'

export function materialsValue (accountData, values) {
  if (!accountData.materials) {
    return null
  }

  return {
    value: sumItems(accountData.materials, values.items, 'value'),
    liquidBuy: subFees(sumItems(accountData.materials, values.items, 'buy.price')),
    liquidSell: subFees(sumItems(accountData.materials, values.items, 'sell.price'))
  }
}

export function sumItems (items, itemValues, valueKey) {
  return items
    .map(item => item.count * _get(itemValues[item.id], valueKey, 0)) // Sum for stack
    .reduce((a, b) => a + b, 0) // Total sum
}

export function materialsItems (accountData) {
  if (!accountData.materials) {
    return []
  }

  return accountData.materials
    .filter(item => item.count > 0)
}
