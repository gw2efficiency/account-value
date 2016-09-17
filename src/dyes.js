import _sum from 'lodash.sumby'

export function dyesValue (accountData, values) {
  if (!accountData.dyes) {
    return null
  }

  // Just sum up the value of all unlocked dyes
  const dyes = accountData.dyes
    .filter(dye => !!values.dyes[dye])

  const nonGemstoreDyes = dyes.filter(dye => values.dyes[dye].gemstore === false)

  return {
    value: _sum(dyes, x => values.dyes[x].value),
    valueWithoutGemstore: _sum(nonGemstoreDyes, x => values.dyes[x].value)
  }
}
