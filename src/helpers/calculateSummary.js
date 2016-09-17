import _sum from 'lodash.sumby'

// Calculate the summary based on a details object or array
export default function calculateSummary (details) {
  const values = Object.values(details).filter(values => values)

  return {
    value: _sum(values, x => x.value || 0),
    valueMinusGemItems: _sum(values, x => x.valueMinusGemItems || x.value),
    liquidBuy: _sum(values, x => x.liquidBuy || 0),
    liquidSell: _sum(values, x => x.liquidSell || 0)
  }
}
