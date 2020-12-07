import _sum from 'sum-by'

export function finishersValue (accountData, values) {
  if (!accountData.finishers || !Array.isArray(accountData.finishers)) {
    return null
  }

  // Just sum up the value of all unlocked finishers
  const finishers = accountData.finishers
    .filter(x => x.permanent === true)
    .map(x => x.id)
    .filter(finisher => values.finishers[finisher] && values.finishers[finisher].value)

  const nonGemstoreFinishers = finishers
    .filter(finisher => values.finishers[finisher].gemstore === false)

  return {
    value: _sum(finishers, x => values.finishers[x].value),
    valueMinusGemItems: _sum(nonGemstoreFinishers, x => values.finishers[x].value),
    spentGems: _sum(finishers, x => values.finishers[x].gemstore)
  }
}
