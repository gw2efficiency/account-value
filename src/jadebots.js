import _get from 'fast-get'
import _sum from 'sum-by'

export function jadebotsValue (accountData, values) {
  if (!_get(accountData, 'jadebots')) {
    return null
  }

  // Just sum up the value of all unlocked jadebots
  const jadebots = _get(accountData, 'jadebots')
    .filter(mount => values.jadebots[mount] && values.jadebots[mount].value)

  const nonGemstoreJadebots = jadebots
    .filter(mount => values.jadebots[mount].gemstore === false)

  return {
    value: _sum(jadebots, x => values.jadebots[x].value),
    valueMinusGemItems: _sum(nonGemstoreJadebots, x => values.jadebots[x].value),
    spentGems: _sum(jadebots, x => values.jadebots[x].gemstore)
  }
}
