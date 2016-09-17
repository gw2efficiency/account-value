import _sum from 'lodash.sumby'

export function minisValue (accountData, values) {
  if (!accountData.minis) {
    return null
  }

  // Just sum up the value of all unlocked minis
  const minis = accountData.minis
  return {
    value: _sum(minis, x => values.minis[x])
  }
}
