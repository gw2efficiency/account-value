import _sum from 'sum-by'

export function noveltiesValue (accountData, values) {
  if (!accountData.novelties) {
    return null
  }

  // Just sum up the value of all unlocked novelties
  const novelties = accountData.novelties
    .filter(novelty => values.novelties[novelty] && values.novelties[novelty].value)

  const nonGemstoreNovelties = novelties
    .filter(novelty => values.novelties[novelty].gemstore === false)

  return {
    value: _sum(novelties, x => values.novelties[x].value),
    valueMinusGemItems: _sum(nonGemstoreNovelties, x => values.novelties[x].value),
    spentGems: _sum(novelties, x => values.novelties[x].gemstore)
  }
}
