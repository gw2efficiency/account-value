import {subFees} from 'gw2e-tradingpost-fees'
import _get from 'fast-get'
import sumItems from './sumItems'

export default function valueItems (items, values) {
  const itemValues = values.items
  const withoutGemstore = items.filter(x => {
    return _get(itemValues[x.id], 'price.gems', false) === false
  })

  return {
    value: sumItems({
      items,
      itemValues,
      valueKey: 'value',
      includeBound: true
    }),
    valueMinusGemItems: sumItems({
      items: withoutGemstore,
      itemValues,
      valueKey: 'value',
      includeBound: true
    }),
    spentGems: sumItems({
      items,
      itemValues,
      valueKey: 'price.gems',
      includeBound: true
    }),
    liquidBuy: subFees(sumItems({
      items,
      itemValues,
      valueKey: 'buy.price',
      includeBound: false
    })),
    liquidSell: subFees(sumItems({
      items,
      itemValues,
      valueKey: 'sell.price',
      fallbackValueKey: 'buy.price',
      includeBound: false
    }))
  }
}
