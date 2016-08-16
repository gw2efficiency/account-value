// Calculate the summary based on a details object or array
export default function calculateSummary (details) {
  const values = Object.values(details).filter(values => values)

  return {
    value: values.reduce((x, y) => x + y.value, 0),
    liquidBuy: values.reduce((x, y) => x + (y.liquidBuy || 0), 0),
    liquidSell: values.reduce((x, y) => x + (y.liquidSell || 0), 0)
  }
}
