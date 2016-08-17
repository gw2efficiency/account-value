import _get from 'lodash.get'
import {subFees, subTax} from 'gw2e-tradingpost-fees'
import calculateSummary from './helpers/calculateSummary'

export function commerceValue (accountData, values) {
  if (!accountData.commerce ||
    !accountData.commerce.buys ||
    !accountData.commerce.sells) {
    return null
  }

  // For the buy orders, just use the order price
  const buysSum = accountData.commerce.buys
    .map(x => x.quantity * x.price)
    .reduce((a, b) => a + b, 0)

  const buys = {value: buysSum, liquidBuy: buysSum, liquidSell: buysSum}

  // For the sell orders, use the sell & buy price, because everybody
  // can list things at astronomical values but it doesn't mean they are worth that
  const sells = {
    value: sumItems(accountData.commerce.sells, values.items, 'value'),
    liquidBuy: subFees(sumItems(accountData.commerce.sells, values.items, 'buy.price')),
    liquidSell: subTax(sumItems(accountData.commerce.sells, values.items, 'sell.price'))
  }

  // Build the return values
  const details = {buys, sells}
  const summary = calculateSummary(details)
  return {...summary, details}
}

export function sumItems (items, itemValues, valueKey) {
  return items
    .map(item => item.quantity * _get(itemValues[item.item_id], valueKey, 0)) // Sum for stack
    .reduce((a, b) => a + b, 0) // Total sum
}

export function commerceItems (accountData) {
  if (!accountData.commerce ||
    !accountData.commerce.buys ||
    !accountData.commerce.sells) {
    return []
  }

  return [].concat(
    accountData.commerce.buys.map(x => ({id: x.item_id})),
    accountData.commerce.sells.map(x => ({id: x.item_id}))
  )
}
