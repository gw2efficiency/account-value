import _sum from 'sum-by'

export function glidersValue (accountData, values) {
  if (!accountData.gliders) {
    return null
  }

  // Just sum up the value of all unlocked gliders
  const gliders = accountData.gliders
    .filter(glider => values.gliders[glider] && values.gliders[glider].value)

  const nonGemstoreGliders = gliders.filter(glider => values.gliders[glider].gemstore === false)

  return {
    value: _sum(gliders, x => values.gliders[x].value),
    valueMinusGemItems: _sum(nonGemstoreGliders, x => values.gliders[x].value),
    spentGems: _sum(gliders, x => values.gliders[x].gemstore)
  }
}
