import _sum from 'lodash.sumby'

export function outfitsValue (accountData, values) {
  if (!accountData.outfits) {
    return null
  }

  // Just sum up the value of all unlocked outfits
  const outfits = accountData.outfits
    .filter(outfit => !!values.outfits[outfit])

  const nonGemstoreOutfits = outfits
    .filter(outfit => values.outfits[outfit].gemstore === false)

  return {
    value: _sum(outfits, x => values.outfits[x].value),
    valueMinusGemItems: _sum(nonGemstoreOutfits, x => values.outfits[x].value)
  }
}
