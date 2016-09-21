import _sum from 'lodash.sumby'

export function finishersValue (accountData, values) {
  if (!accountData.finishers) {
    return null
  }

  // Just sum up the value of all unlocked finishers
  const finishers = accountData.finishers
    .filter(x => x.permanent === true)
    .map(x => x.id)
    .filter(outfit => !!values.finishers[outfit])

  const nonGemstoreOutfits = finishers
    .filter(outfit => values.finishers[outfit].gemstore === false)

  return {
    value: _sum(finishers, x => values.finishers[x].value),
    valueMinusGemItems: _sum(nonGemstoreOutfits, x => values.finishers[x].value),
    spentGems: _sum(finishers, x => values.finishers[x].gemstore)
  }
}
