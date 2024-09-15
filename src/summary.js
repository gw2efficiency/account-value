import calculateSummary from './helpers/calculateSummary'

export function summaryValue (previousValues) {
  // We allow users to opt out of commerce data, so we override it here for that case
  if (previousValues.commerce === null) {
    previousValues = { ...previousValues, commerce: { buys: 0, sells: 0, delivery: 0 } }
  }

  let missingValues = Object.values(previousValues)
    .filter(x => x === null)
    .length > 0

  // All values have to be set for the account value to be calculated
  if (missingValues) {
    return null
  }

  return calculateSummary(previousValues)
}
