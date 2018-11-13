import _get from 'fast-get'
import _sum from 'sum-by'

export function mountsValue (accountData, values) {
  if (!_get(accountData, 'mounts.skins')) {
    return null
  }

  // Just sum up the value of all unlocked mounts
  const mounts = _get(accountData, 'mounts.skins')
    .filter(mount => values.mounts[mount] && values.mounts[mount].value)

  const nonGemstoreMounts = mounts
    .filter(mount => values.mounts[mount].gemstore === false)

  return {
    value: _sum(mounts, x => values.mounts[x].value),
    valueMinusGemItems: _sum(nonGemstoreMounts, x => values.mounts[x].value),
    spentGems: _sum(mounts, x => values.mounts[x].gemstore)
  }
}
