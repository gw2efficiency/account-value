import getItemIds from './helpers/getItemIds'
import valueItems from './helpers/valueItems'

export function bankValue (accountData, values) {
  if (!accountData.bank) {
    return null
  }

  const items = bankItems(accountData, values.items)
  return valueItems(items, values)
}

export function bankItems (accountData, itemValues = {}) {
  if (!accountData.bank) {
    return []
  }

  return accountData.bank
    .filter(item => item) // Ignore possible empty slots
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), []) // Return a single array
}
