import _get from 'fast-get'
import _sum from 'sum-by'

export function emotesValue (accountData, values) {
  if (!_get(accountData, 'emotes')) {
    return null
  }

  // Just sum up the value of all unlocked emotes
  const emotes = _get(accountData, 'emotes')
    .filter(mount => values.emotes[mount] && values.emotes[mount].value)

  const nonGemstoreEmotes = emotes
    .filter(mount => values.emotes[mount].gemstore === false)

  return {
    value: _sum(emotes, x => values.emotes[x].value),
    valueMinusGemItems: _sum(nonGemstoreEmotes, x => values.emotes[x].value),
    spentGems: _sum(emotes, x => values.emotes[x].gemstore)
  }
}
