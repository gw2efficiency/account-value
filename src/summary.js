import calculateSummary from './helpers/calculateSummary'

export function summaryValue (previousValues) {
  let missingValues = Object.values(previousValues)
      .filter(x => x === null)
      .length > 0

  // All values have to be set for the account value to be calculated
  if (missingValues) {
    return null
  }

  return calculateSummary(previousValues)
}
