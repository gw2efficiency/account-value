import _sum from 'sum-by'

export function minisValue (accountData, values) {
  if (!accountData.minis) {
    return null
  }

  // Just sum up the value of all unlocked minis
  const minis = accountData.minis
    .filter(mini => values.minis[mini] && values.minis[mini].value)

  const nonGemstoreMinis = minis
    .filter(mini => values.minis[mini].gemstore === false)

  return {
    value: _sum(minis, x => values.minis[x].value),
    valueMinusGemItems: _sum(nonGemstoreMinis, x => values.minis[x].value),
    spentGems: _sum(minis, x => values.minis[x].gemstore)
  }
}
