import getItemIds from './helpers/getItemIds'
import valueItems from './helpers/valueItems'

export function sharedInventoryValue (accountData, values) {
  if (!accountData.shared) {
    return null
  }

  const items = sharedInventoryItems(accountData, values.items)
  return valueItems(items, values)
}

export function sharedInventoryItems (accountData, itemValues = {}) {
  if (!accountData.shared) {
    return []
  }

  return accountData.shared
    .filter(item => item) // Ignore possible empty slots
    .map(item => getItemIds(item, itemValues)) // Get all item ids
    .reduce((a, b) => a.concat(b), []) // Return a single array
}
