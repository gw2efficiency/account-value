import {subFees} from 'gw2e-tradingpost-fees'
import sumItems from './sumItems'

export default function valueItems (items, values) {
  return {
    value: sumItems(items, values.items, 'value', true),
    liquidBuy: subFees(sumItems(items, values.items, 'buy.price')),
    liquidSell: subFees(sumItems(items, values.items, 'sell.price'))
  }
}
