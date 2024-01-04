import _get from 'fast-get'
import _sum from 'sum-by'

export function skiffsValue (accountData, values) {
  if (!_get(accountData, 'skiffs')) {
    return null
  }

  // Just sum up the value of all unlocked skiffs
  const skiffs = _get(accountData, 'skiffs')
    .filter(mount => values.skiffs[mount] && values.skiffs[mount].value)

  const nonGemstoreSkiffs = skiffs
    .filter(mount => values.skiffs[mount].gemstore === false)

  return {
    value: _sum(skiffs, x => values.skiffs[x].value),
    valueMinusGemItems: _sum(nonGemstoreSkiffs, x => values.skiffs[x].value),
    spentGems: _sum(skiffs, x => values.skiffs[x].gemstore)
  }
}
