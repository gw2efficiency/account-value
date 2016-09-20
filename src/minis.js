import _sum from 'lodash.sumby'

export function minisValue (accountData, values) {
  if (!accountData.minis) {
    return null
  }

  // Just sum up the value of all unlocked minis
  const minis = accountData.minis
    .filter(mini => !!values.minis[mini])

  const nonGemstoreMinis = minis
    .filter(mini => values.minis[mini].gemstore === false)

  return {
    value: _sum(minis, x => values.minis[x].value),
    valueMinusGemItems: _sum(nonGemstoreMinis, x => values.minis[x].value)
  }
}
