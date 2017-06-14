import _sum from 'sum-by'

export function heroesValue (accountData, values) {
  if (!accountData.pvp || !accountData.pvp.heroes) {
    return null
  }

  // Just sum up the value of all unlocked heroes
  const heroes = accountData.pvp.heroes
    .filter(node => values.heroes[node] && values.heroes[node].value)

  const nonGemstoreNodes = heroes.filter(node => values.heroes[node].gemstore === false)

  return {
    value: _sum(heroes, x => values.heroes[x].value),
    valueMinusGemItems: _sum(nonGemstoreNodes, x => values.heroes[x].value),
    spentGems: _sum(heroes, x => values.heroes[x].gemstore)
  }
}
