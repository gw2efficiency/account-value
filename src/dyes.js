import _sum from 'lodash.sumby'

export function dyesValue (accountData, values) {
  if (!accountData.dyes) {
    return null
  }

  // Just sum up the value of all unlocked dyes
  const dyes = accountData.dyes
  return {
    value: _sum(dyes, x => values.dyes[x])
  }
}
