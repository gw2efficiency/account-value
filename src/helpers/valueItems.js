import {subFees} from 'gw2e-tradingpost-fees'
import _get from 'lodash.get'
import sumItems from './sumItems'

export default function valueItems (items, values) {
  const itemValues = values.items
  const withoutGemstore = items.filter(x => {
    return _get(itemValues[x.id], 'price.gems', false) === false
  })

  return {
    value: sumItems(items, itemValues, 'value', true),
    valueWithoutGemstore: sumItems(withoutGemstore, itemValues, 'value', true),
    liquidBuy: subFees(sumItems(items, itemValues, 'buy.price')),
    liquidSell: subFees(sumItems(items, itemValues, 'sell.price'))
  }
}
