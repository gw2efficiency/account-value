import valueItems from './helpers/valueItems'

export function legendaryarmoryValue (accountData, values) {
  if (!accountData.legendaryarmory) {
    return null
  }

  const items = legendaryarmoryItems(accountData)
  return valueItems(items, values)
}

export function legendaryarmoryItems (accountData) {
  if (!accountData.legendaryarmory) {
    return []
  }

  return accountData.legendaryarmory.map(item => ({
    ...item,
    binding: 'Account'
  }))
}
