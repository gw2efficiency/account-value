import _sum from 'sum-by'

export function mailcarriersValue (accountData, values) {
  if (!accountData.mailcarriers) {
    return null
  }

  // Just sum up the value of all unlocked mailcarriers
  const mailcarriers = accountData.mailcarriers
    .filter(carrier => values.mailcarriers[carrier] && values.mailcarriers[carrier].value)

  const nonGemstoreMailcarriers = mailcarriers.filter(carrier => values.mailcarriers[carrier].gemstore === false)

  return {
    value: _sum(mailcarriers, x => values.mailcarriers[x].value),
    valueMinusGemItems: _sum(nonGemstoreMailcarriers, x => values.mailcarriers[x].value),
    spentGems: _sum(mailcarriers, x => values.mailcarriers[x].gemstore)
  }
}
